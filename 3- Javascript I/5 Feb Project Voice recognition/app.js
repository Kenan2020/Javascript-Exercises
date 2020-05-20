let signin = document.querySelector("#signin")
let signup = document.querySelector("#signup")
let sign = document.querySelector("#sign")
let main = document.querySelector("#main")

signup.addEventListener("click", signFunc)
signin.addEventListener("click", signFunc)
function signFunc(e){
    target = e.target.innerText
    if(target == "signup"){
        main.style.display="none"
        form.style.display="block"
    }else{
        main.style.display="none"
        sign.style.display="block"
    }
    
   // console.log(target)
}

var grammar = '#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;'
var SpeechRecognition = (
    window.SpeechRecognition ||
    window.webkitSpeechRecognition
  );
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector('.output');
var bg = document.querySelector('html');

document.body.onclick = function() {
  recognition.start();
  console.log('Ready to receive a color command.');
}

recognition.onresult = function(event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = 'Result received: ' + color;
  bg.style.backgroundColor = color;
}
