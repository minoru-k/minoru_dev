function $Test() {    
    var expect = document.getElementById("test").value;
    var target = $("test").value;

    __assert__("storage.js:8", expect === target, "");
}

window.addEventListener("load", function() {
    document.getElementById("execButton").addEventListener("click", function() {
        $Test();
    });
});