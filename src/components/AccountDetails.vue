<template>
  <div class="details_outer">
         <div class="details_header">
           <p class="header">Account Details</p>
           </div>

           <div class="details_body">
           
           <span><b>Wallet address: </b>{{address}}</span><br>
           <span v-if="account['bio']">{{account['bio']}}<br></span>
           <span v-if="account['twitter']"><b>Twitter: </b>{{account['twitter']}}<br></span>
           <span v-if="account['instagram']"><b>Instagram: </b>{{account['instagram']}}<br></span>
           <span v-if="account['discord']"><b>Discord: </b>{{account['discord']}}<br></span>
           <span v-if="account['website']"><b>Website: </b>{{account['website']}}<br></span>

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

span {
    font-family: "Menlo";
    font-size: 14px;
    color: black;
}
b {
    font-family: "Proxima Nova Extra Condensed";
    font-size: 16px;
}
.details_outer {
  border: 0.1px black solid;
  min-width: 50vw;

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


.details_table {
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
}

.details_body {
  text-align: left;
  margin-left: 2vw;
  padding-top: 2vh;
  padding-bottom: 2vh;
}

.ownerAddressTd:hover {
    text-decoration: underline;
}

</style>
