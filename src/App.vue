<template>
  <div id="app">
    <header>
      <h1>Music App</h1>
    </header>
    <router-view class="routerMargin"></router-view>
    <musicControls />
  </div>
</template>

<script>
import musicControls from './components/musicControls.vue';
export default {
  data() {
    return {};
  },
  components: {
    musicControls,
  },
  created() {
    this.$store.state.current = this.$store.state.songs[
      this.$store.state.index
    ];
    this.$store.state.player.src = this.$store.state.current.src;
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}

#app {
  max-width: 500px;
  margin: 0 auto;
}

body {
  position: relative;
  background-color: rgb(235, 235, 235);
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background-color: #212121;
  color: #fff;
}

.routerMargin {
  margin-bottom: 40px;
}
</style>
