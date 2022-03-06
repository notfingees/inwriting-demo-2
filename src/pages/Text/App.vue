<template>
  <div id="app">
    <NavBar />
    
    <AllWrite v-if="text" v-bind:text="text" v-bind:owned="owned"/>
      
    <Footer/>
    
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import AllWrite from '@/components/AllWrite.vue'
import Footer from '@/components/Footer.vue'
import $ from 'jquery' 
export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    AllWrite,
  },
  data () {
    return {
      text: null,
      owned: false,
      tokenID: null,


    }
  },


  async created(){
    var self = this
    var account = ""
    try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      account = accounts[0]
    }
    catch (e) {
      account = ""
    }
    

 let uri = window.location.search.substring(1); 
    let params = new URLSearchParams(uri);
    this.$data.text = params.get("string");
    this.$data.tokenID = params.get('tokenID');

    console.log("In text, this.$data.text = " + this.$data.text, "this.$data.tokenID = ", this.$data.tokenID);

    if (this.$data.text == null && this.$data.tokenID == null){
      window.location.replace("../home");
    }

    if (this.$data.text != null){ // User wants to see NFT based on text
      
      $.post( "https://www.sunrisesapp.com/inwriting/get_write_by_string.php", {string: this.$data.text}, function( data ) {
    
          if (data.length < 1){
            window.location.replace("../write.html?userString=" + this.$data.text);
          }
          else if (data[0]['owner'] == account){
            self.owned = true;
          }

        }, "json");
    }

    else {

      $.post( "https://www.sunrisesapp.com/inwriting/get_write_by_tokenID.php", {tokenID: this.$data.tokenID}, function( data ) {
    
          if (data.length < 1){
            window.location.replace("../home.html");
          }
          self.text = data[0]['tokenString'];
          if (data[0]['owner'] == account){
            self.owned = true;
          }

        }, "json");


    }




      },

      

  


  methods: {

    /* note to self: 

    If "string" is null (no params are given) -> redirect to front page or write
    If "string" has not already been minted -> rewrite to write page with the string
    If "string" already exists -> display it here:
      If "string" already exists and IS listed for sale: show price, buy, make offer options
      If "string" already exists and ISN'T listed for sale: show make offer option



    */


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
  pre{
      padding: 5vw;
      padding-top: 8vw;
      display: inline-block;
      
           word-wrap: break-word;
  text-overflow: wrap;
  white-space: pre-wrap;
  word-break: break-word;
  
  
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
}

.buttons_div {
  display: flex;
  justify-content: center;
  gap: 5vw;
  width: 50%;
  margin: 0 auto;
}

button {
  background-color: white;
  border: 0.1px black solid;
  font-family: "Menlo";
  width: 10vw;
  padding: 0.5vw;
}
button:hover {
  background-color: black;
  border: 0.1px black solid;
  font-family: "Menlo";
  color: white;
}


.row_1{
  margin-right: 6vw;
  margin-left: 6vw;
  margin-top: 6vh;
  margin-bottom: 12vh;
  justify-content: space-between;
  display: flex;
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
