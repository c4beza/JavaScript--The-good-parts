// var myPromise = function(tag){
//     return new Promise(function(resolve,reject){    
//         if(tag){
//             resolve('111')
//         }else{
//             reject('222')
//         }
//     })
// }

// myPromise(false).then(function(msg){
//     console.log(msg)
// }).catch(function(msg){
//     console.log(msg)
// })

new Promise(function (a, reject) {
    console.log('start new Promise...');
    var timeOut = Math.random() * 2;
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(function () {
        if (timeOut < 1) {
            console.log('call resolve()...');
            a('200 OK');
        }
        else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}).then(function (r) {
    console.log('Done: ' + r);
}).catch(function (reason) {
    console.log('Failed: ' + reason);
});
