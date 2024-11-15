import { u as g, f as u, T as f, E as y, r as b, B as m, x as v } from "../../baseElement-BY7f31qa.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const T = (t) => (e, n) => {
  n !== void 0 ? n.addInitializer(() => {
    customElements.define(t, e);
  }) : customElements.define(t, e);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $ = { attribute: !0, type: String, converter: g, reflect: !1, hasChanged: u }, E = (t = $, e, n) => {
  const { kind: o, metadata: s } = n;
  let r = globalThis.litPropertyMetadata.get(s);
  if (r === void 0 && globalThis.litPropertyMetadata.set(s, r = /* @__PURE__ */ new Map()), r.set(n.name, t), o === "accessor") {
    const { name: i } = n;
    return { set(c) {
      const h = e.get.call(this);
      e.set.call(this, c), this.requestUpdate(i, h, t);
    }, init(c) {
      return c !== void 0 && this.P(i, void 0, t), c;
    } };
  }
  if (o === "setter") {
    const { name: i } = n;
    return function(c) {
      const h = this[i];
      e.call(this, c), this.requestUpdate(i, h, t);
    };
  }
  throw Error("Unsupported decorator location: " + o);
};
function p(t) {
  return (e, n) => typeof n == "object" ? E(t, e, n) : ((o, s, r) => {
    const i = s.hasOwnProperty(r);
    return s.constructor.createProperty(r, i ? { ...o, wrapped: !0 } : o), i ? Object.getOwnPropertyDescriptor(s, r) : void 0;
  })(t, e, n);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _ = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, x = (t) => (...e) => ({ _$litDirective$: t, values: e });
class k {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, n, o) {
    this._$Ct = e, this._$AM = n, this._$Ci = o;
  }
  _$AS(e, n) {
    return this.update(e, n);
  }
  update(e, n) {
    return this.render(...n);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P = x(class extends k {
  constructor(t) {
    var e;
    if (super(t), t.type !== _.ATTRIBUTE || t.name !== "class" || ((e = t.strings) == null ? void 0 : e.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(t) {
    return " " + Object.keys(t).filter((e) => t[e]).join(" ") + " ";
  }
  update(t, [e]) {
    var o, s;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), t.strings !== void 0 && (this.nt = new Set(t.strings.join(" ").split(/\s/).filter((r) => r !== "")));
      for (const r in e) e[r] && !((o = this.nt) != null && o.has(r)) && this.st.add(r);
      return this.render(e);
    }
    const n = t.element.classList;
    for (const r of this.st) r in e || (n.remove(r), this.st.delete(r));
    for (const r in e) {
      const i = !!e[r];
      i === this.st.has(r) || (s = this.nt) != null && s.has(r) || (i ? (n.add(r), this.st.add(r)) : (n.remove(r), this.st.delete(r)));
    }
    return f;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const d = (t) => t ?? y, w = '@import"https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css";.hnine-tag{font-family:Pretendard;font-size:18px;font-weight:400;line-height:26px;letter-spacing:0px;display:inline-flex;justify-content:center;padding:4px 12px;margin-right:6px;gap:8px;border-radius:80px;color:#fff}.hnine-tag:only-of-type{margin-right:0}.hnine-tag--brand,.hnine-tag--black{background-color:#000}.hnine-tag--pink{background-color:#d463e6}.hnine-tag--gray{background-color:#0006}.hnine-tag--blue-green{background-color:#36d676}.hnine-tag--red{background-color:#fe4020}.hnine-tag--orange{background-color:#f26c3e}.hnine-tag--cyan{background-color:#38ccdc}.hnine-tag--purple{background-color:#7720ed}';
var A = Object.defineProperty, O = Object.getOwnPropertyDescriptor, l = (t, e, n, o) => {
  for (var s = o > 1 ? void 0 : o ? O(e, n) : e, r = t.length - 1, i; r >= 0; r--)
    (i = t[r]) && (s = (o ? i(e, n, s) : i(s)) || s);
  return o && s && A(e, n, s), s;
};
let a = class extends m {
  constructor() {
    super(...arguments), this.color = "brand";
  }
  handleClick(t) {
    this.onClick && this.onClick(t);
  }
  render() {
    const t = {
      "hnine-tag": !0,
      [`hnine-tag--${this.color}`]: this.color !== void 0,
      [`${this.class}`]: this.class !== void 0
    };
    return v`
      <span
        class="${P(t)}"
        style=${d(this.propStyle)}
        @click=${this.handleClick}
        aria-label=${d(this.propAriaLabel)}
        tabindex="0"
        ><slot></slot
      ></span>
    `;
  }
};
a.styles = b(w);
l([
  p({ type: String })
], a.prototype, "propAriaLabel", 2);
l([
  p({ type: String })
], a.prototype, "class", 2);
l([
  p({ type: String })
], a.prototype, "propStyle", 2);
l([
  p({ type: String })
], a.prototype, "color", 2);
l([
  p({ attribute: !1 })
], a.prototype, "onClick", 2);
a = l([
  T("hnine-tag")
], a);
export {
  a as Tag
};
//# sourceMappingURL=tag.js.map
