let allQuestion = []
let inputQuestion 
function submitQuestion() {
     inputQuestion = {
         first_Option:firstoption.value,
         secondOption:secondoption.value,
         thirdOption:thirdoption.value,
         fourthOption:fourthoption.value,
         questionInput:questioninput.value,
         answerInput:answer.value
    }
    // firstoption.value="A."
    // secondoption.value=B.
    // thirdoption.value=C.
    // fourthoption.value=D.
    // questioninput.value=""
    console.log(inputQuestion)
allQuestion.push(inputQuestion)
localStorage.setItem("questionInp", JSON.stringify(allQuestion))
}
