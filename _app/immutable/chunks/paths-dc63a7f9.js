const base = "/sveltekit-gh-pages";
let assets = base;
function set_assets(path) {
  assets = path;
}
export {
  assets as a,
  base as b,
  set_assets as s
};
