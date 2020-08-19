<template>
  <div class="container">
    <div class="playlist-btn-div">
      <router-link v-if="!hideBtn" to="/"
        ><i class="fas fa-arrow-left"></i
      ></router-link>
      <button
        v-if="!hideBtn"
        @click="showCreateDiv"
        class="add-new-playlist-btn"
      >
        Create new playlist
      </button>
    </div>
    <div v-if="showSongstoAdd" class="songsToAdd-div">
      <button @click="confirmSongsAdding" class="confirm-add-btn">
        Confirm Adding Songs
      </button>
      <ul v-for="song in songs" :key="song.src">
        <button>{{ song.title }} - {{ song.artist }}</button>
        <input
          type="checkbox"
          v-on:click="addToPlaylist($event, song)"
        />
      </ul>
    </div>
    <div v-if="displayCreateDiv" class="create-playlist-div">
      <h3>Creating new playlist</h3>
      <input
        v-model="newNamePlaylist"
        type="text"
        placeholder="name of your playlist"
      />
      <button @click="cancelCreateDiv" class="cancel-playlist">
        Cancel
      </button>
      <button @click="createPlaylist" class="confirm-playlist">
        Create
      </button>
    </div>
    <div v-if="!hideBtn" class="showAllPlaylists-div">
      <div v-for="playlist in playlists" :key="playlist.id">
        <router-link
          :to="{ name: 'playlist', params: { id: playlist.id } }"
          ><button>
            {{ playlist.title }}
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNamePlaylist: '',
    };
  },
  computed: {
    songs() {
      return this.$store.state.songs;
    },
    displayCreateDiv() {
      return this.$store.state.displayCreateDiv;
    },
    playlists() {
      return this.$store.state.playlists;
    },
    showSongstoAdd() {
      return this.$store.state.showSongstoAdd;
    },
    hideBtn() {
      return this.$store.state.hideBtn;
    },
  },
  methods: {
    showCreateDiv() {
      this.$store.state.displayCreateDiv = true;
      this.$store.state.hideBtn = true;
    },
    cancelCreateDiv() {
      this.$store.state.displayCreateDiv = false;
      this.newNamePlaylist = '';
      this.$store.state.hideBtn = false;
    },
    createPlaylist() {
      if (this.newNamePlaylist !== '') {
        this.$store.state.playlists.push({
          id: this.$store.state.playlists.length,
          title: this.newNamePlaylist,
          songs: [],
        });
        this.newNamePlaylist = '';
        this.$store.state.displayCreateDiv = false;
        this.$store.state.showSongstoAdd = true;
        this.$store.state.playlistID += 1;
      }
    },
    addToPlaylist($event, song) {
      if (event.target.checked == true) {
        this.$store.state.playlists[
          this.$store.state.playlistID
        ].songs.push(song);
      } else {
        this.$store.state.playlists[
          this.$store.state.playlistID
        ].songs.splice(song, 1);
      }
    },
    confirmSongsAdding() {
      this.$store.state.showSongstoAdd = false;
      this.$store.state.hideBtn = false;
    },
  },
};
</script>

<style scoped>
.container {
  position: relative;
}

.fa-arrow-left {
  position: absolute;
  left: 2%;
  transform: translateY(-50%);
  color: #212121;
  font-size: 2rem;
}

.playlist-btn-div {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

button.add-new-playlist-btn {
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 6px;
  outline: none;
  border: none;
  background-color: #212121;
  color: rgb(231, 230, 230);
  font-size: 1.3rem;
  cursor: pointer;
}

.create-playlist-div {
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  margin: 0 auto;
  background-color: #212121;
  width: 80%;
  max-width: 400px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.create-playlist-div h3 {
  color: rgb(230, 230, 230);
  padding-bottom: 10px;
  font-size: 1.5rem;
  letter-spacing: 1px;
}

.create-playlist-div input {
  flex-basis: 100%;
  margin-bottom: 20px;
  font-size: 1.2rem;
  padding: 4px;
}

.create-playlist-div button {
  padding: 5px 10px;
  border-radius: 8px;
  color: rgb(230, 230, 230);
  background-color: #212121;
  outline: none;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
}

.showAllPlaylists-div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.showAllPlaylists-div button {
  background-color: rgb(98, 0, 234);
  color: white;
  padding: 10px 15px;
  margin: 10px 0;
  font-size: 1.3rem;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}

a {
  color: white;
  text-decoration: none;
}

.songsToAdd-div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.songsToAdd-div button {
  margin: 5px 0;
}

.songsToAdd-div ul button {
  outline: none;
  border: none;
  font-size: 1.2rem;
  padding: 10px 15px;
  margin: 10px 0;
}

.confirm-add-btn {
  background-color: #212121;
  color: white;
  padding: 10px 15px;
  font-size: 1.3rem;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 4px;
}
</style>
