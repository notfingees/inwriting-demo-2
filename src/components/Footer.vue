<template>
  <div class="footer">
      <div class="logo"
      ><h2>In Writing</h2>
      
      <div class="About"><p>The Internet's largest marketplace for text-based non-fungible-tokens (NFTs). Write, own, and sell any text you want.</p></div>
      </div>

      <div class="marketplace">
      <h3>Marketplace</h3>
      <a href="../write.html">Write</a><br>
      <a href="../account.html">Sell</a><br>
      <a href="../read.html">Browse</a><br>
      <a href="../about.html">Statistics</a>
      </div>

      <div class="resources">
    <h3>Resources</h3>
      <a href="../about.html">About</a><br>
      <a href="../about.html#how_to_use_inwriting">Help Center</a><br>
      <a href="../account.html">Account</a><br>
      <a href="../about.html#contact">Contact</a><br>
      <a href="#">APIs (Coming Soon)</a>


      </div>

  </div>
</template>

<script> 
export default {
  name: 'Footer',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 601px) {
.footer {
    background-color: black;
    width: 100%;
    height: auto;
    position: relative;
    bottom: 0;
    display: flex;
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 3vw;
    padding-bottom: 3vw;
    gap: 10vw;
}
h2 {
    color: white;
    font-family: "Proxima Nova Extra Condensed";
    font-size: 1.75vw;
}
h3 {
    color: white;
    font-family: "Proxima Nova Extra Condensed";
    font-size: 1.15vw;
}
p {
    color: white;
    font-family: "Proxima Nova Medium";
    font-size: 1.15vw;
    line-height: 1.5vw;
}
.logo {
    width: 25%;
    text-align: left;
}
.marketplace {
    text-align: left;
    line-height: 2vw;
}
.resources {
    text-align: left;
    line-height: 2vw;
}

a{
    color: white;
    font-family: "Proxima Nova Medium";
    font-size: 1.15vw;
    line-height: 1.5vw;
}
}

/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {

    .footer {

    background-color: black;
    width: 100%;
    height: auto;
    position: relative;
    bottom: 0;
    display: flex;
    padding-left: 16vw;
    padding-right: 16vw;
    padding-top: 3vw;
    padding-bottom: 10vw;
    gap: 10vw;
    flex-wrap: wrap;
    column-gap: 15vw;
    row-gap: 0vw;
    
}
h2 {
    color: white;
    font-family: "Proxima Nova Extra Condensed";
    font-size: 5.25vw;
}
h3 {
    color: white;
    font-family: "Proxima Nova Extra Condensed";
    font-size: 2.625vw;
}
p {
    color: white;
    font-family: "Proxima Nova Medium";
    font-size: 2.625vw;
}
.logo {
    width: 80%;
    text-align: left;
}
.marketplace {
    text-align: left;
    width: 25vw;
}
.resources {
    text-align: left;
    width: 25vw;
}

a{
    color: white;
    font-family: "Proxima Nova Medium";
    font-size: 2.625vw;
}

}

</style>
