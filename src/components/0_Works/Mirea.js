import im00 from "../../assets/pages/mirea/01.png";
import im01 from "../../assets/pages/mirea/02.png";
import im02 from "../../assets/pages/mirea/03.png";
// import im03 from "../../assets/pages/mirea/04.png";
// import im04 from "../../assets/pages/mirea/05.png";
// import im05 from "../../assets/pages/mirea/06.png";

import { IoChevronDownOutline } from "react-icons/io5";

import { projects } from "../../data.js";

const switchView = () => {
  const info = document.body.getElementsByClassName("info")[1];
  info.className.split(" ")[1]
    ? info.classList.remove("hidden")
    : info.classList.add("hidden");
  console.log(info.className);
};

export default function CS() {
  return (
    <div className="works">
      <div className="moreInformation">
        <div className="open" onClick={switchView}>
          Подробнее <IoChevronDownOutline />
        </div>
        <div className="info hidden">
          <p>{projects.merea.text[1].replace(/[N]/g, "\u00A0")}</p>
          <p>{projects.merea.text[2].replace(/[N]/g, "\u00A0")}</p>
        </div>
      </div>
      <img src={im00} alt="Референс" />
      <iframe
        src="https://www.youtube.com/embed/hdOiYfG2GhY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img src={im01} alt="Референс" />
      <img src={im02} alt="Референс" />
      <iframe
        src="https://www.youtube.com/embed/uhh6BWdPp0s"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
