$(document).ready(function(){
    $("#start").click(function(){
        $("#welcome").fadeOut(650);
        $("#welcomeModal").modal();
    });
    $("#about").click(function(){
        $("#info").fadeIn(650); 
    });
    $("#back").click(function(){
        $("#info").fadeOut(650);   
    });
    $("#help").click(function(){
    	$("#welcomeModal").modal();
    });
});
