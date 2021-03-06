﻿// エレメント取得
function $(e) { return document.getElementById(e); }

// ページの読み込みが完了したら処理する
window.addEventListener("load", function(){
    // 今日の日付をテキストフィールドに設定
    var dateObj = new Date();
    var Y = dateObj.getFullYear();
    var M = dateObj.getMonth() + 1;
    var D = dateObj.getDate();
    var dateString = Y+"年"+M+"月"+D+"日";
    $("memoDate").value = dateString;

    // 結果を表示するための要素を変数に入れておく
    var ele = $("status");
    // ローカルストレージが使えるかチェック
    if (!window.localStorage){
        ele.innerHTML = "ローカルストレージが使えるブラウザをご利用ください";
        return;
    }
    // 「保存する」ボタンがクリックされた時の処理
    $("saveButton").addEventListener("click", function(){
        var memo_title = $("memoTitle").value;
        var memo_date = $("memoDate").value;
        var memo_text = $("memoContents").value;
        window.localStorage.setItem("memoTitle", memo_title);
        window.localStorage.setItem("memoDate", memo_date);
        window.localStorage.setItem("memoData", memo_text);
        ele.innerHTML = "内容を保存しました";
    }, true);
    // 「保存した内容を読み出す」ボタンがクリックされた時の処理
    $("loadButton").addEventListener("click", function(){
        var memo_text = window.localStorage.getItem("memoData");
        var memo_title = window.localStorage.getItem("memoTitle");
        var memo_date = window.localStorage.getItem("memoDate");
        if (memo_text == null){
            ele.innerHTML = "保存されたメモはありません";
            return;
        }
        $("memoTitle").value = memo_title;
        $("memoDate").value = memo_date;
        $("memoContents").value = memo_text;
        ele.innerHTML = "内容を読み出しました";
    }, true);
}, true);