import im00 from "../../assets/pages/frogs/00.png";
import im01 from "../../assets/pages/frogs/01.png";
import im02 from "../../assets/pages/frogs/02.png";
import im03 from "../../assets/pages/frogs/03.png";
import im04 from "../../assets/pages/frogs/04.png";
import im05 from "../../assets/pages/frogs/05.png";
import im06 from "../../assets/pages/frogs/06.png";
import im07 from "../../assets/pages/frogs/07.png";

export default function Froogs() {
  return (
    <div className="works">
      <img src={im00} alt="Референс" />
      <iframe
        src="https://www.youtube.com/embed/zCtdO5sFN0Q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img src={im01} alt="Лягушачья сиеста" />
      <img src={im02} alt="Лягушачья сиеста" />
      <img src={im03} alt="Лягушачья сиеста" />
      <img src={im04} alt="Лягушачья сиеста" />
      <img src={im05} alt="Лягушачья сиеста" />
      <img src={im06} alt="Лягушачья сиеста" />
      <img src={im07} alt="Лягушачья сиеста" />
    </div>
  );
}
