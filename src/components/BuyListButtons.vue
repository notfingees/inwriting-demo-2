<template>
   
    <div class="buyListButtons">
      

      <div v-if="!owned" class="buttons_div">
        <button class="buy_button" @click="buyItem" v-if="item_listed">Buy</button>
        <button class="offer_button" @click="expandOptions('offer')">Make offer</button>
        <button class="preview_button" @click="openPopup">Preview</button>
       </div>
       <div v-else class="buttons_div">
         <button class="list_button" @click="expandOptions('list')" v-if="!item_listed">List</button>
         <button class="unlist_button" @click="expandOptions('unlist')" v-if="item_listed">Unlist</button>
        <button class="transfer_button" @click="expandOptions('transfer')">Transfer</button>
        <button class="preview_button" @click="openPopup">Preview</button>

        <button class="append_button" @click="expandOptions('append')" v-if="nft_unlocked">Append</button>
        <button class="lock_button" @click="expandOptions('lock')" v-if="nft_unlocked">Lock</button>


     </div>

      <PreviewPopup v-bind:text="text" ref="popup" v-bind:open="popup_open" v-on:close="openPopup"/>
        
        <!-- Buy will just open Metamask to ask to authorize the transaction --> 

      <div class="offer" style="display:none;">
        <label style="padding-right:20px;" for="offer_price">Offer price:</label>
        <input type="text" name="sale_options_text" id="offer_price" placeholder="Price" v-model="offer_price">
        <!-- Todo: Implement offer price functionality -->
      
      </div>

      <!-- List Popup/div -->
      <div class="list" v-bind:style="{display: list_div_visible}">

        <div class="div_title_box">
        <p class="div_title">List Item</p>
        </div>
        <div class="div_title_body">
        <label style="padding-right:20px;" for="list_price" >List my item for: (Input in wei)</label>
        <input style="font-size:1vw;border-width:0px 0px 1px 0px;" type="number" name="sale_options_text" id="list_price" placeholder="Price" v-model="list_price">
        <br>
        <label style="padding-right:20px;" for="confirm_checkbox" ><input type="checkbox" name="toc" id="confirm_checkbox" v-model="confirm_checkbox">
        I agree to list this item for {{list_price / 1000000000000000000.0}} ETH, understanding that it will be publically listed on the market until it is bought or unlisted.</label>
        <button class="real_list_button" @click="listItem">List</button>
        </div>
      </div>

      <!-- unlist Popup/div -->
      <div class="list" v-bind:style="{display: unlist_div_visible}">

        <div class="div_title_box">
        <p class="div_title">Unlist Item</p>
        </div>
        <div class="div_title_body">
        <label style="padding-right:20px;" for="list_price" ><b>Unlist my item</b></label>
        <br>
        <label style="padding-right:20px;" for="confirm_checkbox" ><input type="checkbox" name="toc" id="confirm_checkbox" v-model="confirm_checkbox">
        I am sure I want to unlist this item, thereby removing it from the marketplace.</label>
        <button class="real_list_button" @click="unlistItem">Unlist</button>
        </div>
      </div>

      <!-- Offer Popup/div -->
      <div class="list" v-bind:style="{display: offer_div_visible}">

        <div class="div_title_box">
        <p class="div_title">Make an offer</p>
        </div>
        <div class="div_title_body">
        <label style="padding-right:20px;" for="offer_price" >Offer:</label>
        <input type="text" name="sale_options_text" id="offer_price" placeholder="Price" v-model="offer_price">
        <br>
        <label style="padding-right:20px;" for="confirm_checkbox" ><input type="checkbox" name="toc" id="confirm_checkbox" v-model="confirm_checkbox">
        I have read the <span><a href="#">terms and conditions</a></span> and agree to place an offer for this item for {{offer_price}} ETH, understanding that the owner is not guaranteed to view or accept the offer.</label>
        <button class="real_list_button">Make offer</button>
        </div>
      </div>

      <!-- Transfer Popup/div -->
      <div class="list" v-bind:style="{display: transfer_div_visible}">

        <div class="div_title_box">
        <p class="div_title">Transfer Item</p>
        </div>
        <div class="div_title_body">
        <label style="padding-right:20px;" for="recipient_address" >Recipient address:</label>
        <input type="text" name="sale_options_text" id="recipient_address" placeholder="0x00000000" v-model="recipient_address">
        <br>
        <label style="padding-right:20px;" for="confirm_checkbox" ><input type="checkbox" name="toc" id="confirm_checkbox" v-model="confirm_checkbox">
        I am sure I want to transfer this token to {{recipient_address}} and understand that I am giving up ownership of this token without any explicit returns.</label>
        <button class="real_list_button" @click="transferItem">Transfer</button>
        </div>
      </div>

      <!-- Lock Popup/div -->
      <div class="list" v-bind:style="{display: lock_div_visible}">

        <div class="div_title_box">
        <p class="div_title">Lock Item</p>
        </div>
        <div class="div_title_body">
       
        <label style="padding-right:20px;" for="confirm_checkbox" ><input type="checkbox" name="toc" id="confirm_checkbox" v-model="confirm_checkbox">
        I understand that after I lock this NFT, I will not be able to add or append to it ever again.</label>
        <button class="real_list_button" @click="lockItem">Lock</button>
        </div>
      </div>

      <!-- Append Popup/div -->
      <div class="list" v-bind:style="{display: append_div_visible}">

        <div class="div_title_box">
        <p class="div_title">Append Item</p>
        </div>
        <div class="div_title_body">
        <span><p style="padding-right:20px;">Modified string: </p><pre v-bind:style="{fontSize: auto(text_with_append)+'vw', lineHeight: '120.8%'}" class="append_current_string_display">{{text_with_append}}</pre></span>
        <br>


        <label style="padding-right:20px;" for="append_text" >Text to append:</label><br>
        <textarea name="sale_options_text" id="append_text" v-model="text_to_append"/>
        <br>
        <label style="padding-right:20px;" for="confirm_checkbox" ><input type="checkbox" name="toc" id="confirm_checkbox" v-model="confirm_checkbox">
        I understand that by appending to my string, I give up my ownership of the previous (unmodified) string. I also understand that this is permanent and cannot be undone.</label>
        <button class="real_list_button" @click="appendItem">Append</button>
        </div>
      </div>

      <ActionRegistered class="_actionRegistered" v-bind:text="action_register_text" v-bind:icon="action_register_icon" />

    </div>

