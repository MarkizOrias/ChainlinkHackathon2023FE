# NFT Sold It'y
* Front-End

**The Back-End repo is here:** https://github.com/MarkizOrias/ChainlinkHackathon2023

**Live Demo Hosted By Vercel:** https://nft-sold-ity.vercel.app/about

# Welcome To NFT Sold It'y!

## Unveiling NFT Sold It'y: Reshaping NFT Auctions

Our Chainlink Hackathon Spring 2023 project is a transformative web3 venture that reimagines NFT auctions for artists. We integrate smart contract technology with an intuitive frontend, utilizing Chainlink Keepers to deliver a frictionless user experience.

This initiative serves as a decentralized, transparent, and efficient NFT auction platform, heralding a novel era of NFT sales beneficial for both artists and collectors. Artists have the ability to generate and upload their NFT-based artwork to IPFS using backend scripts. These scripts use metadata files to store pointers to the artwork images.

In their role as contract owners, artists can mint new NFTs by setting the tokenURI and auction duration. Once a transaction is processed and the website refreshed, these minted NFTs, along with their details and auction information, become visible.

Unsuccessful auctions can be renewed with the same duration as originally set. Users can participate in an auction by connecting their Metamask wallets and placing bids, with a minimum Ethereum bid of 0.1 and an incremental increase of 0.01.

The website automatically updates to display the most recent bids and the results of the auction. If a bid is placed in the last two minutes of an auction, the auction duration is automatically extended by another two minutes, preventing last-minute wins.

Users whose bids have been outbid have the ability to immediately withdraw them. Once an auction concludes, the accept bid function is automatically triggered by Chainlink keepers. This transfers the highest bid to the contract owner's account and approves the highest bidder to claim the NFT.

Finally, after the NFT has been claimed, the auction ends, and the NFT is ready for resale on external marketplaces.


# Steps To Run Locally

**1. Download And Open VSCode**

Or other compiler for multiple programming languages.

**2. Clone Our Repository**

* Install Git - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

* Create new project folder and enter this folder in your console

* Type following command in terminal:

`git clone https://https://github.com/MarkizOrias/ChainlinkHackathon2023FE`

**3. Install All Necessary Packages**

* Type below command in console:

`yarn`

**4. Change the reCAPTCHA site key**

* Switch reCAPTCHA site keys in the `.env` file to test locally.

**5. Change the reCAPTCHA site key!**

* Type below command in console:

`yarn dev`

* Open the local host:

Open http://localhost:3000 with your browser to see the result.


