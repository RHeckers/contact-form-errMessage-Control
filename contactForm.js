//Grab input field by ID
let contactForm = document.getElementById('contactForm');
let nameInput = document.getElementById('nameInput');
let emailInput = document.getElementById('emailInput');
let subjectInput = document.getElementById('subjectInput');
let messageInput = document.getElementById('messageInput');

//Grab SubmitBtn by ID
let submitBtn = document.getElementById('submitBtn');

//Booleans
let errMessageActive = false;
let formComplete = false;

//Error messages
let toShortErrMessage = "This field should at least contain 3 characters";
let thisFieldIsRequired = "This field is required";
let notValidEmail = "This seems to be an invalid email";
let notComplete = "Please complete the form before you submit";

//Add Event listeners to the inputfields 
nameInput.addEventListener('keyup', checkInput);
emailInput.addEventListener('keyup', checkInput);
subjectInput.addEventListener('keyup', checkInput);
messageInput.addEventListener('keyup', checkInput);

//Add event listener for submit button
submitBtn.addEventListener('click', submit);

function checkInput(e){
    let usedInput = e.target;
    let inputValue = usedInput.value;
    
    if(usedInput === emailInput){
        if(!inputValue.includes('@') || !inputValue.includes('.') ){
            displayErrMessage(notValidEmail, usedInput);
            usedInput.style.background = "rgba(163, 16, 16, 0.623)";
            usedInput.style.outline = "rgba(163, 16, 16, 0.623)";
        }
        else{
            usedInput.style.background = "rgba(68, 241, 62, 0.623)";
            usedInput.style.outline = "none";
            formComplete = true;
            if(document.querySelector('.errorMessage')){
                document.querySelector('.errorMessage').remove();
            }
            

        }
    }else{
        //check Input Lenght
        if(inputValue.length == 0){
            displayErrMessage(thisFieldIsRequired, usedInput);
            usedInput.style.background = "rgba(163, 16, 16, 0.623)";
            usedInput.style.outline = "rgba(163, 16, 16, 0.623)";
        }
        else if(inputValue.length <= 3){
            displayErrMessage(toShortErrMessage, usedInput);
            usedInput.style.background = "rgba(163, 16, 16, 0.623)";
            usedInput.style.outline = "rgba(163, 16, 16, 0.623)";
        }
        else{
            usedInput.style.background = "rgba(68, 241, 62, 0.623)";
            usedInput.style.outline = "none";
            formComplete = true;
            if(document.querySelector('.errorMessage')){
                document.querySelector('.errorMessage').remove();
            }
  
       
        }

    }
    

    

    
}

function displayErrMessage(errMessage, usedInput){
    formComplete = false;
    if(!errMessageActive){
        let before = usedInput.parentElement;

        let messageHolder = document.createElement('p');
        messageHolder.innerHTML = errMessage;
        messageHolder.classList = "errorMessage";
        messageHolder.style.color = "white";
        messageHolder.style.marginLeft = '10%';
        contactForm.insertBefore(messageHolder, before);
        errMessageActive = true;
        setTimeout(() => {
            messageHolder.remove();
            errMessageActive = false;
        }, 2000);
    }

    

}

function submit(){
    console.log(formComplete);
    if(!formComplete || !nameInput.value || !emailInput.value ||
        !subjectInput.value || !messageInput.value){
        displayErrMessage(notComplete, nameInput);
    }else{
        //Do what you want to do with the data
        let message = {
            "name": nameInput.value,
            "email": emailInput.value,
            "subject": subjectInput.value,
            "message": messageInput.value
        };
        nameInput.value = '';
        emailInput.value = '';
        subjectInput.value = '';
        messageInput.value = '';
        console.log(message);
        displayErrMessage("FORM SUCCESSFULY SUBMITED", messageInput);
    }



}