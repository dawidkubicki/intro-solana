// import "dotenv/config";
// import { getKeypairFromEnvironment } from "@solana-developers/helpers";

// const keypair = getKeypairFromEnvironment("SECRET_KEY");

// console.log(keypair.publicKey.toBase58());
// console.log(keypair.secretKey);

import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(keypair.publicKey.toBase58());
console.log(keypair.secretKey);
