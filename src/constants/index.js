import {
  benefitImage2,
  chromecast,
  disc02,
  Modeling,
  Printing,
  notification2,
  notification3,
  notification4,
  Painting,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  Layout,
  sliders04,
  telegram,
  vk,
  email
} from "../assets";

// Навигация
export const navigation = [
  {
    id: "0",
    title: "Преимущества",
    url: "#features",
  },
  {
    id: "1",
    title: "О нас",
    url: "#about",
  },
  {
    id: "2",
    title: "Цены",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Свяжитесь с нами",
    url: "#contact-us",
  },
];

// Иконки для героя
export const heroIcons = [Printing, Modeling, Layout, Painting];

// Изображения уведомлений
export const notificationImages = [notification4, notification3, notification2];

// Услуги Solovey3D
export const brainwaveServices = [
  "Создание прототипов",
  "3D-печать по индивидуальным заказам",
  "Бесшовная интеграция с проектами",
];

// Иконки услуг Solovey3D
export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

// Дорожная карта
export const roadmap = [
  {
    id: "0",
    title: "Усовершенствование материалов",
    text: "Разработка и внедрение новых типов 3D-пластика и композитов для повышения прочности и точности печати.",
    date: "Май 2023",
    status: "Выполнено",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Расширение ассортимента",
    text: "Добавление новых моделей и услуг, таких как печать на больших объемах и сложных геометриях.",
    date: "Июнь 2023",
    status: "В процессе",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Интеграция с CAD-системами",
    text: "Внедрение прямого импорта 3D-моделей из CAD-систем для упрощения процесса создания прототипов.",
    date: "Июль 2023",
    status: "Выполнено",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Обновление оборудования",
    text: "Модернизация 3D-принтеров для улучшения качества печати и увеличения скорости выполнения заказов.",
    date: "Август 2023",
    status: "В процессе",
    imageUrl: roadmap4,
  },
];

// Текст для секции коллабораций
export const collabText =
  "С умными автоматизациями и высоким качеством печати, Solovey3D предлагает идеальные решения для создания уникальных и точных 3D-моделей.";

// Контент для секции коллабораций
export const collabContent = [
  {
    id: "0",
    title: "Бесшовная интеграция",
    text: collabText,
  },
  {
    id: "1",
    title: "Высокое качество печати",
  },
  {
    id: "2",
    title: "Индивидуальный подход",
  },
];

// Приложения для коллабораций
export const collabApps = [
  {
    id: "0",
    title: "Printing",
    icon: Printing,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Modeling",
    icon: Modeling,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Layout",
    icon: Layout,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Painting",
    icon: Painting,
    width: 34,
    height: 35,
  }
];

// Цены
export const pricing = [
  {
    id: "0",
    title: "3D печать",
    description: "Создание объектов любой формы с использованием передовых технологий 3D печати. Подходит для прототипирования, визуализации и производства конечных изделий",
    price: null,
    features: [
      "Печать простых и сложных объектов",
      "Использование различных материалов",
      "Быстрое и эффективное производство",
    ],
  },
  {
    id: "1",
    title: "3D Моделирование",
    description: "Разработка и доработка 3D моделей для различных задач, включая проектирование, исправление ошибок и создание новых продуктов",
    price: null,
    features: [
      "Разработка новых моделей",
      "Доработка и исправление ошибок",
      "Контроль качества и собираемости",
    ],
  },
  {
    id: "2",
    title: "Покраска и Постобработка",
    description: "Улучшение внешнего вида 3D печатных деталей с помощью покраски, полировки и других методов постобработки",
    price: null,
    features: [
      "Покраска и нанесение глянца или матовой поверхности",
      "Шлифование и полировка для устранения слоистости",
      "Индивидуальная обработка по запросу",
    ],
  },
  {
    id: "3",
    title: "Макетирование",
    description: "Создание различных макетов для архитектуры, обучения, ландшафта и технических целей с использованием 3D принтера",
    price: null,
    features: [
      "Создание архитектурных и технических макетов",
      "Печать в несколько этапов для больших макетов",
      "Процесс сборки и окрашивания под ключ",
    ],
  },
];

// Преимущества
export const benefits = [
  {
    id: "0",
    title: "Масштабное производство",
    text: "Большой парк оборудования, который при необходимости можно увеличить под ваши запросы.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Компетентный персонал",
    text: "Стаж наших сотрудников более 10 лет. Предлагаем тестовые образцы и помощь в выборе материалов и технологий.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Комплексный подход",
    text: "Полный производственный цикл от моделирования до готового продукта.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Скорость производства",
    text: "Используем профессиональное оборудование, комплексный подход к задачам и высокие производственные мощности.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Контроль качества",
    text: "Регулярно проводим обслуживание оборудования и контрольные тесты для качества печати.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Работайте с профессионалами, это сэкономит Ваше время и деньги.",
    text: "",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    imageUrl: benefitImage2,
  },
];

// Социальные сети
export const socials = [
  {
    id: "0",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "1",
    title: "Вконтакте",
    iconUrl: vk,
    url: "#",
  },
  {
    id: "2",
    title: "Email",
    iconUrl: email,
    url: "#",
  },
];