</template>

<script> 

import PreviewPopup from '@/components/PreviewPopup.vue'
import ActionRegistered from '@/components/ActionRegistered.vue'
import $ from 'jquery'

export default {
  name: 'BuyListButtons',
  components: {
    PreviewPopup,
    ActionRegistered,
  },
  props: {
      text: null,
      owned: null,
      item_listed: null,
      
  },
  data () {
    return {
      popup_open: false,
      list_price: "0",
      offer_price: "0",
      recipient_address: null,
      confirm_checkbox: null,

      list_div_visible: "none",
      offer_div_visible: "none",
      transfer_div_visible: "none",
      unlist_div_visible: "none",
      lock_div_visible: "none",
      append_div_visible: "none",

      tokenID: null,

      text_to_append: "",

      action_register_text: null,
      action_register_icon: null,

    alchemy_api_url: null,

    nft_unlocked: null,



    }
  },

  computed: {
    text_with_append: function () {
      //return this.$props.price;
      
      return this.$props.text + this.$data.text_to_append;
      
    }
  },

  async created () {
    var self = this
    $.post( "https://www.sunrisesapp.com/inwriting/get_item_details.php", {string: this.$props.text}, function( data ) {
          self.tokenID =  data[0]['tokenID']
        }, "json");

    
       $.post( "https://www.sunrisesapp.com/inwriting/get_alchemy_api.php", function( data ) {
    
          self.alchemy_api_url = data[0]['alchemy']
        }, "json");

        // TODO: add actual lock functionality to this 

        this.$data.nft_unlocked = true
        



  },

    watch: { 

      list_price: function(newVal){
          if (newVal > 115792089237316195423570985008687907853269984665640564039457584007913129639935){ // solidity max int
            this.$data.list_price = Math.floor(newVal / 10)
            this.manageActionRegister('❌', 'Error. Number is too large')
          }
      },

    },

  methods: {

    auto: function(s){

      var lines = s.split(/\r?\n/)
      var longest_line = 0

      lines.forEach(function (line) {
        var ll = line.length
        if (ll > longest_line){
          longest_line = ll
        }
        });

        if (lines.length == 1 && longest_line > 100){
            longest_line = 100
        }
        var fs = 50/longest_line
        if (fs >= 9){
          fs = 9
          return fs
        }
        else{
          return fs
        }

    },

    manageActionRegister(icon, message){
      // Popup management
      this.$data.action_register_text = message
      this.$data.action_register_icon = icon

      console.log("in manageActionRegister with", icon, message)

     // $(".actionRegistered").css("display", "block");
     // setTimeout(() => { $(".actionRegistered").css("display", "none");}, 10000)

      
      $("._actionRegistered").toggle(200)
      setTimeout(() => { $("._actionRegistered").toggle(400)}, 10000);
      
    },

    async lockItem (){

      if (!this.$data.confirm_checkbox){
        this.manageActionRegister('❗️', 'Please confirm that you want to lock this NFT')
       // alert("Please confirm that you want to list this NFT on the marketplace") // popup or instead of checkbox require them to type a string
        return
      }
      else{

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0]
      var self = this
      $.post( "https://www.sunrisesapp.com/inwriting/get_item_details.php", {string: this.$data.text_to_append}, function( data ) {
        //  console.log("in WriteDetails created, data is " + data)

        console.log("account is ", account, "data owner is ", data[0]['owner'])
          if (data[0]['tokenID'] == null){
            self.manageActionRegister('❌', "The string you're trying to list doesn't exist")
            return
          }

          
          else if (data[0]['owner'] != account){
            self.manageActionRegister('❌', "You don't own this NFT.")
            return
          }
        }, "json");


      const API_URL = this.$data.alchemy_api_url
      const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
      const web3 = createAlchemyWeb3(API_URL)
      const contract = require("@/assets/ContractName.json")
      const contractAddress = "0xF885f377A07e1E98C2eFCBBb811B3E16cB55479E"
      const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

        const nonce = await web3.eth.getTransactionCount(account, "latest") //get latest nonce
      const gas_int = 5000000
      const tx = {
        from: account,
        to: contractAddress,
        nonce: nonce.toString(16),
        gas: gas_int.toString(16),
        data: nftContract.methods.lock_NFT(this.$data.tokenID).encodeABI(),
      }
  
        try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [tx],
            });
        this.manageActionRegister('✅', 'Item successfully listed! You can unlist the item whenever you want.')
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
            
        }
    } catch (error) {
      this.manageActionRegister('❌', 'Error: ' + error.message)
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }
      } // end of if statement

    }, // end of lockItem function

    async appendItem (){

      if (!this.$data.confirm_checkbox){
        this.manageActionRegister('❗️', 'Please confirm that you want to append to this NFT')
       // alert("Please confirm that you want to list this NFT on the marketplace") // popup or instead of checkbox require them to type a string
        return
      }
      else{

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0]
      var self = this
      $.post( "https://www.sunrisesapp.com/inwriting/get_item_details.php", {string: this.$data.text_to_append}, function( data ) {
        //  console.log("in WriteDetails created, data is " + data)

        console.log("account is ", account, "data owner is ", data[0]['owner'])
          if (data[0]['tokenID'] == null){
            self.manageActionRegister('❌', "The string you're trying to list doesn't exist")
            return
          }

          
          else if (data[0]['owner'] != account){
            self.manageActionRegister('❌', "You don't own this NFT.")
            return
          }
        }, "json");


        console.log("In listItem");

        
      const API_URL = this.$data.alchemy_api_url
      const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
      const web3 = createAlchemyWeb3(API_URL)
      const contract = require("@/assets/ContractName.json")
      const contractAddress = "0xF885f377A07e1E98C2eFCBBb811B3E16cB55479E"
      const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

        const nonce = await web3.eth.getTransactionCount(account, "latest") //get latest nonce
      const gas_int = 5000000
      const tx = {
        from: account,
        to: contractAddress,
        nonce: nonce.toString(16),
        gas: gas_int.toString(16),
        data: nftContract.methods.append_to_NFT(this.$data.tokenID, this.$data.text_to_append).encodeABI(),
      }
  
        try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [tx],
            });
        this.manageActionRegister('✅', 'Item successfully listed! You can unlist the item whenever you want.')
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
            
        }
    } catch (error) {
      this.manageActionRegister('❌', 'Error: ' + error.message)
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }
      } // end of if statement

    }, // end of appendItem function

    async listItem (){

      if (!this.$data.confirm_checkbox){
        this.manageActionRegister('❗️', 'Please confirm that you want to list this NFT on the marketplace')
       // alert("Please confirm that you want to list this NFT on the marketplace") // popup or instead of checkbox require them to type a string
        return
      }
      if (this.$data.list_price.length < 1){ // TODO validating price -> make sure to make this better eventually
        this.manageActionRegister('❗️', 'Please enter a valid price!')
        return
      }
      else{
      const s = this.$props.text

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0]
      var self = this
      $.post( "https://www.sunrisesapp.com/inwriting/get_item_details.php", {string: s}, function( data ) {
        //  console.log("in WriteDetails created, data is " + data)

        console.log("account is ", account, "data owner is ", data[0]['owner'])
          if (data[0]['tokenID'] == null){
            self.manageActionRegister('❌', "The string you're trying to list doesn't exist")
            return
          }

          
          else if (data[0]['owner'] != account){
            self.manageActionRegister('❌', "You don't own this NFT.")
            return
          }
        }, "json");


        console.log("In listItem");

        
      const API_URL = this.$data.alchemy_api_url
      const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
      const web3 = createAlchemyWeb3(API_URL)
      const contract = require("@/assets/ContractName.json")
      const contractAddress = "0xF885f377A07e1E98C2eFCBBb811B3E16cB55479E"
      const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

        const nonce = await web3.eth.getTransactionCount(account, "latest") //get latest nonce
      const gas_int = 5000000
      const tx = {
        from: account,
        to: contractAddress,
        nonce: nonce.toString(16),
        gas: gas_int.toString(16),
        data: nftContract.methods.list_for_sale(this.$data.tokenID, parseFloat(this.$data.list_price)).encodeABI(),
      }
  
        try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [tx],
            });
        this.manageActionRegister('✅', 'Item successfully listed! You can unlist the item whenever you want.')
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
            
        }
    } catch (error) {
      this.manageActionRegister('❌', 'Error: ' + error.message)
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }
      } // end of if statement

      }, // end of listItem(s) function


      async unlistItem (){

      if (!this.$data.confirm_checkbox){
        this.manageActionRegister('❗️', 'Please confirm that you want to unlist this NFT on the marketplace')
        return
      }
    
      else{
      const s = this.$props.text

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0]

      var self = this
      $.post( "https://www.sunrisesapp.com/inwriting/get_item_details.php", {string: s}, function( data ) {
        //  console.log("in WriteDetails created, data is " + data)
          if (data[0]['tokenID'] == null){
            self.manageActionRegister('❌', "The NFT you are trying to unlist doesn't exist.")
            return
          }
          if (data[0]['owner'] != account){
            self.manageActionRegister('❌', "You don't own this NFT.")
            return
          }
        }, "json");


        console.log("In listItem");

        
        const API_URL = this.$data.alchemy_api_url
      const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
      const web3 = createAlchemyWeb3(API_URL)
      const contract = require("@/assets/ContractName.json")
      const contractAddress = "0xF885f377A07e1E98C2eFCBBb811B3E16cB55479E"
      const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

      
      

        const nonce = await web3.eth.getTransactionCount(account, "latest") //get latest nonce
      const gas_int = 5000000
      const tx = {
        from: account,
        to: contractAddress,
        nonce: nonce.toString(16),
        gas: gas_int.toString(16),
        data: nftContract.methods.delist_for_sale(this.$data.tokenID).encodeABI(),
      }

        try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [tx],
            });

          this.manageActionRegister('✅', 'Item successfully unlisted! You can list the item again whenever you want.')

        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
            
        }
    } catch (error) {
      this.manageActionRegister('❌', 'Error: ' + error.message)
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }
      } // end of if statement

      }, // end of unlistItem(s) function

      async buyItem (){

      const s = this.$props.text

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0]

        console.log("In buyItem with " + s);

        require("dotenv").config()
        const API_URL = this.$data.alchemy_api_url
      const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
      const web3 = createAlchemyWeb3(API_URL)
      const contract = require("@/assets/ContractName.json")
      const contractAddress = "0xF885f377A07e1E98C2eFCBBb811B3E16cB55479E"
      const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

      console.log(nftContract)

      /*
      $.post( "https://www.sunrisesapp.com/inwriting/get_item_details.php", {string: s}, function( data ) {
        
        //  console.log("in WriteDetails created, data is " + data)
          if (data[0]['tokenID'] == null){
            alert("Error - the string you're trying to buy doesn't exist.")
            return
          }
          if (data[0]['owner'] == account){
            alert("Error - you already own this string!")
            return
          }
          if (data[0]['listed'] == null || data[0]['price'] == null){
            alert("Error - this string is not currently listed!")
            return
          }

        }, "json");

        */
      
      var result = await nftContract.methods.get_price(this.$data.tokenID).call()
      console.log("result was " + result)
      
        const nonce = await web3.eth.getTransactionCount(account, "latest") //get latest nonce
      const gas_int = 5000000
      const tx = {
        from: account,
        to: contractAddress,
        nonce: nonce.toString(16),
        gas: gas_int.toString(16),
        value: result.toString(16),
        data: nftContract.methods.buy(this.$data.tokenID).encodeABI(),
      }

        try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [tx],
            });

      this.manageActionRegister('✅', 'Item successfully bought! Check your wallet or account in 30-60 seconds for further confirmation.')

        return {
          
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
            
        }
    } catch (error) {

      this.manageActionRegister('❌', 'Error: ' + error.message)

        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }
    

      }, // end of buyItem(s) function

      async transferItem (){

        if (!this.$data.confirm_checkbox){
        this.manageActionRegister('❗️', "Please confirm that you want to transfer this NFT.")
        return
      }
      if (this.$data.recipient_address.length < 10){ // TODO validating address
        this.manageActionRegister('❗️', "Please enter a valid address")
        return
      }

      const s = this.$props.text
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0]

        console.log("In transferItem with " + s);

        require("dotenv").config()

        const API_URL = this.$data.alchemy_api_url
      const { createAlchemyWeb3 } = require("@alch/alchemy-web3")
      const web3 = createAlchemyWeb3(API_URL)
      const contract = require("@/assets/ContractName.json")
      const contractAddress = "0xF885f377A07e1E98C2eFCBBb811B3E16cB55479E"
      const nftContract = new web3.eth.Contract(contract.abi, contractAddress)

      console.log(nftContract)
      var self = this
      $.post( "https://www.sunrisesapp.com/inwriting/get_item_details.php", {string: s}, function( data ) {
        
        //  console.log("in WriteDetails created, data is " + data)
          if (data[0]['tokenID'] == null){
            self.manageActionRegister('❌', "The string you're trying to transfer doesn't exist.")
            return
          }
          if (data[0]['owner'] != account){
            self.manageActionRegister('❌', "You don't own this string.")
            return
          }
        }, "json");
      
        const nonce = await web3.eth.getTransactionCount(account, "latest") //get latest nonce
      const gas_int = 5000000
      const tx = {
        from: account,
        to: contractAddress,
        nonce: nonce.toString(16),
        gas: gas_int.toString(16),
        data: nftContract.methods.safeTransferFrom(account, this.$data.recipient_address, this.$data.tokenID).encodeABI(),
      }

  
        try {
        const txHash = await window.ethereum
            .request({
                method: 'eth_sendTransaction',
                params: [tx],
            });
        this.manageActionRegister('✅', 'Item successfully transferred!')
        return {
            success: true,
            status: "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" + txHash
            
        }
    } catch (error) {
      this.manageActionRegister('❌', 'Error: ' + error.message)
        return {
            success: false,
            status: "😥 Something went wrong: " + error.message
        }
    }

      }, // end of buyItem(s) function


      



    openPopup() {
        if (this.$data.popup_open){
          this.$data.popup_open = false;
        }
        else{
        this.$data.popup_open = true;
        }
      },


      expandOptions(option){

        this.$data.confirm_checkbox = false
        
        if (option == 'buy'){
            // do buy popup
        }
        if (option == 'transfer'){
          this.$data.list_div_visible = 'none'
          this.$data.unlist_div_visible = 'none'
          this.$data.offer_div_visible = 'none'
          this.$data.lock_div_visible = 'none'
          this.$data.append_div_visible = 'none'

          if (this.$data.transfer_div_visible == "none"){
            this.$data.transfer_div_visible = "block";
          }
          else{
            this.$data.transfer_div_visible = 'none'
          }
        }
        if (option == 'unlist'){
          this.$data.list_div_visible = 'none'
          this.$data.offer_div_visible = 'none'
          this.$data.transfer_div_visible = 'none'
          this.$data.lock_div_visible = 'none'
          this.$data.append_div_visible = 'none'
        if (this.$data.unlist_div_visible == 'none'){
          this.$data.unlist_div_visible = 'block'
        }
        else {
          this.$data.unlist_div_visible = 'none'
        }

        }

        if (option == 'list'){
          this.$data.unlist_div_visible = 'none'
          this.$data.offer_div_visible = 'none'
          this.$data.transfer_div_visible = 'none'
          this.$data.lock_div_visible = 'none'
          this.$data.append_div_visible = 'none'
        if (this.$data.list_div_visible == 'none'){
          this.$data.list_div_visible = 'block'
        }
        else{
          this.$data.list_div_visible = 'none'
        }
        }
        if (option == 'offer'){
          this.$data.unlist_div_visible = 'none'
          this.$data.list_div_visible = 'none'
          this.$data.transfer_div_visible = 'none'
          this.$data.lock_div_visible = 'none'
          this.$data.append_div_visible = 'none'
        if (this.$data.offer_div_visible == "none"){
          this.$data.offer_div_visible = 'block'
        }
        else{
          this.$data.offer_div_visible = 'none'
        }
        }

        if (option == 'append'){
          this.$data.unlist_div_visible = 'none'
          this.$data.list_div_visible = 'none'
          this.$data.transfer_div_visible = 'none'
          this.$data.lock_div_visible = 'none'
          this.$data.offer_div_visible = 'none'
        if (this.$data.append_div_visible == "none"){
          this.$data.append_div_visible = 'block'
        }
        else{
          this.$data.append_div_visible = 'none'
        }
        }

        if (option == 'lock'){
          this.$data.unlist_div_visible = 'none'
          this.$data.list_div_visible = 'none'
          this.$data.transfer_div_visible = 'none'
          this.$data.offer_div_visible = 'none'
          this.$data.append_div_visible = 'none'
        if (this.$data.lock_div_visible == "none"){
          this.$data.lock_div_visible = 'block'
        }
        else{
          this.$data.lock_div_visible = 'none'
        }
        }
      }
  }


    

    
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#append_text {
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
  font-family: "Menlo";
}
#append_text:focus {
  outline: none;
}
pre{

      display: inline-block;
      
           word-wrap: break-word;
  text-overflow: wrap;
  white-space: pre-wrap;
  word-break: break-word;
  
  
  }
