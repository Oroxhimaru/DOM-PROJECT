document.addEventListener('DOMContentLoaded', function() {
    // Your code here
    var a = document.querySelector('.cursor');
    var main = document.querySelector("#main");

    main.addEventListener('mousemove', function(dets){
        a.style.left = dets.x + "px";
        a.style.top = dets.y + "px";
    });
});
