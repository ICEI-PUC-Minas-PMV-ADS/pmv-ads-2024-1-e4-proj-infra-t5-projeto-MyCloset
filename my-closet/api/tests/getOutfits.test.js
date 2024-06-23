// tests/getOutfits.test.js

import { getOutfits } from '../controllers/outfit.controller.js';
import { expect } from 'chai';
import sinon from 'sinon';
import { Outfit } from '../models/outfit.model.js';

describe('getOutfits', () => {
  let req, res, stubFindOutfits;

  beforeEach(() => {
    req = {};
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    // Stub the find method of Outfit model
    stubFindOutfits = sinon.stub(Outfit, 'find');
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should fetch outfits correctly', async () => {
    const mockOutfits = [
      { url: 'mockUrl1', public_id: 'mockId1' },
      { url: 'mockUrl2', public_id: 'mockId2' },
    ];
    stubFindOutfits.resolves(mockOutfits);

    await getOutfits(req, res);

    expect(res.status.called).to.be.false;
    expect(res.json.calledOnce).to.be.true;
    expect(res.json.getCall(0).args[0]).to.deep.equal(mockOutfits);
  });

  it('should handle error when fetching outfits', async () => {
    stubFindOutfits.rejects(new Error('Database error'));

    await getOutfits(req, res);

    expect(res.status.calledOnceWith(500)).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    expect(res.json.getCall(0).args[0]).to.have.property(
      'error',
      'Failed to fetch outfits'
    );
  });
});
