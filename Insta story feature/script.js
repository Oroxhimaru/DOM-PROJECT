

var arr = [
    {
        dp: "https://images.pexels.com/photos/9487467/pexels-photo-9487467.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        story: "./yami.png"
    },
    {
        dp: "https://images.pexels.com/photos/19555765/pexels-photo-19555765/free-photo-of-portrait-of-egret-bird.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        story: "https://images.pexels.com/photos/19380634/pexels-photo-19380634/free-photo-of-tabby-cat-yawning.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
]


var clutter = "";

arr.forEach((elem, index) => {
    clutter += `<div class="story" onclick="displayFullScreen(${index})">
        <img src="${elem.dp}" alt="yami">
    </div>`;
});

document.querySelector("#story").innerHTML = clutter;

function displayFullScreen(index) {
    document.querySelector('#full-screen').style.display = 'block';
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[index].story})`;
}