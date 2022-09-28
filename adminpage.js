let allQuestion = []
let inputQuestion 
function submitQuestion() {
    if (firstoption.value=="" || secondoption.value=="" || thirdoption.value=="" || questioninput.value=="" || answer.value=="" || fourthoption.value=="") {
        alert ("input a valid question")
    }else {
     inputQuestion = {
         first_Option:firstoption.value,
         secondOption:secondoption.value,
         thirdOption:thirdoption.value,
         fourthOption:fourthoption.value,
         questionInput:questioninput.value,
         answerInput:answer.value
    }
    console.log(inputQuestion)
        allQuestion.push(inputQuestion)
        localStorage.setItem("questionInp", JSON.stringify(allQuestion))
    }

}
