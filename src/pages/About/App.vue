<template>
  <div id="app">
    
    
    <br><br> <!-- Temporary -->
    <pre style="line-height: 120.8%; font-size: 1.15vw; font-family: 'Menlo';" class="hide-mobile">

     
____ ____ _________ ____ ____ ____ ____ ____ ____ ____ 
||I |||n |||       |||W |||r |||i |||t |||i |||n |||g ||
||__|||__|||_______|||__|||__|||__|||__|||__|||__|||__||
|/__\|/__\|/_______\|/__\|/__\|/__\|/__\|/__\|/__\|/__\|

      </pre>

       <h1 class="intro_text">With over {{num_writes}} writes and {{amount_transferred}} ETH transferred on our platform, In Writing is Web3's premiere text-based NFT marketplace.</h1>
    <br>
    <AboutPageInfo />

<br><br><br>
    <pre style="line-height: 120.8%; font-size: 1.15vw; font-family: 'Menlo';" class="hide-mobile">
____ ____ ____ ____ ____ _________ ____ ____ 
||A |||b |||o |||u |||t |||       |||U |||s ||
||__|||__|||__|||__|||__|||_______|||__|||__||
|/__\|/__\|/__\|/__\|/__\|/_______\|/__\|/__\|
      </pre>
    <AboutUs />

<div class="spacer"></div>
    <pre style="line-height: 120.8%; font-size: 1.15vw; font-family: 'Menlo';" class="hide-mobile">

 ____ ____ ____ 
||F |||A |||Q ||
||__|||__|||__||
|/__\|/__\|/__\|

      </pre>

    <div class="aboutSections">

      <div class="aboutSectionsNavMobile">
        <a href="#how_to_use_inwriting">1. How to use In Writing</a><br><br>
        <a href="#NFTs">2. Ethereum and NFTs</a><br><br>
        <a href="#security">3. Security and Transparency</a><br><br>
        <a href="#contact">4. Contact Us</a><br><br>
      </div>

      <div class="actualAboutSections">

    <section id="how_to_use_inwriting">
    <h1 class="aboutSectionTitle">How to use In Writing</h1>
    <AboutSection v-bind:titles="$options.how_to_use_inwriting_titles" v-bind:details="$options.how_to_use_inwriting_details"/>
    </section>

    <section id="NFTs">
    <h1 class="aboutSectionTitle">What are NFTs?</h1>
    <AboutSection v-bind:titles="$options.NFTs_titles" v-bind:details="$options.NFTs_details"/>
    </section>

    <section id="security">
    <h1 class="aboutSectionTitle">Security and Transparency</h1>
    <AboutSection v-bind:titles="$options.security_titles" v-bind:details="$options.security_details"/>
    </section>

    <section id="investing">
    <h1 class="aboutSectionTitle">Why Invest in In Writing NFTs?</h1>
    <AboutSection v-bind:titles="$options.investing_titles" v-bind:details="$options.investing_details"/>
    </section>

    <section id="contact">
    <h1 class="aboutSectionTitle">Contact Us</h1>
    <AboutSection v-bind:titles="$options.contact_titles" v-bind:details="$options.contact_details"/>
    </section>

    <div class="spacer"></div>
     <div class="spacer"></div>

     

      </div>

      <div class="aboutSectionsNavDesktop">
        <a href="#how_to_use_inwriting">1. How to use In Writing</a><br><br>
        <a href="#NFTs">2. Ethereum and NFTs</a><br><br>
        <a href="#security">3. Security and Transparency</a><br><br>
        <a href="#investing">4. Investing</a><br><br>
        <a href="#contact">5. Contact Us</a><br><br>
      </div>

      


    </div>

     <Footer/>

     <NavBar />
    
    
    
  </div>
</template>

<script>

