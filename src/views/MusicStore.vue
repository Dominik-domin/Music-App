<template>
  <section class="allMusicBox">
    <div class="playlistsBox">
      <router-link to="/playlists"
        ><button class="playlists-btn">
          Go to playlists
        </button></router-link
      >
    </div>
    <button
      @click="playSong($event, song)"
      v-for="song in songs"
      :key="song.src"
      :class="
        song.title == currentTitle
          ? 'song_button playing'
          : 'song_button'
      "
    >
      {{ song.title }} - {{ song.artist }}
    </button>
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentSrc: '',
    };
  },
  computed: {
    songs() {
      return this.$store.state.songs;
    },
    songTitle() {
      return this.$store.getters.songTitle;
    },
    currentTitle() {
      return this.$store.getters.currentTitle;
    },
  },
  methods: {
    playSong: function($event, song) {
      this.$store.commit('playSong', song);
      $event.target.classList.add('playing');
    },
  },
};
</script>

<style>
section.allMusicBox {
  display: flex;
  flex-direction: column;
  align-items: center;
}

section.allMusicBox div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  border-bottom: 1px solid #212121;
}

section.allMusicBox .song_button.playing {
  background-color: rgb(214, 150, 150);
  color: white;
  border-radius: 8px 0 8px 0;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
}

.playlistsBox {
  padding: 10px 0;
}

.playlistsBox .playlists-btn {
  background-color: rgb(98, 0, 234);
  font-weight: 400;
  border: none;
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  color: #fafaff;
  padding: 10px 15px;
  margin-left: 5px;
  border-radius: 4px;
  font-size: 1rem;
  border: 1px solid rgb(98, 0, 234);
}

.playlists-btn:hover {
  opacity: 0.7;
}

.findMusic {
  margin-right: 5px;
}

section.allMusicBox .song_button {
  padding: 15px 15px;
  margin: 10px 0;
  font-weight: 700;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: #212121;
  font-size: 1.2rem;
  width: 70%;
}

.song_button:hover {
  background-color: rgb(214, 150, 150) !important;
  color: white;
  border-radius: 8px 0 8px 0;
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.75);
}
</style>
