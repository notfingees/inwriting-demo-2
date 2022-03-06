<template>
  <div class="section">
      
      <div v-for="(item, index) in titles" :key="index">

        <p class="title">{{item}}</p>
        <p class="detail" v-html="details[index]"></p>

        </div>

  </div>
</template>

<script> 
export default {
  name: 'AboutSection',
  props: {
      titles: [],
      details: [],
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media only screen and (min-width: 601px) {
.title, .detail {
    text-align: left;
}
.title {
    font-size: 1.25vw;
    font-family: "Proxima Nova Extra Condensed";
}
.detail {
    font-size: 1.15vw;
    line-height: 1.5vw;
    font-family: "Proxima Nova Medium";
}

.section {
    display: block;
    padding-left: 12vw;
    padding-right: 12vw;
}


}

@media only screen and (max-width: 600px) and (orientation: portrait) {
.title, .detail {
    text-align: left;
}
.title {
    font-size: 3.5vw;
    font-family: "Proxima Nova Extra Condensed";
}
.detail {
    font-size: 3.5vw;
    line-height: 120.8%;
    font-family: "Proxima Nova Medium";
}

.section {
    display: block;
    padding-left: 16vw;
    padding-right: 16vw;
}
}


</style>
