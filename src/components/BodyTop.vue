<template>
  <div class="bodytop">
      <div class="text">
      <h1>Write, own, and sell<br>any text you want.</h1>
      <h2>In Writing is the text-based NFT marketplace.</h2>
      </div>
      <div class="ethereum_symbol">
          <p class="ethereum_symbol_text">
                         WX              <br> 
                        WWWW                       <br> 
                      WKkx0W                      <br> 
                     W0xlclkN                     <br> 
                    NOdolc:cxX                    <br> 
                   Xkddolc::cdX                   <br> 
                 WXkdddolc::::oKW                 <br> 
                WKxdddddlc:::::lOW                <br> 
               W0xdddddolc::::::lkN               <br> 
              NOdddddddolc:::::::cxX              <br> 
             Xkdddddoool:;;;::::::cdK             <br> 
           WXkddoollcc::;,,,,,;;::::o0W           <br> 
          W0dollcc::::::;,,,,,,,,,;;:lOW          <br> 
          Nkoc::::::::::;,,,,,,,,,,,,:xX          <br> 
          WNX0xoc:::::::;,,,,,,,,;cdOKNW          <br> 
          WXKXNNKkdl::::;,,,,,;lx0XX0OKW          <br> 
           WXkkOKXNXOxlc;,,:okKXKOxodKW           <br> 
             NOxdxk0XNX0kkOXXKkdl:cxX             <br> 
              WKxddddkOKXK0xoc::co0W              <br> 
                NOddddddocc::::cxXW               <br> 
                 W0xdddolc::::lON                 <br> 
                  WXkddolc::cdKW                  <br> 
                    N0xdlcclkN                    <br> 
                     WKkoco0W                     <br> 
                       NK0X<br> 
                        K0   <br> 
          </p>
      </div>

      <p id="h1_mobile">Write, own, and sell<br>any text you want.</p><br>


      <div class="write">
          <input v-model="message" class = "write_it_input" placeholder="Enter any text you want">
          <button v-on:click="routeToWrite(message)" type="button" class="write_it_button">Write It</button>
      </div>


  </div>
</template>

<script> 
export default {
  name: 'BodyTop',

  methods: {
    routeToWrite: function(s){
      console.log("In here once with ", s);
      window.location.href = '../write.html?userString='+s;
      //this.$router.push({path: '../write', query: {userString: s}});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (min-width: 601px) {
#h1_mobile{
  display: none;
}
#h2_mobile{
  display: none;
}

.write_it_input{
    font-family: Menlo;
    font-size: 0.875vw;
    width: 25vw;
    padding: 0.5vw;
    border: 0.1vw solid black;

}
.write_it_button{
    font-family: Menlo;
    font-size: 0.875vw;
    background-color: black;
    color: white;
    padding: 0.5vw;
    border: 0.1vw solid black;

}
.write_it_button:hover{
    background-color: #1a1a1a;
    border: 0.1vw solid #1a1a1a;
}
.write_it_button:active{
    border: 0.1vw solid #1a1a1a;
}
h1 {
  font-family: "Proxima Nova Extra Condensed";
  font-size: 3.5vw;
  text-align: left;

}
h2{
    font-family: "Menlo";
    font-size: 1.75vw;
    text-align: left;


}
.ethereum_symbol_text{
    font-family: "Menlo";
    font-size: 0.875vw;
    line-height: 1.2vw;
}
.bodytop{
    padding-top: 3vw;
}

.text{
    padding-top: 5vw;
    float: left;
    padding-left: 8vw;
}

.ethereum_symbol{
    padding: 0vw;
    margin-top: 0vh;
    margin-right: 8vw;
    float: right;
    display: flex;
    
}

.write{
    position: absolute;
    padding-left: 8vw;
    padding-top: 19vw;
}

}

/* PHONE STYLING*/
@media only screen and (max-width: 600px) and (orientation: portrait) {
    
    .write_it_input{
    font-family: Menlo;
    font-size: 3.5vw;
    width: 55%;
    padding: 1vw;
    border: 0.1vw solid black;


}
.write_it_button{
    font-family: Menlo;
    font-size: 3.5vw;
    background-color: black;
    color: white;
    padding: 1vw;
    border: 0.1vw solid black;

}
.write_it_button:hover{
    background-color: #1a1a1a;
    border: 0.1vw solid #1a1a1a;
    
}
.write_it_button:active{
    border: 0.1vw solid #1a1a1a;
}
#h1_mobile{
  font-family: "Proxima Nova Extra Condensed";
  font-size: 7vw;
  line-height: 1.25vw;
  text-align: left;
    display: inline;
}


h1 {
  display: none;
}
h2{
    display: none;
}

.ethereum_symbol_text{
    font-family: "Menlo";
    font-size: 2.75vw;
    line-height: 3.75vw;
  
}
.bodytop{
    padding-top: 0vw;
}

.text{
    padding-top: 0vw;
    margin: auto;
    width: 50%;
}

.ethereum_symbol{
  padding-bottom: 5vw;
    
    
}

.write{
    padding-top: 7vw;
}

    
}

</style>
