import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [
    {
      name: "html-transform",
      transformIndexHtml(html) {
        return html.replace(/<%\s*if\s*\((.*?)\)\s*%>([\s\S]*?)<% } %>/g, (_, condition, content) => {
          return eval(condition) ? content : "";
        });
      },
    },
  ],
});
