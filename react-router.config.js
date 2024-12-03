export default {
  appDirectory: "src",
  ssr: true,
  async prerender() {
    return [
      "/",
      "/work",
      "/skills",
      "/projects/socialsphere",
      "/projects/wingsinprogress",
    ];
  },
};
