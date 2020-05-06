// problème des callbacks
/* asyncFunc1 (function (result1) {
    asyncFunction2 (result1, function (result2) {

    })
})

asyncFunc1()
    .then(function (resultat1) {
        return asyncFunction2(resultat1)
    })
    .then(function (resultat2) {

    }) */



function waitingFunction () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('test')
            return resolve()
        }, 5000)
    })
}

waitingFunction()
.then(function () {
    console.log('juste après waiting function')
})
console.log('après le then')