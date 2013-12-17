function $Test() {
    document.getElementById("test1").value = "テスト";
    
    var expect = document.getElementById("test1").value;
    var target = $("test1").value;

    if (expect === target) {
        document.getElementById("result").innerHTML = "OK";
    } else {
        document.getElementById("result").innerHTML = "NG";
    }
}

window.addEventListener("load", function() {
    document.getElementById("execButton").addEventListener("click", function() {
        $Test();
    });
});