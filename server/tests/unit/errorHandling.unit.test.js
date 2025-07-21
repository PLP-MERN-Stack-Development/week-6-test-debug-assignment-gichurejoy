describe('Error handling', () => {
    it('should catch an error', () => {
        function throwError() {
            throw new Error('Test error');
        }
        expect(throwError).toThrow('Test error');
    });

    it('should handle async errors with try/catch', async () => {
        async function asyncThrow() {
            throw new Error('Async error');
        }
        try {
            await asyncThrow();
        } catch (err) {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe('Async error');
        }
    });
}); 