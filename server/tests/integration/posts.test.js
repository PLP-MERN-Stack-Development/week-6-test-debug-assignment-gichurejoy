// posts.test.js - Integration tests for posts API endpoints

const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../../src/app');
const Post = require('../../src/models/Post');
const User = require('../../src/models/User');
const { generateToken } = require('../../src/utils/auth');

const MONGODB_URI = 'mongodb+srv://joygichure:FbAgzVeUb9DJoANU@cluster0.z2czsz5.mongodb.net/test?retryWrites=true&w=majority';

beforeAll(async () => {
  await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.disconnect();
});

afterEach(async () => {
  // Clean up collections after each test
  await Post.deleteMany({});
  await User.deleteMany({});
});

// Example test (add your real tests below)
describe('POST /api/posts', () => {
  it('should create a new post when authenticated', async () => {
    // Example: Replace with your actual test logic
    expect(true).toBe(true);
  });
}); 