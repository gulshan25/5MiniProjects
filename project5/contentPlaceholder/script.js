const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
    header.innerHTML =
        ' <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG6nrcKPWgggL8hBwKOqDlT4yHWZh4aG0KnKGZpQKp1mE0zG0_QrZgvFq8eBdhcNd8qDg&usqp=CAU" alt="" />';
    title.innerHTML = "Lorem ipsum dolor sit amet, consectetur adip";
    excerpt.innerHTML = "Lorem ipsum dolor sit amet, consectetur adip";
    profile_img.innerHTML =
        '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png" alt="" />';
    name.innerHTML = "John Doe";
    date.innerHTML = "Oct 08, 2020";

    animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
    animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg=text"));
}