const btn = document.getElementById("btn") ; 
btn.addEventListener("click" , generatePassword) ; 
function generatePassword() {
    let password = document.getElementById("password") ; 
    let values = '0123[45!6789' + 'ab<cde*fghi{}jklm(nopqrstuv*wxyz' + 'ABCD%EFGHI?J3_K#LMNOPQ/RSTUV@WXYZ' ; 
    let pwd = '' ; 
    for(let i=0 ; i<7 ; i++) { //pwd length only upto 7
        let rand = Math.floor(Math.random()*values.length+1) ; //gives random index  
        pwd+=values.charAt(rand);  
    } 
    password.innerHTML = pwd ; 
}