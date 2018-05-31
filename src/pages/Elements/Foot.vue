<template>
  <div class="Fmain">
    <div class="social">
    </div>
    <h3>Powered by: ScreenArt Studios&#169;</h3>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {}
  }
}
</script>

<style scoped>
.Fmain {
  height: 30px;
  width: 100%;
  bottom: 0;
  position: fixed;
}
.social {
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

h3 {
  color: #999;
  font-size: .8em;
  text-align: center;
}

</style>
