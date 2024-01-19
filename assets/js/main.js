let questOne = {
    question: "Spacewar, un des premiers jeux vidéo, a été développé dans quel but? ",
    answer: ["1.Pour concurrencer Space Invader?", "2.Pour tester les startégies militaires du pentagone?", "3.Pour tester les limites du premier mini ordinateur de la société DEC?", "4.Pour la déconne?"],
}
questOne.goodAnswer = questOne.answer[2]
let questTwo = {
    question: "Pong à été crée par: ",
    answer: ["1.Bill Gates", "2.Matthew Gates", "3.Atari", "4.Nintendo"],
}
questTwo.goodAnswer = questTwo.answer[2]
let questThree = {
    question: "Le premier jeu développé par Ubisoft est: ",
    answer: ["1.Rayman", "2.Chessmaster", "3.Prince of Persia", "4.Zombi"],
}
questThree.goodAnswer = questThree.answer[3]
let questFour = {
    question: "le créateur de la série Final Fantasy est: ",
    answer: ["1.Hironobu Sakaguchi", "2.Shinji Mikami", "3.Yuka Sakakiki", "4.Tadaki Chichifumi"],
}
questFour.goodAnswer = questFour.answer[0]
let questFive = {
    question: "Avant d'être plombier, Mario était: ",
    answer: ["1.Charpentier", "2.Boulanger", "3.Manucure", "4.Chanteur"],

}
questFive.goodAnswer = questFive.answer[0]

let questArr = [questOne, questTwo, questThree, questFour, questFive]

//fonction question aléatoire
let shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i]
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffleArray(questArr)
let index = 0
let points = 0

//Fonction afficher questions/reponses
let questDisplay = (quest) => {

    document.querySelector('#quest').innerHTML = quest.question
    quest.answer.forEach((el, iterator) => {
        document.querySelectorAll('.rep')[iterator].innerHTML = el
    });
}

//Fonction choisir réponse
let ansChoice = (el) => {
    if (index >= questArr.length - 1) {
        let endContnair = document.querySelector('#end')
        document.querySelector('#start').style.display = "none"
        document.querySelector('#end').style.display = "block"
        document.querySelector("#resultCont").style.display = "none"
        points++
        endContnair.innerHTML = "FIN DU QUIZZ !!! " + " SCORE : " + points

    } else {
        document.querySelector("#resultCont").style.display = "block"
        let resultContnair = document.querySelector('.result')
        let pointsContnair = document.querySelector('#pointsContnair')
        if (el.innerHTML == questArr[index].goodAnswer) {
            points++
            resultContnair.innerHTML = "BONNE REPONSE"
            pointsContnair.innerHTML = "SCORE : " + points
        }
        else {
            resultContnair.innerHTML = "MAUVAISE REPONSE"
            pointsContnair.innerHTML = "SCORE : " + points
        }
        next()
    }

}
//Fonction changer de question
let next = () => {

    index++
    game()

}

//fonction jeu
let game = () => {
 questDisplay(questArr[index])
}
//Fonction rejouer
let repl = () => {
    points = 0
    index = 0
    shuffleArray(questArr)
    document.querySelector('#start').style.display = "flex"
    document.querySelector('#end').style.display = "none"
    document.querySelector("#resultCont").style.display = "none"
    game()
}
game()



// let array = [1, 2, 3, 4]
// let rand = (arr) => {
//     let arrBuffer=[...arr];
//     let voideArray = []
//     let nbr = 0
//     for (let i = 0; i < arr.length; i++) {
//         nbr = randomize(0, arrBuffer.length-1)
//         voideArray.push(arrBuffer[nbr])
//         arrBuffer.splice(nbr, 1)
//     }
//     return voideArray
// }
// console.log(rand(array))

// //Fonction random
// function randomize(min, max) {
//     let nbr= Math.floor(Math.random() * (max - min + 1)) + min;
//     return nbr;
// }