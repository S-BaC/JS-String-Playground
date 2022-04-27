//Writing on the keys:
var keysArr = document.getElementsByClassName('key');
var qwerty = [  'q','w','e','r','t','y','u','i','o','p',
                'a','s','d','f','g','h','j','k','l',
                'CAPS','z','x','c','v','b','n','m','Clear','Run',
                '1','2','3','4','5',' ','6','7','8','9','0'];
for(var i = 0; i<keysArr.length; i++){
    keysArr[i].innerHTML = qwerty[i];
}