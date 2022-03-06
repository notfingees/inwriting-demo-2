<template>
  <div id="text_div" tabindex="0" v-on:keydown.meta.187.capture.prevent.stop="enlargeFont" v-on:keydown.meta.189.capture.prevent.stop="delargeFont" style="width:100%;height:100%;" v-if="open">
    <pre id="text" v-bind:style="{fontSize: currentFontSize + 'px', lineHeight: '120.8%'}">{{text}}</pre>
  </div>
</template>

<script>
//import $ from 'jquery'
export default {
  name: 'PreviewPopup',
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    text: String,
  },
  data() {
    return {
      windowRef: null,
      currentFontSize: null,
    }
  },

  watch: {
    open(newOpen) {
      if(newOpen) {
        this.openPortal();
       // $(this.windowRef.document.getElementById('text_div')).trigger('click')
      } else {
        this.closePortal();
      }
    },
    text(newText){
        this.$data.currentFontSize = this.auto(newText)
    }
  },
  methods: {

    auto: function(s){


      var height = window.innerHeight-20
      var width = window.innerWidth-20

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
       else{
         // this.windowRef.document.getElementById('text').style.whiteSpace = 'normal'
       }

        var fs = (width/longest_line) // 20 is width
   
        var totalHeight = numLines*(fs) + (numLines * ((fs)*1.208)) // currently in vw

        //var totalHeightVH = this.pxTOvh(this.vwTOpx(totalHeight))
        console.log("in PreviewPopup with " + s + " totalHeight is " + totalHeight)
        
        if (totalHeight > height){

            var x = (fs*(numLines + (1.208*numLines)))/height
            return (fs/x)
        }

        else{
          return fs
        }

    },

    enlargeFont() {
      this.$data.currentFontSize = this.$data.currentFontSize + 1;
      this.windowRef.document.getElementById('text').style.fontSize = this.$data.currentFontSize + "px";

    },
    delargeFont() {
       this.$data.currentFontSize = this.$data.currentFontSize - 1;
      this.windowRef.document.getElementById('text').style.fontSize = this.$data.currentFontSize + "px";

    },
    openPortal() {

      var height = window.innerHeight
      var width = window.innerWidth
      this.windowRef = window.open("", "", "width=" + width + ",height=" + height + ",left=0,top=0");
      this.windowRef.addEventListener('beforeunload', this.closePortal);
      
      /*
      this.windowRef.addEventListener("keyup", (e) => {
        if (e.code === 'Equal'){
          this.enlargeFont();
        }
      })
      */
      // magic!
      this.windowRef.document.body.appendChild(this.$el);
      this.$data.currentFontSize = this.auto(this.$props.text)
    },
    closePortal() {
      if(this.windowRef) {
        this.windowRef.close();
        this.windowRef = null;
        this.$emit('close');
      }
    }
  },
  mounted() {
    if(this.open) {
      this.openPortal();
    }
    
    

    
  },
  beforeDestroy() {
      console.log("in beforeDestroy");
    if (this.windowRef) {
      this.closePortal();

    }
  }
}
</script>

<style scoped>

</style>