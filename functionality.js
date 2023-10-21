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



