import { Link } from "react-router-dom";

import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
export default function Footer() {
  return (
    <div className="Footer">
      <div class="left">
        <a
          target="_blank"
          href="mailto:za.iz.pr@yandex.kz?subject=FakeArtClicker"
        >
          <Mail />
        </a>
        <Link to="/">
          <p>Aleo75C</p>
        </Link>
        <a target="_blank" href="https://t.me/ALeo75C">
          <Telegram />
        </a>
      </div>
      <div class="rigth">
        <p>Москва</p>
        <p>2020</p>
      </div>
    </div>
  );
}
