# sveltekit-gh-pages

> Minimal [SvelteKit](https://kit.svelte.dev/) set-up made deployable to [GitHub Pages](https://metonym.github.io/sveltekit-gh-pages/).

This project was scaffolded using the [`npm init svelte@next`](https://kit.svelte.dev/docs#introduction-getting-started) command using the skeleton template.

## Make deployable to GitHub Pages

### 1) Use the static adapter

Replace the default [node adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) with the [static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) to prerender the app.

**package.json**

```diff
  "devDependencies": {
-   "@sveltejs/adapter-node": "next",
+   "@sveltejs/adapter-static": "next",
    "@sveltejs/kit": "next",
    "svelte": "^3.37.0",
    "vite": "^2.2.1"
  }
```

**svelte.config.js**

```diff
- const node = require("@sveltejs/adapter-node");
+ const static = require("@sveltejs/adapter-static");
const pkg = require("./package.json");

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
  kit: {
-   adapter: node(),
+   adapter: static(),
    target: "#svelte",
  },
};

```

### 2) Modify `appDir` and `paths.base` in the config

- `kit.appDir` should not begin with an underscore because GitHub Pages [ignores folders beginning with "\_"](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/)
- `kit.paths.base` should be your repo URL subpath (see the [Vite docs](https://vitejs.dev/guide/static-deploy.html#github-pages))

```diff
module.exports = {
  kit: {
    adapter: static(),
    target: "#svelte",
+   appDir: "app",
+   paths: { base: `/<repo-name>/` },
  },
};
```

---

## Quick start

Use [degit](https://github.com/Rich-Harris/degit) to quickly scaffold a new project:

```sh
npx degit metonym/sveltekit-gh-pages my-app
cd my-app && yarn install
```

## Deploying to GitHub Pages

First, build the app by running `yarn build`.

Then, run `yarn deploy` to deploy the app to GitHub Pages.
