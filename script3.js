
function Highlight(e, className) {
    if (className == null) {
        className = "highlight";
    }
    overClassName = e.className;
    e.className = className;
}

function Unhighlight(e, className) {
    if (className == null) {
        className = overClassName;
    }
    e.className = className;
}