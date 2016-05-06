$(document).ready(function(){
    $("#textSize").click(function () {
       $("#changeText").toggleClass("newTextSize");
    });

    $("#textColor").click(function () {
        $("#changeText").toggleClass("newTextColor");
    });

    $("#textTrough").click(function () {
        $("#changeText").toggleClass("newTextTrough");
    });
    $("#textChange").click(function () {
        $("p").toggleClass("newTextTrough");
    });
    $("p").eq(0).click(function () {
        $("p").toggleClass("newTextColor");
    });
    $("p").eq(1).on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
        click: function(){
            $(this).css("background-color", "yellow");
        }
    });
    $("#hideP").click(function () {
        $("p").toggle(1000);
    });

    /*$.get("./app/db/data.json", function () {
        alert('JSON connected');
    });*/
    $("#testJson").click(function () {
        $.get("./app/db/data.json", function (data, status) {
            alert("Data: " + data.name + "\nStatus: " + status);
        });
    });


});

// $("a.btn").get(0).click(function(event){
//     event.preventDefault();
//     /*$("p").hide();*/
//     alert('test');
// });