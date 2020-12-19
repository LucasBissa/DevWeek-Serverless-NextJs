module.exports = (array) => {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    //enquanto existir elementos para embaralhar
    while( currentIndex !==0 ){

        //pega um elemento aleatorio
        randomIndex = Math.floor( Math.random() * currentIndex )
        currentIndex -= 1

        //troca de posicao com o elemento atual
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array
}