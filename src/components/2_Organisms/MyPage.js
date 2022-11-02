import React from "react";

import Skill from "../1_Molecules/Skill";
import { IoGameController, IoHeadset, IoBookSharp } from "react-icons/io5";
import { FaWindows, FaUbuntu } from "react-icons/fa";

export default function MyPage(props) {
  // prettier-ignore
  let about = "Родилась вNКазахстане (Караганда). ВNшколе изучала базовые аспекты программирования иNверстки. После кончания школыN(2017г) подрабатывала годNиNготовилась кNпоступлению вNВУЗ. ВN2018г поступила вNНИУNВШЭ, ШколаNдизайна, Дизайн иNпрограммирование, гдеNучилась доN2022года."
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
              <span>—</span> za.iz.pr@yandex.ru
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
            <p>{about.replace(/[N]/g, "\u00A0")}</p>
          </div>
          <div className="Work">
            <h3>Фриланс – дизайнер</h3>
            <span>2019 – настоящее время</span>
            <p>
              {"Создаю визуализацию дляNинстаграмм-постов иNсторис нескольких аккаунтов.".replace(
                /[N]/g,
                "\u00A0"
              )}
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
            <Skill title="Photoshop" level={70} />
            <Skill title="Ruby on Rails" level={40} />
            <Skill title="Blender" level={60} />
            <Skill title="SQL" level={40} />
            <Skill title="Premier Pro" level={40} />
            <Skill title="Illustrator" level={30} />
            <Skill title="Python" level={30} />
          </div>
          <div className="Icons">
            <FaWindows />
            <FaUbuntu />
          </div>
        </div>
      </div>
    </div>
  );
}
