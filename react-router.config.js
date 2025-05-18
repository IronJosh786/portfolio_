export default {
  appDirectory: "src",
  ssr: true,
  async prerender() {
    return [
      "/",
      "/work",
      "/skills",
      "/projects/quizmaster",
      "/projects/socialsphere",
      "/projects/wingsinprogress",
      "/404",
    ];
  },
};
