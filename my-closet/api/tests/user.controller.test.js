// test/user.controller.test.js

import { expect } from 'chai';
import sinon from 'sinon';
import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { updateUser, deleteUser } from '../controllers/user.controller.js';
import { errorHandler } from '../utils/error.js';

describe('User Controller', () => {
  let req, res, next, sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    req = {
      user: { id: 'mockUserId' },
      params: { id: 'mockUserId' },
      body: {
        username: 'updatedUsername',
        email: 'updated@example.com',
        password: 'newPassword123',
        profilePicture: 'newImage.jpg',
      },
    };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };
    next = sinon.spy();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('updateUser', () => {
    it('should update user successfully', async () => {
      sandbox
        .stub(User, 'findByIdAndUpdate')
        .resolves({
          _doc: {
            username: 'updatedUsername',
            email: 'updated@example.com',
            profilePicture: 'newImage.jpg',
          },
        });

      await updateUser(req, res, next);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.getCall(0).args[0]).to.deep.equal({
        username: 'updatedUsername',
        email: 'updated@example.com',
        profilePicture: 'newImage.jpg',
      });
    });

    it('should handle password hashing', async () => {
      sandbox
        .stub(User, 'findByIdAndUpdate')
        .resolves({
          _doc: {
            username: 'updatedUsername',
            email: 'updated@example.com',
            profilePicture: 'newImage.jpg',
          },
        });
      const bcryptStub = sandbox
        .stub(bcryptjs, 'hashSync')
        .returns('hashedPassword');

      req.body.password = 'newPassword123';

      await updateUser(req, res, next);

      expect(bcryptStub.calledOnceWithExactly('newPassword123', 10)).to.be.true;
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.getCall(0).args[0]).to.deep.equal({
        username: 'updatedUsername',
        email: 'updated@example.com',
        profilePicture: 'newImage.jpg',
      });
    });

    it('should handle update when user id does not match', async () => {
      req.user.id = 'differentUserId';

      await updateUser(req, res, next);

      expect(next.calledOnce).to.be.true;
      expect(next.getCall(0).args[0]).to.deep.equal(
        errorHandler(401, 'You can update only your account!')
      );
    });

    it('should handle database error during update', async () => {
      sandbox
        .stub(User, 'findByIdAndUpdate')
        .rejects(new Error('Database error'));

      await updateUser(req, res, next);

      expect(next.calledOnce).to.be.true;
      expect(next.getCall(0).args[0]).to.be.instanceOf(Error);
      expect(next.getCall(0).args[0].message).to.equal('Database error');
    });
  });

  describe('deleteUser', () => {
    it('should delete user successfully', async () => {
      sandbox.stub(User, 'findByIdAndDelete').resolves('User deleted');

      await deleteUser(req, res, next);

      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledOnceWithExactly('User has been deleted...')).to.be
        .true;
    });

    it('should handle deletion when user id does not match', async () => {
      req.user.id = 'differentUserId';

      await deleteUser(req, res, next);

      expect(next.calledOnce).to.be.true;
      expect(next.getCall(0).args[0]).to.deep.equal(
        errorHandler(401, 'You can delete only your account!')
      );
    });

    it('should handle database error during deletion', async () => {
      sandbox
        .stub(User, 'findByIdAndDelete')
        .rejects(new Error('Database error'));

      await deleteUser(req, res, next);

      expect(next.calledOnce).to.be.true;
      expect(next.getCall(0).args[0]).to.be.instanceOf(Error);
      expect(next.getCall(0).args[0].message).to.equal('Database error');
    });
  });
});
