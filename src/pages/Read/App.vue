<template>
  <div id="app">
    

      <textarea id="search" name="search" placeholder="Search" v-model="search"></textarea>


    <p class="title"><span>Sort text by <select v-model="sort_by">
        <option value="recent_mint">most recently minted</option>
        <option value="recent_activity">most recent activity</option>
        <option value="highest_price">highest price</option>
        <option value="lowest_price">lowest price</option>
        <option value="trend_1h">trending in past 1 hour</option>
        <option value="trend_12h">trending in past 12 hours</option>
        <option value="trend_24h">trending in past 24 hours</option>
        <option value="trend_7d">trending in past 7 days</option>
        <option value="trend_30d">trending in the past 30 days</option>
        </select></span></p>

        

    <TopWriteOrganizer v-bind:sort_by="sort_by" v-bind:search="search"/>
  
     <Footer/>
    <NavBar />
    
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import TopWriteOrganizer from '@/components/TopWriteOrganizer.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    TopWriteOrganizer,
  },
  data () {
    return {
      written_text: "Ligma",
      sort_by: "recent_mint",
      search: "",
    }
  },

  created(){

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
  /*text-align: center;*/
  color: #000000;
  margin-top: 60px;
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

.title {
  font-family: "Proxima Nova Extra Condensed";
  font-size: 2.625vw;
  text-align: left;
  margin-left: 11.5vw;
  padding-top: 5vh;
}

#search {

  
  
  font-family: "Menlo";
  font-size: 1.3125vw;
  border: 0.1px solid gray;
  padding: 0.25vw;
  padding-left: 1vw;
  padding-right: 1vw;
  color: gray;
  position: absolute;
  
  margin-top: 5.5vh;
  margin-bottom: 5vh;
  right: 11.5vw;
  width: 24vw;
  white-space: pre;
  height: 6vh;
  
  resize: none;
  overflow-y: hidden;
  
  
}

#search:focus {
    box-shadow: none;
    outline: none;
}


@media only screen and (min-width: 601px) {


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
