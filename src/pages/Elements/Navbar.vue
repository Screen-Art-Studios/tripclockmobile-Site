<template>
    <div class="Navmain">
        <div class="TClogo" v-on:click="navToggle(); $router.push('/')"></div>
      <div class="buttonbox">
        <button class="About" v-on:click="navToggle(); $router.push('/About')">About/FAQ</button>
        <button class="Contact" v-on:click="navToggle(); $router.push('/Contact')">Contact</button>
       </div>
    </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      toggled: false,
      isToggled: false,
      first: true
    }
  },
  methods: {
    navToggle: function () {
      // Nav button functionality
      if (window.innerWidth < 700) {
        if (this.toggled === false) {
          this.toggled = true
          this.isToggled = true
          this.first = false
        } else if (this.toggled === true) {
          this.toggled = false
          this.isToggled = false
        }
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.Navmain {
  width: 100%;
  height: 15%;
  position: fixed;
  background-image: url('../../assets/noise.png');
  box-shadow: 0px 10px 10px black;
}

 .TClogo {
   margin-top: 40px;
   width: 100%;
   height: 65%;
   background-image: url('../../assets/tripclockmobilelogowhite.svg');
   background-position: center;
   background-repeat: no-repeat;
   background-size: contain;
 }
.buttonbox {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
button {
  background-image: url('../../assets/noise.png');
  height: 50px;
  color: white;
  border: none;
  font-family: 'Open Sans', sans-serif;
  -webkit-animation-duration: .25s;
  animation-duration: .25s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
  @media only screen and (min-width:1000px) {
    button {
      font-size: 1.5em;
    }
    h1 {
      font-size: 3.5em;
    }
  }
</style>
