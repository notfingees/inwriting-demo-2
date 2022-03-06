<template>
  <div class="homepageinfo">
      <div class="decentralized">
        <pre>

                  [\
                  |\)                                ____
                  |                               __(_   )__
                  Y\          ___               _(          )
                 T  \       __)  )--.          (     )-----`
                J    \   ,-(         )_         `---'
               Y/T`-._\ (     (       _)                 __
               /[|   ]|  `-(__  ___)-`  |\          ,-(  __)
               | |    |      (__)       J'         (     )
   _           | |  ] |    _           /;\          `-  '
  (,,)        [| |    |    L'         /;  \
             /||.| /\ |   /\         /.,-._\        ___ _
            /_|||| || |  /  \        | |{  |       (._.'_)
  L/\       | \| | '` |_ _ {|        | | U |   /\
 /v^v\/\   `|  Y | [  '-' '--''-''-"-'`'   | ,`^v\ /\,`\
/ ,'./  \.` |[   |       [     __   L    ] |      /^v\  \
,'     `    |    |           ,`##Y.   ]    |___Y Y____,_,,_,,_
--   -----.-(] [ |   ]     o/####U|o      ]|| /`-, Y   _   Y  Y
   Y Y  --;`~T   |      }   \####U|[\ _,.-(^) ,-'  _  (^)__  _
  Y  YY   ;'~~l  |   L     [|\###U'E'\  \ \Y-` _  (^) _Y  _
 Y  Y Y   ;\~~/\{| [      _,'-\`= = '.\_ ,`   (^)(^) (^) (^)
     --   ;\~~~/\|  _,.-'`_  `.\_..-'"  _ . ,_ Y_ Y_ _Y  _Y__

        </pre>
        <div class="info" style='margin-top: 4vw;'>
        <h1>Uniqueness and Permanence</h1>
          <p>Every In Writing Non-Fungible Token (NFT) is a unique sequence of characters (a 'string') saved directly on the Ethereum blockchain. 
            This means any sequence of characters can only be written once and owned by one person at a time, and everything written on In Writing
            is permanent.</p><p>For example, if you own the <mark>'hello'</mark> NFT, no one else can ever write a <mark>'hello'</mark> NFT and no one else can own it unless you
            decide to transfer it. This means our NFTs are truly unique and non-fungible. </p>
          </div>
        </div>
<div class="spacer"></div>
        <div class="marketplace">
            <div class="info">
                        <pre style="padding-left: 15vw;" id="hide-desktop">

      _.--._  _.--._
,-=.-":;:;:;\':;:;:;"-._
\\\:;:;:;:;:;\:;:;:;:;:;\
 \\\:;:;:;:;:;\:;:;:;:;:;\
  \\\:;:;:;:;:;\:;:;:;:;:;\
   \\\:;:;:;:;:;\:;::;:;:;:\
    \\\;:;::;:;:;\:;:;:;::;:\
     \\\;;:;:_:--:\:_:--:_;:;\   
      \\\_.-"      :      "-._\
       \`_..--""--.;.--""--.._=>
        "
        </pre>
        <h1>Marketplace</h1>

        
        
          <p>Use our decentralized marketplace to view, sell, trade, and invest in NFTs with complete transparency and no fees. Everything that happens here is documented and accesible to everyone, for free. </p>
          </div>
        <pre style="padding-left: 10vw;" id="hide-mobile">

      _.--._  _.--._
,-=.-":;:;:;\':;:;:;"-._
\\\:;:;:;:;:;\:;:;:;:;:;\
 \\\:;:;:;:;:;\:;:;:;:;:;\
  \\\:;:;:;:;:;\:;:;:;:;:;\
   \\\:;:;:;:;:;\:;::;:;:;:\
    \\\;:;::;:;:;\:;:;:;::;:\
     \\\;;:;:_:--:\:_:--:_;:;\   
      \\\_.-"      :      "-._\
       \`_..--""--.;.--""--.._=>
        "
        </pre>
        
        </div>
     <div class="spacer"></div>
     <div class="decentralized">
        <pre>

   _______________                        |*\_/*|________
  |  ___________  |     .-.     .-.      ||_/-\_|______  |
  | |           | |    .****. .****.     | |           | |
  | |   0   0   | |    .*****.*****.     | |   0   0   | |
  | |     -     | |     .*********.      | |     -     | |
  | |   \___/   | |      .*******.       | |   \___/   | |
  | |___     ___| |       .*****.        | |___________| |
  |_____|\_/|_____|        .***.         |_______________|
    _|__|/ \|_|_.............*.............._|________|_
   / ********** \                          / ********** \
 /  ************  \                      /  ************  \
--------------------                    --------------------
        </pre>
        <div class="info">
        <h1>Accessibility</h1>
        
          <p>In Writing was designed to be accessible to everyone. Anyone can mint an NFT for as little as $5, and your
            security is guaranteed as we see none of your personal information and every transaction is automated. 
            Learn more about security and decentralization <a href='about.html#security'>here</a>.</p>
          </div>
        </div>


  </div>

  
</template>

<script> 
export default {
  name: 'HomePageInfo2',
  props: {
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>





@media only screen and (min-width: 601px) {

    #hide-desktop{
  display: none;

}

    .spacer {
        height: 3vw;
    }
pre {
  font-size: 0.75vw;
  font-family: "Menlo";
  text-align: left;
  line-height: 120.8%;
  overflow: hidden;
  overflow-y: hidden;

}
h1{
  font-size: 2.625vw;
  font-family: "Proxima Nova Extra Condensed";
}
p {
  font-size: 1.15vw;
  line-height: 1.5vw;
  font-family: "Proxima Nova Medium";
}

mark {
  font-family: "Menlo";
  background-color: gainsboro;
  font-size: 1.15vw;
  line-height: 1.5vw;
}

.info {
    margin-top: 2.5vw;
  width: 100%;
  text-align: left;
}

.decentralized {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
}

.marketplace {
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
}

.homepageinfo {
  display: block;
  
  padding-left: 12vw;
  padding-right: 12vw;
  
  padding-top: 2vw;
}
}


/* PHONE STYLING */
@media only screen and (max-width: 600px) and (orientation: portrait) {

#hide-mobile{
  display: none;

}

.decentralized, .marketplace{
    text-align: left;
}

pre {
  font-size: 2.5vw;
  font-family: "Menlo";
  text-align: left;

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
mark {
  font-family: "Menlo";
  background-color: gainsboro;
  font-size: 3.5vw;
  line-height: 1.5vw;
}
.info {
  width: 100%;
  line-height: 4vw;
  padding-left: 8vw;
  padding-right: 8vw;
}

.wallet-setup {
  width: 66%;
  text-align: center;
}

.save-NFT {
    /*margin: right;*/
  width: 66%;
  text-align: center;
}

.write-NFT{

  width: 66%;
  text-align: center;
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
