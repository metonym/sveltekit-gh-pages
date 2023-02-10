import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, b as insert_hydration, H as append_hydration, C as noop } from "../../chunks/index-e98e3991.js";
import { b as base } from "../../chunks/paths-dc63a7f9.js";
function create_fragment(ctx) {
  let h1;
  let t0;
  let t1;
  let p0;
  let t2;
  let t3;
  let p1;
  let t4;
  let a0;
  let t5;
  let t6;
  let t7;
  let a1;
  let t8;
  return {
    c() {
      h1 = element("h1");
      t0 = text("sveltekit-gh-pages");
      t1 = space();
      p0 = element("p");
      t2 = text("Deployed to GitHub Pages");
      t3 = space();
      p1 = element("p");
      t4 = text("Visit ");
      a0 = element("a");
      t5 = text("kit.svelte.dev");
      t6 = text(" to read the documentation");
      t7 = space();
      a1 = element("a");
      t8 = text("About");
      this.h();
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "sveltekit-gh-pages");
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, "Deployed to GitHub Pages");
      p0_nodes.forEach(detach);
      t3 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t4 = claim_text(p1_nodes, "Visit ");
      a0 = claim_element(p1_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t5 = claim_text(a0_nodes, "kit.svelte.dev");
      a0_nodes.forEach(detach);
      t6 = claim_text(p1_nodes, " to read the documentation");
      p1_nodes.forEach(detach);
      t7 = claim_space(nodes);
      a1 = claim_element(nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t8 = claim_text(a1_nodes, "About");
      a1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://kit.svelte.dev");
      attr(a1, "href", base + "/about");
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t4);
      append_hydration(p1, a0);
      append_hydration(a0, t5);
      append_hydration(p1, t6);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, a1, anchor);
      append_hydration(a1, t8);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(p1);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(a1);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
