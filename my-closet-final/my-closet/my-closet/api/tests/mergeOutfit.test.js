// tests/mergeOutfit.test.js

import { mergeOutfit } from '../controllers/outfit.controller.js';
import { expect } from 'chai';
import sinon from 'sinon';
import mongoose from 'mongoose';
import axios from 'axios';
import sharp from 'sharp';
import { cloudinary } from '../config/cloudinary.js';
import { Image } from '../models/image.model.js';
import { Outfit } from '../models/outfit.model.js';
import { setupMocha, teardownMocha } from './mocha.setup.js'; // Importar teardownMocha aqui

describe('mergeOutfit', () => {
  let req, res, stubFindByIdImage, stubSaveOutfit, stubUploadStream;

  before(async () => {
    await setupMocha(); // Inicializa o MongoDB em memória
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  after(async () => {
    await mongoose.disconnect();
    // Limpar e parar o MongoDB em memória
    await teardownMocha(); // Chama teardownMocha para desligar o MongoDB em memória
  });

  beforeEach(() => {
    req = {
      body: {
        topId: new mongoose.Types.ObjectId(),
        bottomId: new mongoose.Types.ObjectId(),
      },
    };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };

    stubFindByIdImage = sinon.stub(Image, 'findById');

    stubFindByIdImage
      .withArgs(req.body.topId)
      .resolves({ _id: req.body.topId, url: 'topImageUrl' });
    stubFindByIdImage
      .withArgs(req.body.bottomId)
      .resolves({ _id: req.body.bottomId, url: 'bottomImageUrl' });

    sinon
      .stub(axios, 'request')
      .resolves({ data: Buffer.from('fake image data') });

    sinon
      .stub(sharp.prototype, 'metadata')
      .resolves({ width: 100, height: 100 });
    sinon.stub(sharp.prototype, 'composite').returnsThis();
    sinon.stub(sharp.prototype, 'png').returnsThis();
    sinon
      .stub(sharp.prototype, 'toBuffer')
      .resolves(Buffer.from('merged image data'));

    stubUploadStream = sinon
      .stub(cloudinary.uploader, 'upload_stream')
      .callsFake((options, callback) => {
        callback(null, { secure_url: 'mockUrl', public_id: 'mockPublicId' });
        return { end: sinon.spy() };
      });

    stubSaveOutfit = sinon.stub(Outfit.prototype, 'save').resolves({
      url: 'mockUrl',
      public_id: 'mockPublicId',
    });
  });

  afterEach(() => {
    sinon.restore();
  });

  it('should merge outfit correctly', async () => {
    //await mergeOutfit(req, res);
  });

  it('should handle error when merging outfit', async () => {
    stubFindByIdImage.withArgs(req.body.topId);
    await mergeOutfit(req, res);

    expect(res.status.calledOnceWith(500)).to.be.true;
    expect(res.json.calledOnce).to.be.true;
    expect(res.json.getCall(0).args[0]).to.have.property(
      'error',
      'Failed to merge outfit'
    );
  });
});
