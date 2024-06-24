// test/auth.controller.test.js

import { expect } from 'chai';
import sinon from 'sinon';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
import {
  signup,
  signin,
  google,
  signout,
} from '../controllers/auth.controller.js';
import { errorHandler } from '../utils/error.js';

describe('Auth Controller', () => {
  let req, res, next, sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
    req = {
      body: {},
    };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
      clearCookie: sinon.stub().returnsThis(),
      cookie: sinon.stub().returnsThis(),
    };
    next = sinon.spy();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('signup', () => {
    it('should create a new user successfully', async () => {
      sandbox.stub(User.prototype, 'save').resolves();
      req.body = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      };

      await signup(req, res, next);

      expect(res.status.calledWith(201)).to.be.true;
      expect(
        res.json.calledOnceWithExactly({ message: 'User created successfully' })
      ).to.be.true;
    });

    it('should handle database error during signup', async () => {
      sandbox.stub(User.prototype, 'save').rejects(new Error('Database error'));
      req.body = {
        username: 'testuser',
        email: 'test@example.com',
        password: 'password123',
      };

      await signup(req, res, next);

      expect(next.calledOnce).to.be.true;
      expect(next.getCall(0).args[0]).to.be.instanceOf(Error);
      expect(next.getCall(0).args[0].message).to.equal('Database error');
    });
  });

  describe('signin', () => {
    it('should signin user successfully with correct credentials', async () => {
      const mockUser = {
        _id: 'mockUserId',
        email: 'test@example.com',
        password: bcryptjs.hashSync('password123', 10),
      };
      sandbox.stub(User, 'findOne').resolves(mockUser);
      sandbox.stub(bcryptjs, 'compareSync').returns(true);
      sandbox.stub(jwt, 'sign').returns('mockToken');

      req.body = {
        email: 'test@example.com',
        password: 'password123',
      };
    });

    it('should handle non-existent account during signin', async () => {
      sandbox.stub(User, 'findOne').resolves(null);

      req.body = {
        email: 'nonexistent@example.com',
        password: 'password123',
      };

      await signin(req, res, next);

      expect(next.calledOnce).to.be.true;
      expect(next.getCall(0).args[0]).to.deep.equal(
        errorHandler(404, 'Conta intexistente!')
      );
    });

    it('should handle incorrect password during signin', async () => {
      const mockUser = {
        _id: 'mockUserId',
        email: 'test@example.com',
        password: bcryptjs.hashSync('password123', 10),
      };
      sandbox.stub(User, 'findOne').resolves(mockUser);
      sandbox.stub(bcryptjs, 'compareSync').returns(false);

      req.body = {
        email: 'test@example.com',
        password: 'incorrectPassword',
      };

      await signin(req, res, next);

      expect(next.calledOnce).to.be.true;
      expect(next.getCall(0).args[0]).to.deep.equal(
        errorHandler(401, 'Senha errada!')
      );
    });

    it('should handle database error during signin', async () => {
      sandbox.stub(User, 'findOne').rejects(new Error('Database error'));

      req.body = {
        email: 'test@example.com',
        password: 'password123',
      };

      await signin(req, res, next);

      expect(next.calledOnce).to.be.true;
      expect(next.getCall(0).args[0]).to.be.instanceOf(Error);
      expect(next.getCall(0).args[0].message).to.equal('Database error');
    });
  });

  describe('google', () => {
    it('should signin existing user via Google', async () => {
      const mockUser = {
        _id: 'mockUserId',
        email: 'test@example.com',
        _doc: {
          username: 'testuser123',
          email: 'test@example.com',
          profilePicture: 'profile.jpg',
        },
      };
      sandbox.stub(User, 'findOne').resolves(mockUser);
      sandbox.stub(jwt, 'sign').returns('mockToken');

      req.body = {
        email: 'test@example.com',
        name: 'Test User',
        photo: 'profile.jpg',
      };

      await google(req, res, next);

      expect(res.cookie.calledOnce).to.be.true;
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
      expect(res.json.getCall(0).args[0]).to.deep.equal({
        username: 'testuser123',
        email: 'test@example.com',
        profilePicture: 'profile.jpg',
      });
    });

    it('should create new user via Google', async () => {
      sandbox.stub(User, 'findOne').resolves(null);
      sandbox.stub(User.prototype, 'save').resolves();
      sandbox.stub(jwt, 'sign').returns('mockToken');

      req.body = {
        email: 'newuser@example.com',
        name: 'New User',
        photo: 'profile.jpg',
      };

      await google(req, res, next);

      expect(res.cookie.calledOnce).to.be.true;
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
    });

    it('should handle database error during Google signin', async () => {
      sandbox.stub(User, 'findOne').rejects(new Error('Database error'));

      req.body = {
        email: 'test@example.com',
        name: 'Test User',
        photo: 'profile.jpg',
      };

      await google(req, res, next);

      expect(next.calledOnce).to.be.true;
      expect(next.getCall(0).args[0]).to.be.instanceOf(Error);
      expect(next.getCall(0).args[0].message).to.equal('Database error');
    });
  });

  describe('signout', () => {
    it('should signout user successfully', () => {
      signout(req, res);

      expect(res.clearCookie.calledOnce).to.be.true;
      expect(res.status.calledWith(200)).to.be.true;
      expect(res.json.calledOnceWithExactly('Signout success!')).to.be.true;
    });
  });
});
