export const tags = ["Разработка", "Дизайн", "3D"];
const tecnology = [
  "Blender",
  "Photoshop",
  "react",
  "redux",
  "HTML",
  "CSS|SCSS",
  "Figma",
  "Ruby on Rails",
  "SQL",
  "Python",
  "Premier Pro",
];

export const projects = {
  fac: {
    id: "fac",
    theme: "black",
    title: "Fake Art Clicker",
    text: [
      "Инкркментальная игра соNскрытой механикой обучения. ВоNвремя разработки яNподробно изучала конкурентов, стремясь привнести новые механики вNустоявшийся жанр. Лейтмотивом проекта стала фальсификация, поэтому яNактивно паразитировала наNуже готовых решениях, начиная отNосновных механик, устоявшихся формул иNшаблона интерфейсов.",
      "ВNпроцессе работы было написано визуальное исследование, вNкоторое вошли мои наблюдения оNжанре, аNтакже небольшое исследование-сравнение инкрементальных игр иNгеншина. Также вNкнигу вошли наработки поNвизуальной стилю иNготовые прототипы интерфейсов.",
      "ВNработе над проектом яNстремилась кNавтономности иNмаксимальной независимости, поэтому сохранение данных организованно через перепись local storage, чтобы исключить связь сNbackend иNтраты наNсервер.",
    ],
    tag: [tags[0], tags[1]],
    tecnology: [tecnology[2], tecnology[3], tecnology[4], tecnology[5]],
    links: [
      {
        type: "product",
        url: "https://aleo75c.github.io/FakeArtClicker/game.html",
      },
      {
        type: "book",
        url: "https://ru.calameo.com/read/0069584285808aefc9398",
      },
      {
        type: "GitHub",
        url: "https://github.com/HSEADC/fake-art-clicker",
      },
    ],
  },
  merea: {
    id: "merea",
    theme: "black",
    title: "Mirea",
    text: [
      "Mirea-сервис поNподбору косметики. ВNэтом групповом проекте 2019-2020 года яNотвечала заNреализацию проекта. Сервис неNзапущен.",
      "Сервис разбит наNдве части-пользовтельская иNбрендинговая. Для пользователей реализованы возможности регистрации, просмотра продукции иNстраницы брендов, отслеживание понравившихся продуктов, возможность оставлять комментарии. Бренды имеют теNже возможности, что иNобычные пользователи, ноNтакже могут добавлять новые иNредактировать уже существующие продукты, котрые принадлежатNим.",
      "ВNэтом проекте яNпознакомилась соNструктурами баз данных иNспроектировала схему поNкоторой предполагалось работа сервиса.",
      "Помимо «продуктовой части» куда входили описание, состав, аNтакже анализ состава поNнатуральности иNпрочим параметрам была внедрена часть «энциклопедии», вNкоторой планировалось публиковать статьи поNуходу заNсобой, разбирать мифы оNкосметике иNразбирать конкретные компоненты состава для изучения пользователями.",
    ],
    tag: [tags[0]],
    tecnology: [tecnology[7], tecnology[4], tecnology[5]],
    links: [
      {
        type: "GitHub",
        url: "https://github.com/ALeo75C/Detach",
      },
    ],
  },
  crowSwap: {
    id: "crowSwap",
    theme: "white",
    title: "CrowSwap",
    text: [
      "CrowSwapN— внуриуниверситетсуий сервис поNобмену факультативными дисциплинам между студентами. Проекты котором яNтакже вNосновном отвечала заNразработку иNкоторый неNвышел вNпродакшн.",
      "ИзNглавных достижений внутри этого проекта яNсчитаю разработку локальной базы данных для мобильных устройств наNSQLlitth для связи мобильной версии иNбэка, реализацию мультиплатформенного real time чата сNпомощью action cable.",
      "ВNразработке яNполностью взяла наNсебя работу сNбаком, связи сNмобильной версией, проектировкой фронта веб версии (без верстки) иNнаN90Nпроцентов реализовала работу мобильной версии",
    ],
    tag: [tags[0]],
    tecnology: [tecnology[2], tecnology[3], tecnology[4], tecnology[5]],
    links: [
      {
        type: "GitHub",
        url: "https://github.com/GrSkiy/HSESwap",
      },
      {
        type: "GitHub",
        url: "https://github.com/ZakharDay/ADC-Swap",
      },
    ],
  },
  genshinViki: {
    id: "genshinViki",
    theme: "white",
    title: "Genshin Wiki",
    text: [
      "Проект полностью концентрированный вокруг баз данных иNSQL. Мною была спроектирован база данных, заполнена поNсредствам парсинга, аNтакже были написаны ряд запросов для взаимодействия сNбазой данных. Простенький интерфейс был спроектирован вNjputerLab наNpython.",
    ],
    tag: [tags[0]],
    tecnology: [tecnology[8], tecnology[9]],
    links: [
      {
        type: "GitHub",
        url: "https://github.com/ALeo75C/GenshinWiki",
      },
    ],
  },
  frogs: {
    id: "frogs",
    title: "Болотная сиеста",
    text: [
      "ВNэтом проекте яNвоссоздовала 3DNсцену, основываясь наN2DNреференсе. Мне было интересно поработать сNперсонажами, ноNнеNзаостряя внимания наNанатомии. Хотелось сделать кого-нибудь простого иNочаровательного.",
    ],
    tag: [tags[2]],
    tecnology: [tecnology[0], tecnology[1], tecnology[10]],
    links: [],
  },
  hogwarts: {
    id: "hogwarts",
    title: "Волшебное общежитие",
    text: [
      "ВNэтом проекте яNвоссоздовала 3DNсцену, основываясь наN2DNреференсе. Меня очень вдохновил образ захламленной комнаты иNмне захотелось реализовать уютную комнату, поэксперементировать сNосвещением иNпростой симуляцией тканей.",
    ],
    tag: [tags[2]],
    tecnology: [tecnology[0], tecnology[1]],
    links: [],
  },
  village: {
    id: "village",
    title: "Деревенька викингов",
    text: [
      "3DNпроект вдохновленный скандинавским стилем. СценаN — небольшая диарама, изображающая деревню викингов. Особое внимание было уделено воде, флоре иNобщей атмосфере. Целью было вызвать уNзрителя желание попасть внутрь.",
    ],
    tag: [tags[2]],
    tecnology: [tecnology[0], tecnology[1]],
    links: [],
  },
  fysci: {
    id: "fysci",
    title: "Fysci",
    text: [
      "Небольшой проектв котором яNразработала прототип сервиса наNскорую руку (общее прототипирование иNвизуализация занала неNбольше 2-3Nчасов) поNпоиску научных лабораторий для магистов, аNтакже его презентацию.",
    ],
    tag: [tags[1]],
    tecnology: [tecnology[6]],
    links: [],
  },
};
