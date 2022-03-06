<template>
  <div id="app">
   

    
    <textarea class="text_write" v-model="written_text" onkeyup="this.style.height='24px'; this.style.height = this.scrollHeight + 12 + 'px';"></textarea>
   

    <div class="checkout">

      <div class="checkout_header">
        <p class="checkout_text">Options</p>
      </div>

      <div class="formatting_options">
        <input type="radio" name="formatting_options_name" id="no_format" value="Mint as-is (no formatting)" checked>
        <label for="no_format">Mint as-is (no formatting)</label><br>
      <!--  <input type="radio" name="formatting_options_name" id="format" value="Format for me (?)">
        <label for="format">Format for me (?)</label><br>-->
        <br>
        <button type="button" class="preview_button" @click="openPopup">Preview</button>
      </div>

      <div class="formatting_options">
        <input type="radio" name="lock_unlock_name" id="lock" value="Lock" v-model="locked">
        <label for="lock">Mint as locked NFT (recommended)</label><br>
        <input type="radio" name="lock_unlock_name" id="unlock" value="Unlock" v-model="locked">
        <label for="unlock">Mint as unlocked NFT (?)</label><br>
        <br>
         <label style="padding-right:20px;" for="confirm_checkbox_unlock" v-if="locked == 'Unlock'"><input type="checkbox" name="toc" id="confirm_checkbox_unlock" v-model="confirm_checkbox_unlock">
        I have read the <span><a href="#">documentation</a></span> and understand what it means to mint an unlocked NFT</label>
       <!-- <button type="button" class="preview_button" @click="test_unlock_append(written_text)">Test</button> -->

        </div>

      <div class="sale_options">
        <input type="radio" name="sale_options_name" id="dont_list" value="unlisted" v-model="list">
        <label for="dont_list">Don't list for sale</label><br>
        <input type="radio" name="sale_options_name" id="list" value="listed" v-model="list">
        <label for="list">List for sale</label><br>
        <br>
        <label style="padding-right:20px;" for="sot" v-if="list == 'listed'">Price (wei)</label>
        <input style="font-size:1.5vw;border-width:0px 0px 1px 0px;" type="number" name="sale_options_text" id="sot" placeholder="Price" v-model="price" v-if="list == 'listed'">
        <br v-if="list == 'listed'">
         <label style="padding-right:20px;" for="confirm_checkbox" v-if="list == 'listed'"><input type="checkbox" name="toc" id="confirm_checkbox" v-model="confirm_checkbox">
        I have read the <span><a href="#">terms and conditions</a></span> and am sure I want to list this item for {{price / 1000000000000000000.0}} ETH</label>
        
        
      </div>

      <div class="checkout_header_top_included">
        <p class="checkout_text">Checkout</p>
      </div>
      <div class="checkout_details">

        <table>
        
        <tr>
          <th style="width:40vw;">Item</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td><span style="display:inline-block;"><p style="display:inline-block;" v-if="locked=='Unlock'">Unlocked </p> Text NFT</span></td>
          <td>0.0025 ETH<br>(${{(0.0025 * ether_price).toFixed(2)}})</td>
        </tr>
        </table>

        <button type="button" v-on:click="mint(written_text)">Mint</button>

        </div>





    </div>
    <div id="spacer"></div>
    <Footer/>
     <NavBar />
    <PreviewPopup v-bind:text="written_text" ref="popup" v-bind:open="popup_open" v-on:close="openPopup"/>
     <ActionRegistered class="actionRegistered" v-bind:text="action_register_text" v-bind:icon="action_register_icon" />
    
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import PreviewPopup from '@/components/PreviewPopup.vue'
import ActionRegistered from '@/components/ActionRegistered.vue'
import $ from 'jquery'
import { Base64 } from 'js-base64'


