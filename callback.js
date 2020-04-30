function maFonction (callback) {
    console.log('début')

    callback('param1', 'param2', 'param3')

    console.log('fin')
}

function monCallbackSansParam() {
    console.log('je suis appelé')
}

function monCallbackAvecUnParam(test) {
    console.log(test)
    console.log('je suis appelé')
}

maFonction(monCallbackSansParam)
/** OUTPUT
 * début
 * je suis appelé
 * fin
 */
console.log('_______________________')
maFonction(monCallbackAvecUnParam)
/** OUTPUT
 * début
 * param1
 * je suis appelé
 * fin
 */

