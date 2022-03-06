<template>
  <div id="app">
    
    <BodyTop />
    
    <br class="hide-desktop">
    <div class="titlediv">
    <p class="title">What Is In Writing?</p>
    </div>
    <HomePageInfo2/>
    <div class="titlediv2">
    <p class="title">Get Started</p>
    </div>
    <HomePageInfo/>
    
    <br><br><br>
    <p class="title" style="padding-top:5vw;"><span>Top writes in the past <select v-model="sort_by">
        <option value="trend_1h">1 hour</option>
        <option value="trend_12h">12 hours</option>
        <option value="trend_24h">24 hours</option>
        <option value="trend_7d">7 days</option>
        <option value="trend_30d" selected>30 days</option>
        </select></span></p>

         
    <TopWriteOrganizer v-bind:owned="owned" v-bind:sort_by="sort_by"/>
    <Footer/>
     <NavBar />
    
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import BodyTop from '@/components/BodyTop.vue'
import HomePageInfo from '@/components/HomePageInfo.vue'
import HomePageInfo2 from '@/components/HomePageInfo2.vue'
import TopWriteOrganizer from '@/components/TopWriteOrganizer.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    BodyTop,
    HomePageInfo,
    TopWriteOrganizer,
    Footer,
    HomePageInfo2,
  },
  data () {
    return {
      owned: false,
      sort_by: "trend_30d",
    }
  }
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

.titlediv2{
  margin: auto;
  width: 100%;
  padding-top: 10vw;
}

.hide-desktop{
  display: none;

}

select {
        border: none;
        font-size: 2.625vw;
        font-family: 'Proxima Nova Extra Condensed';
        text-decoration: underline;
        appearance: none;
    }
select:focus {
    border: none;
    box-shadow: none;
    outline: none;
}
}


/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {
  .title {
  font-family: "Proxima Nova Extra Condensed";
  font-size: 7vw;
  line-height: 7vw;
  padding-left: 16vw;
  padding-right: 16vw;
}

.titlediv{
  margin: auto;
  width: 100%;
  /*padding-top: 20vw;*/
}

select {
        border: none;
        font-size: 7vw;
        font-family: 'Proxima Nova Extra Condensed';
        text-decoration: underline;
        appearance: none;
    }
select:focus {
    border: none;
    box-shadow: none;
    outline: none;
}

}

</style>
