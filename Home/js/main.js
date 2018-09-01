$(".home").click(function(){
    $(".home").addClass("active");
    $(".dashboard").removeClass("active");
})
$(".dashboard").click(function(){
    $(".dashboard").addClass("active");
    $(".home").removeClass("active");
})
var state = $(".trueLeader").text();

if(state == "Leader"){
    $(".forTeamLeaders").css("display","Block");
}
else{
    $(".forTeamLeaders").css("display","none");
}