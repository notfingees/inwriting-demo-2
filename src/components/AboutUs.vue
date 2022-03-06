<template>
<div class="container">
  <div class="homepageinfo">

      <div class="profile">
<pre style="font-size: 2vw; line-height:2.5vw;">
MMMMM
|. .|
( d )
| = |
'---'</pre>
        <h1>Justin</h1>
        <div class="info">
          <p>Developer</p>
          </div>
        </div>

        <div class="profile_2">
<pre style="font-size: 2vw; line-height:2.5vw;">                      
MMMMM
(o o)
| L |
| = |
'---'</pre>
          <h1>Alex</h1>
          <div class="info">
            <p>Engineer</p>
          </div>
          </div>

  </div>
<br>

  <div class="about_us_text">
      <p class="about_us_text_p">In Writing was developed after we realized that current NFTs lack true uniqueness and decentralization. Popular marketplaces like OpenSea restrict who can use their platform and require costly fees with every transaction. On top of this, two people can own the same image as an NFT and in most cases, the image isn't even saved on the blockchain [IFPS link]. We combined these needs with a desire for a free and open-access platform to develop In Writing, and we're looking to revolutionize the NFT industry to better take advantage of what NFTs and Web3 apps are truly capable of.
      </p>

      <button>Contact Us</button>
      </div>

</div>
  
</template>

<script> 
export default {
  name: 'HomePageInfo',
  props: {
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (min-width: 601px) {
pre {
  font-size: 0.4vw;
  font-family: "Menlo";
  text-align: center;
  line-height: 140%;
  overflow: hidden;
  overflow-y: hidden;

}
h1{
  font-size: 1.15vw;
  font-family: "Proxima Nova Extra Condensed";
}
p {
  font-size: 1.15vw;
  line-height: 1.5vw;
  font-family: "Proxima Nova Medium";
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

.homepageinfo {
    display: flex;
  padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 2vw;
}

.profile {
    padding-top: 2.5vw;
    position: relative;
    left: -5vw;
}
.profile_2 {
    position: relative;
    right: -5vw;
}

.profile, .profile_2 {
    width: 20vw;
}

.about_us_text {
}

.about_us_text_p {
    overflow:hidden;
    word-wrap: break-word;
  text-overflow: wrap;
  white-space: pre-wrap;
  word-break: break-word;
  text-align: left;
}


.container {
    padding: 0vw;
}

}


/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {


pre {
  font-size: 2.5vw;
  font-family: "Menlo";
  text-align: center;

  overflow-y: hidden;

}
h1{
  font-size: 3.5vw;
  font-family: "Proxima Nova Extra Condensed";
}
p {
  font-size: 3.5vw;
  font-family: "Proxima Nova Medium";
}
h1, .info {
  padding-left: 8vw;
  padding-right: 8vw;
}
.info {
  width: 100%;
  line-height: 4vw;
}


.homepageinfo {
  display: flex;
  padding-top: 2vw;
}

.container {
  padding-left: 16vw;
  padding-right: 16vw;
  text-align: left;
  padding-bottom: 5vh;
}

.about_us_text {
  text-align: center;
}
.about_us_text_p {
  text-align: left;
}


button {
  background-color: white;
  border: 0.1px black solid;
  font-family: "Menlo";
  width: 30vw;
  padding: 0.5vw;
}
button:hover {
  background-color: black;
  border: 0.1px black solid;
  font-family: "Menlo";
  color: white;
}


}


</style>
