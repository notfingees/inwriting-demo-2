<template>
  <div class="TopWriteOrganizer">
    
      
      <!--<TopWrite v-bind:text="text_1" v-bind:price="price_1"/>
      <TopWrite v-bind:text="text_2" v-bind:price="price_2"/>
      <TopWrite v-bind:text="text_3" v-bind:price="price_3"/>
      <TopWrite v-bind:text="text_4" v-bind:price="price_4"/>
      <TopWrite v-bind:text="text_5" v-bind:price="price_5"/>
      <TopWrite v-bind:text="text_6" v-bind:price="price_6"/>-->
      

      <TopWrite class="TopWrite" v-for="(text, index) in all_texts" :key="index" v-bind:text="text.tokenString" v-bind:price="text.price" v-bind:owned="owned" v-bind:index="index"/>

  </div>
</template>

<script> 


import $ from 'jquery'
import TopWrite from './TopWrite.vue'

export default {
  name: 'TopWriteOrganizer',
  components: {
      TopWrite,
  },
  props: {
    owned: null,
    sort_by: null,
    search: null,
  },
  data () {
    return {
    all_texts: [],
    limit: 20,
    }
  },

  watch: {
    
    sort_by(new_sort_by){
        console.log("sort_by just changed")
        this.getText(new_sort_by)
    },

    search(new_search_term){
      console.log("new search term is changing")
      if (new_search_term.length == 1){
        //pass
        return
      }
      this.searchText(new_search_term)
    }
  },
  mounted: function() {
    console.log('mounted just got called in TopWriteOrganizer.vue, owned is ' + this.$props.owned);
    this.getText(this.$props.sort_by)
  },

  methods: {

    searchText: function(search_term){
        var self = this;
        var url = "https://www.sunrisesapp.com/inwriting/get_writes_search.php"
        $.post( url, {limit: this.$data.limit, search_term: search_term}, function( data ) {
          self.all_texts = data
        }, "json");

    },
    getText: function (sort_by) {

      var self = this;
      var now = parseInt((new Date()).getTime() / 1000);
      var url = ""
      
/*
      url = "https://www.sunrisesapp.com/inwriting/get_trending.php"
      $.post( url, function( data ) {
          self.all_texts = data
        }, "json");
        console.log("all_texts is", self.all_texts)
      console.log("all_texts[0] is ", self.all_texts[0])
      console.log("sort by is " + sort_by)
        return
        */
        
      

      if (this.$props.sort_by.includes("trend")){
        url = "https://www.sunrisesapp.com/inwriting/get_writes_sort_by_trend.php"
        if (this.$props.sort_by == "trend_1h"){
          $.post( url, {limit: this.$data.limit, now: now, before: (now-3600)}, function( data ) {
          self.all_texts = data
        }, "json");
        }
        if (this.$props.sort_by == "trend_12h"){
         $.post( url, {limit: this.$data.limit, now: now, before: (now-43200)}, function( data ) {
          self.all_texts = data
        }, "json");
        }
        if (this.$props.sort_by == "trend_24h"){
          $.post( url, {limit: this.$data.limit, now: now, before: (now-86400)}, function( data ) {
          self.all_texts = data
        }, "json");
        }
        if (this.$props.sort_by == "trend_7d"){
          $.post( url, {limit: this.$data.limit, now: now, before: (now-604800)}, function( data ) {
          self.all_texts = data
        }, "json");
        }
        if (this.$props.sort_by == "trend_30d"){
          $.post( url, {limit: this.$data.limit, now: now, before: (now-2073600)}, function( data ) {
          self.all_texts = data
        }, "json");
        }
      }
      else{
      
      // get current timestamp, get unix and subtract 648000
        url = "https://www.sunrisesapp.com/inwriting/get_writes_sort_by_" + sort_by + ".php"

        $.post( url, {limit: this.$data.limit}, function( data ) {
          self.all_texts = data
        }, "json");
      }
      
      
      
    },

    


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 601px) {
.TopWriteOrganizer {
    display: flex;
    padding: 3vw 10vw 10vw 10vw;
    gap: 2vw;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    

}
.container{
  width: 100%;
  height: 100%;
  position: relative;
  top: 0vw;
  left: 0vw;
  
}


}




/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {
  .TopWriteOrganizer {
    display: block;
    width: 100vw;
    


}

.TopWrite {
  margin: auto;
  height: auto;
  padding-left: 16vw;
  padding-right: 16vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
}

.container{
  width: 100%;
  height: 100%;
  position: relative;
  top: 0vw;
  left: 0vw;
}

#mobile-formatting{
  width: 80vw;
  
}


}

</style>
