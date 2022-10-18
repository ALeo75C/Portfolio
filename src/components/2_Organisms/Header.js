import { Link, useLocation } from "react-router-dom";

const getLink = (location) => {
  const href = location.pathname;
  let link = "";
  href == "/lError_403"
    ? (link = (
        <Link className="_color" to="/">
          <p>lError_403</p>
        </Link>
      ))
    : (link = (
        <Link to="lError_403">
          <p>lError_403</p>
        </Link>
      ));
  return link;
};

const changeContent = () => {
  console.log("CHANGE");
};

export default function Header() {
  // const email = document.getElementsByClassName("e-mail")[0];
  // email.addEventListener("mouseenter", (e) => {
  //   email.textContent = "za.iz.pr@yandex.kz";
  // });
  // email.addEventListener("mouseleave", (e) => {
  //   email.textContent = "e-mail";
  // });
  //
  return (
    <div className="Header">
      <div class="left">{getLink(useLocation())}</div>
      <div class="rigth">
        <a
          className="e-mail"
          target="_blank"
          href="mailto:za.iz.pr@yandex.kz"
          onmouseenter={() => changeContent()}
        ></a>
        <a target="_blank" href="https://t.me/lError_403">
          Telegram
        </a>
      </div>
    </div>
  );
}
