const {gasstationInfo} = require('eth-gasprice-estimator');

const Web3 = require('web3');
const web3 = new Web3('ws://localhost:8546');
// console.log(web3);

console.log("All values are in Ether :")
const gasprice={

    fast: function(){
        gasstationInfo("fast")
    .then(result=>{
        console.log("fast   : ",web3.utils.fromWei(result.toString(), 'ether'));
    }).catch(err=>{
        console.log("err",err);
    });
    },

    fastest: function(){
        gasstationInfo("fastest")
    .then(result=>{
        console.log("fastest: ",web3.utils.fromWei(result.toString(), 'ether'));
    }).catch(err=>{
        console.log("err",err);
    });
    },

    safeLow: function(){
        gasstationInfo("safeLow")
    .then(result=>{
        console.log("safeLow: ",web3.utils.fromWei(result.toString(), 'ether'));
    }).catch(err=>{
        console.log("err",err);
    });
    },

    average: function(){
        gasstationInfo("average")
    .then(result=>{
        console.log("average: ",web3.utils.fromWei(result.toString(), 'ether'));
    }).catch(err=>{
        console.log("err",err);
    });
    }
}

gasprice.safeLow();
gasprice.average();
gasprice.fast();
gasprice.fastest();











// web3.utils.fromWei('1', 'ether');

// function fast(){
//     gasprice.fast();
//     console.log(web3.utils.fromWei(arr[0]`, 'ether'));
// }




// var type=["fast","fastest","safeLow","average"];
// var price=[];

// for(let i=0;i<4;i++){
//     gasprice.type[i]();

//     price.push(result);
// }

// for(let i of type ){
//     gasprice[i];

//     price.push(gasprice[i]);
// }

// console.log(price);
