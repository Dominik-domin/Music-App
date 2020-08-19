import Vue from 'vue';
import VueRouter from 'vue-router';
import MusicStore from '../views/MusicStore';
import AllPlaylists from '../views/AllPlaylists';
import Playlist from '../views/Playlist';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    component: MusicStore,
  },
  {
    path: '/playlists',
    component: AllPlaylists,
  },
  {
    path: '/playlists/playlist/:id',
    name: 'playlist',
    component: Playlist,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
