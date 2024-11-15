/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const N = globalThis, V = N.ShadowRoot && (N.ShadyCSS === void 0 || N.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, nt = Symbol(), J = /* @__PURE__ */ new WeakMap();
let ct = class {
  constructor(t, e, s) {
    if (this._$cssResult$ = !0, s !== nt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (V && t === void 0) {
      const s = e !== void 0 && e.length === 1;
      s && (t = J.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), s && J.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const rt = (n) => new ct(typeof n == "string" ? n : n + "", void 0, nt), dt = (n, t) => {
  if (V) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const s = document.createElement("style"), i = N.litNonce;
    i !== void 0 && s.setAttribute("nonce", i), s.textContent = e.cssText, n.appendChild(s);
  }
}, K = V ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const s of t.cssRules) e += s.cssText;
  return rt(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: pt, defineProperty: ut, getOwnPropertyDescriptor: $t, getOwnPropertyNames: _t, getOwnPropertySymbols: ft, getPrototypeOf: gt } = Object, g = globalThis, Z = g.trustedTypes, yt = Z ? Z.emptyScript : "", B = g.reactiveElementPolyfillSupport, w = (n, t) => n, R = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? yt : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, W = (n, t) => !pt(n, t), F = { attribute: !0, type: String, converter: R, reflect: !1, hasChanged: W };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), g.litPropertyMetadata ?? (g.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class b extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = F) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.elementProperties.set(t, e), !e.noAccessor) {
      const s = Symbol(), i = this.getPropertyDescriptor(t, s, e);
      i !== void 0 && ut(this.prototype, t, i);
    }
  }
  static getPropertyDescriptor(t, e, s) {
    const { get: i, set: r } = $t(this.prototype, t) ?? { get() {
      return this[e];
    }, set(o) {
      this[e] = o;
    } };
    return { get() {
      return i == null ? void 0 : i.call(this);
    }, set(o) {
      const a = i == null ? void 0 : i.call(this);
      r.call(this, o), this.requestUpdate(t, a, s);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? F;
  }
  static _$Ei() {
    if (this.hasOwnProperty(w("elementProperties"))) return;
    const t = gt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(w("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(w("properties"))) {
      const e = this.properties, s = [..._t(e), ...ft(e)];
      for (const i of s) this.createProperty(i, e[i]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [s, i] of e) this.elementProperties.set(s, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, s] of this.elementProperties) {
      const i = this._$Eu(e, s);
      i !== void 0 && this._$Eh.set(i, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const s = new Set(t.flat(1 / 0).reverse());
      for (const i of s) e.unshift(K(i));
    } else t !== void 0 && e.push(K(t));
    return e;
  }
  static _$Eu(t, e) {
    const s = e.attribute;
    return s === !1 ? void 0 : typeof s == "string" ? s : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const s of e.keys()) this.hasOwnProperty(s) && (t.set(s, this[s]), delete this[s]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return dt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostConnected) == null ? void 0 : s.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var s;
      return (s = e.hostDisconnected) == null ? void 0 : s.call(e);
    });
  }
  attributeChangedCallback(t, e, s) {
    this._$AK(t, s);
  }
  _$EC(t, e) {
    var r;
    const s = this.constructor.elementProperties.get(t), i = this.constructor._$Eu(t, s);
    if (i !== void 0 && s.reflect === !0) {
      const o = (((r = s.converter) == null ? void 0 : r.toAttribute) !== void 0 ? s.converter : R).toAttribute(e, s.type);
      this._$Em = t, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var r;
    const s = this.constructor, i = s._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const o = s.getPropertyOptions(i), a = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((r = o.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? o.converter : R;
      this._$Em = i, this[i] = a.fromAttribute(e, o.type), this._$Em = null;
    }
  }
  requestUpdate(t, e, s) {
    if (t !== void 0) {
      if (s ?? (s = this.constructor.getPropertyOptions(t)), !(s.hasChanged ?? W)(this[t], e)) return;
      this.P(t, e, s);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(t, e, s) {
    this._$AL.has(t) || this._$AL.set(t, e), s.reflect === !0 && this._$Em !== t && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(t);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var s;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [r, o] of this._$Ep) this[r] = o;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [r, o] of i) o.wrapped !== !0 || this._$AL.has(r) || this[r] === void 0 || this.P(r, this[r], o);
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (s = this._$EO) == null || s.forEach((i) => {
        var r;
        return (r = i.hostUpdate) == null ? void 0 : r.call(i);
      }), this.update(e)) : this._$EU();
    } catch (i) {
      throw t = !1, this._$EU(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((s) => {
      var i;
      return (i = s.hostUpdated) == null ? void 0 : i.call(s);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((e) => this._$EC(e, this[e]))), this._$EU();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
b.elementStyles = [], b.shadowRootOptions = { mode: "open" }, b[w("elementProperties")] = /* @__PURE__ */ new Map(), b[w("finalized")] = /* @__PURE__ */ new Map(), B == null || B({ ReactiveElement: b }), (g.reactiveElementVersions ?? (g.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const P = globalThis, L = P.trustedTypes, Y = L ? L.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, ot = "$lit$", f = `lit$${Math.random().toFixed(9).slice(2)}$`, ht = "?" + f, At = `<${ht}>`, m = document, T = () => m.createComment(""), U = (n) => n === null || typeof n != "object" && typeof n != "function", q = Array.isArray, mt = (n) => q(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", D = `[ 	
\f\r]`, C = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, G = /-->/g, Q = />/g, y = RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), X = /'/g, tt = /"/g, at = /^(?:script|style|textarea|title)$/i, vt = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), bt = vt(1), v = Symbol.for("lit-noChange"), c = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), A = m.createTreeWalker(m, 129);
function lt(n, t) {
  if (!q(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Y !== void 0 ? Y.createHTML(t) : t;
}
const Et = (n, t) => {
  const e = n.length - 1, s = [];
  let i, r = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", o = C;
  for (let a = 0; a < e; a++) {
    const h = n[a];
    let d, p, l = -1, u = 0;
    for (; u < h.length && (o.lastIndex = u, p = o.exec(h), p !== null); ) u = o.lastIndex, o === C ? p[1] === "!--" ? o = G : p[1] !== void 0 ? o = Q : p[2] !== void 0 ? (at.test(p[2]) && (i = RegExp("</" + p[2], "g")), o = y) : p[3] !== void 0 && (o = y) : o === y ? p[0] === ">" ? (o = i ?? C, l = -1) : p[1] === void 0 ? l = -2 : (l = o.lastIndex - p[2].length, d = p[1], o = p[3] === void 0 ? y : p[3] === '"' ? tt : X) : o === tt || o === X ? o = y : o === G || o === Q ? o = C : (o = y, i = void 0);
    const _ = o === y && n[a + 1].startsWith("/>") ? " " : "";
    r += o === C ? h + At : l >= 0 ? (s.push(d), h.slice(0, l) + ot + h.slice(l) + f + _) : h + f + (l === -2 ? a : _);
  }
  return [lt(n, r + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), s];
};
class O {
  constructor({ strings: t, _$litType$: e }, s) {
    let i;
    this.parts = [];
    let r = 0, o = 0;
    const a = t.length - 1, h = this.parts, [d, p] = Et(t, e);
    if (this.el = O.createElement(d, s), A.currentNode = this.el.content, e === 2 || e === 3) {
      const l = this.el.content.firstChild;
      l.replaceWith(...l.childNodes);
    }
    for (; (i = A.nextNode()) !== null && h.length < a; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const l of i.getAttributeNames()) if (l.endsWith(ot)) {
          const u = p[o++], _ = i.getAttribute(l).split(f), M = /([.?@])?(.*)/.exec(u);
          h.push({ type: 1, index: r, name: M[2], strings: _, ctor: M[1] === "." ? Ct : M[1] === "?" ? wt : M[1] === "@" ? Pt : j }), i.removeAttribute(l);
        } else l.startsWith(f) && (h.push({ type: 6, index: r }), i.removeAttribute(l));
        if (at.test(i.tagName)) {
          const l = i.textContent.split(f), u = l.length - 1;
          if (u > 0) {
            i.textContent = L ? L.emptyScript : "";
            for (let _ = 0; _ < u; _++) i.append(l[_], T()), A.nextNode(), h.push({ type: 2, index: ++r });
            i.append(l[u], T());
          }
        }
      } else if (i.nodeType === 8) if (i.data === ht) h.push({ type: 2, index: r });
      else {
        let l = -1;
        for (; (l = i.data.indexOf(f, l + 1)) !== -1; ) h.push({ type: 7, index: r }), l += f.length - 1;
      }
      r++;
    }
  }
  static createElement(t, e) {
    const s = m.createElement("template");
    return s.innerHTML = t, s;
  }
}
function E(n, t, e = n, s) {
  var o, a;
  if (t === v) return t;
  let i = s !== void 0 ? (o = e._$Co) == null ? void 0 : o[s] : e._$Cl;
  const r = U(t) ? void 0 : t._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== r && ((a = i == null ? void 0 : i._$AO) == null || a.call(i, !1), r === void 0 ? i = void 0 : (i = new r(n), i._$AT(n, e, s)), s !== void 0 ? (e._$Co ?? (e._$Co = []))[s] = i : e._$Cl = i), i !== void 0 && (t = E(n, i._$AS(n, t.values), i, s)), t;
}
class St {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: s } = this._$AD, i = ((t == null ? void 0 : t.creationScope) ?? m).importNode(e, !0);
    A.currentNode = i;
    let r = A.nextNode(), o = 0, a = 0, h = s[0];
    for (; h !== void 0; ) {
      if (o === h.index) {
        let d;
        h.type === 2 ? d = new k(r, r.nextSibling, this, t) : h.type === 1 ? d = new h.ctor(r, h.name, h.strings, this, t) : h.type === 6 && (d = new xt(r, this, t)), this._$AV.push(d), h = s[++a];
      }
      o !== (h == null ? void 0 : h.index) && (r = A.nextNode(), o++);
    }
    return A.currentNode = m, i;
  }
  p(t) {
    let e = 0;
    for (const s of this._$AV) s !== void 0 && (s.strings !== void 0 ? (s._$AI(t, s, e), e += s.strings.length - 2) : s._$AI(t[e])), e++;
  }
}
class k {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, s, i) {
    this.type = 2, this._$AH = c, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = s, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = E(this, t, e), U(t) ? t === c || t == null || t === "" ? (this._$AH !== c && this._$AR(), this._$AH = c) : t !== this._$AH && t !== v && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : mt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== c && U(this._$AH) ? this._$AA.nextSibling.data = t : this.T(m.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var r;
    const { values: e, _$litType$: s } = t, i = typeof s == "number" ? this._$AC(t) : (s.el === void 0 && (s.el = O.createElement(lt(s.h, s.h[0]), this.options)), s);
    if (((r = this._$AH) == null ? void 0 : r._$AD) === i) this._$AH.p(e);
    else {
      const o = new St(i, this), a = o.u(this.options);
      o.p(e), this.T(a), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = et.get(t.strings);
    return e === void 0 && et.set(t.strings, e = new O(t)), e;
  }
  k(t) {
    q(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let s, i = 0;
    for (const r of t) i === e.length ? e.push(s = new k(this.O(T()), this.O(T()), this, this.options)) : s = e[i], s._$AI(r), i++;
    i < e.length && (this._$AR(s && s._$AB.nextSibling, i), e.length = i);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var s;
    for ((s = this._$AP) == null ? void 0 : s.call(this, !1, !0, e); t && t !== this._$AB; ) {
      const i = t.nextSibling;
      t.remove(), t = i;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class j {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, s, i, r) {
    this.type = 1, this._$AH = c, this._$AN = void 0, this.element = t, this.name = e, this._$AM = i, this.options = r, s.length > 2 || s[0] !== "" || s[1] !== "" ? (this._$AH = Array(s.length - 1).fill(new String()), this.strings = s) : this._$AH = c;
  }
  _$AI(t, e = this, s, i) {
    const r = this.strings;
    let o = !1;
    if (r === void 0) t = E(this, t, e, 0), o = !U(t) || t !== this._$AH && t !== v, o && (this._$AH = t);
    else {
      const a = t;
      let h, d;
      for (t = r[0], h = 0; h < r.length - 1; h++) d = E(this, a[s + h], e, h), d === v && (d = this._$AH[h]), o || (o = !U(d) || d !== this._$AH[h]), d === c ? t = c : t !== c && (t += (d ?? "") + r[h + 1]), this._$AH[h] = d;
    }
    o && !i && this.j(t);
  }
  j(t) {
    t === c ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ct extends j {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === c ? void 0 : t;
  }
}
class wt extends j {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== c);
  }
}
class Pt extends j {
  constructor(t, e, s, i, r) {
    super(t, e, s, i, r), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = E(this, t, e, 0) ?? c) === v) return;
    const s = this._$AH, i = t === c && s !== c || t.capture !== s.capture || t.once !== s.once || t.passive !== s.passive, r = t !== c && (s === c || i);
    i && this.element.removeEventListener(this.name, this, s), r && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class xt {
  constructor(t, e, s) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = s;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    E(this, t);
  }
}
const I = P.litHtmlPolyfillSupport;
I == null || I(O, k), (P.litHtmlVersions ?? (P.litHtmlVersions = [])).push("3.2.1");
const Tt = (n, t, e) => {
  const s = (e == null ? void 0 : e.renderBefore) ?? t;
  let i = s._$litPart$;
  if (i === void 0) {
    const r = (e == null ? void 0 : e.renderBefore) ?? null;
    s._$litPart$ = i = new k(t.insertBefore(T(), r), r, void 0, e ?? {});
  }
  return i._$AI(n), i;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let x = class extends b {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = Tt(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return v;
  }
};
var it;
x._$litElement$ = !0, x.finalized = !0, (it = globalThis.litElementHydrateSupport) == null || it.call(globalThis, { LitElement: x });
const z = globalThis.litElementPolyfillSupport;
z == null || z({ LitElement: x });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ut = (n) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(n, t);
  }) : customElements.define(n, t);
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ot = { attribute: !0, type: String, converter: R, reflect: !1, hasChanged: W }, kt = (n = Ot, t, e) => {
  const { kind: s, metadata: i } = e;
  let r = globalThis.litPropertyMetadata.get(i);
  if (r === void 0 && globalThis.litPropertyMetadata.set(i, r = /* @__PURE__ */ new Map()), r.set(e.name, n), s === "accessor") {
    const { name: o } = e;
    return { set(a) {
      const h = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(o, h, n);
    }, init(a) {
      return a !== void 0 && this.P(o, void 0, n), a;
    } };
  }
  if (s === "setter") {
    const { name: o } = e;
    return function(a) {
      const h = this[o];
      t.call(this, a), this.requestUpdate(o, h, n);
    };
  }
  throw Error("Unsupported decorator location: " + s);
};
function H(n) {
  return (t, e) => typeof e == "object" ? kt(n, t, e) : ((s, i, r) => {
    const o = i.hasOwnProperty(r);
    return i.constructor.createProperty(r, o ? { ...s, wrapped: !0 } : s), o ? Object.getOwnPropertyDescriptor(i, r) : void 0;
  })(n, t, e);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ht = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, Mt = (n) => (...t) => ({ _$litDirective$: n, values: t });
class Nt {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, s) {
    this._$Ct = t, this._$AM = e, this._$Ci = s;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Rt = Mt(class extends Nt {
  constructor(n) {
    var t;
    if (super(n), n.type !== Ht.ATTRIBUTE || n.name !== "class" || ((t = n.strings) == null ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(n) {
    return " " + Object.keys(n).filter((t) => n[t]).join(" ") + " ";
  }
  update(n, [t]) {
    var s, i;
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), n.strings !== void 0 && (this.nt = new Set(n.strings.join(" ").split(/\s/).filter((r) => r !== "")));
      for (const r in t) t[r] && !((s = this.nt) != null && s.has(r)) && this.st.add(r);
      return this.render(t);
    }
    const e = n.element.classList;
    for (const r of this.st) r in t || (e.remove(r), this.st.delete(r));
    for (const r in t) {
      const o = !!t[r];
      o === this.st.has(r) || (i = this.nt) != null && i.has(r) || (o ? (e.add(r), this.st.add(r)) : (e.remove(r), this.st.delete(r)));
    }
    return v;
  }
});
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const st = (n) => n ?? c;
class Lt extends x {
  connectedCallback() {
    if (super.connectedCallback(), !document.querySelector(
      'link[href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"]'
    )) {
      const e = document.createElement("link");
      e.rel = "stylesheet", e.href = "https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css", document.head.appendChild(e);
    }
  }
}
const jt = '@import"https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css";.hnine-tag{font-family:Pretendard;font-size:18px;font-weight:400;line-height:26px;letter-spacing:0px;display:inline-flex;justify-content:center;padding:4px 12px;margin-right:6px;gap:8px;border-radius:80px;color:#fff}.hnine-tag:only-of-type{margin-right:0}.hnine-tag--brand,.hnine-tag--black{background-color:#000}.hnine-tag--pink{background-color:#d463e6}.hnine-tag--gray{background-color:#0006}.hnine-tag--blue-green{background-color:#36d676}.hnine-tag--red{background-color:#fe4020}.hnine-tag--orange{background-color:#f26c3e}.hnine-tag--cyan{background-color:#38ccdc}.hnine-tag--purple{background-color:#7720ed}';
var Bt = Object.defineProperty, Dt = Object.getOwnPropertyDescriptor, S = (n, t, e, s) => {
  for (var i = s > 1 ? void 0 : s ? Dt(t, e) : t, r = n.length - 1, o; r >= 0; r--)
    (o = n[r]) && (i = (s ? o(t, e, i) : o(i)) || i);
  return s && i && Bt(t, e, i), i;
};
let $ = class extends Lt {
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
    return bt`
      <span
        class="${Rt(t)}"
        style=${st(this.propStyle)}
        @click=${this.handleClick}
        aria-label=${st(this.propAriaLabel)}
        tabindex="0"
        ><slot></slot
      ></span>
    `;
  }
};
$.styles = rt(jt);
S([
  H({ type: String })
], $.prototype, "propAriaLabel", 2);
S([
  H({ type: String })
], $.prototype, "class", 2);
S([
  H({ type: String })
], $.prototype, "propStyle", 2);
S([
  H({ type: String })
], $.prototype, "color", 2);
S([
  H({ attribute: !1 })
], $.prototype, "onClick", 2);
$ = S([
  Ut("hnine-tag")
], $);
const It = $, qt = {
  Tag: It
};
export {
  Lt as B,
  $ as T,
  It as a,
  qt as c
};
//# sourceMappingURL=design-system-lit-test.js-DfGgLi23.js.map
