<template>
  <div id="app">
    <!-- Boardコンポーネントの読み込み -->
    <board></board>
  </div>
</template>

<script>
import Board from './components/Board.vue'


export default {
  name: 'App',
  components: {
    Board
  }
}
</script>