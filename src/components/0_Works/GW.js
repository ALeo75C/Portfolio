import im00 from "../../assets/pages/gw/01.png";

import { IoChevronDownOutline } from "react-icons/io5";

import { projects } from "../../data.js";

const switchView = () => {
  const info = document.body.getElementsByClassName("info")[1];
  info.className.split(" ")[1]
    ? info.classList.remove("hidden")
    : info.classList.add("hidden");
  console.log(info.className);
};

export default function GW() {
  return (
    <div className="works">
      <iframe
        src="https://www.youtube.com/embed/aplsx8-HIBQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img src={im00} alt="ER" />
    </div>
  );
}
