<template>
  <div class="main">
    <h1>Time Is Money, Right?...</h1>
    <video src="../assets/Screens.mp4" autoplay></video>
    <p class="bita">TripClock Mobile is an effortless business solution designed to increase productivity and decrease needless time losses.</p>
    <p class="bitb">Ensure your team is accomplishing your business goals by monitoring employees location and clock events throughout the work day.</p>
    <p class="bitc">Tired of disorganized files and tedious record-keeping?<br/> <strong>Optimize your mobile employee management in one place with TimeCrunch.</strong></p>
    <h2>Only $10 a Month<sup> Per User</sup></h2>
    <h3>For every 10 users registered you get one free!</h3>
    <p class="bitd">We're offering some BIG savings celebrating our launch. From deals on multiple users and other free offers, we're making it more cost-effective than ever to run a business.</p>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.main {
  margin-top: 200px;
  width: 100%;
  height: 1000px;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(30, 80px);
  overflow-y: visible;
}
h1 {
  grid-column-start: 1;
  grid-column-end: 9;
  grid-row: 1;
  height: 40px;
   color: red;
   font-size: 2em;
   text-align: center;
}
video {
  width: 90%;
  margin-left: 5%;
  grid-row-start: 3;
  grid-row-end: 7;
  grid-column-start: 1;
  grid-column-end: 5;
}
.bita {
  font-size: 1.2em;
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row: 3;
}
.bitb {
  font-size: 1.2em;
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row: 5;
}
.bitc {
  font-size: 1.5em;
  grid-column-start: 1;
  grid-column-end: 9;
  grid-row: 8;
  text-align: center;
  color: #c22227;
}
h2 {
  grid-row: 13;
  grid-column-start: 1;
  grid-column-end: 9;
  text-align: center;
  color: green;
  font-weight: bold;
}
sup {
  font-size: .6em;
}
h3 {
  grid-row: 14;
  grid-column-start: 1;
  grid-column-end: 9;
  text-align: center;
  font-size: 1em;
  margin-bottom: 100px;
}
.bitd {
  font-size: 1.3em;
  grid-column-start: 1;
  grid-column-end: 9;
  grid-row: 11;
  text-align: center;
  background-color: #c22227;
  color: white;
  height: 120px;
  line-height: 30px;
}
@media (min-width: 480px) {
  video {
    width: 90%;
    margin-left: 5%;
    grid-row-start: 2;
    grid-row-end: 4;
    grid-column-start: 1;
    grid-column-end: 4;
  }
}
@media (min-width: 700px) {
  video {
    grid-row-start: 2;
    grid-row-end: 3;
    grid-column-start: 2;
    grid-column-end: 4;
  }
}
</style>
