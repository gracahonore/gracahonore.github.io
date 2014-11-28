$(function(){

$(".slider").cycle({

timeout: 5000,
fx: "scrollDown"
});
});
$(document).ready(function(){
$(".link_scond").hide();
$(".aberta").click(function(){
$(this).toggleClass("active").next().slideToggle("slow");
return false;
});
});

$(
function(){
$(".mendrop li").hover(

function(){
$("ul",this).slideDown(450);
},
function(){
$("ul",this).slideUp(450);
}
);

}
);