<template>
  <div class="navbar">
    <div class="navbar-inner">
      <a class="brand" href="../index.html">In Writing</a>



      <div class="navbar-icons">
        <a class="navbar-link" href="../write.html?userString=Your%20text%20here">Write</a>
        <a class="navbar-link" href="../read.html">Read</a>
        <a class="navbar-link" href="../about.html">About</a>
      <a href="../account.html"><img src="@/assets/user-solid.svg"></a>
      <img src="@/assets/wallet-solid.svg" v-on:click="getWallet">
      </div>

      </div> 


        
        <!--<b-navbar-brand class = "navbar-text" href="../home">In Writing</b-navbar-brand>
        <b-navba class = "navbar-text" href="../home"><i class="fas fa-wallet"></i></b-navbar-brand>
        <i class="fas fa-wallet"></i>
        <p> Hello!!!</p>
    </b-navbar>
    -->

     <ActionRegistered class="actionRegistered" v-bind:text="action_register_text" v-bind:icon="action_register_icon" />
  </div>
</template>

<script> 
import ActionRegistered from '@/components/ActionRegistered.vue'
import $ from 'jquery' 
export default {
  name: 'NavBar',
  components: {
    ActionRegistered,
  },
  data () {
    return {
      accounts: [],
      current_address: null,

      action_register_text: null,
      action_register_icon: null,
    }
  },
  methods: {

    manageActionRegister(icon, message){
      // Popup management
      this.$data.action_register_text = message
      this.$data.action_register_icon = icon
      $(".actionRegistered").toggle(200)
      setTimeout(() => { $(".actionRegistered").toggle(400)}, 10000);


    },


      async getWallet() {

       //window.ethereum.request({ method: 'eth_requestAccounts' });
        
        const self = this;
        try {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                self.$data.accounts = accounts;
                this.$data.current_address = accounts[0];
        }
        catch (e) {
            this.manageActionRegister('❗️', 'Error with connecting your wallet. Please try again and check console for more details.')
      console.log(e);
        }
                //this.$emit('updateGlobalCurrentAddress', accounts[0]);
                console.log("Current wallet address is " + this.$data.current_address);

                // register account if doesn't already exist 

                $.post( "https://www.sunrisesapp.com/inwriting/add_user.php", {address: this.$data.current_address}, function( data ) {
          console.log("Adding user returned " + data)
        }, "json");


      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.actionRegistered {
  display: none;
}

@media only screen and (min-width: 601px) {

  i{
  position: absolute;
  top: 0;
  right: 0;
  width: 20vw;
  font-size: 10vw;
}

.navbar {
  
  position: fixed;
  top: 0vw;
  width: 100vw;
  height: 8vh;
  background-color: white;
  padding-top: 2vh;
  
}
.navbar-inner{
  display: flex;
  gap: 60vw;
}
.navbar-icons{
  display: flex;
  gap: 3vw;
}
.brand{
    color: black;
    font-family: "Proxima Nova Extra Condensed";
    font-size: 1.75vw;
    margin-left: 2vw;
}
.navbar-link{
  color: black;
  font-family: "Proxima Nova Extra Condensed";
  font-size: 1.3125vw;
  position: relative;
  top: 0.75vh;
}

img{
  height: 1.75vw;
  width: auto;
  top: 0.75vh;
  position: relative;
}


}

@media only screen and (max-width: 600px) and (orientation: portrait) {


.navbar {
  
  position: fixed;
  top: 0vw;
  width: 100vw;
  height: 8vh;
  background-color: white;
  padding-top: 2vh;
  
}
.navbar-inner{
  display: flex;
  gap: 35vw;
}
.navbar-icons{
  display: inline-block;
}
.brand{
    color: black;
    font-family: "Proxima Nova Extra Condensed";
    font-size: 3vw;
    margin-left: 2vw;
    width: 15vw;
    margin-top: 0.3vh;
}
.navbar-link{
  color: black;
  font-family: "Proxima Nova Extra Condensed";
  font-size: 2.33vw;
  position: relative;
  top: 0vh;
  padding-left: 3vw;
}

img{
  height: 2.33vw;
  width: auto;
  top: 0vh;
  position: relative;
  padding-left: 3vw;
}

.titlediv{
  margin: auto;
  width: 100%;
  padding-top: 20vw;
}

}

</style>
