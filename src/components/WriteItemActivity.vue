<template>
  <div class="item_activity_outer">
         <div class="item_activity_header">
           <p class="header">Item Activity</p>
           </div>

           <div class="item_activity_body">
           
             <table class="item_activity_table">
        <tr class="ia_tr">
          <th class="ia_th">Event</th>
          <th class="ia_th">Inputs</th>
          <th class="ia_th">Caller</th>
          <th class="ia_th">Date</th>
        </tr>
        <tr v-for="(event, index) in all_activity" :key="index">
                    <td class="ia_td">{{event.function}}</td>
                    <td class="ia_td">{{format_inputs(event.price, event.toAddress)}}</td>
                    <td class="ia_td">{{event.function_caller}}</td>
                    <td class="ia_td">{{new Date(event.timeStamp*1000).toLocaleDateString("en-US")}} {{new Date(event.timeStamp*1000).toLocaleTimeString("en-US")}}</td>
                 <!--   <td class="ia_td">{{event.timeStamp}}</td>-->
                </tr>
        </table>
           </div>
         </div>
</template>

<script> 

import $ from 'jquery'
export default {
  name: 'WriteItemActivity',
  props: {
      text: null,
  },
  data () {
      return {
          all_activity: [],
          tokenID: null,
      }
  },

  methods: {
    

    format_inputs: function(price, toAddress){

      var price_in_eth = parseInt(price)/1000000000000000000
      var formattedString = ""
      if (price != null && toAddress != null){
          formattedString += "Price: " + String(price_in_eth) + " ETH, " + "To: " + toAddress
      }
      else if (price != null){
        formattedString += "Price: " + String(price_in_eth) + " ETH"
      }
      else if (toAddress != null){
        formattedString += "To: " + toAddress
      }
      else{
        formattedString += "None"
      }
      return formattedString
      


    },

    
  },


  async created () {

      var self = this;

      
      var tID = await Promise.resolve($.post( "https://www.sunrisesapp.com/inwriting/get_write_by_string.php", {string: this.$props.text}, function( data ) {

        //  self.tokenID = data[0]['tokenID']
          return data[[0]['tokenID']]
        }, "json"));

      self.$data.tokenID = tID[0]['tokenID']

      console.log("about to post, tokenID is " + this.$data.tokenID);
      $.post( "https://www.sunrisesapp.com/inwriting/get_item_activity.php", {tokenID: this.$data.tokenID}, function( data ) {
          console.log("in WriteItemActivity created, data is " + data)
          self.all_activity = data
        }, "json");


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header {
  font-family: "Proxima Nova Extra Condensed";
  padding-top: 1vh;
  margin-bottom: 0vh;
  padding-bottom: 1vh;
  text-align: left;
  margin-left: 2vw;
}

.item_activity_outer {
  /*border: 0.1px black solid;*/
  margin-right: 6vw;
  margin-left: 6vw;
  margin-bottom: 12vh;
}

.item_activity_header {
  border-top: 0.1px solid black;
  border-left: 0.1px solid black;
  border-right: 0.1px solid black;
}

.ia_tr, .ia_td, .ia_th {
  border: 0.1px solid black;
  border-collapse: collapse;
  padding: 1vh;

  word-wrap: break-word;
  text-overflow: ellipsis;
  word-break: break-word;
}

.ia_th {
  font-family: "Proxima Nova Extra Condensed";

}

.ia_td{
  font-family: "Menlo";
  border-bottom: 0.1px solid black;
}

.item_activity_table {
  border: 0.1px solid black;
  border-collapse: collapse;
  width: 100%;
}

table {
  font-family: "Proxima Nova Medium";
  font-size: 0.875vw;
  text-align: left;
  width: 100%;
  table-layout: fixed;
}

@media only screen and (max-width: 600px) and (orientation: portrait) {
  .header {
    font-size: 2.625vw;
  }
  .ia_td, .ia_th {
    font-size: 2.625vw;
  }
  .ia_th {
    font-family: "Proxima Nova Extra Condensed";
  }

  .ia_tr, .ia_td, .ia_th {
  border: 0.1px solid black;
  border-collapse: collapse;
  padding: 2vw;
  word-wrap: break-word;
  text-overflow: ellipsis;
  word-break: break-word;
}

.item_activity_table {
}

table {
  width: 100%;
  table-layout: fixed;
}



}
</style>
