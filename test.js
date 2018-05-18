var wallet = require('./src/simplewallet');

wallet.createWallet("", "cUdNnaMtYVKutyfDLssgagZFWrjkAfeR7gxFqedjxVzvVdT32yor")
.then(w => {
    return wallet.sendBitcoin(0.1, "miPqfc5uN3BwaDw9DbbK9kpQo6GEXXyCPa");
}).then(tx => console.log(tx));
