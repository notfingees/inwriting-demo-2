<template>
  <div id="app">
   

    <p id="header">{{account}}</p>
    <div class="row_1">
    <AccountDetailsModifiable v-if="account" v-bind:address="account"/>
    <div class="sort">
    


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

        <textarea id="search" name="search" placeholder="Search" v-model="search"></textarea>
    </div>


    </div>

    <p id="header">NFTs</p>

    
    <TopWriteOrganizerAccount v-if="account" v-bind:search="search" v-bind:owner_address="account" v-bind:sort_by="sort_by"/>
    
    <Footer/>
    <NavBar />

    <ActionRegistered class="actionRegistered" v-bind:text="action_register_text" v-bind:icon="action_register_icon" />

    
    
    
  </div>
</template>

<script>

import AccountDetailsModifiable from '@/components/AccountDetailsModifiable.vue'
import NavBar from '@/components/NavBar.vue'
import TopWriteOrganizerAccount from '@/components/TopWriteOrganizerAccount.vue'
import Footer from '@/components/Footer.vue'
import ActionRegistered from '@/components/ActionRegistered.vue'
import $ from 'jquery'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    TopWriteOrganizerAccount,
    ActionRegistered,
    AccountDetailsModifiable,
  },
  data () {
    return {
      written_text: "Ligma",
      account: null,
      sort_by: "recent_activity",
      search: null,
      action_register_text: null,
      action_register_icon: null,
    }
  },

  async created(){
    try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    this.$data.account = accounts[0]
    console.log("in Account created - account is " + accounts[0])
    }
    catch (e) {
      this.manageActionRegister('❗️', 'Error. Check to make sure you\'re logged in to MetaMask')
      console.log(e);
    }
    /*
    $.post( "https://www.sunrisesapp.com/inwriting/add_user.php", {address: this.$data.account}, function( data ) {
          console.log("Adding user returned " + data)
        }, "json");
    
*/
  },

  methods :{
    manageActionRegister(icon, message){
      // Popup management
      this.$data.action_register_text = message
      this.$data.action_register_icon = icon
      $(".actionRegistered").toggle(200)
      setTimeout(() => { $(".actionRegistered").toggle(400)}, 10000);


    },
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

.actionRegistered {
  display: none;
}

.sort {
  border: 0.1px solid black;
  width: 24vw;
  right: 0px;
  
}

.row_1 {
  display: flex;
  margin-left: 11.5vw;
  margin-right: 11.5vw;
  gap: 2vw;
  margin-top: 3vh;

}
b{
  font-family: "Proxima Nova Extra Condensed";
}
span {
  font-family: "Proxima Nova Medium";
}

select {
  margin-top: 3vh;
        border: none;
        font-family: 'Proxima Nova Extra Condensed'; 
        text-decoration: underline;
        appearance: none;
    }
select:focus {
    border: none;
    box-shadow: none;
    outline: none;
}

#search {
  padding: 1vw;
  width: 20vw;
  min-height: 15vh;

  font-family: "Menlo";
  font-size: 14px;
  border: 0.1px solid gray;
  color: gray;
  
  white-space: pre;
  
  resize: none;
  overflow-y: hidden;
}

#search:focus {
    box-shadow: none;
    outline: none;
}



@media only screen and (min-width: 601px) {
  #header {
    font-family: "Proxima Nova Extra Condensed";
    font-size: 1.75vw;
    padding-top: 5vh;
  }

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
