<template>
  <div class="Abmain">
    <h3>About</h3>
    <h1>How much more revenue could your business take in with <span>one more service call</span> per team, per day?<br/> Since <span>more calls equal more revenue</span>,<br/> how do you help plot out maximum efficiency for your remote team?</h1>
    <h2>Trip Clock Mobile is there to help you achieve these goals.</h2>
    <ul>
      <li>Keep Instant Track of your Service Technicians</li>
      <li>Track Mileage Effortlessly</li>
      <li>Allow employees to clock in and out onsite (including lunches or time off for personal errands)</li>
      <li>Audit all activities from an easy to use administrator web interface.</li>
    </ul>
    <p>Say goodbye to expensive time tracking software, as well as GPS tracking in company vehicles, handwritten logs, losing out on productivity<br/>At the end of a day, week, or month, download all trips into a CSV file for easy integration and entry into your accounting software.</p>
    <h3>FAQ</h3>
    <p><span>How easy is it to get started?</span> Super.</p>
    <p><span>What would TripClock Mobile do for my business?</span>A lot.</p>
    <p><span>How do I deactivate my account?</span>Easy.</p>
    <p><span>Whats the cost?</span>$10.00 a User; per Month</p>
    <p><span></span></p>
    <p><span></span></p>
   </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {}
  }
}
</script>

<style scoped>
.Abmain {
  height: 100%;
  width: 100%;
  position: absolute;
  padding-top: 200px;
  overflow-y: scroll;
  background-image: url('../assets/noise.png');
}
h3 {
  text-align: center;
  color: white;
  font-size: 2em;
  font-weight: 300;
}
h1 {
  font-size: 1.4em;
  width: 90%;
  margin-left: 5%;
  line-height: 30px;
  color: white;
}
span {
  color: #c22227;
  font-weight: 400;
  text-shadow: 0px 1px 1px black;
}
p {
  font-weight: 300;
  font-size: 1.1em;
  width: 90%;
  margin-left: 5%;
  color: #999;
}
h2 {
  font-weight: 500;
  text-shadow: 0px 1px 1px black;
  color: #c22227;
  margin-left: 5%;
  width: 90%;
  font-size: 1.5em;
}
li {
  font-weight: 300;
  margin-right: 5%;
  font-size: 1.2em;
  line-height: 1.5em;
  margin-bottom: 10px;
  color: #999;
}
@media (min-width: 700px) {
  .Abmain {
    width: 60%;
    margin-left: 20%;
    margin-right: 20%;
    box-shadow: 0px 5px 8px black;
  }
}
</style>
