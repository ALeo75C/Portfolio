import im00 from "../../assets/pages/fac/08.png";
import im01 from "../../assets/pages/fac/09.png";
import im02 from "../../assets/pages/fac/10.png";
import im03 from "../../assets/pages/fac/11.png";
import im04 from "../../assets/pages/fac/12.png";
import im05 from "../../assets/pages/fac/13.png";
import im06 from "../../assets/pages/fac/14.png";

import { IoChevronDownOutline } from "react-icons/io5";

import { projects } from "../../data.js";

const switchView = () => {
  const info = document.body.getElementsByClassName("info")[1];
  info.className.split(" ")[1]
    ? info.classList.remove("hidden")
    : info.classList.add("hidden");
  console.log(info.className);
};

export default function FAC() {
  return (
    <div className="works">
      <div className="moreInformation">
        <div className="open" onClick={switchView}>
          Подробнее <IoChevronDownOutline />
        </div>
        <div className="info hidden">
          <p>{projects.fac.text[1].replace(/[N]/g, "\u00A0")}</p>
          <p>{projects.fac.text[2].replace(/[N]/g, "\u00A0")}</p>
        </div>
      </div>
      <img src={im01} alt="Референс" />
      <iframe
        src="https://www.youtube.com/embed/ZquyAOgySkk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        src="https://www.youtube.com/embed/-1idtg9Vry8"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img src={im05} alt="Референс" />
      <img src={im02} alt="Референс" />
      <img src={im03} alt="Референс" />
      <img src={im04} alt="Референс" />
      <img src={im06} alt="Референс" />
      <img src={im00} alt="Референс" />
    </div>
  );
}
