const tags = ["3D", "Art", "web", "Разработка", "Брендинг", "Дизайн", "2022"];
const tecnology = [
  "Blender",
  "Photoshop",
  "react",
  "redux",
  "HTML",
  "scss",
  "Figma",
];

export const projects = {
  frogs: {
    id: "frogs",
    title: "Болотная сиеста",
    text:
      "В этом проекте я воссоздовала 3D сцену, основываясь на 2D референсе. Мне было интересно поработать с персонажами, но не заостряя внимания на анатомии. Хотелось сделать кого-нибудь простого и очаровательного.",
    tag: [tags[0], tags[1]],
    tecnology: [tecnology[0], tecnology[1]],
    links: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=zCtdO5sFN0Q&feature=youtu.be",
      },
    ],
  },
  hogwarts: {
    id: "hogwarts",
    title: "Волшебное общежитие",
    text:
      "В этом проекте я воссоздовала 3D сцену, основываясь на 2D референсе. Меня очень вдохновил образ захламленной комнаты и мне захотелось реализовать уютную комнату, поэксперементировать с освещением и простой симуляцией тканей.",
    tag: [tags[0], tags[1]],
    tecnology: [tecnology[0], tecnology[1]],
    links: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=zCtdO5sFN0Q&feature=youtu.be",
      },
    ],
  },
  village: {
    id: "village",
    title: "Деревенька викингов",
    text:
      "3D проект вдохновленный скандинавским стилем. В этом проекте я хотела сделать небольшую, возможно игровую локацию для квеста. Особое внимание было уденео воде, флоре и общей атмосфере запущенности. Моей целью было вызвать у зрителя желание побродить внутри сцены.",
    tag: [tags[0], tags[1]],
    tecnology: [tecnology[0], tecnology[1]],
    links: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=zCtdO5sFN0Q&feature=youtu.be",
      },
    ],
  },
  fac: {
    id: "FAC",
    title: "Fake Art Clicker",
    text:
      "Кликер со скрытой механикой обучения, в котором игроку предстоит стать художником фальсификаторм и копировать работы мастеров прошлого. В проекте реализовано множество нетипичных для этого игрового жанра механик, логика хранения данных, а также продуманы и протестированы формулы для комфортной инры.",
    tag: [tags[2], tags[3], tags[4]],
    tecnology: [tecnology[2], tecnology[3], tecnology[4], tecnology[5]],
    links: [
      {
        type: "video",
        url: "https://www.youtube.com/watch?v=zCtdO5sFN0Q&feature=youtu.be",
      },
    ],
  },
  fysci: {
    id: "fysci",
    title: "Fysci",
    text:
      "Небольшой проектв котором я разработала прототип сервиса по поиску научных лабораторий для магистов, а также его презентацию. ",
    tag: [tags[2], tags[5]],
    tecnology: [tecnology[6]],
    links: [],
  },
};
