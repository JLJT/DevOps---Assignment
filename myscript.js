var video = [
"https://www.youtube.com/embed/FCQ5esd_klk", //0 -Ep1
"https://www.youtube.com/embed/sSuuROStkzk", //1 -Ep2
"https://www.youtube.com/embed/6QhAaLJeWsk", //2 -Ep3
"https://www.youtube.com/embed/W0fKUG8nTKw" //3 -Ep4
];

var next_btn = document.getElementById("nextbutton");
var counter = 1;
    next_btn.addEventListener("click", function(){
    if(counter === 3) {document.getElementById("nextbutton").disabled = true};
    document.getElementById("backbutton").disabled = false
    lessonvideo.src= video[counter]
    counter = counter + 1

});

var back_btn = document.getElementById("backbutton");
    back_btn.addEventListener("click", function(){
    if(counter === 0) {document.getElementById("backbutton").disabled = true}
    document.getElementById("nextbutton").disabled = false
    lessonvideo.src= video[counter];
    counter = counter - 1
});

var attemptquiz_btn = document.getElementById("attemptquiz");
    attemptquiz_btn.addEventListener("click", function(){
    alert("Route to Quiz Section") //to be linked to quiz part

});

