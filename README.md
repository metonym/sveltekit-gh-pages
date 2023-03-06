# sveltekit-gh-pages

> Minimal [SvelteKit](https://kit.svelte.dev/) set-up made deployable to [GitHub Pages](https://metonym.github.io/sveltekit-gh-pages/).

## 1) Use the static adapter

Install the [SvelteKit static adapter](https://github.com/sveltejs/kit/tree/master/packages/adapter-static) to prerender the app.

**package.json**

```diff
  "devDependencies": {
+   "@sveltejs/adapter-static": "^2.0.1",
    "@sveltejs/kit": "^1.10.0",
    "gh-pages": "^5.0.0",
    "svelte": "^3.55.1",
    "vite": "^4.1.4"
  }
```

**svelte.config.js**

```diff
+ import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
+   adapter: adapter(),
  },
};

export default config;

```

Ensure your top-level `+layout.js` exports `prerender = true`.

```js
// src/routes/+layout.js
export const prerender = true;
```

## 2) Modify `paths.base` in the config

- `kit.paths.base` should be your repo URL subpath (see the [Vite docs](https://vitejs.dev/guide/static-deploy.html#github-pages))

```diff
import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
+   paths: {
+     base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : "",
+   },
  },
};

export default config;

```

**Note:** You will also need to prepend relative paths with the [SvelteKit `base` path](https://kit.svelte.dev/docs/modules#$app-paths) so that your app can build successfully for production.

```svelte
<script>
  import { base } from "$app/paths";
</script>

<a href="{base}/about">About</a>
```

## 3) Add a `.nojekyll` file to the build

The last step is to add a `.nojekyll` file to the build folder to [bypass Jekyll on GitHub Pages](https://github.blog/2009-12-29-bypassing-jekyll-on-github-pages/).

**package.json**

```json
{
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "deploy": "touch build/.nojekyll && gh-pages -d build -t true"
  }
}
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
