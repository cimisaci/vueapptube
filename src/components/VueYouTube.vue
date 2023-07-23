<template>
  <div>
    <iframe
      width="360"
      height="360"
      :src="videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'YouTubeVideo',
  props: {
    videoId: {
      type: String,
      required: true,
    },
  },
  computed: {
    videoUrl() {
      return `https://www.youtube.com/embed/${this.videoId}`;
    },
  },
};
</script>
   