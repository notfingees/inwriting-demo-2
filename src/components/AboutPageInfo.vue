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
        <div class="info" style='margin-top: 4vh;'>
        <h1>How it works:</h1>
        
          <p>Our revolutionary decentralized marketplace and technology mean that your NFTs are unique,
             permanent, and that you truly own them. Unlike image-based NFTs where the same image can be
             minted as an NFT multiple times, your tokens are truly non-fungible; only one person at a 
             time can own any specific sequence of characters.</p><p>For example, 
             if you own the <mark>'hello'</mark> NFT, no one else can ever write a <mark>'hello'</mark> NFT 
             and no one else can own it unless you decide to transfer it.</p>
             <p>Furthermore, all In Writing NFTs are stored directly on the blockchain and can be viewed, transferred, 
              bought, and sold for no fees (besides gas*)..</p>
              
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
        <h1>Decentralization and transparency</h1>

        
        
          <p>We’re passionate about promoting open source information and fighting censorship. Anything can be minted on In Writing—from art to articles—and every text and transaction is logged on the blockchain for anyone to read. The code powering In Writing and our tokens is also publicly available, ensuring transparency and a fair playing field. As a result, it’s impossible to be scammed - you know exactly what you’re buying (or selling). Learn more about security <a href='about.html#security'>here.</a>  </p>
          </div>
        <pre style="padding-left: 10vw; padding-top: 5vh;" id="hide-mobile">

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
        <div class="info" style="margin-top:1vh;">
        <h1>Investing</h1>
        
        <p>In Writing was designed to be accessible to everyone--anyone can mint an NFT and start investing
          for as little as $5. Our transparency with data and low entry costs mean everyone has access
          to the same information and aims to help both experienced and beginner investors navigate the crypto space.
          Learn more about the future of In Writing and why you should invest <a href='about.html#investing'>here.</a>
           </p>
          </div>
        </div>


  </div>

  
</template>

<script> 
export default {
  name: 'AboutPageInfo',
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
    width: 100%;
    padding-left: 8vw;
    padding-right: 8vw;
}

pre {
  font-size: 1.75vw;
  font-family: "Menlo";
  text-align: left;
  line-height: 120.8%;
  overflow: hidden;

}
h1{
  font-size: 5.25vw;
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
}
.info {

  line-height: 120.8%;
  /*
  padding-left: 8vw;
  padding-right: 8vw;

  background-color: blue;
  */
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
