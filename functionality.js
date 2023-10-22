// variables holding the envelope and postcard buttons
const envButt = document.querySelector('#envButt');
const postButt = document.querySelector('#postButt');
const bothButt = document.querySelector('#bothButt');

// variables holding the divs of the postcard image and the letter image
const envelopeDiv = document.getElementById('picEnv');
const postcardDiv = document.getElementById('picPost');

const clickEnv = function(){
    // to style the buttons when clicked
    postButt.style.borderWidth = '0px';
    envButt.style.borderWidth = '2px';
    bothButt.style.borderWidth = '0px';

    // to show the envelope and hide the postcard
    envelopeDiv.style.display = 'block';
    postcardDiv.style.display = 'none';
}

const clickPost = function(){
    // to style the buttons when clicked
    postButt.style.borderWidth = '2px';
    envButt.style.borderWidth = '0px';
    bothButt.style.borderWidth = '0px';

    // to show the postcard and hide the envelope
    envelopeDiv.style.display = 'none';
    postcardDiv.style.display = 'block';
}

const clickBoth = function(){
    // to style the buttons when clicked
    postButt.style.borderWidth = '0px';
    envButt.style.borderWidth = '0px';
    bothButt.style.borderWidth = '2px';

    // to show both postcard and envelope
    envelopeDiv.style.display = 'block';
    postcardDiv.style.display = 'block';
}


envButt.addEventListener('click', clickEnv);
postButt.addEventListener('click', clickPost);
bothButt.addEventListener('click', clickBoth);

// textboxes in the envelope and the postcard
const rNameBox = document.querySelectorAll('.receiver .fName');
const rAddrBox = document.querySelectorAll('.receiver .stAddr');
const rElse = document.querySelectorAll('.receiver .ciStZi');
const rCountry = document.querySelectorAll('.receiver .countryB');

const sNameBox = document.querySelectorAll('.sender .fName');
const sAddrBox = document.querySelectorAll('.sender .stAddr');
const sElse = document.querySelectorAll('.sender .ciStZi');
const sCountry = document.querySelectorAll('.sender .countryB');


const form = document.getElementById('info');

form.addEventListener('submit', (event) =>{
    // putting the name in the envelope and postcard

    // receiver portion
    event.preventDefault();
    for(curr of rNameBox){
        curr.textContent = form.elements['rName'].value;
    }

    for(curr of rCountry){
        curr.textContent = form.elements['rCountry'].value;
    }

    for(curr of rElse){
        let comma = ', ';
        if(form.elements['rCity'].value == '' || form.elements['rState'].value == ''){
            comma = ' ';
        }
        curr.textContent = form.elements['rCity'].value + comma + form.elements['rState'].value + ' ' +
            form.elements['rZip'].value;
    }

    for(curr of rAddrBox){
        curr.textContent = form.elements['rStrAddress'].value;
        if(form.elements['rAppartment'].value != ''){
            curr.textContent += ', ' + form.elements['rAppartment'].value; 
        }
    }

    //sender portion
    for(curr of sNameBox){
        curr.textContent = form.elements['sName'].value;
    }

    for(curr of sAddrBox){
        curr.textContent = form.elements['sStrAddress'].value;
        if(form.elements['sAppartment'].value != ''){
            curr.textContent += ', ' + form.elements['sAppartment'].value; 
        }
    }

    for(curr of sElse){
        let comma = ', ';
        if(form.elements['sCity'].value == '' || form.elements['sState'].value == ''){
            comma = ' ';
        }
        curr.textContent = form.elements['sCity'].value + comma + form.elements['sState'].value + ' ' +
            form.elements['sZip'].value;
    }

    for(curr of sCountry){
        curr.textContent = form.elements['sCountry'].value;
    }
});



