$(".card").mouseover(function() {
    $("h1").text(this.id);
});

$(".card").mouseout(function(){
    $("h1").text("Hello");
});