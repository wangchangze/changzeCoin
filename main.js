const sha256 = require('crypto-js/sha256')
//block 
//data  previousHash hash

class Block{
    constructor(data,previousHash){
        this.data = data
        this.previousHash = previousHash
        this.hash  = this.computeHash()
        }

    computeHash(){
        return sha256(this.data+this.previousHash).toString()
    }
    }
    
//chain(区块的链)
class Chain{
    constructor(){
        this.chain = [this.bigBang()]
    }
    //创建祖先区块
    bigBang(){
        const genesisBlock =  new Block('我是祖先','')
        return genesisBlock
    }
    //获取最后一个区块
    getLatestBlock(){
        return this.chain[this.chain.length-1]
    }
    //添加区块到区块链
    addBlockToChain(newBlock){
        newBlock.previousHash = this.getLatestBlock().hash
        newBlock.hash = newBlock.computeHash() 
        this.chain.push(newBlock)
    }
}


const chain = new Chain()
const block1 = new Block('转账十元','')
chain.addBlockToChain(block1)
console.log(chain)
console.log(sha256('我是祖先').toString())