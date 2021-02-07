import createElement from "../layout/createElement";

const blockWorksNode = document.querySelector(".works__block");

export default function showAndHidePopUp(arr) {
  for (let i = 0; i < arr.length; i++) {
    let boxWorksNode = createElement("div", "works__box");
    let imgWorksNode = createElement(
      "img",
      "works__img",
      null,
      arr[i],
      "Photo no loading"
    );

    let popUpNode = createElement("div", "works__pop-up");
    let popUpCloseBtnNode = createElement("button", "works__button");
    let popUpImgNode = createElement(
      "img",
      "works__img works__img--center",
      null,
      arr[i],
      "Photo no loading"
    );

    imgWorksNode.setAttribute("data-index", arr[i]);
    popUpCloseBtnNode.setAttribute("data-index", arr[i]);

    popUpCloseBtnNode.textContent = "X";

    boxWorksNode.appendChild(imgWorksNode);
    blockWorksNode.appendChild(boxWorksNode);

    popUpNode.appendChild(popUpCloseBtnNode);
    popUpNode.appendChild(popUpImgNode);
    blockWorksNode.appendChild(popUpNode);

    blockWorksNode.addEventListener("click", (e) => {
      let target = e.target;
      let imgIndex = target.dataset.index;
      if (!imgIndex) return;

      if (target) {
        if (imgIndex === popUpCloseBtnNode.dataset.index) {
          popUpNode.style.display = "block";
        }
        if (target === popUpCloseBtnNode) {
          popUpNode.style.display = "none";
        }
      }
    });
  }
}