export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    PreviewPopup,
    ActionRegistered,
  },
  data () {
    return {
      written_text: "Ligma",
      list: "unlisted",
      price: null,
      popup_open: false,
      est_gas_price: null,
      est_gas_fee: null,
      est_total_price: null,
      ether_price: null,
      account: null,
      confirm_checkbox: null,
      confirm_checkbox_unlock: null,

      locked: "Lock",

      action_register_text: null,
      action_register_icon: null,

      alchemy_api_url: null,
    }
  },



  async created(){
    let uri = window.location.search.substring(1); 
    let params = new URLSearchParams(uri);
    this.$data.written_text = params.get("userString");


    if (window.ethereum){
      console.log('Metamask Installed');
    } else {
      console.log('Please install MetaMask!');
    }

    try {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    this.$data.account = accounts[0]
    }
    catch (e) {

      this.manageActionRegister('❗️', 'Error. Check to make sure you\'re logged in to MetaMask')
      console.log(e);
    }

    var self = this

    $.post( "https://www.sunrisesapp.com/inwriting/get_alchemy_api.php", function( data ) {
    
          self.alchemy_api_url = data[0]['alchemy']
        }, "json");

    $.post( "https://www.sunrisesapp.com/inwriting/get_ethereum_price.php", function( data ) {
          console.log("Adding to buffer pool returned " + data)
          self.ether_price = data[0]['ethereum']
        }, "json");


  },

  watch: { 

      price: function(newVal){
          if (newVal > 115792089237316195423570985008687907853269984665640564039457584007913129639935){ // solidity max int
            this.$data.price = Math.floor(newVal / 10)
            this.manageActionRegister('❌', 'Error. Number is too large')
          }
      },
      written_text: function(newVal) { // watch it

      // change font size

      if (newVal.length <= 73){ // lengths work for desktop but not mobile yet 
        $(".text_write").css("font-size", "3.5rem");
        $(".text_write").css("text-align", "center");
        

      } else if (newVal.length <= 289){
        $(".text_write").css("font-size", "1.75rem");
        $(".text_write").css("text-align", "left");
      } else {
        $(".text_write").css("font-size", "0.875rem");
        $(".text_write").css("text-align", "left");
      }

      //this.estimate_gas_price(newVal)

      //this.estimateGas(newVal)


        },

        

      // update estimated gas prices

      
      

      },

    methods: {

      async test_unlock_append(s) {

          console.log("in test unlock append");
        const API_URL = this.$data.alchemy_api_url
      const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
      const web3 = createAlchemyWeb3(API_URL)

      const contract = require("@/assets/ContractName.json")
      const contractAddress = "0xF885f377A07e1E98C2eFCBBb811B3E16cB55479E"
      const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

        const nonce = await web3.eth.getTransactionCount(this.$data.account, "latest") //get latest nonce
    //  const temp = 25e15; // It was 2 eth when I did it with 0.0025e18 - didn't have enough funds ;( @gieson
      //const temp = 1e15
      const gas_int = 5000000
   //tx that works for the actual mint
      var tx = {}
        tx = {
          from: this.$data.account,
          to: contractAddress,
          nonce: nonce.toString(16),
          gas: gas_int.toString(16),
       //   value: temp.toString(16),
          data: nftContract.methods.append_to_NFT(4, s).encodeABI(),
        }
        try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [tx],
            });
        // redirecting =========
//        const encoded = Base64.encodeURI(s)
//        window.location.href = "../success.html?string=" + encoded;
        // =====================
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
            
        }
    } catch (error) {
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }
      }, // end of test_unlock_append



      

      manageActionRegister(icon, message){
      // Popup management
      this.$data.action_register_text = message
      this.$data.action_register_icon = icon
      $(".actionRegistered").toggle(200)
      setTimeout(() => { $(".actionRegistered").toggle(400)}, 10000);


    },

      openPopup() {
        if (this.$data.popup_open){
          this.$data.popup_open = false;
        }
        else{
        this.$data.popup_open = true;
        }
      },

      async estimateGas (data) {

        console.log("in estimatedGas with", data)

        const API_URL = this.$data.alchemy_api_url
      const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
      const web3 = createAlchemyWeb3(API_URL)
      const contract = require("@/assets/ContractName.json")
      const contractAddress = "0xF885f377A07e1E98C2eFCBBb811B3E16cB55479E"
      const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

     // const temp = 25e15; // It was 2 eth when I did it with 0.0025e18 - didn't have enough funds ;( @gieson
      var temp = await nftContract.methods.get_cost().call()
      temp = parseInt(temp)
      
     const est_tx = {
        from: this.$data.account,
        to: contractAddress,
        value: temp, 
        data: data,
      }
      var self = this
      await web3.eth.estimateGas(est_tx, function(error, hash){
        console.log("Error is: " + error)
        console.log("Estimated value is: " + hash)
        self.est_gas_price = hash/1000000000
        self.est_gas_fee = hash

      })

      return this.$data.est_gas_fee
      },


     

      async mint (s){

        console.log("iN MINT");
        const API_URL = this.$data.alchemy_api_url
      
      
      //const PUBLIC_KEY = "0x6D8D7C6092F802eb6a3409AE0C2E453dEc120783";

      const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
      const web3 = createAlchemyWeb3(API_URL)

      const contract = require("@/assets/ContractName.json")
      const contractAddress = "0xF885f377A07e1E98C2eFCBBb811B3E16cB55479E"
      const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

        const nonce = await web3.eth.getTransactionCount(this.$data.account, "latest") //get latest nonce

      //const temp = 25e15; // It was 2 eth when I did it with 0.0025e18 - didn't have enough funds ;( @gieson
      var temp = await nftContract.methods.get_cost().call()
      temp = parseInt(temp)

      var tx = {}
      if (this.$data.locked == 'Unlock'){
      if (this.$data.list == 'listed'){
        if (!this.$data.confirm_checkbox){
        this.manageActionRegister('❗️', 'Please confirm that you want to list this NFT on the marketplace')
        return
      }
        const encodedTransaction = nftContract.methods.mint_and_list_unlocked_NFT(s, this.$data.price).encodeABI()
        console.log("ENCODED TRANSACTION", encodedTransaction)
        const estimatedGas = await this.estimateGas(encodedTransaction)

      // list price validation required
        tx = {
          from: this.$data.account,
          to: contractAddress,
          nonce: nonce.toString(16),
          gas: estimatedGas.toString(16),
          value: temp.toString(16),
          data: nftContract.methods.mint_and_list_unlocked_NFT(s, this.$data.price).encodeABI(),
        }

        this.send_transaction_mint(tx, s)
          
      }
      else{

        const estimatedGas = await this.estimateGas(nftContract.methods.mint_unlocked_NFT(s).encodeABI())
        console.log("Outside of the await estimated gas is", estimatedGas)

        tx = {
          from: this.$data.account,
          to: contractAddress,
          nonce: nonce.toString(16),
          gas: estimatedGas.toString(16),
          value: temp.toString(16),
          data: nftContract.methods.mint_unlocked_NFT(s).encodeABI(),
        }

        this.send_transaction_mint(tx, s)
      }


      }
      else{
   //tx that works for the actual mint
      if (this.$data.list == 'listed'){
        if (!this.$data.confirm_checkbox){
        this.manageActionRegister('❗️', 'Please confirm that you want to list this NFT on the marketplace')
        return
      }
        const encodedTransaction = nftContract.methods.mint_and_list_NFT(s, this.$data.price).encodeABI()
        console.log("ENCODED TRANSACTION", encodedTransaction)
        const estimatedGas = await this.estimateGas(encodedTransaction)

      // list price validation required
        tx = {
          from: this.$data.account,
          to: contractAddress,
          nonce: nonce.toString(16),
          gas: estimatedGas.toString(16),
          value: temp.toString(16),
          data: nftContract.methods.mint_and_list_NFT(s, this.$data.price).encodeABI(),
        }

        this.send_transaction_mint(tx, s)
          
      }
      else{

        const estimatedGas = await this.estimateGas(nftContract.methods.mint_NFT(s).encodeABI())
        console.log("Outside of the await estimated gas is", estimatedGas)

        tx = {
          from: this.$data.account,
          to: contractAddress,
          nonce: nonce.toString(16),
          gas: estimatedGas.toString(16),
          value: temp.toString(16),
          data: nftContract.methods.mint_NFT(s).encodeABI(),
        }

        this.send_transaction_mint(tx, s)
      }
        
      } // end of Locked mint
    

      }, // end of mint(s) function

      async send_transaction_mint (tx, s){
          try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [tx],
            });
        // redirecting =========
        const encoded = Base64.encodeURI(s)
        window.location.href = "../success.html?string=" + encoded;
        // =====================
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
            
        }
    } catch (error) {
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }
      },



      },
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



