// ==UserScript==
// @name        KarmaViewer
// @author      Snizzle
// @version     1.0
// @downloadURL li
// @updateURL   li
// @supportURL  http://www.jeuxvideo.com/messages-prives/nouveau.php?all_dest=Snizzle;Snitchzzle
// @copyright   2019, Snizzle
// @licence     MIT
// @description Affiche le karma en cliquant sur son pseudo
// @grant       none
// @require     https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// @match       *://www.jeuxvideo.com/*
// @run-at      document-end
// ==/UserScript==

$(function($) {
        function getKarma(){
        $.get("http://www.jeuxvideo.com/sso/settings.php", function(data){
            var resKarma = $(data).find(".actif")[0].outerHTML.split("actif")[0].split("karma")[2].trim();
            $(".jv-nav-dropdown-container-param").html("Karma : "+resKarma+"/10")
        })
    }
    $(".account-pseudo").click(function(){
        getKarma(this);
    })
});
