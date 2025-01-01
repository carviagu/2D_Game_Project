import { defineConfig } from "vite";

export default defineConfig({
    base: "/2D_Game_Project", 
    build: {
        minify: "terser",
    },
});