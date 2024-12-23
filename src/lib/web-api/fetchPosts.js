async function fetchUserPosts(userId) {
  try {
    // Fetch posts for a specific user
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );

    // Check if the request was successful
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const posts = await response.json();

    // Extract and format specific data from each post
    const formattedPosts = posts.map((post) => ({
      title: post.title,
      preview: post.body.substring(0, 50) + "...",
      wordCount: post.body.split(" ").length,
    }));

    // Log the results
    console.log(`Found ${formattedPosts.length} posts for user ${userId}:`);
    formattedPosts.forEach((post, index) => {
      console.log(`\nPost ${index + 1}:`);
      console.log(`Title: ${post.title}`);
      console.log(`Preview: ${post.preview}`);
      console.log(`Word Count: ${post.wordCount}`);
    });

    return formattedPosts;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

module.exports = { fetchUserPosts };