.append_current_string_display {
    font-family: "Menlo";
  line-height: 120.8%;
  text-align: left;
 /* overflow: hidden;*/
 height: auto;
  font-size: 0.8vw;
}

._actionRegistered {
  display: none;
}

.div_title_box {
  border-bottom: 0.1px black solid;
  text-align: left;
}
.div_title {
  font-family: "Proxima Nova Extra Condensed";
  padding-top: 1vh;
  margin-bottom: 0vh;
  padding-bottom: 1vh;
  margin-left: 2vw;
  text-align: left;
}
.list {
  width: 50%;
  border: 0.1px solid black;
  margin-left: 18.5vw;
  margin-top: 5vh;
  text-align: left;
}
.div_title_body {
  padding: 2vw;
  font-family: "Proxima Nova Medium";
}
#list_checkbox {
  margin-top: 2vh;
}
#list_price {
  border-top: none;
  border-left: none;
  border-right: none;
        border-bottom: 0.1px solid black;
        font-family: 'Menlo'; 
        appearance: none;
    }
#list_price:focus {
  border-top: none;
  border-left: none;
  border-right: none;
        border-bottom: 0.1px solid black;
    box-shadow: none;
    outline: none;
}
.real_list_button {
  margin-top: 2vh;
  position: relative;
  left: 22.5vw;
}




  .btn-close {
    position: absolute;
    right: 0px;
    
    border: none;
    font-size: 1.73125w;
    cursor: pointer;
    color: black;
    background: transparent;
    font-family: "Proxima Nova Extra Condensed";
    padding-right: 5vw;
    padding-top: 3vw;
    

  }


