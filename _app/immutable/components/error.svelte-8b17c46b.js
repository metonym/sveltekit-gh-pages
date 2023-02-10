import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, b as insert_hydration, H as append_hydration, u as set_data, C as noop, I as component_subscribe } from "../chunks/index-e98e3991.js";
import { s as stores } from "../chunks/singletons-239b3eba.js";
const getStores = () => {
  const stores$1 = stores;
  return {
    page: {
      subscribe: stores$1.page.subscribe
    },
    navigating: {
      subscribe: stores$1.navigating.subscribe
    },
    updated: stores$1.updated
  };
};
const page = {
  /** @param {(value: any) => void} fn */
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
function create_fragment(ctx) {
  var _a;
  let h1;
  let t0_value = (
    /*$page*/
    ctx[0].status + ""
  );
  let t0;
  let t1;
  let p;
  let t2_value = (
    /*$page*/
    ((_a = ctx[0].error) == null ? void 0 : _a.message) + ""
  );
  let t2;
  return {
    c() {
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = space();
      p = element("p");
      t2 = text(t2_value);
    },
    l(nodes) {
      h1 = claim_element(nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, t0_value);
      h1_nodes.forEach(detach);
      t1 = claim_space(nodes);
      p = claim_element(nodes, "P", {});
      var p_nodes = children(p);
      t2 = claim_text(p_nodes, t2_value);
      p_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, h1, anchor);
      append_hydration(h1, t0);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, p, anchor);
      append_hydration(p, t2);
    },
    p(ctx2, [dirty]) {
      var _a2;
      if (dirty & /*$page*/
      1 && t0_value !== (t0_value = /*$page*/
      ctx2[0].status + ""))
        set_data(t0, t0_value);
      if (dirty & /*$page*/
      1 && t2_value !== (t2_value = /*$page*/
      ((_a2 = ctx2[0].error) == null ? void 0 : _a2.message) + ""))
        set_data(t2, t2_value);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(h1);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(p);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let $page;
  component_subscribe($$self, page, ($$value) => $$invalidate(0, $page = $$value));
  return [$page];
}
let Error$1 = class Error extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
};
export {
  Error$1 as default
};
