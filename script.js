import { imgObj } from "./data.js";

const collageEl = document.querySelector(".collage");
const audioEl = document.querySelector("audio");
const triggerBtn = document.querySelector(".trigger-btn");
let htmlText = "";

triggerBtn.addEventListener("click", () => {
  document.querySelector(".btn-container").classList.add("hidden");
  audioEl.play();
  collageEl.classList.remove("hidden");
});

for (let imgId in imgObj) {
  htmlText += `
          <fieldset class="card-container">
            <article>
              <img src="./assets/${imgObj[imgId]["filename"]}" alt="${
    imgObj[imgId]["alt"]
  }" />            
            </article>
            <legend><span class="imgId">${imgId}</span> <span class="emoji">${imgObj[
    imgId
  ]["emoji"].repeat(7)}</span></legend>
            <p class="img-caption">${imgObj[imgId]["alt"]}</p>
          </fieldset>
        `;
}

collageEl.innerHTML = htmlText;
