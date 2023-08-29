// vite.config.js
import { defineConfig } from "file:///C:/Users/user/git-demo/hex/week5/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///C:/Users/user/git-demo/hex/week5/node_modules/vite-plugin-ejs/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "file:///C:/Users/user/git-demo/hex/week5/node_modules/glob/dist/mjs/index.js";
import liveReload from "file:///C:/Users/user/git-demo/hex/week5/node_modules/vite-plugin-live-reload/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/user/git-demo/hex/week5/vite.config.js";
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("pages/")) {
          const newFileName = fileName.slice("pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/hexschool_week5/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./pages/**/*.ejs", "./pages/**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin()
  ],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "pages/index.html"
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("pages/**/*.html").map((file) => [
          path.relative("pages", file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx1c2VyXFxcXGdpdC1kZW1vXFxcXGhleFxcXFx3ZWVrNVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcdXNlclxcXFxnaXQtZGVtb1xcXFxoZXhcXFxcd2VlazVcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL3VzZXIvZ2l0LWRlbW8vaGV4L3dlZWs1L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgeyBWaXRlRWpzUGx1Z2luIH0gZnJvbSAndml0ZS1wbHVnaW4tZWpzJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICdub2RlOnVybCc7XG5pbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZ2xvYiB9IGZyb20gJ2dsb2InO1xuXG5pbXBvcnQgbGl2ZVJlbG9hZCBmcm9tICd2aXRlLXBsdWdpbi1saXZlLXJlbG9hZCc7XG5cbmZ1bmN0aW9uIG1vdmVPdXRwdXRQbHVnaW4oKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ21vdmUtb3V0cHV0JyxcbiAgICBlbmZvcmNlOiAncG9zdCcsXG4gICAgYXBwbHk6ICdidWlsZCcsXG4gICAgYXN5bmMgZ2VuZXJhdGVCdW5kbGUob3B0aW9ucywgYnVuZGxlKSB7XG4gICAgICBmb3IgKGNvbnN0IGZpbGVOYW1lIGluIGJ1bmRsZSkge1xuICAgICAgICBpZiAoZmlsZU5hbWUuc3RhcnRzV2l0aCgncGFnZXMvJykpIHtcbiAgICAgICAgICBjb25zdCBuZXdGaWxlTmFtZSA9IGZpbGVOYW1lLnNsaWNlKCdwYWdlcy8nLmxlbmd0aCk7XG4gICAgICAgICAgYnVuZGxlW2ZpbGVOYW1lXS5maWxlTmFtZSA9IG5ld0ZpbGVOYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgLy8gYmFzZSBcdTc2ODRcdTVCRUJcdTZDRDVcdUZGMUFcbiAgLy8gYmFzZTogJy9SZXBvc2l0b3J5IFx1NzY4NFx1NTQwRFx1N0EzMS8nXG4gIGJhc2U6ICcvaGV4c2Nob29sX3dlZWs1LycsXG4gIHBsdWdpbnM6IFtcbiAgICBsaXZlUmVsb2FkKFsnLi9sYXlvdXQvKiovKi5lanMnLCAnLi9wYWdlcy8qKi8qLmVqcycsICcuL3BhZ2VzLyoqLyouaHRtbCddKSxcbiAgICBWaXRlRWpzUGx1Z2luKCksXG4gICAgbW92ZU91dHB1dFBsdWdpbigpLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICAvLyBcdTU1NUZcdTUyRDUgc2VydmVyIFx1NjY0Mlx1OTgxMFx1OEEyRFx1OTU4Qlx1NTU1Rlx1NzY4NFx1OTgwMVx1OTc2MlxuICAgIG9wZW46ICdwYWdlcy9pbmRleC5odG1sJyxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBpbnB1dDogT2JqZWN0LmZyb21FbnRyaWVzKFxuICAgICAgICBnbG9iXG4gICAgICAgICAgLnN5bmMoJ3BhZ2VzLyoqLyouaHRtbCcpXG4gICAgICAgICAgLm1hcCgoZmlsZSkgPT4gW1xuICAgICAgICAgICAgcGF0aC5yZWxhdGl2ZSgncGFnZXMnLCBmaWxlLnNsaWNlKDAsIGZpbGUubGVuZ3RoIC0gcGF0aC5leHRuYW1lKGZpbGUpLmxlbmd0aCkpLFxuICAgICAgICAgICAgZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAgIF0pXG4gICAgICApLFxuICAgIH0sXG4gICAgb3V0RGlyOiAnZGlzdCcsXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFIsU0FBUyxvQkFBb0I7QUFDM1QsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsWUFBWTtBQUVyQixPQUFPLGdCQUFnQjtBQU40SixJQUFNLDJDQUEyQztBQVFwTyxTQUFTLG1CQUFtQjtBQUMxQixTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsSUFDVCxPQUFPO0FBQUEsSUFDUCxNQUFNLGVBQWUsU0FBUyxRQUFRO0FBQ3BDLGlCQUFXLFlBQVksUUFBUTtBQUM3QixZQUFJLFNBQVMsV0FBVyxRQUFRLEdBQUc7QUFDakMsZ0JBQU0sY0FBYyxTQUFTLE1BQU0sU0FBUyxNQUFNO0FBQ2xELGlCQUFPLFFBQVEsRUFBRSxXQUFXO0FBQUEsUUFDOUI7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBO0FBQUE7QUFBQSxFQUcxQixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDUCxXQUFXLENBQUMscUJBQXFCLG9CQUFvQixtQkFBbUIsQ0FBQztBQUFBLElBQ3pFLGNBQWM7QUFBQSxJQUNkLGlCQUFpQjtBQUFBLEVBQ25CO0FBQUEsRUFDQSxRQUFRO0FBQUE7QUFBQSxJQUVOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsTUFDYixPQUFPLE9BQU87QUFBQSxRQUNaLEtBQ0csS0FBSyxpQkFBaUIsRUFDdEIsSUFBSSxDQUFDLFNBQVM7QUFBQSxVQUNiLEtBQUssU0FBUyxTQUFTLEtBQUssTUFBTSxHQUFHLEtBQUssU0FBUyxLQUFLLFFBQVEsSUFBSSxFQUFFLE1BQU0sQ0FBQztBQUFBLFVBQzdFLGNBQWMsSUFBSSxJQUFJLE1BQU0sd0NBQWUsQ0FBQztBQUFBLFFBQzlDLENBQUM7QUFBQSxNQUNMO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
