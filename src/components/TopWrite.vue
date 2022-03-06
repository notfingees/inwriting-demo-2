<template>
    
    <div id="wrapper">
    <div id="trending" v-on:click="showModal"> <!-- Makes it so that I can't close the modal -->
      <div id="content">
      
    <!--<pre v-bind:class="getFontSizeClass(text)">{{ text }}</pre>-->
  <pre v-bind:style="{fontSize: auto(text) + 'vw', lineHeight: '120.8%'}" v-bind:class="lineBreaks(text)">{{ text }}</pre>
      <p class="price">{{display_price}}</p>

      
      </div>

      

      </div>
      <modal class="modal-test" v-show="isModalVisible" @close="closeModal" v-bind:text="text" v-bind:owned="owned" v-bind:index="index"/>
    
    </div>
</template>

<script> 



import modal from './Modal.vue'
//import $ from 'jquery'
export default {
  name: 'TopWrite',
  components: {
    modal,
  },
  props: {
    text: null,
    price: null,
    owned: null,
    index: null,

  },
  computed: {
    display_price: function () {
      //return this.$props.price;
      
      if (this.$props.price == null){
        return "Unlisted";
      }
      else{
        return this.$props.price;
      }
      
    }
  },
  
  data () {
    return {
    isModalVisible: false,
    }
  },
  
 
  mounted: function() {
    console.log('mounted just got called in TopWrite.vue, fontSize is ' + this.$props.fontSize);
    //$('.test').fitText(0.2);
   // $(".test").css("font-size", this.$props.fontSize);

  },

  methods: {

    

    auto: function(s){

      // container is 20vw (widht), 40 (height)
      var lines = s.split(/\r?\n/)
      var longest_line = 0

      var numLines = lines.length

      lines.forEach(function (line) {
        var ll = line.length
        if (ll > longest_line){
          longest_line = ll
        }
        });

        if (numLines == 1 && longest_line > 50){
          longest_line = 50
       }

        var fs = (20/longest_line) // 20 is width
   

        

      

        var totalHeight = numLines*(fs) + (numLines * ((fs)*1.208)) // currently in vw

        //var totalHeightVH = this.pxTOvh(this.vwTOpx(totalHeight))
        console.log("in TopWrite with " + s + " totalHeight is " + totalHeight)
        
        if (totalHeight > 40){

            var x = (fs*(numLines + (1.208*numLines)))/40
            return (fs/x)*1.3
        }

        else{
          return fs*1.6
        }

    },
/*
    auto_template: function(s){

    // 90 is the width and the height ??? idk what i wrote LOL      
      // container is 20vw
      var lines = s.split(/\r?\n/)
      var longest_line = 0

      lines.forEach(function (line) {
        var ll = line.length
        if (ll > longest_line){
          longest_line = ll
        }
        });
        var fs = 90/longest_line
        if (fs >= 9){
          fs = 9
        }
        else{
          // ignore
        }

        var numLines = lines.length
        var totalHeight = numLines*(fs) + (numLines * ((fs)*1.618)) // currently in vw

        var totalHeightVH = this.pxTOvh(this.vwTOpx(totalHeight))
        console.log("in AllWrite with " + s + " totalHeight is " + totalHeight)
        
        if (totalHeightVH > 90){

          var fsVH = this.pxTOvh(this.vwTOpx(fs))

            var x = (fsVH*(numLines + (1.618*numLines)))/90
            return fs/x
        }

        else{
          return fs
        }
    },
    */

    
    lineBreaks: function(s){
      var numberOfLineBreaks = (s.match(/\n/g)||[]).length;
      if (numberOfLineBreaks > 0){
        return 'lb'
      }
      return 'no-lb'
    },
    


    redirectToSpecificNFTPage: function(s){
      console.log('Clicked on, now redirecting with string' + s);
    },

    showModal() {
        this.isModalVisible = true;
        console.log("showModal called");
      },
      closeModal() {
        this.isModalVisible = false;
        console.log("closeModal called");
      }
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


.no-lb{
  
  font-family: "Menlo";
  overflow: hidden;
  height: 90%;
  text-align: left;
  word-wrap: break-word;
  white-space: pre-wrap;
  

}

.lb{
  font-family: "Menlo";
  text-align: left;
  overflow: hidden;
 height: 90%;
 /*max-width: 20vw;*/
  white-space: none !important; 
}




/* Phone styling */
@media only screen and (max-width: 600px) and (orientation: portrait) {
 #trending {
  width: 100%;
  border: 0.1vw solid black;
  height: 60vh;
  display: flex;
}

}

</style>
