<template>
  <!-- приветсвенная секция -->
  <welcome-section :user="userWelcome"  v-observe="{class:'welcome-wrap'}"/>
  <!-- /приветсвенная секция -->

  <!-- Описание -->
    <description-section :user="userDescription" v-observe="{class:'description'}"/>
  <!-- /Описание -->

  <!-- Портфолио -->
    <portfolio-section :portfolio="user.portfolio" v-observe="{class:'portfolio'}"/>
  <!-- /Портфолио -->
  <!-- Карьера -->
  <cariera-section :career="user.career" :achievements="user.achievements" v-observe="{class:'career'}"/>
  <!-- /Карьера -->
</template>

<script>
import DescriptionSection from '../components/section/DescriptionSection.vue'
import WelcomeSection from "../components/section/WelcomeSection.vue";
import PortfolioSection from "../components/section/PortfolioSection.vue";
import CarieraSection from '../components/section/CarieraSection.vue';
import { computed } from "vue";
import { useUserStore } from '@/stores/UserStore.js';
import { storeToRefs } from 'pinia'; 

export default {
  components: {
    WelcomeSection,
    DescriptionSection,
    PortfolioSection,
    CarieraSection,
  },

  async setup() {
    const user = {
      name: "Роберто",
      city: "Екатеринбург",
      secondName: "Карлос",
      middleName: "Сергеевич",
      email: "roberto@gmail.com",
      greeting: "👋 Привет!",
      profession: "Front-end developer · UI designer",
      messengers: [
        { type: "whatsapp", link: "https://wa.me/88005553535" },
        { type: "telegram", link: "https://t.me/+78005553535" },
        { type: "мой телефон", link: "tel:88005553535" },
      ],
      cv: "downloadLink",
      avatarPrew:
        "https://static.tildacdn.com/tild3832-3665-4264-b065-306532616265/2021-02-06_223198-2.jpg",
      avatarDescription:
        "https://pikuco.ru/upload/test_stable/7af/7aff91cc1aa1759e06e9342e0bb6238c.webp",
      description: [
        "👋Меня зовут Вашингтон Энрике Фернандес де Соуза, но вы можете называть меня просто Энрике. Приятно!",
        "👋Уже более 2 лет разрабатываю и программирую интерфейсы с JavaScript, React JS и Typescript.",
        "👋Выпускник Fatec в области системного анализа и разработки Сан-Жозе-дус-Кампос",
        "👋Интересы в фронтенд-разработке с React, React Native, VueJS и UX/UI Design.",
        "👋Стараясь быть чуть лучше, чем вчера каждый день.",
      ],
      portfolio: [
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
      ],

      skillAndExperiense: ["asd", "asd", "asd", "asd", "asd"],
      career: [{ name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
      { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
      { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
      { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
      { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },],
      achievements: [{ name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
      { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
      { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
      { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },
    { name: "Frontend", description: "bodyboby", dateBegin: "02.09.2002", dateEnd: "02.09.2002" },],
    };
    const userWelcome = computed(() => {
      return {
        name: user.name,
        secondName: user.secondName,
        greeting: user.greeting,
        avatarPrew: user.avatarPrew,
        messengers: user.messengers,
      };
    });
    const userDescription = computed(() => {
      return {
        name: user.name,
        secondName: user.secondName,
        middleName: user.middleName,
        avatarDescription: user.avatarDescription,
        description: user.description,
      };
    });

    return {
      user,
      userWelcome,
      userDescription,
    };
  },
};
</script>

