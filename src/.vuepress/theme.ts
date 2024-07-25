import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://mister-hope.github.io",

  author: {
    name: "Fiona",
    url: "https://verslamerrr.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/homelogo.png",

  repo: "verslamerrrr/verslamerrrr.github.io",

  docsDir: "src",

  blog: {
    medias: {
      Facebook: "https://www.facebook.com/profile.php?id=100039485511051",
      GitHub: "https://github.com/verslamerrrr",
      Gmail: "mailto:verslamerrrr@gmail.com",
      Instagram: "https://www.instagram.com/verslamerr/?hl=en",
      Wechat: "/wechat.jpg",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: "Default footer",

      displayFooter: true,

      blog: {
        description: "A FrontEnd programmer",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: true,

      blog: {
        description: "一个前端开发者",
        intro: "/zh/intro.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"],
    },
  },

  

  plugins: {
    blog: true,

    
    comment: {
      provider: "Waline",
      serverURL: "https://comments.verslamerrr.com",
      reaction: [
        'https://unpkg.com/@waline/emojis@1.2.0/bmoji/bmoji_applaud.png',
        'https://unpkg.com/@waline/emojis@1.2.0/bmoji/bmoji_aaa.png',
        'https://unpkg.com/@waline/emojis@1.2.0/bmoji/bmoji_ah.png',
        'https://unpkg.com/@waline/emojis@1.2.0/bmoji/bmoji_blushing.png',
        'https://unpkg.com/@waline/emojis@1.2.0/bmoji/bmoji_cute.png',
        'https://unpkg.com/@waline/emojis@1.2.0/bmoji/bmoji_emm.png',

      ],
    },

    components: {
      components: ["Badge", "VPCard"],
    },

    
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tasklist: true,
      vPre: true,

      // install chart.js before enabling it
      // chart: true,

      // insert component easily

      // install echarts before enabling it
      // echarts: true,

      // install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // install katex before enabling it
      // katex: true,

      // install mathjax-full before enabling it
      // mathjax: true,

      // install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },

      // install @vue/repl before enabling it
      // vuePlayground: true,

      // install sandpack-vue3 before enabling it
      // sandpack: true,
    },

   
  },
});
