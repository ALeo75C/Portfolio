import React from "react";

import Skill from "../1_Molecules/Skill";
import { IoGameController, IoHeadset, IoBookSharp } from "react-icons/io5";

export default function MyPage(props) {
  // prettier-ignore
  return (
    <div className="MyPage">
      <div className="Info">
        <div className="ul">
          <h1>
            Инсафутдинова <br /> Валерия (Салаватовна)
          </h1>
          <div className="Points">
            <p>
              <span>—</span> 05.08.1999
            </p>
            <p>
              <span>—</span> za.iz.pr@yandex.kz
            </p>
            <p>
              <span>—</span> +7 (968) 996-30-92
            </p>
            <p>
              <span>—</span> Москва
            </p>
          </div>
        </div>
        <div className="Photo"></div>
      </div>
      <div className="Content">
        <div className="Left">
          <div className="About">
            <p>
              Родилась в&#160;Казахстане (Караганда). В&#160;школе изучала
              базовые аспекты программирования и&#160;верстки. После кончания
              школы&#160;(2017г) подрабатывала год&#160;и&#160;готовилась
              к&#160;поступлению в&#160;ВУЗ. В&#160;2018г поступила в&#160;НИУ&#160;ВШЭ, Школа&#160;дизайна, Дизайн и&#160;программирование, где&#160;училась до&#160;2022года.
            </p>
          </div>
          <div className="Work">
            <h3>Фриланс – дизайнер</h3>
            <span>2020 – НАСТОЯЩЕЕ ВРЕМЯ</span>
            <p>
              Создаю визуализацию для инстаграмм-постов и сторис для нескольких
              аккаунтов.
            </p>
            <span>
              (@flirtshop.kz, @flirtshop_lingerie, @invest_gold_krg,
              @yuta_clinic_krg)
            </span>
          </div>
        </div>
        <div className="Rigth">
          <div className="Skills">
            <Skill title="Figma" level={100} />
            <Skill title="HTML" level={90} />
            <Skill title="JS" level={80} />
            <Skill title="Photoshop" level={60} />
            <Skill title="Ruby on Rails" level={40} />
            <Skill title="SQL" level={40} />
            <Skill title="Premier Pro" level={40} />
            <Skill title="Illustrator" level={30} />
            <Skill title="Python" level={30} />
          </div>
          <div className="Icons">
            <IoGameController />
            <IoHeadset />
            <IoBookSharp />
          </div>
        </div>
      </div>
    </div>
  );
}
