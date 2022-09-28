let allQuestion = []
let inputQuestion 
function submitQuestion() {
    if (firstoption.value=="") {
     disp.innerHTML = `<h1>Fill in all field</h1>`
    }else if (secondoption.value=="" ){
        disp.innerHTML = `<h1>Fill in all field</h1>`
    }else if (thirdoption.value=="") {
        disp.innerHTML = `<h1>Fill in all field</h1>`
    }else if (questioninput.value==""){
        disp.innerHTML = `<h1>Fill in all field</h1>`
    }else if (answer.value=="") {
        disp.innerHTML = `<h1>Fill in all field</h1>`
    }else if (fourthoption.value==""){
        disp.innerHTML = `<h1>Fill in all field</h1>`
    }else {
     inputQuestion = {
         first_Option:firstoption.value,
         secondOption:secondoption.value,
         thirdOption:thirdoption.value,
         fourthOption:fourthoption.value,
         questionInput:questioninput.value,
         answerInput:answer.value,
         userScore: 00
    }
    console.log(inputQuestion)
        allQuestion.push(inputQuestion)
        localStorage.setItem("questionInp", JSON.stringify(allQuestion))
        disp.innerHTML = `<h1>Question successfully added</h1>`
        // alert("Question successfully added")
        firstoption.value=""
        secondoption.value=""
        thirdoption.value=""
        fourthoption.value=""
        questioninput.value=""
        answer.value=""
    }

}
