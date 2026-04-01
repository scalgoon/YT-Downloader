const formatOptions = document.getElementById("formatOptions");

const format = document.querySelector('input[type="radio"]:checked').value;
const quality = document.getElementById("quality");
const URL = document.getElementById("importURL");
const search = document.getElementById("search")
const submit = document.getElementById("submit");

const thumbnail = document.getElementById("thumbnail");
const title = document.getElementById("title");
const channel = document.getElementById("channel");

const detailsDiv = document.getElementById("videoDetails");

search.onclick = function () {
    window.ytdl.getInfo(URL.value).then((info) => {
        
        thumbnail.setAttribute("src", `${info.videoDetails.thumbnails[4].url}`);
        title.textContent = `‎ ${info.videoDetails.title}`;
        channel.textContent = `${info.videoDetails.ownerChannelName}`;

        setTimeout(() => {
            detailsDiv.style.display = "flex";
            formatOptions.classList.remove("disabled");
            submit.classList.remove("disabled");
        }, 2000);

    });
}

