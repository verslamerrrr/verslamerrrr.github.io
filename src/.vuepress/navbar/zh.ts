import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/zh/",
  {
    text: "life",
    icon: "",
    children: [
      "/zh/blog/page1.html",
      "/zh/blog/page2.html",
      "/zh/blog/page3.html",
      "/zh/blog/page4.html",
      "/zh/memoirs.html",

    ]

  }
  
]);
