<template>
  <div class="main">
    <div class="banner"></div>
    <h1>We Simplify Making your Mobile Workforce More Efficient</h1>
    <div class="clock"></div>
    <h2> Liberate yourself from time-consuming physical records, unnecessary hardware and expenses, and focus on maximizing your service.</h2>
    <div class="odom"></div>
    <h3>Untether your mobile fleets from the office. Track mileage effortlessly. Gather data and input it with just a few clicks.</h3>
    <ul>
      <li>Track Accurate Mileage of Every Trip</li>
      <li>Manage More Effectivly with Full Data Analytics</li>
      <li>Export to Any Spreadsheet or Accounting Software</li>
      <li>Easy to Use, Easy to Sign Up and Start Maximizing Your Business Potential</li>
    </ul>
    <div class="phone"></div>
    <div class="google"></div>
    <h4>Or</h4>
    <div class="apple"></div>
    <h5>Only $10/User a month</h5>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style scoped>
.main {
  padding-top: 150px;
  width: 100%;
  height: 100%;
  position: absolute;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(30, 70px);
  overflow-y: scroll;
  background-image: url('../assets/noise.png');
}
.banner {
  grid-column-start: 1;
  grid-column-end: 9;
  grid-row-start: 1;
  grid-row-end: 4;
  width: 100%;
  height: 100%;
  background-image: url('../assets/feat.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
h1 {
  margin: 0;
  text-align: center;
  font-size: 1.8em;
  grid-column-start: 1;
  grid-column-end: 9;
  background-color: #751d1d;
  color: white;
  height: 100%;
  width: 100%;
  grid-row: 4;
  line-height: 35px;
}
.clock {
  background-image: url('../assets/tc_Time.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 6;
  grid-row-end: 8;
  width: 100%;
  height: 100%;
}
h2 {
  grid-column-start: 4;
  grid-column-end: 9;
  grid-row-start: 6;
  grid-row-end: 8;
  font-size: 1.2em;
  color: white;
  margin-right: 5%;
  font-weight: 300;
}
.odom {
  background-image: url('../assets/tc_Odometer.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  grid-column-start: 6;
  grid-column-end: 9;
  grid-row-start: 9;
  grid-row-end: 11;
  width: 100%;
  height: 100%;
}
h3 {
  grid-column-start: 1;
  grid-column-end: 6;
  grid-row-start: 9;
  grid-row-end: 11;
  font-size: 1.2em;
  line-height: 20px;
  text-align: right;
  margin-left: 5%;
  color: white;
  font-weight: 300;
}
h4 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 18;
  grid-row-end: 20;
  text-align: center;
  font-size: 2em;
  line-height: 2;
  color: white;
  font-weight: 300;
}
h5 {
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 21;
  grid-row-end: 24;
  text-align: center;
  font-size: 1.5em;
  color: lightgreen;
  font-weight: 300;
}
ul {
  width: 100%;
  grid-column-start: 1;
  grid-column-end: 9;
  grid-row-start: 12;
  grid-row-end: 16;
  font-size: 1.5em;
  line-height: 1.3;
  color: white;
  font-weight: 300;
  list-style: circle;
}
.phone {
  background-image: url('../assets/phone.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  grid-column-start: 1;
  grid-column-end: 5;
  grid-row-start: 17;
  grid-row-end: 23;
  width: 100%;
  height: 100%;
}
.google {
  background-image: url('../assets/playbutton.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 17;
  grid-row-end: 19;
  width: 100%;
  height: 100%;
}
.apple {
  background-image: url('../assets/apple.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  grid-column-start: 5;
  grid-column-end: 9;
  grid-row-start: 19;
  grid-row-end: 22;
  width: 80%;
  height: 100%;
  margin-left: 10%;
}
@media (min-width: 480px) {
}
@media (min-width: 700px) {
  .main {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    box-shadow: 0px 10px 10px black;
  }
  .banner {
    background-size: contain;
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 4;
  }
  h1 {
    grid-row: 4;
  }
}
@media (min-width: 1000px) {
  .banner {
    background-size: contain;
    grid-column-start: 1;
    grid-column-end: 9;
    grid-row-start: 1;
    grid-row-end: 7;
  }
  h1 {
    grid-row: 6;
    font-size: 1.6em;
    line-height: 70px;
  }
  .clock {
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 8;
    grid-row-end: 10;
  }
  h2 {
    font-size: 1.3em;
    grid-column-start: 5;
    grid-column-end: 9;
    grid-row-start: 8;
    grid-row-end: 10;
  }
  .odom {
    grid-column-start: 6;
    grid-column-end: 8;
    grid-row-start: 11;
    grid-row-end: 13;
  }
  h3 {
    font-size: 1.3em;
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 11;
    grid-row-end: 13;
  }
  ul {
    grid-row: 14;
  }
}
</style>
