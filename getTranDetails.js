const ethTx = require('ethereumjs-tx').Transaction
const Web3 = require('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545') //using local ganache environment

const acc1 = '0x953d9D23eB62161675ffc0e806AF52529ee20e76'
const acc2 = '0x47378DC31e0f45d067dbD7D7A5E9784A5D428d33'

//console.log(web3.eth.accounts.create())

const privateKey1 = Buffer.from('6b2f7a9c5713cbbfdba21a83c5bc374bfffa965cbb103a880c2e8aa4527a3fa6','hex') 
const privateKey2 = Buffer.from('6918de6a82ab7a9be2499c117f05e3d7a12a3a2eb001167858ca0fff56154cd2','hex')

web3.eth.getTransactionCount(acc1, (err, txCount) => {
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to:acc2,
        value: web3.utils.toHex(web3.utils.toWei('1','ether')),
        gasLimit:web3.utils.toHex('80000'),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei')),
        data: 
    }

    //console.log(txObject)
    
    const tx = new ethTx(txObject)
    tx.sign(privateKey1)
    
    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')
    
    
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash:', txHash)
    })

})
