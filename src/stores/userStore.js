import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userInfo = {
    name: "Роберто",
    city: "Екатеринбург",
    secondName: "Карлос",
    middleName: "Сергеевич",
    email: "roberto@gmail.com",
    avatarPrew:
      "https://static.tildacdn.com/tild3832-3665-4264-b065-306532616265/2021-02-06_223198-2.jpg",
  }
  const userResume = {
    greeting: "👋 Привет!",
    profession: ["Front-end developer",  "UI designer"],
    messengers: [
      { type: "whatsapp", link: "https://wa.me/88005553535" },
      { type: "telegram", link: "https://t.me/+78005553535" },
      { type: "мой телефон", link: "tel:88005553535" },
    ],
    cv: "downloadLink",
  };
    const userDescription = {
    avatarDescription:
      "https://pikuco.ru/upload/test_stable/7af/7aff91cc1aa1759e06e9342e0bb6238c.webp",
    description: [
      "👋Меня зовут Вашингтон Энрике Фернандес де Соуза, но вы можете называть меня просто Энрике. Приятно!",
      "👋Уже более 2 лет разрабатываю и программирую интерфейсы с JavaScript, React JS и Typescript.",
      "👋Выпускник Fatec в области системного анализа и разработки Сан-Жозе-дус-Кампос",
      "👋Интересы в фронтенд-разработке с React, React Native, VueJS и UX/UI Design.",
      "👋Стараясь быть чуть лучше, чем вчера каждый день.",
    ], 
  }

  skillAndExperiense = {
    career : [{ name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
  { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
  { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
  { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
  { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },],
  achievements :  [{ name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
  { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
  { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
  { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
{ name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },],
  }


  userPortfolio = [
    {
      name: "someName1",
      description:
        "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
      tags: ["JS", "Vue.js", "CSS"],
      img: "./src/assets/img/screen.png",
    },
    {
      name: "someName2",
      description:
        "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
      tags: ["JS", "Vue.js", "CSS"],
      img: "./src/assets/img/screen2.png",
    },
    {
      name: "someName3",
      description:
        "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
      tags: ["JS", "Vue.js", "CSS"],
      img: "./src/assets/img/screen.png",
    },
    {
      name: "someName2",
      description:
        "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
      tags: ["JS", "Vue.js", "CSS"],
      img: "./src/assets/img/screen2.png",
    },
    {
      name: "someName3",
      description:
        "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
      tags: ["JS", "Vue.js", "CSS"],
      img: "./src/assets/img/screen.png",
    },
    {
      name: "someName2",
      description:
        "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
      tags: ["JS", "Vue.js", "CSS"],
      img: "./src/assets/img/screen2.png",
    },
    {
      name: "someName3",
      description:
        "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
      tags: ["JS", "Vue.js", "CSS"],
      img: "./src/assets/img/screen.png",
    },
    {
      name: "someName2",
      description:
        "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
      tags: ["JS", "Vue.js", "CSS"],
      img: "./src/assets/img/screen2.png",
    },
    {
      name: "someName3",
      description:
        "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
      tags: ["JS", "Vue.js", "CSS"],
      img: "./src/assets/img/screen.png",
    },
    {
      name: "someName2",
      description:
        "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
      tags: ["JS", "Vue.js", "CSS"],
      img: "./src/assets/img/screen2.png",
    },
    {
      name: "someName3",
      description:
        "Aplicação da NLW#04 da Rocketseat. Desenvolvida com React. Plataforma de Pomodoro com exercícios.",
      tags: ["JS", "Vue.js", "CSS"],
      img: "./src/assets/img/screen.png",
    },
  ];

  return {  userInfo, userResume, userDescription, userPortfolio, skillAndExperiense }
})
