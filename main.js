const gentrateMemeBtn = document.querySelector(".meme-genrator .genrate-meme-btn");
const memeImage = document.querySelector(".meme-genrator img");
const memeTitle = document.querySelector(".meme-genrator .meme-title");
const memeAuthor = document.querySelector(".meme-genrator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};




const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes").then(
        (response) => response.json())
        .then((data) => {
            updateDetails(data.url, data.title, data.author);
        });
}


gentrateMemeBtn.addEventListener("click", generateMeme);
generateMeme();
