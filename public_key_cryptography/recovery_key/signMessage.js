const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "64_bit_private_key_value";

async function signMessage(msg) {
    const messageHash = hashMessage(msg);
    const result = await secp.sign(messageHash, PRIVATE_KEY, { recovered: true })
    console.log(result);
};

signMessage("hello, there!");//message value you wanted to encrypt using hashing.
