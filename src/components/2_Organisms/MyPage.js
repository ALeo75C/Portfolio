import React from "react";

import Skill from "../1_Molecules/Skill";
import { IoGameController, IoHeadset, IoBookSharp } from "react-icons/io5";

export default function MyPage(props) {
  return (
    <div className="MyPage">
      <div className="Info">
        <div className="Content">
          <h1>
            Инсафутдинова <br /> Валерия (Салаватовна)
          </h1>
          <div className="Points">
            <p>— 05.08.1999</p>
            <p>— za.iz.pr@yandex.kz</p>
            <p>— +7 (968) 996-30-92</p>
            <p>— Москва, Рублевское шоссе, 79</p>
          </div>
        </div>
        <div className="Photo"></div>
      </div>
      <div className="Icons">
        <IoGameController />
        <IoHeadset />
        <IoBookSharp />
      </div>
      <div className="About">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci,
          sagittis sollicitudin varius lacus lobortis. Pharetra tellus arcu at
          sagittis, erat euismod non quis. Sit feugiat commodo massa aliquam
          quam aliquet. Morbi sagittis neque, enim mus arcu. Nisl et placerat
          elit duis mauris, tincidunt sed.
        </p>
      </div>
      <div className="SkillsAndWork">
        <div className="Skills">
          <Skill title="Figma" level={0} />
          <Skill title="HTML" level={0} />
          <Skill title="JS" level={0} />
          <Skill title="Photoshop" level={0} />
          <Skill title="Ruby on Rails" level={0} />
          <Skill title="SQL" level={0} />
          <Skill title="Illustrator" level={0} />
          <Skill title="Python" level={0} />
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
    </div>
  );
}
