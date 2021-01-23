const Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3('HTTP://127.0.0.1:7545')

const acc1 = '0xFd64852E66a51cacBF18f8D04235271aFDC7E5da'
//const acc2 = '0xCE865C238A92FF7de25A5F6DD40327d4a8201CaB'

//console.log(web3.eth.accounts.create())

const privateKey1 = Buffer.from(process.env.PRI_KEY_1,'hex') 
///const privateKey2 = Buffer.from(process.env.PRI_KEY_2,'hex') 


web3.eth.getTransactionCount(acc1, (err, txCount) => {

    const data = ''




    const txObject = {
        nonce: web3.utils.toHex(txCount),
        //value: web3.utils.toHex(web3.utils.toWei('1','ether')),
        gasLimit:web3.utils.toHex('1000000'),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10','gwei')),
        data: data
    }

    
    const tx = new Tx(txObject)
    tx.sign(privateKey1)
    
    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')
    
    
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('err:', err, 'txHash:', txHash)
    })

})