import NavBar from '@/components/NavBar.vue'
import AboutSection from '@/components/AboutSection.vue'
import AboutPageInfo from '@/components/AboutPageInfo.vue'
import AboutUs from '@/components/AboutUs.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    AboutSection,
    AboutPageInfo,
    AboutUs,
  },
  data () {
    return {
      num_writes: "12,214", // calculate later
      amount_transferred: 189.21, // calculate later

    }
  },

  /* Immutable text for sections */
  how_to_use_inwriting_titles: ["Setting up a Metamask wallet", "Connecting your wallet to In Writing", "Minting your first NFT", "Joining the community", "Troubleshooting", "Actions"],
  how_to_use_inwriting_details: ["Set up your wallet <a href='https://metamask.io/' target='_blank' rel='noopener noreferrer'>here</a>, buy cryptocurrency <a href='https://www.coinbase.com/' target='_blank' rel='noopener noreferrer'>here</a> (or at any other site) and soon be able to pay using just your credit card.",
       "Connect your wallet to In Writing by clicking the wallet icon in the top right corner, or just by interacting with anything that requires you to have a wallet. ",
        "<a href='../write.html' target='_blank' rel='noopener noreferrer'>Click here </a>or head over to the ‘Write’ section to type the text you want to mint. Preview it to make sure it looks like how you want it to look, and press mint to mint it. This is the only time we charge a small fee of 0.05 ETH, and you can view, list, and sell your NFT on our platform indefinitely for no further fees. Learn more about gas <a href='https://ethereum.org/en/developers/docs/gas/' target='_blank' rel='noopener noreferrer'>here.</a>",
        "Once you’ve minted or bought an NFT on In Writing, you can join our Discord community here, view other activity on the marketplace here, and follow us on Twitter here.",
        "Having issues? Check the troubleshooting FAQs below or contact us here [link].",
        
        `A list of every interaction that can be done with In Writing and our NFTs. <b>Note that each interaction requires explicit MetaMask authorization from you, which means you must manually confirm every transaction.</b>
        <br><br>
        <mark style='font-family:Menlo; background-color:white;'>Minting:</mark> Writing your text to the blockchain and turning it into an NFT (that you own).
        <br><br>
        <mark style='font-family:Menlo; background-color:white;'>Listing:</mark> Placing your NFT on the marketplace for a listed price. When you list an NFT, you’re authorizing it to be sold and transferred to another user. The transaction is automatic - you will lose the NFT from your wallets’ ‘assets’ and be paid the amount you listed the NFT for.
        <br><br>
        <mark style='font-family:Menlo; background-color:white;'>Delisting:</mark> Removing your NFT from the marketplace. When you delist an NFT, you’re authorizing it to no longer be buyable by other users. 
        <br><br>
        <mark style='font-family:Menlo; background-color:white;'>Buying:</mark> Purchasing an NFT. The transaction is automatic - your wallet will lose the amount the NFT is listed for, and the NFT will be in your wallet. 
        <br><br>
        <mark style='font-family:Menlo; background-color:white;'>Appending:</mark> Adding text to an NFT. This can only be done if you are the owner of the NFT and if the NFT is unlocked (see definition below). For example, appending <mark style='font-family:Menlo; background-color:gainsboro;'>me</mark> to the <mark style='font-family:Menlo; background-color:gainsboro;'>add</mark> NFT results in you owning the <mark style='font-family:Menlo; background-color:gainsboro;'>add me</mark> NFT. Note that this means you will no longer own the <mark style='font-family:Menlo; background-color:gainsboro;'>add</mark> NFT, and additionally that it can be written by anyone again. 
        <br><br>
        <mark style='font-family:Menlo; background-color:white;'>Locking/unlocking:</mark> By default, In Writing NFTs are written as <b>locked</b>, which means they cannot be modified. You can choose to write an <b>unlocked</b> NFT, which means they can be <b>appended to</b> (see above) by the owner. Uses of this include writing a string that is larger than the maximum size of a transaction, and dynamic texts that require updates such as news articles or ongoing stories. Locking an NFT prevents you, and future owners, from ever modifying it.

        `
        
        ],

  NFTs_titles: ['What is a blockchain?', 'What is an NFT?', 'What is a crypto wallet?', 'How much does it cost to mint an NFT?', 'What\'s decentralization, and why In Writing?'],
  NFTs_details: ['A blockchain is essentially a “distributed” database where data is passed between many devices on a network. The distributed nature of a blockchain means that the data is decentralized—everyone owns it and everyone controls it—immutable—data entered is irreversible—and public—everything that happens is logged for anyone to read.',
  'NFT stands for Non Fungible Token. Non-fungible means unique, and so NFTs are unique tokens that cannot be replaced with one another. Conversely, a fungible (non-unique) token is something like a nickel, as it can be replaced or traded for another nickel with no loss in value. NFTs have historically been used as certificates to prove ownership of a digital asset, such as a piece of art or music, but at In Writing you can do more than prove you own a text. By writing your text as an NFT, you genuinely own the text and you’re free to trade and sell it.',
  'A crypto wallet is essentially a digital wallet. Just like a physical wallet, it contains an ID—your address (a long sequence of numbers and letters), and your assets—cryptocurrencies and NFTs that you own. They’re free, and you can set up your wallet for free and under 5 minutes at Metamask <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">here</a>. ',
  'To write your text as an NFT, you have to ‘mint’ it, which means you pay a fee (‘gas’) to the network for cryptocurrency miners to validate and add your text to the Ethereum blockchain. None of these fees go to In Writing, and we charge no additional fees for transferring or viewing other NFTs after your initial mint.',
  "The decentralized nature of the Ethereum blockchain and In Writing NFTs mean that anyone can read any In Writing NFT. This allows In Writing to enable free source information and free access to knowledge. <br><br>In Writing NFTs are also unique. Unlike traditional image NFTs, where two people can mint the exact same image, we ensure that only one person can own any specific string (sequence of characters) at any given time. As we move towards a decentralized internet, we hope In Writing will become the foundation for storing unique identifiers such as usernames, and also the world’s first decentralized, fully open source library. <br><br>Our decentralized marketplace means that the code powering In Writing is open to everyone, and you can view it <a href='https://ropsten.etherscan.io/address/0xF885f377A07e1E98C2eFCBBb811B3E16cB55479E' target='_blank' rel='noopener noreferrer'>here.</a> It also means that it’s impossible to get scammed; the code automatically handles listing, unlisting, buying, and selling on In Writing, which means that every transaction is automated and you always know exactly what you’re buying (or selling). Not even we, as the owners, can interfere or moderate transactions on the platform."],

  security_titles: ['Are In Writing and crypto wallets safe?', 'Hacking', 'Scamming'],
  security_details: ['Your crypto wallet is similar to your bank account in that it’s basically impossible to brute-force hack into it unless you yourself compromise it. When you share it with In Writing, we only see your public address.our passwords and seed phrases stay with you, and you have to manually confirm every transaction that you make here. Make sure not to share your passwords or seed phrases with anyone.',
  'The blockchain is virtually unhackable and <a href="https://www.sofi.com/learn/content/blockchain-security/" target="_blank" rel="noopener noreferrer">here’s why.</a> That means the security of you and your assets depends on you. You should never give anyone else access to your wallet, which means keeping your password and seed phrase in a secure location. As In Writing is powered by the blockchain, we’re unhackable too, and even if there were to be a local security breach, the only information we have are our users’ public addresses and transaction activity—data that’s publicly available anyways. ',
  'Unlike other NFT marketplaces, In Writing’s marketplace is entirely hosted on and powered by the Ethereum blockchain. This means that anyone can view how In Writing works, and more importantly, that it is impossible to get scammed—you know exactly what you’re buying (or selling), and not even we, as the owners, can interfere. Only items that have been manually listed for sale by the owner can be bought or sold, and once an item is bought, the transaction of tokens happens instantly without any further input from the buyer or seller. If you’re curious to see more, In Writing’s verified code base is available for anyone to see <a href="https://ropsten.etherscan.io/address/0xF885f377A07e1E98C2eFCBBb811B3E16cB55479E" target="_blank" rel="noopener noreferrer">here</a>.'],

  contact_titles: ['Contact'],
  contact_details: ['Email us here [link], or reach out to us on Twitter here [link] or Discord [link]'],

  investing_titles: ['Uniqueness', 'Art', 'Decentralization'],
  investing_details: ['In Writing NFTs are unique because of their uniqueness and true non-fungibility. This means the value in an In Writing NFT could be similar to that of a rare Instagram username, like ‘rap’, or gamer tag, like ‘Ninja’. As Web3 becomes more popular, In Writing also aims to provide the next big social media platform with username handling, which means you’d have to own your username as an NFT in order to use it.', 'In Writing can be seen as the text counterpart to visual art NFTs, and thus the value of In Writing NFTs can also come from the desirability of the text stored. Owning the NFT of George R. R. Martin’s ‘Full House’ draft, for example, is the modern-day equivalent of owning an original Shakespeare manuscript. ', 'The decentralized nature of NFTs also allows In Writing to combat censorship and promote open access to information. We aim to be the foundation for decentralized journalism, as articles and news written on In Writing are permanent and accessible to anyone regardless of their internet service provider. This application can be applied to many other industries currently restricting information, including academia, government, and content.']


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

