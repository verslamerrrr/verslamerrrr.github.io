import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Fiona's Blog",
      description: "A journey begins",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Fiona的博客",
      description: "一段旅程的开始",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
