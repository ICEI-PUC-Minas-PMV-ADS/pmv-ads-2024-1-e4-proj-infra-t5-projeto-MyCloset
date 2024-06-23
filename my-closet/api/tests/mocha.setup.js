// mocha.setup.js

import dotenv from 'dotenv';
import { MongoMemoryServer } from 'mongodb-memory-server';

dotenv.config();

let mongoServer;

export async function setupMocha() {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  process.env.MONGODB_URI = mongoUri;
}

export async function teardownMocha() {
  if (mongoServer) {
    await mongoServer.stop();
  }
}
