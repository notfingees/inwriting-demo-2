<template>
    
    <div class="NFT">
      <pre class="NFTtext">{{text}}</pre>
      </div>
    
</template>

<script> 





export default {
  name: 'DisplayNFT',
  props: {
    text: null,
    price: null,


  },
  /*
  data () {
    return {
    text: null,
    price: null
    }
  },
  */
 /*
  mounted: function() {
    console.log('mounted just got called in TopWrite.vue');
    this.getText()
  },
*/
  methods: {
    

    getFontSizeClass: function(s){
      if (s.length <= 73){ // lengths work for desktop but not mobile yet 
        return 'large';
      } else if (s.length <= 289){
        return 'medium';
      } else {
        return 'small';
      }

    },

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#trending {
  width: 24vw;
  border: 0.1vw solid black;
  height: 40vw;
  display: flex;
}

#trending:hover{
  background-color: black;
}
#trending:hover pre{
  color: white;
}


p{
  word-wrap: break-word;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  word-break: break-word;
}
pre{
  word-wrap: break-word;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  word-break: break-word;
}

#content {
  padding: 2vw;
  padding-top: 4vw;
}

.price{
  margin-bottom: 2vw;
  font-family: "Proxima Nova Extra Condensed";
  font-size: 1.75vw;
  text-align: left;
}

.small{

  font-family: "Menlo";
  line-height: 1.25vw;
  text-align: left;
  overflow: hidden;
  height: 90%;
  font-size: 0.875vw;
  
}
.medium {

  font-family: "Menlo";
  line-height: 2vw;
  text-align: left;
  overflow: hidden;
  height: 90%;
  font-size: 1.75vw;
}
.large {

  font-family: "Menlo";
  line-height: 4vw;
  text-align: left;
  overflow: hidden;
  height: 90%;
  font-size: 3.5vw;
  
}
.xl {

  font-family: "Menlo";
  line-height: 1.25vw;
  text-align: left;
  overflow: hidden;
  height: 90%;
  font-size: 7vw;
}

</style>
