<template>
    <!--<div class="container" v-on:click="close">-->
      <div class="container" v-on:click="close">

   
            
          <div class="modal" onclick="event.stopPropagation()">


      
            <button
            type="button"
            class="btn-close"
            @click="close"
            >
            Close (X)
            </button>
 <pre v-bind:style="{fontSize: auto(text) + 'vw', lineHeight: '120.8%'}" class="text_class">{{text}}</pre>
 <div class="text_info">
        <p class="text_price">{{price}} ETH</p>
        
        <BuyListButtons v-bind:text="text" v-bind:owned="owned" v-bind:item_listed="item_listed"/>
        <div class="row_1">
            <WriteDetails class="WriteDetails" v-bind:text="text"/>
        <WritePriceGraph v-bind:text="text" v-bind:index="index"/>
        </div>
        <WriteItemActivity v-bind:text="text" />
        </div>
        
       <!-- <AllWrite v-bind:text="text" v-bind:owned="owned" />-->
        
      
        
        </div>
        

    </div>
</template>

<script> 

import WritePriceGraph from '@/components/WritePriceGraph.vue'
import WriteDetails from '@/components/WriteDetails.vue'
import WriteItemActivity from '@/components/WriteItemActivity.vue'
import BuyListButtons from '@/components/BuyListButtons.vue'
import $ from 'jquery'

export default {
  name: 'modal',
  components: {
    
    WriteDetails,
    WritePriceGraph,
    WriteItemActivity,
    BuyListButtons
  },
  
  props: {
      text: null,
      owned: null,
      index: null,
  },

  
  data () {
    return {
    item_listed: null,
    price: null
    }
  },
  
 
  created: function() {
    this.checkIfTextForSale(this.$props.text)
  },

    

    methods: {

      checkIfTextForSale(text){
      const self = this
   
       $.post( "https://www.sunrisesapp.com/inwriting/get_if_write_listed.php", {string: text}, function( data ) {
    
          if (data[0]['price'] == null){
            self.item_listed = false
            self.price = "Unlisted"
          }
          else{
            self.item_listed = true
            self.price = data[0]['price']
          }
        }, "json");
    },

      close() {
        this.$emit('close');
      },

      auto: function(s){

      var lines = s.split(/\r?\n/)
      var longest_line = 0

      lines.forEach(function (line) {
        var ll = line.length
        if (ll > longest_line){
          longest_line = ll
        }
        });

        if (lines.length == 1 && longest_line > 100){
            longest_line = 100
        }
        var fs = 90/longest_line
        if (fs >= 9){
          fs = 9
          return fs
        }
        else{
          return fs
        }

    },



    },

    
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  
  .row_1{
  margin-right: 6vw;
  margin-left: 6vw;
  margin-top: 6vh;
  margin-bottom: 12vh;
  justify-content: space-between;
  display: flex;
}

.text_class {
  font-family: "Menlo";
  text-align: left;
  height: auto;
}


  .container{
      background-color: white;
      background: rgb(0, 0, 0, 0.5);
      width: 100vw;
      max-width: 100vw;
      height: 110vh;
      /*height: 100%;*/
      opacity: 1;
      top: 0;
      left: 0;
      right: 0;
      position: fixed;
      overflow: scroll !important;
      text-align: center;

  }

  .buffer{
    
    background-color: white;
    border: 10px solid black;
    width: 60vw;
    height: 60vh;
  }
   
  .modal {
    background: white;
    background-color: white;
    width: 75vw;
    
    height: 90vh;

    display: inline-block;
    overflow: auto;

    
    
    opacity: 1;
    margin-left: 12.5%;
    margin-top: 5vh;
    border: 0.1vw solid black;
    
  }

  pre{
      padding: 5vw;
      padding-top: 8vw;
      display: inline-block;
      
           word-wrap: break-word;
  text-overflow: wrap;
  white-space: pre-wrap;
  word-break: break-word;
  
  
  }




  .btn-close {
    position: absolute;
    right: 0px;
    
    border: none;
    font-size: 1.73125w;
    cursor: pointer;
    color: black;
    background: transparent;
    font-family: "Proxima Nova Extra Condensed";
    padding-right: 5vw;
    padding-top: 3vw;
    

  }




 .extra_small{

  font-family: "Menlo";
  line-height: 0.6vw;
  text-align: left;
 /* overflow: hidden;*/
 height: auto;
 font-size: 0.5vw;
  /*font-size: 0.875vw;
  color: blue;*/
  
}


.small{

  font-family: "Menlo";
  line-height: 1vw;
  text-align: left;
 /* overflow: hidden;*/
 height: auto;
 font-size: 0.875vw;
  /*font-size: 0.875vw;
  color: blue;*/
  
}
.medium {

  font-family: "Menlo";
  line-height: 2vw;
  text-align: left;
 /* overflow: hidden;*/
  font-size: 1.75vw;
  height: auto;
}
.large {

  font-family: "Menlo";
  line-height: 4vw;
  text-align: left;
 /* overflow: hidden;*/
 height: auto;
  font-size: 3.5vw;
  
}

.text_price {
  font-family: "Proxima Nova Extra Condensed";
  font-size: 1.75vw;
  text-align: center;
}



.row_1{
  margin-right: 6vw;
  margin-left: 6vw;
  margin-top: 6vh;
  margin-bottom: 12vh;
  justify-content: space-between;
  display: flex;
}

/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {
  .btn-close {
    padding-top: 5vh;
  }
  .text_class {
    padding-top: 12vh;
  }
  .row_1 {
    display: block;
  }
  .WriteDetails {
    margin-bottom: 5vh;
  }

}

</style>
