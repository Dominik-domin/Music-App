<template>
  <section class="music-controls">
    <div class="musicTitle">
      <p>{{ songTitle }} - {{ songArtist }}</p>
    </div>
    <div class="controls">
      <i @click="prevSong" class="fas fa-arrow-left"></i>
      <i @click="pauseSong" v-if="isPlaying" class="fas fa-pause"></i>
      <i @click="playSong" v-else class="fas fa-play"></i>
      <i @click="nextSong" class="fas fa-arrow-right"></i>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    isPlaying() {
      return this.$store.state.isPlaying;
    },
    songTitle() {
      return this.$store.getters.songTitle;
    },
    songArtist() {
      return this.$store.getters.songArtist;
    },
  },
  methods: {
    playSong: function(song) {
      this.$store.commit('playSong', song);
    },
    pauseSong: function() {
      this.$store.commit('pauseSong');
    },
    nextSong: function() {
      this.$store.commit('nextSong');
    },
    prevSong: function() {
      this.$store.commit('prevSong');
    },
  },
};
</script>

<style>
section.music-controls {
  background-color: #212121;
  color: rgb(158, 158, 158);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  max-width: 500px;
  margin: 0 auto;
}

.musicTitle p {
  font-size: 1.3rem;
}

div.controls i {
  margin: 0 5px;
  font-size: 1.5rem;
}
</style>
