const { fetchUserPosts } = require('../lib/web-api/fetchPosts');


describe('fetchUserPosts', () => {
    let mockFetch;
    
    beforeEach(() => {
        // Mock the global fetch function
        mockFetch = jest.fn();
        global.fetch = mockFetch;
        // Clear console.log and console.error mocks between tests
        jest.spyOn(console, 'log').mockImplementation(() => {});
        jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    test('should fetch and format posts successfully', async () => {
        const mockPosts = [
            {
                title: 'Test Title',
                body: 'This is a test post body with more than fifty characters to test truncation.'
            }
        ];

        mockFetch.mockResolvedValueOnce({
            ok: true,
            json: async () => mockPosts
        });

        const result = await fetchUserPosts(1);

        expect(mockFetch).toHaveBeenCalledWith(
            'https://jsonplaceholder.typicode.com/posts?userId=1'
        );
        expect(result).toHaveLength(1);
        expect(result[0]).toEqual({
            title: 'Test Title',
            preview: 'This is a test post body with more than fifty char...',
            wordCount: 14
        });
    });

    test('should handle HTTP error', async () => {
        mockFetch.mockResolvedValueOnce({
            ok: false,
            status: 404
        });

        await expect(fetchUserPosts(1)).rejects.toThrow('HTTP error! status: 404');
    });

    test('should handle network error', async () => {
        mockFetch.mockRejectedValueOnce(new Error('Network error'));

        await expect(fetchUserPosts(1)).rejects.toThrow('Network error');
    });
});
