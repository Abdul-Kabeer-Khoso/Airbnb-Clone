let inputs = document.getElementsByTagName("input");
let textareas = document.getElementsByTagName("textarea");


let inputIncorrectIcon = document.getElementsByClassName('fa-circle-exclamation-input');
let textareaIncorrectIcon= document.getElementsByClassName('fa-circle-exclamation-textarea')[0];

let inputCorrectIcon = document.getElementsByClassName('fa-check-input');
let textareaCorrectIcon = document.getElementsByClassName('fa-check-textarea')[0];


let inputValidText = document.getElementsByClassName('inputValidText');
let inputInvalidText = document.getElementsByClassName('inputInvalidText');

let textareaValidText = document.getElementsByClassName('textareaValidText')[0];
let textareaInvalidText = document.getElementsByClassName('textareaInvalidText')[0];


//Valid Style
let inValidStyle = (element)=>{
    element.style.outline= 'none';
    element.style.borderColor=' #fa2500';
    element.style.borderWidth='2px';
}

let validStyle = (element)=>{
    element.style.outline='none';
    element.style.borderColor=' #38d001';
    element.style.borderWidth='2px';
}

Array.from(inputs).forEach((inputField, index)=>{
    inputField.addEventListener('input', ()=>{
        if(inputField.value==''){
            inValidStyle(inputField);
            inputIncorrectIcon[index].style.visibility="visible";
            inputCorrectIcon[index].style.visibility="hidden";
            inputInvalidText[index].style.display="inline-block";
            inputValidText[index].style.display='none';

        }
        else{
            validStyle(inputField);
            inputCorrectIcon[index].style.visibility='visible';
            inputIncorrectIcon[index].style.visibility='hidden';
            inputValidText[index].style.display='inline-block';
            inputInvalidText[index].style.display="none";
        }
    })
    
})

Array.from(textareas).forEach((element)=>{
    element.addEventListener('input', ()=>{
        if(element.value==''){
            inValidStyle(element);
            textareaIncorrectIcon.style.visibility='visible';
            textareaCorrectIcon.style.visibility='hidden'
            textareaInvalidText.style.display='inline-block';
            textareaValidText.style.display='none';
        }
        else{
            validStyle(element);
            textareaCorrectIcon.style.visibility='visible';
            textareaIncorrectIcon.style.visibility='hidden';
            textareaValidText.style.display='inline-block';
            textareaInvalidText.style.display='none';
        }
    })
});




let checkValidation= ()=>{
    Array.from(inputs).forEach((inputField, index)=>{
        if(inputField.value==''){
            inValidStyle(inputField);
            inputIncorrectIcon[index].style.visibility="visible";
            inputCorrectIcon[index].style.visibility="hidden";
            inputInvalidText[index].style.display="inline-block";
            inputValidText[index].style.display='none';

        }
        else{
            validStyle(inputField);
            inputCorrectIcon[index].style.visibility='visible';
            inputIncorrectIcon[index].style.visibility='hidden';
            inputValidText[index].style.display='inline-block';
            inputInvalidText[index].style.display="none";
        }
    });
    
    Array.from(textareas).forEach((element)=>{
        if(element.value==''){
            inValidStyle(element);
            textareaIncorrectIcon.style.visibility='visible';
            textareaCorrectIcon.style.visibility='hidden'
            textareaInvalidText.style.display='inline-block';
            textareaValidText.style.display='none';
        }
        else{
            validStyle(element);
            textareaCorrectIcon.style.visibility='visible';
            textareaIncorrectIcon.style.visibility='hidden';
            textareaValidText.style.display='inline-block';
            textareaInvalidText.style.display='none';
        }
    });
    
}

