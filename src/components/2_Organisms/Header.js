import { Link, useLocation } from "react-router-dom";

const getLink = (location) => {
  const href = location.pathname;
  let link = "";
  href == "/Portfolio/lError_403"
    ? (link = (
        <Link className="_color" to="/Portfolio">
          <p>lError_403</p>
        </Link>
      ))
    : (link = (
        <Link to="/Portfolio/lError_403">
          <p>lError_403</p>
        </Link>
      ));
  return link;
};

export default function Header() {
  return (
    <div className="Header">
      <div className="left">{getLink(useLocation())}</div>
      <div className="rigth">
        <a
          className="e-mail"
          target="_blank"
          href="mailto:za.iz.pr@yandex.kz"
        ></a>
        <a target="_blank" href="https://t.me/lError_403">
          Telegram
        </a>
      </div>
    </div>
  );
}
