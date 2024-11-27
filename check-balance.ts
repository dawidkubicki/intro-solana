import "dotenv/config";
import {
    Connection,
    LAMPORTS_PER_SOL,
    PublicKey,
} from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const connection = new Connection("https://api.mainnet-beta.solana.com", "confirmed");

// const keypair = getKeypairFromEnvironment("SECRET_KEY");

// const publicKey = keypair.publicKey;
const publicKey = new PublicKey("2zzoxfZdgWfyumyZ9mPPsqKzeBptMudMRgnjWtgU6Aca");


const balance = await connection.getBalance(publicKey);
const balanceInSOL = balance / LAMPORTS_PER_SOL;

console.log(`Balance: ${balanceInSOL} SOL`);
