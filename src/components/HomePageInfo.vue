<template>
  <div class="homepageinfo" :style="_float">
      <div class="wallet-setup">
        <pre>
           .''''..             ..''','.           
          .''',,;::;,,,,,,,,,;:::;,'''.           
          .'''''',;:lodxxxxdlc;,''''''.           
           .'''''''';cdxxxdo:,''''''''.           
           .''''',,:lodxxdddlc;,''''''.           
           .,;::cclooodxxdddooolcc::;'            
           .cddddollllodxxdollllodxdd;            
           ;dxxxddlc:codxxdl:clodxxxxo'           
          'oddddddddddddddddddddddddddc.          
          ,oddoolllodo;''',lddolloooool.          
          .coooooloxOd;,,,;oOkdooooooo:           
           ,olc;,',:odddddddol;'';:col.           
            ..        .....         ..            

 </pre>
        <h1>Set up your wallet</h1>
        <div class="info">
          <p>Once you've set up your wallet of choice, connect it to In Writing by clicking on the wallet icon in the top right corner.</p>
          </div>
        </div>

        <div class="write-NFT">
          <pre>                      
          .oNWMMX;        ,KX: ;XWXx,             
          .OMMMMX;        ,KX: ;XMMMNx,           
          .OMMMMX:        .od' ;XMMMMM0,          
          .OMMMMNo.............oNMMMMMK,          
          .OMMMMMWXXXXXXXXXXXXXWMMMMMMK,          
          .OMMMMMNXXXXXXXXXXXXXXNWMMMMK,          
          .OMMMNx,..............'oXMMMK,          
          .OMMM0'                .kMMMK,          
          .OMMM0'                .xMMMK,          
          .OMMM0'                .xMMMK,          
          .OMMMK:................,OMMMK,          
           cKNNNXKKKKKKKKKKKKKKKKKNNNXd.          
                
          </pre>
          <h1> Mint your NFT</h1>
          <div class="info">
            <p>Mint your text to write it permanently onto the Ethereum blockchain.</p>
          </div>
          </div>

<div class="save-NFT">
  <pre>
          .,coxkOOkxo:'     .;ldkkOkxoc;.         
        .lKNMMMMMMMMMMNx. .lXWMMMMMMMMMWXx.       
     .:,'OMMMMMMMMMMMMMK, .kMMMMMMMMMMMMMX;'c.    
     .ko,OMMMMMMMMMMMMMK, .kMMMMMMMMMMMMMX::O;    
     .ko,OMMMMMMMMMMMMMK, .kMMMMMMMMMMMMMX::O;    
     .ko,OMMMMMMMMMMMMMK, .kMMMMMMMMMMMMMX::O;    
     .ko,OMMMMMMMMMMMMMK, .kMMMMMMMMMMMMMX::O;    
     .ko,OMMMMMMMMMMMMMK, .kMMMMMMMMMMMMMX::O;    
     .ko,OMMMMMWWWWMMMMK, .kMMMMWWWWMMMMMX::O;    
     .ko,kXOdollllllod0O' .d0xollllllldkK0;:0;    
     .kd.                                  :O;    
     .k0xOXWWWWWWWWWWWWXkdxKWWWWWWWWWWWWN0xO0;    

   </pre>
<h1>Read and list</h1>
<div class="info">
            <p>Read, buy, and sell texts on the marketplace. Also join the In Writing community!</p>
          </div>

   </div>


  </div>

  
</template>

<script> 
export default {
  name: 'HomePageInfo',
  props: {
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media only screen and (min-width: 601px) {
pre {
  font-size: 0.4vw;
  font-family: "Menlo";
  text-align: center;
  line-height: 140%;
  overflow: hidden;
  overflow-y: hidden;

}
h1{
  font-size: 1.15vw;
  font-family: "Proxima Nova Extra Condensed";
}
p {
  font-size: 1.15vw;
  line-height: 1.5vw;
  font-family: "Proxima Nova Medium";
}
.info {
  width: 100%;
}



.wallet-setup {
  margin-top: 2vw;
  margin: left;
  float: left;
  width: 20vw;
  text-align: center;

}

.save-NFT {
  margin-top: 2vw;
    /*margin: right;*/
  float: right;
  width: 20vw;
  text-align: center;

}

.write-NFT{
  margin-top: 2vw;
 /* float: left;*/
 
  float: left;
  width: 20vw;
  text-align: center;

}

.homepageinfo {
  display: flex;
  
  padding-left: 10vw;
  padding-right: 10vw;
  padding-top: 2vw;
  
  margin: auto;
  position: auto;

  justify-content: center;
  gap: 8vw;
  
}
}


/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {


pre {
  font-size: 2.5vw;
  font-family: "Menlo";
  text-align: center;

  overflow-y: hidden;

}
h1{
  font-size: 3.5vw;
  font-family: "Proxima Nova Extra Condensed";
}
p {
  font-size: 3.5vw;
  font-family: "Proxima Nova Medium";
}
h1, .info {
  padding-left: 8vw;
  padding-right: 8vw;
}
.info {
  width: 100%;
  line-height: 4vw;
}

.wallet-setup {
  width: 100%;
  text-align: left;
}

.save-NFT {
    /*margin: right;*/
  width: 100%;
  text-align: left;
}

.write-NFT{

  width: 100%;
  text-align: left;
}

.homepageinfo {
  display: flex;
  padding-left: 8vw;
  padding-right: 8vw;
  padding-top: 2vw;
  justify-content: center;
  flex-wrap: wrap;
}
}


</style>
