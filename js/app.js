"use strict";
$(document).ready(function() {
    var calcScreen = $('#screen');
    var answer = "";
    $("span").on("click", function() {
        if ($(this).html() === "C") {
            return calcScreen.empty();
        } else if ($(this).html() === "=") {
            try {
              answer = eval(calcScreen.text().replace("x", "*").replace("÷", "/"));
            } catch (e) {
                return calcScreen.text("ERROR");
            }
            calcScreen.empty();
            return calcScreen.text(eval(answer));
        }
        calcScreen.append($(this).html());
    });
});
