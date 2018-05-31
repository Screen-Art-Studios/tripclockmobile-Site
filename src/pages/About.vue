<template>
  <div class="Abmain">
    <h1>How much more revenue could your business take in with <span>one more service call</span> per team, per day?<br/> Since <span>more calls equal more revenue</span>,<br/> how do you help plot out maximum efficiency for your remote team?</h1>
    <h2>Trip Clock Mobile is there to help you achieve these goals.</h2>
    <ul>
      <li>Keep Instant Track of your Service Technicians</li>
      <li>Track Mileage Effortlessly</li>
      <li>Allow employees to clock in and out onsite (including lunches or time off for personal errands)</li>
      <li>Audit all activities from an easy to use administrator web interface.</li>
    </ul>
    <p>Say goodbye to expensive time tracking software, as well as GPS tracking in company vehicles, handwritten logs, losing out on productivity<br/>At the end of a day, week, or month, download all trips into a CSV file for easy integration and entry into your accounting software.</p>
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

<style>
.Abmain {
  height: 100%;
  width: 100%;
  position: absolute;
  overflow-y: auto;
  padding-top: 250px;
  margin-bottom: 100px;
}
h1 {
  font-size: 1.4em;
  width: 90%;
  margin-left: 5%;
  line-height: 30px;
}
span {
  color: #c22227;
  font-weight: 500;
}
p {
  font-weight: 400;
  font-size: 1.3em;
  width: 90%;
  margin-left: 5%;
}
h2 {
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
}
</style>
