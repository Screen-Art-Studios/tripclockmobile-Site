<template>
    <div class="Navmain">
      <div class="header">
        <div class="TClogo" v-on:click="navToggle(); $router.push('/')"></div>
      <div class="buttonbox">
        <button class="About" v-on:click="navToggle(); $router.push('/About')">ABOUT</button>
        <button class="Contact" v-on:click="navToggle(); $router.push('/Contact')">CONTACT</button>
      </div>
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
  height: 20%;
  position: fixed;
  background-color: white;
}

.header {
  height: 60px;
}
 .TClogo {
   margin-top: 20px;
   width: 100%;
   height: 110px;
   background-image: url('../../assets/tripclockmobilelogo.svg');
   background-position: center;
   background-repeat: no-repeat;
   background-size: contain;

 }
.buttonbox {
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
button {
  background-color: white;
  margin-top: 30px;
  height: 50px;
  color: black;
  font-family: 'Open Sans', sans-serif;
  background: none;
  border: none;
  -webkit-animation-duration: .25s;
  animation-duration: .25s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: ease-in-out;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: 1;
}
button:hover {
  animation-name: bounce;
  -moz-animation-name: bounce;
}

@keyframes bounce {
  0%, 100% {
      -webkit-transform: translateY(0);
      -ms-transform:     translateY(0);
      transform:         translateY(0)
    }

    100% {
      -webkit-transform: translateY(-5px);
      -ms-transform:     translateY(-5px);
      transform:         translateY(-5px)
    }
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
