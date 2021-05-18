import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: adapter(),
    target: "#svelte",
    appDir: "app",
    paths: {
      base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages/" : "",
    },
  },
};
