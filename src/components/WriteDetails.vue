<template>
  <div class="details_outer">
         <div class="details_header">
           <p class="header">Details</p>
           </div>

           <div class="details_body">
           
             <table class="details_table">
        <tr>
          <td class="contact_address_class">Contact Address</td>
          <td class="ownerAddressTd" v-on:click="redirect(ownerAddress)">{{ownerAddress}}</td>
        </tr>
        <tr>
          <td>Token ID</td>
          <td>{{tokenID}}</td>
        </tr>
        <tr>
          <td>Token Standard</td>
          <td>ERC-721</td>
        </tr>
        <tr>
          <td>Blockchain</td>
          <td>Ethereum</td>
        </tr>
        <tr>
          <td>Locked</td>
          <td v-if="locked">True</td>
          <td v-else>False</td>
        </tr>
        <tr>
          <td>Character Count</td>
          <td>{{char_count}}</td>
        </tr>
        <tr>
          <td>Word Count</td>
          <td>{{word_count}}</td>
        </tr>
        <tr>
          <td>Link</td>
          <td><a class='clipboard' v-on:click="copyToClipboard('inwriting-static.vercel.app/text.html?tokenID='+tokenID)">Copy 📋</a></td>
        </tr>
        </table>
           </div>

           <ActionRegistered class="actionRegistered" v-bind:text="action_register_text" v-bind:icon="action_register_icon" />
         </div>
</template>

<script> 

import $ from 'jquery' 
import ActionRegistered from '@/components/ActionRegistered.vue'

export default {
  name: 'WriteDetails',
  props: {
      text: null,
  },
 
  components: {
    ActionRegistered,
  },

  methods: {
    
        

      manageActionRegister(icon, message){
      // Popup management
      this.$data.action_register_text = message
      this.$data.action_register_icon = icon
      $(".actionRegistered").toggle(200)
      setTimeout(() => { $(".actionRegistered").toggle(400)}, 10000);
         },

      copyToClipboard: function (t) {
        var self = this
        navigator.clipboard.writeText(t).then(function() {
        self.manageActionRegister('✅', 'Copied to clipboard')
        }, function(err) {
        self.manageActionRegister('❌', "Failed: " + err)
        });
      },


      redirect: function (t) {
        window.location.href = "../viewAccount.html?address=" + t;
      },

  },

  created: function() {

      var self = this;

        $.post( "https://www.sunrisesapp.com/inwriting/get_item_details.php", {string: this.$props.text}, function( data ) {
        //  console.log("in WriteDetails created, data is " + data)
          self.tokenID = data[0]['tokenID']
          self.ownerAddress = data[0]['owner']
          self.locked = data[0]['locked']
        }, "json");

        $.post( "https://www.sunrisesapp.com/inwriting/get_token_details.php", {string: this.$props.text}, function( data ) {
        //  console.log("in WriteDetails created, data is " + data)
          self.char_count = data[0]['char_count']
          self.word_count = data[0]['word_count']
        }, "json");
      



      
  },
  data () {
      return {
                tokenID: null,
      ownerAddress: null,
      action_register_text: null,
      action_register_icon: null,

      char_count: null,
      word_count: null,
      locked: null,
      }
  },

  /*
  computed: {

      // maybe add a line count as well 
    // a computed getter
    char_count: function () {
      // `this` points to the vm instance
      return this.$props.text.length;

    },

    word_count: function () {
      return this.$props.text.split(" ").length;
    },
  },
  */
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.actionRegistered {
  display: none;
}

.clipboard{
  color: black;
}
.clipboard:hover{
  color: black;
  text-decoration: underline;
}

td{
    word-wrap: break-word;
    word-break: break-all;
}
.details_outer {
  border: 0.1px black solid;
  width: 25vw;

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

table {
  font-family: "Proxima Nova Medium";
  font-size: 0.875vw;
  text-align: left;
}

.details_table {
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 1vw;
  margin-bottom: 1vw;
}

.details_body {
  width: 25vw;
}

.ownerAddressTd:hover {
    text-decoration: underline;
}

.contact_address_class {
  width: 14vw;
}

@media only screen and (max-width: 600px) and (orientation: portrait) {
  .details_outer {
    width: 100%;
  }
  .header {
    font-size: 2.625vw;
  }
  table {
    font-size: 2.625vw;
  }
  .details_body {
    width: 100%;
  }
  .contact_address_class {
    width: 50%;
  }

}

</style>
