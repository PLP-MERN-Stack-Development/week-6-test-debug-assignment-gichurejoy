// Example: Setup for server-side Jest tests
beforeAll(async () => {
    // Optionally connect to test DB or set up global mocks
});
afterAll(async () => {
    // Optionally disconnect from test DB or clean up
});
afterEach(() => {
    jest.clearAllMocks();
}); 