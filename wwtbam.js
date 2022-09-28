// let allQuestion 
next.style.display="none"
disp.style.display="none"
label.style.display="none"
load.style.display="block"
     var mySong = new Audio("AUDIO-2022-09-24-09-28-48.mp3")
     var mySong2 = new Audio("AUDIO-2022-09-24-09-29-36.mp3")
    //  mySong.play()
if (localStorage.questionInp){
    allQuestion = JSON.parse(localStorage.getItem("questionInp"))
    // console.log(allQuestion)
}
function loadQuestion() {
        allQuestion.map((item) => {
            optA.innerHTML=item.first_Option
            optB.innerHTML=item.secondOption
            optC.innerHTML=item.thirdOption
            optD.innerHTML=item.fourthOption
            mainQuestion.innerHTML=item.questionInput
            disp.innerHTML= `<div class="text-success" style="font-size: 50px;"> ${item.userScore}</div>`
        })
    next.style.display="block"
    load.style.display="none"
    disp.style.display="block"
    label.style.display="block"
    // mySong2.play()
    mySong.pause()
}
function a(){
    allQuestion.map((item) => {
        correctAnswer=item.answerInput
        firstOpt=item.first_Option
        updatedUserScore=item.userScore
        // console.log(correctAnswer);
    })
if (firstOpt==correctAnswer){
    optA.style.border="none"
    optA.style.backgroundColor="green"
    score = updatedUserScore + 100
    // console.log(score);
    disp.innerHTML= `<div class="text-success" style="font-size: 50px;"> ${score}</div>`
  // alert("correct answer")
}else {
  optA.style.border="none"
    optA.style.backgroundColor="red"
  // alert("wrong answer")
}
  
    // optA.style.border="none"
    // optA.style.backgroundColor="green"
   
   
}
function b(){
    allQuestion.map((item) => {
        correctAnswer=item.answerInput
        secondOpt=item.secondOption
        updatedUserScore=item.userScore
        // console.log(correctAnswer,secondOpt);
    })
    if (secondOpt==correctAnswer){
      score= updatedUserScore + 100
      optB.style.border="none"
      optB.style.backgroundColor="green"
      disp.innerHTML= `<div class="text-success" style="font-size: 50px;"> ${score}</div>`
        // alert("correct answer")
      }else {
        optB.style.border="none"
      optB.style.backgroundColor="red"
        // alert("wrong answer")
      }
    // alert("correct answer")
    // optA.style.border="none"
    // optA.style.backgroundColor="green"
    // alert("i dey work")
}
function c(){
    allQuestion.map((item) => {
        correctAnswer=item.answerInput
        thirdOpt=item.thirdOption
        updatedUserScore=item.userScore
        // console.log(correctAnswer);
    })
    if (thirdOpt==correctAnswer){
      score = updatedUserScore + 100
      optC.style.border="none"
      optC.style.backgroundColor="green"
      disp.innerHTML= `<div class="text-success" style="font-size: 50px;"> ${score}</div>`
        // console.log(thirdOpt);
        // alert("correct answer")
      }else {
        optC.style.border="none"
        optC.style.backgroundColor="red"
        // alert("wrong answer")
      }
    // optA.style.border="none"
    // optA.style.backgroundColor="green"
    // alert("i dey work")
}
function d(){
    allQuestion.map((item) => {
        correctAnswer=item.answerInput
        fourthOpt=item.fourthOption
        updatedUserScore=item.userScore
        // console.log(Number(item.userScore) + 100);
        // console.log(correctAnswer);
    })
    if (fourthOpt==correctAnswer){
      score= updatedUserScore + 100
      optD.style.border="none"
      optD.style.backgroundColor="green"
      disp.innerHTML=`<div class="text-success" style="font-size: 50px;"> ${score}</div>`
        // alert("correct answer")
      }else {
        optD.style.border="none"
        optD.style.backgroundColor="red"
        // alert("wrong answer")
      }
    // alert("correct answer")
    // optA.style.border="none"
    // optA.style.backgroundColor="green"
    // alert("i dey work")
}
//  function nextQuest () {
//     // var allQuestion = [];
    
//     // if (allQuestion.length === 0) {
//     //   for (var i = 0; i < inputQuestion.length; i++) {
//     //   allQuestion.push(inputQuestion[i]);
    
//     //   }
//     // }
    
//     // let item = Math.floor(Math.random() * allQuestion.length);
// allQuestion.map((item) => {
//      mainQuestion.innerHTML=item.questionInput
//      optA.innerHTML=item.first_Option	
//      optB.innerHTML=item.secondOption
//      optC.innerHTML=item.fourthOption
//      optD.innerHTML=item.fourthOption
// })
//     //  var i = 0;
//     //  var score = 0;
   
  
// }