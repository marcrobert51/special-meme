//	Gestion du postback
// save a reference to the original __doPostBack
var __oldDoPostBack;
function myPostBack() {
    if (typeof __doPostBack != "undefined") {
        window.__oldDoPostBack = window.__doPostBack;
        // replace __doPostBack with another function
        window.__doPostBack = window.AlwaysFireBeforeFormSubmit;
    }
}
