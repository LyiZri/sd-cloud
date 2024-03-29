<p align="center" style = {text-align:center}>
<img src="https://bafybeidfio3womq6nci2pkptilegjwehmgfz5kbjussd6toovjdo63vb7u.ipfs.dweb.link/logo.png" />
<br/><br/>
<b>New web3 storage cloud dapp developed by based on NEAR and Filecoin Ecology</b>
<br/><br/>
</p>

## 📖 Introduction

Based on the `NEAR` public chain, combined with the distributed storage technology `IPFS` and `Filecoin`, you can store your files in the [SDCloud](https://sdcloud.on.fleek.co/).

-  [Creating a NEAR Account](./docs/Creating a NEAR Account.md)
- [Storage Concept](./docs/concept.md)

## 🚀 Features

- You can start storing your files in minutes.
- Filecoin offers persistent, decentralized storage - guaranteeing the integrity of the underlying data through a robust economic model while also providing cryptographic proofs for verifiability.
- IPFS offers content addressing.
- Write smart contracts in Rust on NEAR, you only pay a small fee for NEAR as file storage.
- Support multiple file type preview function.
- The NEAR contract records the order information stored in the file, such as viewing the file storage time, file hash value, storage user, file storage life cycle, storage order amount, status, data encapsulation and other information.
- Applications where users store encrypted data on Filecoin can only be decrypted by the user using the NEAR private key, thus maintaining ownership of their data.

## ⚔️ Content persistence

Broadly speaking, much of today's web operates using what is known as location addressing. Location addressing retrieves online information from specific locations on the web ─ i.e. from behind URLs.

However, this approach has some critical problems. Location addressing is centralized, meaning that whoever controls that location controls the content. The controller can change the content, completely replace it, or just take it away. This means location-based addresses are vulnerable to attacks, exploitation, and loss.

One part of an approach to decentralizing this legacy way of operating the web entails implementing a new kind of addressing: content addressing. Content addressing is the technique of issuing each piece of data a content identifier (CID), which is a token derived directly from the file's contents using an algorithm that will always generate the same key for the same content. Using content addressing, files can be queried and retrieved based on what they are, not where they are — one major ingredient in enabling the web to break free from centralized content control. However, content addressing is only part of the solution.

SDCloud uses CIDs generated by IPFS, the InterPlanetary File System, to enable content addressing for all data stored in its network — however, just because a file has a CID doesn't mean that the file is guaranteed to be around forever. In a well-operating decentralized system, participants all need to agree to be good actors and provide reliable storage capacity. For this,SDCloud uses the Filecoin network. The Filecoin network and its namesake token FIL (or ⨎ for short) were created to incentivize storage providers on the network to agree to storage deals. These deals specify that a certain amount of storage capacity will be provided over an agreed period of time, ensuring the second part of the solution: content persistence.

## 🛠 How to use
Store files in SDCloud in just a few steps!

### 💨LOGIN WITH NEAR ACCOUNT

  Your SDCloud page will be claimed with your NEAR ID (example.near).
![workbench](https://user-images.githubusercontent.com/42611777/153567395-f9a2813d-1056-4eb8-800f-ad0298ba8fc2.png)
### 💨CHOOSE TO STORE YOUR FILES
Based on the NEAR public chain, combined with the distributed storage technology IPFS and Filecoin, every step of your file operations will be recorded on the NEAR chain!
![文件无状态](https://user-images.githubusercontent.com/42611777/150929099-fad5f456-1ae8-4ff6-ae59-274e8a389703.png)

### 💨LOGIN WITH NEAR ACCOUNT
You can view each file information, we support preview, share and other functions.
![文件无状态备份](https://user-images.githubusercontent.com/42611777/150929138-06f8e7f1-2d08-496e-9422-7191558560bc.png)

## 🚀Value ecosystems
 NEAR is a decentralized application platform built to bridge the users of today's Internet to the blockchain-based web of the future. NEAR is a PoS Layer 1 blockchain platform, built with UX and DevX in mind. NEAR's novel sharding mechanism, Nightshade, parallelizes computation on chain and automatically increases capacity when needed, resulting in theoretically infinite scalability.

 Filecoin is a decentralized peer-to-peer storage network, allowing anyone to store and validate large-scale data as part of a global, 8-exabyte (and growing) network. Under the hood, all Filecoin nodes use the InterPlanetary File System (IPFS), a content-addressed protocol for storing and sharing data.

 SDCloud can change that; Let more developers and enthusiasts pay attention to NEAR ecology and participate in it to jointly build the ecological prosperity of the community.

 On the Filecoin ecosystem, we've been following community dynamics, participating in the XMINER program, and making suggestions on community Slack. We will try to build our new Web3 application using tools and services such as Web3. storage, Filcosin-Near Bridge, etc. We have our own storage miner node, and we need more real data to be stored in our node; It's not just us, of course. I'm sure there are a lot of storage miners out there who would like to have more real data to replace the zero data and fulfill Filecoin's vision.

During the development process, we  actively communicate with the NEAR&Filecoin community members, feedback the NEAR&Filecoin community members provide development SDK problems encountered; We believe that community members will be happy to receive our feedback; We believe that in the future the NEAR&Filecoin community will become ecologically diverse due to the continuous efforts of developers like us.

## ⚙️ Data policy

You control your data! SDCloud doesn't keep your personal data; You can delete personal data from your account at any time. SDCloud has no advertising and does not sell your data; Your data is securely stored on the NEAR &IPFS&FILECOIN network.


## 📄 License

Source code in `SDCloud` is available under the [Apache-2.0 License](/LICENSE).

## 🔋 JetBrains OS licenses

`sdcloud` had been being developed  under the **free JetBrains Open Source license(s)** granted by JetBrains s.r.o., hence I would like to express my thanks here.

<a href="https://www.jetbrains.com/?from=ants" target="_blank"><img src="https://raw.githubusercontent.com/panjf2000/illustrations/master/jetbrains/jetbrains-variant-4.png" width="250" align="middle"/></a>

## ☕️ Buy me a coffee

> ETH: 0xDfB60De06De984cD63Aa333e97Cd701B503dc456
>
> FIL:f1ogknwo766wvyqfv4kkdine2xava4g6dmb2b7oca
>
> NEAR:lk2684753.near

## ⛱ Support

![编组 20](https://user-images.githubusercontent.com/42611777/150927672-2957f71a-adcd-4a5d-95d0-fa8231bd61fe.png)
