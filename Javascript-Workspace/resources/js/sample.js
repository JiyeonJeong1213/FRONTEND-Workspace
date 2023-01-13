function test(){
    window.alert('external test');
}

let lastBtn = document.getElementById("lastBtn");

lastBtn.onclick=test;