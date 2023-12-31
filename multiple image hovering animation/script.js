var element = document.querySelectorAll('.element')
var elemImage1 = document.querySelector("#elemImage1")

element.forEach(function (val) {
val.addEventListener('mousemove', function (dets) {
    //console.log(dets)
    val.childNodes[3].style.left = dets.x+'px'
   // val.childNodes[3].style.top = dets.y+'px'

});

val.addEventListener('mouseenter', function (dets) {
    val.childNodes[3].style.opacity = 1 
});

val.addEventListener('mouseleave', function (dets) {
    val.childNodes[3].style.opacity = 0 
});
    
})


/*
element1.addEventListener('mousemove', function (dets) {
    //console.log(dets)
    elemImage1.style.left = dets.x+'px'
    elemImage1.style.top = dets.y+'px'

});

element1.addEventListener('mouseenter', function (dets) {
    elemImage1.style.opacity = 1 
});

element1.addEventListener('mouseleave', function (dets) {
    elemImage1.style.opacity = 0 
});
*/