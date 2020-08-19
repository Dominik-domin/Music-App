<template>
  <div id="playlist">
    <router-link to="/playlists"
      ><button class="back_button">
        Back to playlists
      </button></router-link
    >
    <div v-if="playlist" class="musics_list">
      <h1>{{ playlist.title }} - Your music list</h1>
      <button
        @click="playSong(song)"
        v-for="song in songs"
        :key="song.src"
      >
        {{ song.title }} - {{ song.artist }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      songs: this.$store.state.playlists[this.$route.params.id].songs,
    };
  },
  computed: {
    playlist() {
      return this.$store.getters.playlist(
        parseInt(this.$route.params.id),
      );
    },
  },
  methods: {
    check() {
      console.log(
        this.$store.getters.playlist(parseInt(this.$route.params.id)),
      );
      console.log(
        this.$store.state.playlists[this.$route.params.id].songs,
      );
    },
    playSong: function(song) {
      this.$store.commit('playSong', song);
    },
  },
};
</script>

<style scoped>
#playlist {
  text-align: center;
}

.back_button {
  background-color: rgb(135, 56, 245);
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  color: #fafaff;
  padding: 10px 15px;
  font-size: 1.2rem;
  margin: 1px;
  border-radius: 6px;
}

.musics_list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.musics_list h1 {
  color: #212121;
  background-color: #c8c8c8;
  width: 100%;
  text-align: center;
  margin-bottom: 10px;
  padding: 10px 0;
}

.musics_list button {
  background-color: rgb(98, 0, 234);
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  color: #fafaff;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 4px;
  font-size: 1rem;
  border: 1px solid rgb(98, 0, 234);
}
</style>
