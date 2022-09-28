// let allQuestion 
next.style.display="none"
load.style.display="block"
     var mySong = new Audio("AUDIO-2022-09-24-09-28-48.mp3")
     var mySong2 = new Audio("AUDIO-2022-09-24-09-29-36.mp3")
     mySong.play()
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
        })
    next.style.display="block"
    load.style.display="none"
    mySong2.play()
    mySong.pause()
}
function a(){
    allQuestion.map((item) => {
        correctAnswer=item.answerInput
        firstOpt=item.first_Option
        console.log(correctAnswer);
    })
if (firstOpt==correctAnswer){
    optA.style.border="none"
    optA.style.backgroundColor="green"
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
        // console.log(correctAnswer,secondOpt);
    })
    if (secondOpt==correctAnswer){
      optB.style.border="none"
      optB.style.backgroundColor="green"
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
        // console.log(correctAnswer);
    })
    if (thirdOpt==correctAnswer){
      optC.style.border="none"
      optC.style.backgroundColor="green"
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
        // console.log(correctAnswer);
    })
    if (fourthOpt==correctAnswer){
      optD.style.border="none"
      optD.style.backgroundColor="green"
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
// let random_question = array[Math.floor(Math.random()* array.length)]
// if (random_question == item) {