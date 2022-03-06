<template>
  <div class="TopWriteOrganizer">
      <TopWrite v-for="(text, index) in all_texts" :key="index" v-bind:text="text.tokenString" v-bind:price="text.price" v-bind:owned="owned"/>

  </div>
</template>

<script> 


import $ from 'jquery'
import TopWrite from './TopWrite.vue'

export default {
  name: 'TopWriteOrganizerAccount',
  components: {
      TopWrite,
  },
  props: {
      owner_address: null,
      sort_by: null,
      search: null,
  },
  data () {
    return {
    all_texts: [],
    owned: true,
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
    this.getText(this.$props.sort_by)
  },

  methods: {

    searchText: function(search_term){
        var self = this;
        var url = "https://www.sunrisesapp.com/inwriting/get_writes_search.php"
        $.post( url, {limit: this.$data.limit, search_term: search_term, address: this.$props.owner_address}, function( data ) {
          self.all_texts = data
        }, "json");

    },
    getText: function (sort_by) {

      var self = this;
      var now = parseInt((new Date()).getTime() / 1000);
      var url = ""

      if (this.$props.sort_by.includes("trend")){
        url = "https://www.sunrisesapp.com/inwriting/get_writes_sort_by_trend.php"
        if (this.$props.sort_by == "trend_1h"){
          $.post( url, {limit: this.$data.limit, now: now, before: (now-3600), address: this.$props.owner_address}, function( data ) {
          self.all_texts = data
        }, "json");
        }
        if (this.$props.sort_by == "trend_12h"){
         $.post( url, {limit: this.$data.limit, now: now, before: (now-43200), address: this.$props.owner_address}, function( data ) {
          self.all_texts = data
        }, "json");
        }
        if (this.$props.sort_by == "trend_24h"){
          $.post( url, {limit: this.$data.limit, now: now, before: (now-86400), address: this.$props.owner_address}, function( data ) {
          self.all_texts = data
        }, "json");
        }
        if (this.$props.sort_by == "trend_7d"){
          $.post( url, {limit: this.$data.limit, now: now, before: (now-604800), address: this.$props.owner_address}, function( data ) {
          self.all_texts = data
        }, "json");
        }
        if (this.$props.sort_by == "trend_30d"){
          console.log(url);
          $.post( url, {limit: this.$data.limit, now: now, before: (now-2073600), address: this.$props.owner_address}, function( data ) {
          console.log('data is ' + data)
          self.all_texts = data
        }, "json");
        }
      }
      else{
      
      // get current timestamp, get unix and subtract 648000
        url = "https://www.sunrisesapp.com/inwriting/get_writes_sort_by_" + sort_by + ".php"

        $.post( url, {limit: this.$data.limit, address: this.$props.owner_address}, function( data ) {
          self.all_texts = data
        }, "json");
      }
    },


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.TopWriteOrganizer {
    display: flex;
    padding: 3vw 10vw 10vw 10vw;
    gap: 2vw;
    flex-wrap: wrap;
    position: relative;
    justify-content: center;
    

}


</style>
