
//******************************************************************************************
// Lecture d'un cookie 
//******************************************************************************************

function getCookie(szName) {
    var szValue = null;
    if (document.cookie)	   //only if exists
    {
        var arr = document.cookie.split(szName + '=');
        if (2 <= arr.length) {
            var arr2 = arr[1].split(';');
            szValue = unescape(arr2[0]);
        }
    }
    return szValue;
}
