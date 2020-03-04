function solve() {

	let buttons = document.getElementsByTagName('button');
	let textarea = document.getElementsByTagName('textarea');
	
	buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);
    
    function encode() {

       let encodeMsg = textarea[0].value;
       let newMsg = "";
       encodeMsg.split('')
                .forEach((char) => {
          let asciiValue = char.charCodeAt(0) + 1;
          newMsg += String.fromCharCode(asciiValue);
       });

       textarea[0].value = "";
       textarea[1].value = newMsg;
    }
    
    function decode() {

       let decodeMsg = textarea[1].value;
       let newMsg = "";
       let originalMsg = "";

       decodeMsg.split('')
                .forEach((char) => {
          let asciiValue = char.charCodeAt(0) - 1;
          originalMsg += String.fromCharCode(asciiValue);
       });

        textarea[1].value = originalMsg;
    }
}
