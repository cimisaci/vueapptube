// YouTubeService.js

import axios from 'axios';

const YOUTUBE_API_KEY = 'AIzaSyA5Q551PhqZBnPzBf514pa5WH26hnfpdE0'; // Replace with your YouTube Data API key

const searchVideos = async (query) => {
  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: YOUTUBE_API_KEY,
        part: 'snippet',
        maxResults: 10,
        q: query,
        type: 'video',
      },
    });

    return response.data.items;
  } catch (error) {
    console.error('Error fetching YouTube search results:', error);
    return [];
  }
};

export { searchVideos };