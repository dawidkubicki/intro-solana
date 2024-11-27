import "dotenv/config";
import {
    Connection,
    Transaction,
    SystemProgram,
    sendAndConfirmTransaction,
    PublicKey,
} from "@solana/web3.js";
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const suppliedToPubkey = process.argv[2] ?? null;

if (!suppliedToPubkey) {
    console.error("No recipient public key supplied");
    process.exit(1);
}

const senderKeypair = getKeypairFromEnvironment("SECRET_KEY");
console.log("Sender public key:", senderKeypair.publicKey.toBase58());

const toPubkey = new PublicKey(suppliedToPubkey);
console.log("To public key:", toPubkey.toBase58());

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

console.log("Connection established");

const transaction = new Transaction();

const LAMPORTS_TO_SEND = 5000;

const sendSolInstruction = SystemProgram.transfer({
    fromPubkey: senderKeypair.publicKey,
    toPubkey,
    lamports: LAMPORTS_TO_SEND,
});

transaction.add(sendSolInstruction);

const signature = await sendAndConfirmTransaction(connection, transaction, [
    senderKeypair,
]);

console.log("Transaction sent and confirmed with signature:", signature);
