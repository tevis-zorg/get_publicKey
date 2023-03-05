const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message , signature, recoveryBit) {
    const hashingMsg = hashMessage(message);
    const recoveryResult = await secp.recoverPublicKey(hashingMsg, signature, recoveryBit)
    console.log(recoveryResult);
}

recoverKey('hy, user 1');
//still error

// var secp = require("@noble/secp256k1");
// 
// (async () => {
//     const privateKey = secp.utils.randomPrivateKey();
//     const publicKey = secp.schnorr.getPublicKey(privateKey) 
//     const msgHash = await secp.utils.sha256("hello world");
//     const signature = await secp.schnorr.sign(msgHash, privateKey);
//     const isValid = await secp.schnorr.verify(signature, msgHash, publicKey);  
//     console.log("Public key (hex):", Buffer.from(publicKey).toString('hex'))
//     console.log("Signature (hex) :", Buffer.from(signature).toString('hex'))
//     console.log("Verified        :", isValid);
// })();