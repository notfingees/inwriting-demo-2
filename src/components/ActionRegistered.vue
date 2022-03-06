<template>
  <div class="popup">
    <span><p class="popupText">{{icon}} {{text}}</p></span>
         </div>
</template>

<script> 
export default {
  name: 'ActionRegistered',
  props: {
      icon: null,
      text: null,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.popup {
  background-color: white;
  border: 0.1px solid black;
  box-shadow: 10px 10px;
  position: fixed;
  left: 50%;
  margin-left: -15vw;
  top: 10vh;
  width: 30vw;
  padding: 1vw;
  

}

.popupText {
    font-family: "Menlo";
    
}

</style>