.spacer {
        height: 3vw;
    }

.intro_text {
  padding-left: 12vw;
  padding-right: 12vw;
  text-align: left;
  font-family: "Proxima Nova Extra Condensed";
  font-size: 2.625vw;
}

.aboutSectionTitle {
  text-align: left;
  font-family: "Proxima Nova Extra Condensed";
  font-size: 2.625vw;
  padding-left: 12vw;
  padding-bottom: 2vw;
  padding-top: 2vw;

}

.aboutSections {
  display: grid;
  grid-template-columns: 1.33fr 0.67fr;
}



.aboutSectionsNavDesktop {
  display: block;
  border: 1px black solid;
  height: 40vh;
  display: block;
  text-align: left;
  font-size: 1.15vw;
  font-family: "Proxima Nova Medium";
  line-height: 1.5vw;
  padding: 2vw;
  width: 55%;
  position: relative;
  top: 2vw;
}

.aboutSectionsNavMobile {
  display: none;
}

a {
  color: black;
}
}


/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {
  .title {
  font-family: "Proxima Nova Extra Condensed";
  font-size: 7vw;
  line-height: 120.8%;
}

.titlediv{
  margin: auto;
  width: 100%;
  padding-top: 20vw;
}


.hide-mobile{
  display: none;

}

.spacer {
        height: 3vw;
    }

.intro_text {
  padding-left: 12vw;
  padding-right: 12vw;
  text-align: left;
  font-family: "Proxima Nova Extra Condensed";
  font-size: 5.25vw;
}

.aboutSectionTitle {
  text-align: left;
  font-family: "Proxima Nova Extra Condensed";
  font-size: 5.25vw;
  padding-left: 16vw;
  padding-bottom: 2vw;
  padding-top: 2vw;

}

.aboutSections {
  display: block;
/*  grid-template-columns: 1.33fr 0.67fr; */
}

.aboutSectionsNavDesktop {
  display: none;
}

.aboutSectionsNavMobile {
  border: 1px black solid;
  height: 18vh;
  display: block;
  text-align: left;
  font-size: 3.5vw;
  font-family: "Proxima Nova Medium";
  line-height: 120.8%;
  padding: 2vw;
  width: 50%;
  top: 2vw;


  margin-left: 16vw;


}

a {
  color: black;
}

}

</style>
