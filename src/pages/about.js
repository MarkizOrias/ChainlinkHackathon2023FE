import styles from '@/styles/About.module.css'

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.section}>
                <p className={styles.msgTxt}>Welcome to our groundbreaking project from Chainlink Hackathon Spring 2023. This web3 project is designed to liberate artists from traditional constraints, empowering them to auction their NFT-based artwork while maximizing sale profits. It combines smart contract design with an intuitive frontend UI to create a seamless user experience.</p>
                <p className={styles.msgTxt}>This project offers a decentralized, transparent, and efficient system for NFT auctions, revolutionizing the world of NFT auctions and empowering artists and collectors alike. Welcome to the future of NFT auctions!</p>
                <p className={styles.msgTxtTitle}>Key Functionalities:</p>
                <p className={styles.msgTxtTitle}>NFT Creation</p>
                <p className={styles.msgTxt}>Artists can create and upload their NFT-based artwork to IPFS using backend scripts, with the IPFS metadata files storing pointers to the images.</p>
                <p className={styles.msgTxtTitle}>Auction Creation</p>
                <p className={styles.msgTxt}>As the owner of the smart contract, artists can mint new NFTs by specifying the tokenURI (metadata) and the auction duration in seconds.</p>
            </div>
            <div className={styles.section}>
                <p className={styles.msgTxtTitle}>NFT Display</p>
                <p className={styles.msgTxt}>After a transaction is processed and the website is refreshed, the minted NFT appears with its details and auction information. More NFTs with varying auction durations can be minted and displayed.</p>
                <p className={styles.msgTxtTitle}>Auction Renewal</p>
                <p className={styles.msgTxt}>Auctions that did not receive any bids can be renewed, and the duration will be the same as entered during minting.</p>
                <p className={styles.msgTxtTitle}>Auction Participation</p>
                <p className={styles.msgTxt}>Users can participate in an auction by connecting to their Metamask wallet and placing bids. The minimum Ethereum bid is 0.1 with an incremental step of 0.01.</p>
                <p className={styles.msgTxtTitle}>Automatic Updates</p>
                <p className={styles.msgTxt}>The website automatically refreshes itself to display the most recent bid and inform about auction results.</p>
                <p className={styles.msgTxtTitle}>Last-Minute Bidding Protection</p>
                <p className={styles.msgTxt}>If a bid comes in within the last 2 minutes of the auction, the auction is automatically extended by another 2 minutes to prevent last-second victories.</p>
            </div>
            <div className={styles.section}>
                <p className={styles.msgTxtTitle}>Bid Withdrawal</p>
                <p className={styles.msgTxt}>If a user's bid gets outdone, they can withdraw it immediately or accumulate it from multiple rejected bids.</p>
                <p className={styles.msgTxtTitle}>Automatic Bid Acceptance</p>
                <p className={styles.msgTxt}>With Chainlink keepers, once the auction is closed with a bid received, the accept bid function is triggered automatically, transferring the highest bid to the owner's account and approving the highest bidder for claiming the NFT.</p>
                <p className={styles.msgTxtTitle}>NFT Claiming and Resale</p>
                <p className={styles.msgTxt}>After the NFT is claimed, the auction lifecycle concludes, and the NFT is ready for further sale on external marketplaces.</p>

            </div>
        </div>
    )
}