.buttons_div {
  display: flex;
  justify-content: center;
  gap: 5vw;
  width: 50%;
  margin: 0 auto;
}

@media only screen and (min-width: 601px) {

.buy_button, .offer_button, .preview_button, .list_button, .transfer_button, .real_list_button, .unlist_button, .lock_button, .append_button {
  background-color: white;
  border: 0.1px black solid;
  font-family: "Menlo";
  width: 10vw;
  padding-left: 1vw;
  padding-right: 1vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
}
.buy_button:hover, .offer_button:hover, .preview_button:hover, .list_button:hover, .transfer_button:hover, .real_list_button:hover, .unlist_button:hover, .lock_button:hover, .append_button:hover {
  background-color: black;
  border: 0.1px black solid;
  font-family: "Menlo";
  color: white;
}

}

/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {


.buy_button, .offer_button, .preview_button, .list_button, .transfer_button, .real_list_button, .unlist_button, .lock_button, .append_button {
  background-color: white;
  border: 0.1px black solid;
  font-family: "Menlo";
  font-size: 2.625vw;
  width: auto;
  padding: 2vw;
}
.buy_button:hover, .offer_button:hover, .preview_button:hover, .list_button:hover, .transfer_button:hover, .real_list_button:hover, .unlist_button:hover, .lock_button:hover, .append_button:hover {
  background-color: black;
  border: 0.1px black solid;
  font-family: "Menlo";
  color: white;
}


}

</style>
