<template>
  <div class="price_graph">
        
        <div class="inner">
        <canvas v-bind:id="'priceGraphCanvasId' + String(index)" style="width:100%;">
        </canvas>
        </div>
         </div>
</template>

<script> 

import Chart from 'chart.js'
import $ from 'jquery' 

export default {
  name: 'WritePriceGraph',
  props: {
      text: null,
      index: null,
  },
  data () {
    return {
      x_values: null,
      y_values: null,
    }
  },

  watch: {


  },

async created () {
// x axis as dates ('2/17 e.g.')
// y axis as price BOUGHT for

console.log('text in write price graph is ' + this.$props.text + " JUSTIN index is " + this.$props.index);



      var graphData = await Promise.resolve($.post( "https://sunrisesapp.com/inwriting/get_item_graph_data.php", {string: this.$props.text}, function( data ) {

              //  self.tokenID = data[0]['tokenID']
              console.log("data is ", data)
                return data[0]
              }, "json"));

      var xValues = graphData[1];
      var yValues = graphData[0];
      
      this.$data.x_values = xValues;
      this.$data.y_values = yValues;

      console.log(xValues, yValues)

      // add null thing 
      var timeStamps = yValues.map(function (x) { 
        return parseInt(x, 10); 
      });
      console.log(timeStamps)
      console.log(Math.min(...timeStamps))
      console.log("xValues is", xValues)
      console.log("yValues is", yValues)
      const canvasId = 'priceGraphCanvasId' + String(this.$props.index)
      console.log("priceGraphCanvasId is " + canvasId)
      const ctx = document.getElementById(canvasId)
      new Chart(ctx, {
        type: "line",
        data: {
          labels: xValues,
          datasets: [{
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,0,1.0)",
            borderColor: "rgba(0,0,0,0.5)",
            data: yValues,
            borderWidth: 1,
          }]
        },
        options: {
          legend: {display: false},
          scales: {
            yAxes: [{ticks: {min: Math.min(...timeStamps), max: Math.max(...timeStamps)}}],
          }
        }
      });



  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.price_graph {
  width: 60vw;
  height: auto;
  border: 0.1px solid black;

}

.inner {
  padding: 1vw;
}

@media only screen and (max-width: 600px) and (orientation: portrait) {
  .price_graph {
    width: 100%;
  }
}

</style>
