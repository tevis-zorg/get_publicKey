const recover = require ('./recovery');
const signMessage = require('./hashMessage');
const secp = require ('ethereum-cryptography/secp256k1')
const {assert} = require ('chai')
const {toHex} = require('ethereum-cryptography/utils');

const PRIVATE_KEY = "64_private_key_length";

describe('Recover Key', () => {
    it('should recover the public key from a signed message', async () => {
        const [sig, recoveryBit] = await signMessage('hello world');

        const publicKey = secp.getPublicKey(PRIVATE_KEY);

        const recovered = await recover('hello world', sig, recoveryBit);

        assert.equal(toHex(recovered), toHex(publicKey));
    });
});
