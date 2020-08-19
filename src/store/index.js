import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    index: 0,
    current: {},
    isPlaying: false,
    showActuallySong: false,
    songs: [
      {
        title: 'Mam deja vu',
        artist: 'Ceter',
        src: require('../assets/Ceter - Mam deja vu.mp3'),
      },
      {
        title: 'D.evil',
        artist: 'White 2115',
        src: require('../assets/D.Evil.mp3'),
      },
      {
        title: 'Ej Julia',
        artist: 'Dżanglu',
        src: require('../assets/Dżanglu - Ej Julia.mp3'),
      },
      {
        title: 'I will',
        artist: 'Eminem',
        src: require('../assets/I Will.mp3'),
      },
      {
        title: 'plastikowe kwiaty',
        artist: 'Kartky',
        src: require('../assets/kartky - plastikowe kwiaty.mp3'),
      },
      {
        title: 'Domówka',
        artist: 'Krtdz',
        src: require('../assets/krtdz - domówka.mp3'),
      },
      {
        title: 'Jinchuriki',
        artist: 'MargineZ',
        src: require('../assets/MargineZ - Jinchuriki.mp3'),
      },
      {
        title: 'Flary',
        artist: 'PRO8L3M',
        src: require('../assets/PRO8L3M - Flary.mp3'),
      },
      {
        title: 'ZŁOTEGLOBY',
        artist: 'Quebonafide',
        src: require('../assets/Quebonafide - ZOTEGLOBY.mp3'),
      },
      {
        title: 'ALLINKA DISCO NOIR',
        artist: 'Tede',
        src: require('../assets/TEDE - ALLINKA DISCO NOIR.mp3'),
      },
    ],
    player: new Audio(),
    displayCreateDiv: false,
    showSongstoAdd: false,
    hideBtn: false,
    playlists: [],
    playlistID: -1,
  },
  getters: {
    songTitle: state => state.current.title,
    songArtist: state => state.current.artist,
    currentTitle: state => state.current.title,
    playlists: state => {
      return state.playlists;
    },
    playlist: state => id => {
      return state.playlists.find(user => user.id === id);
    },
  },
  mutations: {
    playSong: (state, song) => {
      state.index = state.songs.indexOf(song);
      if (typeof song.src != 'undefined') {
        state.current = song;
        state.player.src = state.current.src;
      }
      state.player.play();
      state.isPlaying = true;
      state.showActuallySong = true;
    },
    pauseSong: state => {
      state.player.pause();
      state.isPlaying = false;
    },
    nextSong: state => {
      state.index++;
      if (state.index > state.songs.length - 1) {
        state.index = 0;
      }
      state.current = state.songs[state.index];
      state.player.src = state.current.src;
      state.player.play();
    },
    prevSong: state => {
      state.index--;
      if (state.index < 0) {
        state.index = state.songs.length - 1;
      }
      state.current = state.songs[state.index];
      state.player.src = state.current.src;
      state.player.play();
    },
  },
  actions: {},
  modules: {},
});
