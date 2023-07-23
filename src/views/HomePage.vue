<template>
  <ion-page>
    <!-- Your other content goes here -->
    <ion-header>
      <ion-toolbar>
        <ion-title>YouTube Video Search</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-scroll zooming="true" direction="xy" style="overflow: auto; width: 100%;
    height: 100%;">
      <ion-content class="ion-padding">
        <!-- <input v-model="searchQuery" @input="searchVideos" /> -->
        <ion-searchbar v-model="searchQuery" placeholder="Search for videos"></ion-searchbar>
        <ion-button @click="searchVideos" color="primary">Search</ion-button>
        <div v-if="searchResults.length > 0">
          <!-- <ul>
        <li v-for="video in searchResults" :key="video.id.videoId" @click="playVideo(video.id.videoId)">
          {{ video.snippet.title }}
        </li>
      </ul> -->
          <ion-card v-if="selectedVideoId">
            <ion-card-content>
              <YouTubeVideo :video-id="selectedVideoId" v-if="selectedVideoId" />
            </ion-card-content>
          </ion-card>

          <ion-list>
            <ion-item v-for="video in searchResults" :key="video.id.videoId" @click="playVideo(video.id.videoId)">
              <ion-thumbnail slot="start">
                <img :src="video.snippet.thumbnails.default.url" alt="Thumbnail">
              </ion-thumbnail>
              <ion-label>
                <h2>{{ video.snippet.title }}</h2>
                <p>{{ video.snippet.channelTitle }}</p>
              </ion-label>
            </ion-item>
          </ion-list>
        </div>
      </ion-content>
    </ion-scroll>
    <ion-footer>
      <ion-toolbar>
        <!-- Close App Button -->
        <ion-button @click="closeApp" expand="full" fill="outline">Close App</ion-button>
      </ion-toolbar>
    </ion-footer>


  </ion-page>
</template>

<script>
import { IonPage, IonSearchbar, IonList, IonThumbnail, IonItem, IonIcon, IonHeader, IonFooter, IonToolbar, IonFab, IonFabButton } from '@ionic/vue';
import { searchVideos } from '../services/YouTubeService';
import YouTubeVideo from '../components/VueYouTube.vue'

export default {
  components: {
    IonPage,
    YouTubeVideo,
    IonSearchbar,
    IonList, IonThumbnail,
    IonItem, IonIcon, IonHeader, IonFooter, IonToolbar, IonFab, IonFabButton
  },
  data() {
    return {
      searchQuery: '',
      searchResults: [],
      selectedVideoId: '',
    };
  },
  methods: {
    async searchVideos() {
      if (this.searchQuery.trim() === '') {
        this.searchResults = [];
        return;
      }

      // You can remove the API call to YouTube Data API here.
      // This function won't be used in this updated example.
      // This is just to keep the existing structure of the code.
      const results = await searchVideos(this.searchQuery);
      this.searchResults = results;
    },
    playVideo(videoId) {
      this.selectedVideoId = videoId;
    },
    closeApp() {
      navigator.app.exitApp();
    },
  },
};
</script>


<style>
ion-toolbar {
  display: flex;
  justify-content: center;
}

ion-button {
  text-align: center;
}
</style>