@media only screen and (min-width: 601px) {
.titlediv{
  margin: auto;
  width: 100%;
  padding-top: 40vw;
}
.title {
  font-family: "Proxima Nova Extra Condensed";
  font-size: 2.625vw;
}

.hide-desktop{
  display: none;

}

.actionRegistered {
  display: none;
}

.text_write{
  border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/

    font-family: "Menlo";
    color: black;
    width: 80vw;
    min-height: 20vh;
    height: auto;
    overflow-y: hidden;
    line-height: 120.8%;
    
}

.checkout{
  border: 0.1px black solid;
  width: 60vw;
  margin: auto;
}
.checkout_header, .checkout_header_top_included {
  border-bottom: 0.1px black solid;
  text-align: left;
  padding-left: 3vw;
}


.checkout_text{
  padding-top: 1.5vh;
  font-family: "Proxima Nova Extra Condensed";
}

.formatting_options, .sale_options{
  border-bottom: 0.1px black solid;
  text-align: left;
  padding-left: 6vw;
  padding-top: 5vh;
  padding-bottom: 3vh;
}

.preview_button {
  position: relative;
  margin-left: 40vw;
}

label{
  font-family: "Proxima Nova Medium";
  text-align: left;
}
button{
  font-family: "Menlo";
  background-color: black;
  color: white;
  border: 0.1px black solid;
  padding: 1vw 2vw 1vw 2vw;
}

input[type="radio"]:checked+label {
  font-weight: bold;
}

input[type='radio']:checked:after {
        width: 0.75vw;
        height: 0.75vw;
        border-radius: 0.75vw;
        top: -0.5vh;
        right: 0.25vw;
        position: relative;
        background-color: black;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 1 solid black;
    }

input[type='radio']:after {
        width: 0.75vw;
        height: 0.75vw;
        border-radius: 0.75vw;
        top: -0.5vh;
        right: 0.25vw;
        position: relative;
        content: '';
        display: inline-block;
        visibility: visible;
        border: 0.1px black solid;
    }

[type="radio"]{
  visibility: hidden;
}

#sot{
  font-family: "Menlo";
  font-size: 0.875vw;
}

table {
  text-align: left;
  width: 80%;
  padding-left: 6vw;
  margin-left: 6vw;
  margin-top: 5vh;
  margin-bottom: 5vh;
}

th{
  font-family: "Proxima Nova Extra Condensed";
}
td{
  font-family: "Proxima Nova Medium";
}


.checkout_details{
  padding-bottom: 5vh;
}

#spacer{
  height: 20vh;
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
