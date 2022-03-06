<template>
  <div class="details_outer">
         <div class="details_header">
           <p class="header">Account Details</p>
           </div>

           <div class="details_body">
             <form>

           <span><b>Wallet address:   </b><p class="address">{{address}}</p></span>
           <span><label for="bio">About you: </label>
             <input v-model="bio" type="text" id="bio" name="bio"><br></span>

            <span><label for="twitter">Twitter: </label>
             <input v-model="twitter" type="text" id="twitter" name="twitter"><br></span>

          <span><label for="instagram">Instagram: </label>
             <input v-model="instagram" type="text" id="instagram" name="instagram"><br></span>

          <span><label for="discord">Discord: </label>
             <input v-model="discord" type="text" id="discord" name="discord"><br></span>

             <span><label for="website">Website: </label>
             <input v-model="website" type="text" id="website" name="website"><br></span>

             <input class="submit_button" value="Save" type="submit" v-on:click="submitForm">
              </form>
           </div>
         </div>
</template>

<script> 

import $ from 'jquery' 

export default {
  name: 'AccountDetails',
  props: {
      address: null,
  },

data () {
      return {
          account: [],
    tokenID: null,
      ownerAddress: null,

      bio: null,
      twitter: null,
      instagram: null,
      discord: null,
      website: null,    

      }
  },

  methods: {
    /*
        copyToClipboard: function (t) {
        navigator.clipboard.writeText(t).then(function() {
        console.log('Async: Copying to clipboard was successful!');
        }, function(err) {
        console.error('Async: Could not copy text: ', err);
        });
      },*/

      redirect: function (t) {
        window.location.href = "../viewAccount.html?address=" + t;
      },

      submitForm: function() {
        $.post( "https://www.sunrisesapp.com/inwriting/update_user_details.php", {address: this.$props.address, bio: this.$data.bio, twitter: this.$data.twitter, instagram: this.$data.instagram, discord: this.$data.discord, website: this.$data.website}, function( data ) {
          //console.log("in WriteDetails created, data is " + data)
          console.log(data)
        }, "json");
      }

  },

  created: function() {

      var self = this;

        $.post( "https://www.sunrisesapp.com/inwriting/get_user.php", {address: this.$props.address}, function( data ) {
          //console.log("in WriteDetails created, data is " + data)
          self.account = data[0]
        }, "json");
      



      
  },
  
  computed: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.submit_button {
  background-color: white;
  border: 0.1px black solid;
  font-family: "Menlo";
  width: 10vw;
  padding: 0.5vw;
  position: relative;
  left: 35vw;
}
.submit_button:hover {
  background-color: black;
  border: 0.1px black solid;
  font-family: "Menlo";
  color: white;
}


span {
  font-family: "Proxima Nova Extra Condensed";
}

input {
  width: 85%;
  font-family: "Proxima Nova Extra Condensed";
  padding: 1vw;
  font-family: "Menlo";
  font-size: 14px;
  color: black;
  border: none;

}

.address {
  font-family: "Proxima Nova Extra Condensed";
  font-family: "Menlo";
  font-size: 14px;
  color: black;
  border: none;
}

label {
  width: 15%;
  font-family: "Proxima Nova Extra Condensed";
  padding: 0vw;
}

input:focus {
  box-shadow: none;
  outline: none;
}


.details_outer {
  border: 0.1px black solid;
  width: 50vw;

}

.details_header {
  border-bottom: 0.1px black solid;
}

.header {
  font-family: "Proxima Nova Extra Condensed";
  padding-top: 1vh;
  margin-bottom: 1vh;
  text-align: left;
  margin-left: 2vw;
}


.details_body {

  text-align: left;
  margin-left: 2vw;
  padding-top: 3vh;
  padding-bottom: 2vh;
}

.ownerAddressTd:hover {
    text-decoration: underline;
}

</style>
