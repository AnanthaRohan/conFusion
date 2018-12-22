$(document).ready(function(){
    $("#mycarousel").carousel( { interval: 2000 } );
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });
    $("#aa").click(function(){
    $('#loginModal').modal('toggle');
    $('#loginModal').modal('show');
  });
  $("#ab").click(function(){
    $('#tableModal').modal('toggle');
    $('#tableModal').modal('show');
});

});