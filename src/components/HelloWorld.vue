<template>
  <div class="hello">
    <div id="d"></div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
export default class HelloWorld extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#d {
  height: 3.75rem;
  width: 3.75rem;
  background-color: blueviolet;
}
</style>
