<template>
        <div class="container">
            <pre v-bind:style="{fontSize: auto(text) + 'vw', lineHeight: '120.8%'}" class="text_class">{{text}}</pre>

            <div class="text_info">

      <p class="text_price">{{price}} ETH</p>
      <BuyListButtons v-bind:text="text" v-bind:owned="owned" v-bind:item_listed="item_listed"/>


      <div class="row_1">

        <WriteDetails class="WriteDetails" v-bind:text="text" />
        <WritePriceGraph v-bind:text="text" />
         
         </div>

        <WriteItemActivity v-bind:text="text" />

       </div>
            
      
        
        </div>

</template>

<script> 

import $ from 'jquery'
import WritePriceGraph from '@/components/WritePriceGraph.vue'
import WriteDetails from '@/components/WriteDetails.vue'
import WriteItemActivity from '@/components/WriteItemActivity.vue'
import BuyListButtons from '@/components/BuyListButtons.vue'

export default {
  name: 'modal',
  components: {
    WriteDetails,
    WritePriceGraph,
    WriteItemActivity,
    BuyListButtons,
  },
  
  props: {
      text: null,
      owned: null,
  },

  created () {
      this.checkIfTextForSale(this.$props.text) // also where price is gotten my bad
  },

  
  data () {
    return {
    item_listed: false,
    list_or_delist: null,
    price: null,
    }
  },
  
 /*
  mounted: function() {
    console.log('mounted just got called in TopWrite.vue');
    this.getText()
  },
*/
    

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

      /* === START CONVERSION FUNCTIONS === */

      vwTOpx: function(value) {
        var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          x = w.innerWidth || e.clientWidth || g.clientWidth;
        var result = (x*value)/100;
        return result;
      },


      pxTOvh: function(value) {
        var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        var result = (100*value)/y;
        return result;
      },

      vhTOpx: function(value) {
        var w = window,
          d = document,
          e = d.documentElement,
          g = d.getElementsByTagName('body')[0],
          y = w.innerHeight|| e.clientHeight|| g.clientHeight;
        var result = (y*value)/100;
        return result;
      },

      pxTOvw: function(value) {
          var w = window,
            d = document,
            e = d.documentElement,
            g = d.getElementsByTagName('body')[0],
            x = w.innerWidth || e.clientWidth || g.clientWidth;
          var result = (100*value)/x;
          return result;
        },

      /* === END CONVERSION FUNCTIONS === */



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

 
      getFontSizeClass: function(s){
      if (s.length <= 73){ // lengths work for desktop but not mobile yet 
        return 'large';
      } else if (s.length <= 289){
        return 'medium';
      } else if (s.length <= 1000){
        return 'small';
      } else{
        return 'extra_small';
      }

    },

    },

    
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  
  .container{


      background-color: white;
      
      width: 100%;
      max-width: 100%;
      height: auto;
      opacity: 1;
      top: 0;
      left: 0;
      right: 0;
      overflow: scroll !important;

      


      /*height: 100%;*/
      /* position: fixed;*/

  }
   /*
  .modal {
    background: white;
    
    width: 75%;
    margin-left: 12.5%;
    height: 90vh;
    

    display: inline-block;
    overflow: auto;

    
    
    opacity: 1;
    margin-top: 5vh;
    border: 0.1vw solid black;
    
  }
  */

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

.text_class {
  font-family: "Menlo";
  text-align: left;
  height: auto;
}

.text_price {
  font-family: "Proxima Nova Extra Condensed";
  font-size: 1.75vw;
}



.row_1{
  margin-right: 6vw;
  margin-left: 6vw;
  margin-top: 6vh;
  margin-bottom: 12vh;
  justify-content: space-between;
  display: flex;
  gap: 6vw;
}

@media only screen and (max-width: 600px) and (orientation: portrait) {
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
