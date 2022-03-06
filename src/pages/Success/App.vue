<template>
  <div id="app">
    <NavBar />

    <p>Congratulations! You just minted</p>
    <pre v-bind:style="{fontSize: auto(written_text) + 'em', lineHeight: '120.8%'}" class="text_class">{{written_text}}</pre>
   
    <!--<button v-on:click="redirectToHome">Mint another</button>-->

    <Footer/>

  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import $ from 'jquery'
import { Base64 } from 'js-base64'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
  },
  props: {
    address: null,
  },
  data () {
    return {
      written_text: "Ligma",
    }
  },



  created(){
    let uri = window.location.search.substring(1); 
    let params = new URLSearchParams(uri);
    let encoded_string = params.get('string');
    this.$data.written_text = Base64.decode(encoded_string)
  },

  watch: { 
      written_text: function(newVal) { // watch it

      // change font size

      if (newVal.length <= 73){ // lengths work for desktop but not mobile yet 
        $(".text_write").css("font-size", "3.5rem");
        $(".text_write").css("text-align", "center");

      } else if (newVal.length <= 289){
        $(".text_write").css("font-size", "1.75rem");
        $(".text_write").css("text-align", "left");
      } else {
        $(".text_write").css("font-size", "0.875rem");
        $(".text_write").css("text-align", "left");
      }

     // this.estimate_gas_price(newVal)

        },

        

      // update estimated gas prices

      
      

      },

    methods: {

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

<style>


@font-face {
  font-family: "Proxima Nova Medium";
  src: local("Proxima Nova Medium"), url(../../fonts/ProximaNovaMedium.otf) format("truetype");
}
@font-face {
  font-family: "Proxima Nova Extra Condensed";
  src: local("Proxima Nova Extra Condensed"), url(../../fonts/ProximaNovaExtraCondensed.otf) format("truetype");
}

@font-face {
  font-family: "Menlo";
  src: local("Menlo"), url(../../fonts/Menlo.ttf) format("truetype");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}
.text_class {
  font-family: "Menlo";
  text-align: left;
  height: auto;
}

p {
  margin-top: 10vh;
  font-family: "Proxima Nova Extra Condensed";
  font-size: 1.9em;
}

pre{
      padding: 5vw;
      padding-top: 5vh;
      display: inline-block;
      
           word-wrap: break-word;
  text-overflow: wrap;
  white-space: pre-wrap;
  word-break: break-word;
  
  
  }



@media only screen and (min-width: 601px) {
.titlediv{
  margin: auto;
  width: 100%;
  padding-top: 40vw;
}
.title {
  font-family: "Proxima Nova Extra Condensed";
  font-size: 2.625vw;
}

.hide-desktop{
  display: none;

}


.text_write{
  border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/

    font-family: "Menlo";
    color: black;
    width: 80vw;
    min-height: 20vh;
    height: auto;
    overflow-y: hidden;
    line-height: 120.8%;
    
}

.checkout{
  border: 0.1px black solid;
  width: 60vw;
  margin-left: 20vw;
}
.checkout_header, .checkout_header_top_included {
  border-bottom: 0.1px black solid;
  text-align: left;
  padding-left: 3vw;
}


.checkout_text{
  padding-top: 1.5vh;
  font-family: "Proxima Nova Extra Condensed";
}

.formatting_options, .sale_options{
  border-bottom: 0.1px black solid;
  text-align: left;
  padding-left: 6vw;
  padding-top: 5vh;
  padding-bottom: 3vh;
}

.preview_button {
  position: relative;
  margin-left: 40vw;
}

label{
  font-family: "Proxima Nova Medium";
  text-align: left;
}
button{
  font-family: "Menlo";
  background-color: black;
  color: white;
  border: 0.1px black solid;
  padding: 1vw 2vw 1vw 2vw;
}

input[type="radio"]:checked+label {
  font-weight: bold;
}

input[type='radio']:checked:after {
        width: 0.75vw;
        height: 0.75vw;
        border-radius: 0.75vw;
        top: -0.5vh;
        right: 0.25vw;
        position: relative;
        background-color: black;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 1 solid black;
    }

input[type='radio']:after {
        width: 0.75vw;
        height: 0.75vw;
        border-radius: 0.75vw;
        top: -0.5vh;
        right: 0.25vw;
        position: relative;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 0.1px black solid;
    }

[type="radio"]{
  visibility: hidden;
}

#sot{
  font-family: "Menlo";
  font-size: 0.875vw;
}

table {
  text-align: left;
  width: 80%;
  padding-left: 6vw;
  margin-left: 6vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

th{
  font-family: "Proxima Nova Extra Condensed";
}
td{
  font-family: "Proxima Nova Medium";
}


.checkout_details{
  padding-bottom: 5vh;
}

#spacer{
  height: 20vh;
}
}


/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {
  .title {
  font-family: "Proxima Nova Extra Condensed";
  font-size: 7vw;
  line-height: 7vw;
}

.titlediv{
  margin: auto;
  width: 100%;
  padding-top: 20vw;
}

}

</style>
