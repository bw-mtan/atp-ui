var nn = Object.defineProperty, an = Object.defineProperties;
var rn = Object.getOwnPropertyDescriptors;
var No = Object.getOwnPropertySymbols;
var ct = Object.prototype.hasOwnProperty, pt = Object.prototype.propertyIsEnumerable;
var lt = (e, t, n) => t in e ? nn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, To = (e, t) => {
  for (var n in t || (t = {}))
    ct.call(t, n) && lt(e, n, t[n]);
  if (No)
    for (var n of No(t))
      pt.call(t, n) && lt(e, n, t[n]);
  return e;
}, Po = (e, t) => an(e, rn(t));
var Lo = (e, t) => {
  var n = {};
  for (var a in e)
    ct.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a]);
  if (e != null && No)
    for (var a of No(e))
      t.indexOf(a) < 0 && pt.call(e, a) && (n[a] = e[a]);
  return n;
};
import { dn as sn, dp as ln, i as cn, k as pn, d as ee, j as u, _ as s, f as V, o as Ce, G as He, aa as Do, C as yo, ae as ho, dq as dn, h as pe, m as ie, n as N, a as z, P as o, g as de, dr as qo, b2 as po, b6 as dt, b5 as mo, M as vo, aG as Uo, B as kt, O as re, ds as un, v as et, ax as fn, D as Jo, N as Ze, L as ut, b8 as gn, T as bn, dt as mn, F as ot, U as tt, a1 as Bt, a9 as Ho, a2 as hn, J as uo, az as vn, a5 as _o, a6 as yn, a0 as nt, ag as xn, r as Cn, t as So, a4 as Tn, aL as ft, A as jo, X as Pn, du as In, I as Nt, H as Lt, aK as On, df as $n, dv as Rn, at as Mo, dl as wn, b9 as kn, dk as Bn } from "./theme-59e10499.js";
import * as x from "react";
import { createElement as St, forwardRef as Wo } from "react";
import { keyframes as jt, css as gt } from "@emotion/react";
const Nn = ["className", "component"];
function Ln(e = {}) {
  const {
    themeId: t,
    defaultTheme: n,
    defaultClassName: a = "MuiBox-root",
    generateClassName: l
  } = e, p = sn("div", {
    shouldForwardProp: (d) => d !== "theme" && d !== "sx" && d !== "as"
  })(ln);
  return /* @__PURE__ */ x.forwardRef(function(m, b) {
    const v = cn(n), P = pn(m), {
      className: I,
      component: y = "div"
    } = P, C = ee(P, Nn);
    return /* @__PURE__ */ u.jsx(p, s({
      as: y,
      ref: b,
      className: V(I, l ? l(a) : a),
      theme: t && v[t] || v
    }, C));
  });
}
const Sn = (e) => {
  const t = x.useRef({});
  return x.useEffect(() => {
    t.current = e;
  }), t.current;
}, at = Sn;
function jn(e) {
  return String(e).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function Mn(e) {
  return parseFloat(e);
}
function rt(e) {
  return Ce;
}
const An = He(/* @__PURE__ */ u.jsx("path", {
  d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Close");
function zn(e) {
  const {
    badgeContent: t,
    invisible: n = !1,
    max: a = 99,
    showZero: l = !1
  } = e, p = at({
    badgeContent: t,
    max: a
  });
  let c = n;
  n === !1 && t === 0 && !l && (c = !0);
  const {
    badgeContent: d,
    max: m = a
  } = c ? p : e, b = d && Number(d) > m ? `${m}+` : d;
  return {
    badgeContent: d,
    invisible: c,
    max: m,
    displayValue: b
  };
}
function bt(e) {
  return typeof e.normalize != "undefined" ? e.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : e;
}
function En(e = {}) {
  const {
    ignoreAccents: t = !0,
    ignoreCase: n = !0,
    limit: a,
    matchFrom: l = "any",
    stringify: p,
    trim: c = !1
  } = e;
  return (d, {
    inputValue: m,
    getOptionLabel: b
  }) => {
    let v = c ? m.trim() : m;
    n && (v = v.toLowerCase()), t && (v = bt(v));
    const P = v ? d.filter((I) => {
      let y = (p || b)(I);
      return n && (y = y.toLowerCase()), t && (y = bt(y)), l === "start" ? y.indexOf(v) === 0 : y.indexOf(v) > -1;
    }) : d;
    return typeof a == "number" ? P.slice(0, a) : P;
  };
}
function Ao(e, t) {
  for (let n = 0; n < e.length; n += 1)
    if (t(e[n]))
      return n;
  return -1;
}
const Dn = En(), mt = 5, _n = (e) => {
  var t;
  return e.current !== null && ((t = e.current.parentElement) == null ? void 0 : t.contains(document.activeElement));
};
function Fn(e) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: t = _n,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: n = "Mui",
    autoComplete: a = !1,
    autoHighlight: l = !1,
    autoSelect: p = !1,
    blurOnSelect: c = !1,
    clearOnBlur: d = !e.freeSolo,
    clearOnEscape: m = !1,
    componentName: b = "useAutocomplete",
    defaultValue: v = e.multiple ? [] : null,
    disableClearable: P = !1,
    disableCloseOnSelect: I = !1,
    disabled: y,
    disabledItemsFocusable: C = !1,
    disableListWrap: M = !1,
    filterOptions: R = Dn,
    filterSelectedOptions: T = !1,
    freeSolo: w = !1,
    getOptionDisabled: S,
    getOptionKey: W,
    getOptionLabel: E = (i) => {
      var r;
      return (r = i.label) != null ? r : i;
    },
    groupBy: k,
    handleHomeEndKeys: H = !e.freeSolo,
    id: L,
    includeInputInList: j = !1,
    inputValue: q,
    isOptionEqualToValue: G = (i, r) => i === r,
    multiple: B = !1,
    onChange: J,
    onClose: ue,
    onHighlightChange: oe,
    onInputChange: te,
    onOpen: se,
    open: Te,
    openOnFocus: U = !1,
    options: le,
    readOnly: fe = !1,
    selectOnFocus: Re = !e.freeSolo,
    value: we
  } = e, ne = Do(L);
  let Z = E;
  Z = (i) => {
    const r = E(i);
    if (typeof r != "string") {
      if (process.env.NODE_ENV !== "production") {
        const g = r === void 0 ? "undefined" : `${typeof r} (${r})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${b} returned ${g} instead of a string for ${JSON.stringify(i)}.`);
      }
      return String(r);
    }
    return r;
  };
  const he = x.useRef(!1), Ie = x.useRef(!0), _ = x.useRef(null), K = x.useRef(null), [Ae, ke] = x.useState(null), [ge, no] = x.useState(-1), ao = l ? 0 : -1, Y = x.useRef(ao), [O, wo] = yo({
    controlled: we,
    default: v,
    name: b
  }), [A, Be] = yo({
    controlled: q,
    default: "",
    name: b,
    state: "inputValue"
  }), [_e, fo] = x.useState(!1), Ne = x.useCallback((i, r) => {
    if (!(B ? O.length < r.length : r !== null) && !d)
      return;
    let f;
    if (B)
      f = "";
    else if (r == null)
      f = "";
    else {
      const $ = Z(r);
      f = typeof $ == "string" ? $ : "";
    }
    A !== f && (Be(f), te && te(i, f, "reset"));
  }, [Z, A, B, te, Be, d, O]), [Le, ro] = yo({
    controlled: Te,
    default: !1,
    name: b,
    state: "open"
  }), [so, We] = x.useState(!0), io = !B && O != null && A === Z(O), be = Le && !fe, X = be ? R(
    le.filter((i) => !(T && (B ? O : [O]).some((r) => r !== null && G(i, r)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: io && so ? "" : A,
      getOptionLabel: Z
    }
  ) : [], ae = at({
    filteredOptions: X,
    value: O,
    inputValue: A
  });
  x.useEffect(() => {
    const i = O !== ae.value;
    _e && !i || w && !i || Ne(null, O);
  }, [O, Ne, _e, ae.value, w]);
  const qe = Le && X.length > 0 && !fe;
  if (process.env.NODE_ENV !== "production" && O !== null && !w && le.length > 0) {
    const i = (B ? O : [O]).filter((r) => !le.some((g) => G(g, r)));
    i.length > 0 && console.warn([`MUI: The value provided to ${b} is invalid.`, `None of the options match with \`${i.length > 1 ? JSON.stringify(i) : JSON.stringify(i[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const Se = ho((i) => {
    i === -1 ? _.current.focus() : Ae.querySelector(`[data-tag-index="${i}"]`).focus();
  });
  x.useEffect(() => {
    B && ge > O.length - 1 && (no(-1), Se(-1));
  }, [O, B, ge, Se]);
  function ze(i, r) {
    if (!K.current || i < 0 || i >= X.length)
      return -1;
    let g = i;
    for (; ; ) {
      const f = K.current.querySelector(`[data-option-index="${g}"]`), $ = C ? !1 : !f || f.disabled || f.getAttribute("aria-disabled") === "true";
      if (f && f.hasAttribute("tabindex") && !$)
        return g;
      if (r === "next" ? g = (g + 1) % X.length : g = (g - 1 + X.length) % X.length, g === i)
        return -1;
    }
  }
  const Oe = ho(({
    event: i,
    index: r,
    reason: g = "auto"
  }) => {
    if (Y.current = r, r === -1 ? _.current.removeAttribute("aria-activedescendant") : _.current.setAttribute("aria-activedescendant", `${ne}-option-${r}`), oe && oe(i, r === -1 ? null : X[r], g), !K.current)
      return;
    const f = K.current.querySelector(`[role="option"].${n}-focused`);
    f && (f.classList.remove(`${n}-focused`), f.classList.remove(`${n}-focusVisible`));
    let $ = K.current;
    if (K.current.getAttribute("role") !== "listbox" && ($ = K.current.parentElement.querySelector('[role="listbox"]')), !$)
      return;
    if (r === -1) {
      $.scrollTop = 0;
      return;
    }
    const h = K.current.querySelector(`[data-option-index="${r}"]`);
    if (h && (h.classList.add(`${n}-focused`), g === "keyboard" && h.classList.add(`${n}-focusVisible`), $.scrollHeight > $.clientHeight && g !== "mouse" && g !== "touch")) {
      const F = h, $e = $.clientHeight + $.scrollTop, Bo = F.offsetTop + F.offsetHeight;
      Bo > $e ? $.scrollTop = Bo - $.clientHeight : F.offsetTop - F.offsetHeight * (k ? 1.3 : 0) < $.scrollTop && ($.scrollTop = F.offsetTop - F.offsetHeight * (k ? 1.3 : 0));
    }
  }), me = ho(({
    event: i,
    diff: r,
    direction: g = "next",
    reason: f = "auto"
  }) => {
    if (!be)
      return;
    const h = ze((() => {
      const F = X.length - 1;
      if (r === "reset")
        return ao;
      if (r === "start")
        return 0;
      if (r === "end")
        return F;
      const $e = Y.current + r;
      return $e < 0 ? $e === -1 && j ? -1 : M && Y.current !== -1 || Math.abs(r) > 1 ? 0 : F : $e > F ? $e === F + 1 && j ? -1 : M || Math.abs(r) > 1 ? F : 0 : $e;
    })(), g);
    if (Oe({
      index: h,
      reason: f,
      event: i
    }), a && r !== "reset")
      if (h === -1)
        _.current.value = A;
      else {
        const F = Z(X[h]);
        _.current.value = F, F.toLowerCase().indexOf(A.toLowerCase()) === 0 && A.length > 0 && _.current.setSelectionRange(A.length, F.length);
      }
  }), Ee = () => {
    const i = (r, g) => {
      const f = r ? Z(r) : "", $ = g ? Z(g) : "";
      return f === $;
    };
    if (Y.current !== -1 && ae.filteredOptions && ae.filteredOptions.length !== X.length && ae.inputValue === A && (B ? O.length === ae.value.length && ae.value.every((r, g) => Z(O[g]) === Z(r)) : i(ae.value, O))) {
      const r = ae.filteredOptions[Y.current];
      if (r)
        return Ao(X, (g) => Z(g) === Z(r));
    }
    return -1;
  }, Ge = x.useCallback(() => {
    if (!be)
      return;
    const i = Ee();
    if (i !== -1) {
      Y.current = i;
      return;
    }
    const r = B ? O[0] : O;
    if (X.length === 0 || r == null) {
      me({
        diff: "reset"
      });
      return;
    }
    if (K.current) {
      if (r != null) {
        const g = X[Y.current];
        if (B && g && Ao(O, ($) => G(g, $)) !== -1)
          return;
        const f = Ao(X, ($) => G($, r));
        f === -1 ? me({
          diff: "reset"
        }) : Oe({
          index: f
        });
        return;
      }
      if (Y.current >= X.length - 1) {
        Oe({
          index: X.length - 1
        });
        return;
      }
      Oe({
        index: Y.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    X.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    B ? !1 : O,
    T,
    me,
    Oe,
    be,
    A,
    B
  ]), go = ho((i) => {
    dn(K, i), i && Ge();
  });
  process.env.NODE_ENV !== "production" && x.useEffect(() => {
    (!_.current || _.current.nodeName !== "INPUT") && (_.current && _.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${b} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (for example enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${_.current} while an HTMLInputElement was expected.`, `Instead, ${b} expects an input element.`, "", b === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [b]), x.useEffect(() => {
    Ge();
  }, [Ge]);
  const Pe = (i) => {
    Le || (ro(!0), We(!0), se && se(i));
  }, De = (i, r) => {
    Le && (ro(!1), ue && ue(i, r));
  }, je = (i, r, g, f) => {
    if (B) {
      if (O.length === r.length && O.every(($, h) => $ === r[h]))
        return;
    } else if (O === r)
      return;
    J && J(i, r, g, f), wo(r);
  }, Ke = x.useRef(!1), Fe = (i, r, g = "selectOption", f = "options") => {
    let $ = g, h = r;
    if (B) {
      if (h = Array.isArray(O) ? O.slice() : [], process.env.NODE_ENV !== "production") {
        const $e = h.filter((Bo) => G(r, Bo));
        $e.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${b} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${$e.length} matches.`].join(`
`));
      }
      const F = Ao(h, ($e) => G(r, $e));
      F === -1 ? h.push(r) : f !== "freeSolo" && (h.splice(F, 1), $ = "removeOption");
    }
    Ne(i, h), je(i, h, $, {
      option: r
    }), !I && (!i || !i.ctrlKey && !i.metaKey) && De(i, $), (c === !0 || c === "touch" && Ke.current || c === "mouse" && !Ke.current) && _.current.blur();
  };
  function lo(i, r) {
    if (i === -1)
      return -1;
    let g = i;
    for (; ; ) {
      if (r === "next" && g === O.length || r === "previous" && g === -1)
        return -1;
      const f = Ae.querySelector(`[data-tag-index="${g}"]`);
      if (!f || !f.hasAttribute("tabindex") || f.disabled || f.getAttribute("aria-disabled") === "true")
        g += r === "next" ? 1 : -1;
      else
        return g;
    }
  }
  const co = (i, r) => {
    if (!B)
      return;
    A === "" && De(i, "toggleInput");
    let g = ge;
    ge === -1 ? A === "" && r === "previous" && (g = O.length - 1) : (g += r === "next" ? 1 : -1, g < 0 && (g = 0), g === O.length && (g = -1)), g = lo(g, r), no(g), Se(g);
  }, bo = (i) => {
    he.current = !0, Be(""), te && te(i, "", "clear"), je(i, B ? [] : null, "clear");
  }, xo = (i) => (r) => {
    if (i.onKeyDown && i.onKeyDown(r), !r.defaultMuiPrevented && (ge !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(r.key) === -1 && (no(-1), Se(-1)), r.which !== 229))
      switch (r.key) {
        case "Home":
          be && H && (r.preventDefault(), me({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: r
          }));
          break;
        case "End":
          be && H && (r.preventDefault(), me({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: r
          }));
          break;
        case "PageUp":
          r.preventDefault(), me({
            diff: -mt,
            direction: "previous",
            reason: "keyboard",
            event: r
          }), Pe(r);
          break;
        case "PageDown":
          r.preventDefault(), me({
            diff: mt,
            direction: "next",
            reason: "keyboard",
            event: r
          }), Pe(r);
          break;
        case "ArrowDown":
          r.preventDefault(), me({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: r
          }), Pe(r);
          break;
        case "ArrowUp":
          r.preventDefault(), me({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: r
          }), Pe(r);
          break;
        case "ArrowLeft":
          co(r, "previous");
          break;
        case "ArrowRight":
          co(r, "next");
          break;
        case "Enter":
          if (Y.current !== -1 && be) {
            const g = X[Y.current], f = S ? S(g) : !1;
            if (r.preventDefault(), f)
              return;
            Fe(r, g, "selectOption"), a && _.current.setSelectionRange(_.current.value.length, _.current.value.length);
          } else
            w && A !== "" && io === !1 && (B && r.preventDefault(), Fe(r, A, "createOption", "freeSolo"));
          break;
        case "Escape":
          be ? (r.preventDefault(), r.stopPropagation(), De(r, "escape")) : m && (A !== "" || B && O.length > 0) && (r.preventDefault(), r.stopPropagation(), bo(r));
          break;
        case "Backspace":
          if (B && !fe && A === "" && O.length > 0) {
            const g = ge === -1 ? O.length - 1 : ge, f = O.slice();
            f.splice(g, 1), je(r, f, "removeOption", {
              option: O[g]
            });
          }
          break;
        case "Delete":
          if (B && !fe && A === "" && O.length > 0 && ge !== -1) {
            const g = ge, f = O.slice();
            f.splice(g, 1), je(r, f, "removeOption", {
              option: O[g]
            });
          }
          break;
      }
  }, ko = (i) => {
    fo(!0), U && !he.current && Pe(i);
  }, Ve = (i) => {
    if (t(K)) {
      _.current.focus();
      return;
    }
    fo(!1), Ie.current = !0, he.current = !1, p && Y.current !== -1 && be ? Fe(i, X[Y.current], "blur") : p && w && A !== "" ? Fe(i, A, "blur", "freeSolo") : d && Ne(i, O), De(i, "blur");
  }, ce = (i) => {
    const r = i.target.value;
    A !== r && (Be(r), We(!1), te && te(i, r, "input")), r === "" ? !P && !B && je(i, null, "clear") : Pe(i);
  }, Q = (i) => {
    const r = Number(i.currentTarget.getAttribute("data-option-index"));
    Y.current !== r && Oe({
      event: i,
      index: r,
      reason: "mouse"
    });
  }, ve = (i) => {
    Oe({
      event: i,
      index: Number(i.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), Ke.current = !0;
  }, ye = (i) => {
    const r = Number(i.currentTarget.getAttribute("data-option-index"));
    Fe(i, X[r], "selectOption"), Ke.current = !1;
  }, Xe = (i) => (r) => {
    const g = O.slice();
    g.splice(i, 1), je(r, g, "removeOption", {
      option: O[i]
    });
  }, Co = (i) => {
    Le ? De(i, "toggleInput") : Pe(i);
  }, Je = (i) => {
    i.currentTarget.contains(i.target) && i.target.getAttribute("id") !== ne && i.preventDefault();
  }, Qe = (i) => {
    i.currentTarget.contains(i.target) && (_.current.focus(), Re && Ie.current && _.current.selectionEnd - _.current.selectionStart === 0 && _.current.select(), Ie.current = !1);
  }, eo = (i) => {
    !y && (A === "" || !Le) && Co(i);
  };
  let Ue = w && A.length > 0;
  Ue = Ue || (B ? O.length > 0 : O !== null);
  let Ye = X;
  if (k) {
    const i = /* @__PURE__ */ new Map();
    let r = !1;
    Ye = X.reduce((g, f, $) => {
      const h = k(f);
      return g.length > 0 && g[g.length - 1].group === h ? g[g.length - 1].options.push(f) : (process.env.NODE_ENV !== "production" && (i.get(h) && !r && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${b} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), r = !0), i.set(h, !0)), g.push({
        key: $,
        index: $,
        group: h,
        options: [f]
      })), g;
    }, []);
  }
  return y && _e && Ve(), {
    getRootProps: (i = {}) => s({
      "aria-owns": qe ? `${ne}-listbox` : null
    }, i, {
      onKeyDown: xo(i),
      onMouseDown: Je,
      onClick: Qe
    }),
    getInputLabelProps: () => ({
      id: `${ne}-label`,
      htmlFor: ne
    }),
    getInputProps: () => ({
      id: ne,
      value: A,
      onBlur: Ve,
      onFocus: ko,
      onChange: ce,
      onMouseDown: eo,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": be ? "" : null,
      "aria-autocomplete": a ? "both" : "list",
      "aria-controls": qe ? `${ne}-listbox` : void 0,
      "aria-expanded": qe,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: _,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: y
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: bo
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Co
    }),
    getTagProps: ({
      index: i
    }) => s({
      key: i,
      "data-tag-index": i,
      tabIndex: -1
    }, !fe && {
      onDelete: Xe(i)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${ne}-listbox`,
      "aria-labelledby": `${ne}-label`,
      ref: go,
      onMouseDown: (i) => {
        i.preventDefault();
      }
    }),
    getOptionProps: ({
      index: i,
      option: r
    }) => {
      var g;
      const f = (B ? O : [O]).some((h) => h != null && G(r, h)), $ = S ? S(r) : !1;
      return {
        key: (g = W == null ? void 0 : W(r)) != null ? g : Z(r),
        tabIndex: -1,
        role: "option",
        id: `${ne}-option-${i}`,
        onMouseMove: Q,
        onClick: ye,
        onTouchStart: ve,
        "data-option-index": i,
        "aria-disabled": $,
        "aria-selected": f
      };
    },
    id: ne,
    inputValue: A,
    value: O,
    dirty: Ue,
    expanded: be && Ae,
    popupOpen: be,
    focused: _e || ge !== -1,
    anchorEl: Ae,
    setAnchorEl: ke,
    focusedTag: ge,
    groupedOptions: Ye
  };
}
function Vn(e) {
  return pe("MuiListSubheader", e);
}
ie("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Un = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], Hn = (e) => {
  const {
    classes: t,
    color: n,
    disableGutters: a,
    inset: l,
    disableSticky: p
  } = e, c = {
    root: ["root", n !== "default" && `color${z(n)}`, !a && "gutters", l && "inset", !p && "sticky"]
  };
  return de(c, Vn, t);
}, Wn = N("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.color !== "default" && t[`color${z(n.color)}`], !n.disableGutters && t.gutters, n.inset && t.inset, !n.disableSticky && t.sticky];
  }
})(({
  theme: e,
  ownerState: t
}) => s({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (e.vars || e).palette.text.secondary,
  fontFamily: e.typography.fontFamily,
  fontWeight: e.typography.fontWeightMedium,
  fontSize: e.typography.pxToRem(14)
}, t.color === "primary" && {
  color: (e.vars || e).palette.primary.main
}, t.color === "inherit" && {
  color: "inherit"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.inset && {
  paddingLeft: 72
}, !t.disableSticky && {
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: (e.vars || e).palette.background.paper
})), st = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const a = Ce({
    props: t,
    name: "MuiListSubheader"
  }), {
    className: l,
    color: p = "default",
    component: c = "li",
    disableGutters: d = !1,
    disableSticky: m = !1,
    inset: b = !1
  } = a, v = ee(a, Un), P = s({}, a, {
    color: p,
    component: c,
    disableGutters: d,
    disableSticky: m,
    inset: b
  }), I = Hn(P);
  return /* @__PURE__ */ u.jsx(Wn, s({
    as: c,
    className: V(I.root, l),
    ref: n,
    ownerState: P
  }, v));
});
st.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (st.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: o.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: o.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const qn = st;
function Gn(e) {
  return pe("MuiAutocomplete", e);
}
const Kn = ie("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), D = Kn;
var ht, vt;
const Xn = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionKey", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], Jn = ["ref"], Yn = rt(), Zn = (e) => {
  const {
    classes: t,
    disablePortal: n,
    expanded: a,
    focused: l,
    fullWidth: p,
    hasClearIcon: c,
    hasPopupIcon: d,
    inputFocused: m,
    popupOpen: b,
    size: v
  } = e, P = {
    root: ["root", a && "expanded", l && "focused", p && "fullWidth", c && "hasClearIcon", d && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", m && "inputFocused"],
    tag: ["tag", `tagSize${z(v)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", b && "popupIndicatorOpen"],
    popper: ["popper", n && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return de(P, Gn, t);
}, Qn = N("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e, {
      fullWidth: a,
      hasClearIcon: l,
      hasPopupIcon: p,
      inputFocused: c,
      size: d
    } = n;
    return [{
      [`& .${D.tag}`]: t.tag
    }, {
      [`& .${D.tag}`]: t[`tagSize${z(d)}`]
    }, {
      [`& .${D.inputRoot}`]: t.inputRoot
    }, {
      [`& .${D.input}`]: t.input
    }, {
      [`& .${D.input}`]: c && t.inputFocused
    }, t.root, a && t.fullWidth, p && t.hasPopupIcon, l && t.hasClearIcon];
  }
})({
  [`&.${D.focused} .${D.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${D.clearIndicator}`]: {
      visibility: "visible"
    }
  },
  [`& .${D.tag}`]: {
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  },
  [`& .${D.inputRoot}`]: {
    flexWrap: "wrap",
    [`.${D.hasPopupIcon}&, .${D.hasClearIcon}&`]: {
      paddingRight: 26 + 4
    },
    [`.${D.hasPopupIcon}.${D.hasClearIcon}&`]: {
      paddingRight: 52 + 4
    },
    [`& .${D.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${qo.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${qo.root}.${po.sizeSmall}`]: {
    [`& .${qo.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${dt.root}`]: {
    padding: 9,
    [`.${D.hasPopupIcon}&, .${D.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${D.hasPopupIcon}.${D.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${D.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${D.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${dt.root}.${po.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${D.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${mo.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${D.hasPopupIcon}&, .${D.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${D.hasPopupIcon}.${D.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${mo.input}`]: {
      padding: "7px 4px"
    },
    [`& .${D.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${mo.root}.${po.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${mo.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${po.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${mo.root}.${po.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${D.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${mo.root}.${po.hiddenLabel}.${po.sizeSmall}`]: {
    [`& .${D.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${D.input}`]: {
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  },
  variants: [{
    props: {
      fullWidth: !0
    },
    style: {
      width: "100%"
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      [`& .${D.tag}`]: {
        margin: 2,
        maxWidth: "calc(100% - 4px)"
      }
    }
  }, {
    props: {
      inputFocused: !0
    },
    style: {
      [`& .${D.input}`]: {
        opacity: 1
      }
    }
  }]
}), ea = N("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (e, t) => t.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translate(0, -50%)"
}), oa = N(vo, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (e, t) => t.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), ta = N(vo, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: e
  }, t) => s({}, t.popupIndicator, e.popupOpen && t.popupIndicatorOpen)
})({
  padding: 2,
  marginRight: -2,
  variants: [{
    props: {
      popupOpen: !0
    },
    style: {
      transform: "rotate(180deg)"
    }
  }]
}), na = N(Uo, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${D.option}`]: t.option
    }, t.popper, n.disablePortal && t.popperDisablePortal];
  }
})(({
  theme: e
}) => ({
  zIndex: (e.vars || e).zIndex.modal,
  variants: [{
    props: {
      disablePortal: !0
    },
    style: {
      position: "absolute"
    }
  }]
})), aa = N(kt, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (e, t) => t.paper
})(({
  theme: e
}) => s({}, e.typography.body1, {
  overflow: "auto"
})), ra = N("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (e, t) => t.loading
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), sa = N("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (e, t) => t.noOptions
})(({
  theme: e
}) => ({
  color: (e.vars || e).palette.text.secondary,
  padding: "14px 16px"
})), ia = N("div", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (e, t) => t.listbox
})(({
  theme: e
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${D.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [e.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${D.focused}`]: {
      backgroundColor: (e.vars || e).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${D.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : re(e.palette.primary.main, e.palette.action.selectedOpacity),
      [`&.${D.focused}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : re(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (e.vars || e).palette.action.selected
        }
      },
      [`&.${D.focusVisible}`]: {
        backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : re(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
      }
    }
  }
})), la = N(qn, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (e, t) => t.groupLabel
})(({
  theme: e
}) => ({
  backgroundColor: (e.vars || e).palette.background.paper,
  top: -8
})), ca = N("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (e, t) => t.groupUl
})({
  padding: 0,
  [`& .${D.option}`]: {
    paddingLeft: 24
  }
}), Mt = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var a, l, p, c;
  const d = Yn({
    props: t,
    name: "MuiAutocomplete"
  }), {
    autoComplete: m = !1,
    autoHighlight: b = !1,
    autoSelect: v = !1,
    blurOnSelect: P = !1,
    ChipProps: I,
    className: y,
    clearIcon: C = ht || (ht = /* @__PURE__ */ u.jsx(An, {
      fontSize: "small"
    })),
    clearOnBlur: M = !d.freeSolo,
    clearOnEscape: R = !1,
    clearText: T = "Clear",
    closeText: w = "Close",
    componentsProps: S = {},
    defaultValue: W = d.multiple ? [] : null,
    disableClearable: E = !1,
    disableCloseOnSelect: k = !1,
    disabled: H = !1,
    disabledItemsFocusable: L = !1,
    disableListWrap: j = !1,
    disablePortal: q = !1,
    filterSelectedOptions: G = !1,
    forcePopupIcon: B = "auto",
    freeSolo: J = !1,
    fullWidth: ue = !1,
    getLimitTagsText: oe = (f) => `+${f}`,
    getOptionLabel: te,
    groupBy: se,
    handleHomeEndKeys: Te = !d.freeSolo,
    includeInputInList: U = !1,
    limitTags: le = -1,
    ListboxComponent: fe = "ul",
    ListboxProps: Re,
    loading: we = !1,
    loadingText: ne = "Loading…",
    multiple: Z = !1,
    noOptionsText: he = "No options",
    openOnFocus: Ie = !1,
    openText: _ = "Open",
    PaperComponent: K = kt,
    PopperComponent: Ae = Uo,
    popupIcon: ke = vt || (vt = /* @__PURE__ */ u.jsx(un, {})),
    readOnly: ge = !1,
    renderGroup: no,
    renderInput: ao,
    renderOption: Y,
    renderTags: O,
    selectOnFocus: wo = !d.freeSolo,
    size: A = "medium",
    slotProps: Be = {}
  } = d, _e = ee(d, Xn), {
    getRootProps: fo,
    getInputProps: Ne,
    getInputLabelProps: Le,
    getPopupIndicatorProps: ro,
    getClearProps: so,
    getTagProps: We,
    getListboxProps: io,
    getOptionProps: be,
    value: X,
    dirty: ae,
    expanded: qe,
    id: Se,
    popupOpen: ze,
    focused: Oe,
    focusedTag: me,
    anchorEl: Ee,
    setAnchorEl: Ge,
    inputValue: go,
    groupedOptions: Pe
  } = Fn(s({}, d, {
    componentName: "Autocomplete"
  })), De = !E && !H && ae && !ge, je = (!J || B === !0) && B !== !1, {
    onMouseDown: Ke
  } = Ne(), {
    ref: Fe
  } = Re != null ? Re : {}, lo = io(), {
    ref: co
  } = lo, bo = ee(lo, Jn), xo = et(co, Fe), Ve = te || ((f) => {
    var $;
    return ($ = f.label) != null ? $ : f;
  }), ce = s({}, d, {
    disablePortal: q,
    expanded: qe,
    focused: Oe,
    fullWidth: ue,
    getOptionLabel: Ve,
    hasClearIcon: De,
    hasPopupIcon: je,
    inputFocused: me === -1,
    popupOpen: ze,
    size: A
  }), Q = Zn(ce);
  let ve;
  if (Z && X.length > 0) {
    const f = ($) => s({
      className: Q.tag,
      disabled: H
    }, We($));
    O ? ve = O(X, f, ce) : ve = X.map(($, h) => /* @__PURE__ */ u.jsx(fn, s({
      label: Ve($),
      size: A
    }, f({
      index: h
    }), I)));
  }
  if (le > -1 && Array.isArray(ve)) {
    const f = ve.length - le;
    !Oe && f > 0 && (ve = ve.splice(0, le), ve.push(/* @__PURE__ */ u.jsx("span", {
      className: Q.tag,
      children: oe(f)
    }, ve.length)));
  }
  const Xe = no || ((f) => /* @__PURE__ */ u.jsxs("li", {
    children: [/* @__PURE__ */ u.jsx(la, {
      className: Q.groupLabel,
      ownerState: ce,
      component: "div",
      children: f.group
    }), /* @__PURE__ */ u.jsx(ca, {
      className: Q.groupUl,
      ownerState: ce,
      children: f.children
    })]
  }, f.key)), Je = Y || ((f, $) => /* @__PURE__ */ St("li", s({}, f, {
    key: f.key
  }), Ve($))), Qe = (f, $) => {
    const h = be({
      option: f,
      index: $
    });
    return Je(s({}, h, {
      className: Q.option
    }), f, {
      selected: h["aria-selected"],
      index: $,
      inputValue: go
    }, ce);
  }, eo = (a = Be.clearIndicator) != null ? a : S.clearIndicator, Ue = (l = Be.paper) != null ? l : S.paper, Ye = (p = Be.popper) != null ? p : S.popper, i = (c = Be.popupIndicator) != null ? c : S.popupIndicator, r = (f) => /* @__PURE__ */ u.jsx(na, s({
    as: Ae,
    disablePortal: q,
    style: {
      width: Ee ? Ee.clientWidth : null
    },
    ownerState: ce,
    role: "presentation",
    anchorEl: Ee,
    open: ze
  }, Ye, {
    className: V(Q.popper, Ye == null ? void 0 : Ye.className),
    children: /* @__PURE__ */ u.jsx(aa, s({
      ownerState: ce,
      as: K
    }, Ue, {
      className: V(Q.paper, Ue == null ? void 0 : Ue.className),
      children: f
    }))
  }));
  let g = null;
  return Pe.length > 0 ? g = r(/* @__PURE__ */ u.jsx(ia, s({
    as: fe,
    className: Q.listbox,
    ownerState: ce
  }, bo, Re, {
    ref: xo,
    children: Pe.map((f, $) => se ? Xe({
      key: f.key,
      group: f.group,
      children: f.options.map((h, F) => Qe(h, f.index + F))
    }) : Qe(f, $))
  }))) : we && Pe.length === 0 ? g = r(/* @__PURE__ */ u.jsx(ra, {
    className: Q.loading,
    ownerState: ce,
    children: ne
  })) : Pe.length === 0 && !J && !we && (g = r(/* @__PURE__ */ u.jsx(sa, {
    className: Q.noOptions,
    ownerState: ce,
    role: "presentation",
    onMouseDown: (f) => {
      f.preventDefault();
    },
    children: he
  }))), /* @__PURE__ */ u.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ u.jsx(Qn, s({
      ref: n,
      className: V(Q.root, y),
      ownerState: ce
    }, fo(_e), {
      children: ao({
        id: Se,
        disabled: H,
        fullWidth: !0,
        size: A === "small" ? "small" : void 0,
        InputLabelProps: Le(),
        InputProps: s({
          ref: Ge,
          className: Q.inputRoot,
          startAdornment: ve,
          onClick: (f) => {
            f.target === f.currentTarget && Ke(f);
          }
        }, (De || je) && {
          endAdornment: /* @__PURE__ */ u.jsxs(ea, {
            className: Q.endAdornment,
            ownerState: ce,
            children: [De ? /* @__PURE__ */ u.jsx(oa, s({}, so(), {
              "aria-label": T,
              title: T,
              ownerState: ce
            }, eo, {
              className: V(Q.clearIndicator, eo == null ? void 0 : eo.className),
              children: C
            })) : null, je ? /* @__PURE__ */ u.jsx(ta, s({}, ro(), {
              disabled: H,
              "aria-label": ze ? w : _,
              title: ze ? w : _,
              ownerState: ce
            }, i, {
              className: V(Q.popupIndicator, i == null ? void 0 : i.className),
              children: ke
            })) : null]
          })
        }),
        inputProps: s({
          className: Q.input,
          disabled: H,
          readOnly: ge
        }, Ne())
      })
    })), Ee ? g : null]
  });
});
process.env.NODE_ENV !== "production" && (Mt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the portion of the selected suggestion that the user hasn't typed,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: o.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: o.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using the `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: o.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: o.oneOfType([o.oneOf(["mouse", "touch"]), o.bool]),
  /**
   * Props applied to the [`Chip`](/material-ui/api/chip/) element.
   */
  ChipProps: o.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: o.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set it to `true` if you want to help the user enter a new value.
   * Set it to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: o.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: o.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: o.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: o.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: o.shape({
    clearIndicator: o.object,
    paper: o.object,
    popper: o.object,
    popupIndicator: o.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: Jo(o.any, (e) => e.multiple && e.defaultValue !== void 0 && !Array.isArray(e.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${e.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: o.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: o.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: o.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: o.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: o.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: o.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: o.oneOfType([o.oneOf(["auto"]), o.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: o.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: o.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: o.func,
  /**
   * Used to determine the key for a given option.
   * This can be useful when the labels of options are not unique (since labels are used as keys by default).
   *
   * @param {Value} option The option to get the key for.
   * @returns {string | number}
   */
  getOptionKey: o.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: o.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: o.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: o.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: o.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: o.bool,
  /**
   * The input value.
   */
  inputValue: o.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: o.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: Ze,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: o.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: o.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, for example `options` are empty).
   * @default false
   */
  loading: o.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: o.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: o.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: o.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: o.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: o.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: o.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: o.func,
  /**
   * @ignore
   */
  onKeyDown: o.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: o.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: o.string,
  /**
   * Array of options.
   */
  options: o.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: o.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: o.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: o.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: o.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: o.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: o.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: o.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: o.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: o.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium"]), o.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    clearIndicator: o.object,
    paper: o.object,
    popper: o.object,
    popupIndicator: o.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: Jo(o.any, (e) => e.multiple && e.value !== void 0 && !Array.isArray(e.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${e.value} was provided.`].join(`
`)) : null)
});
const Ss = Mt;
function pa(e) {
  return pe("MuiBadge", e);
}
const da = ie("MuiBadge", [
  "root",
  "badge",
  "dot",
  "standard",
  "anchorOriginTopRight",
  "anchorOriginBottomRight",
  "anchorOriginTopLeft",
  "anchorOriginBottomLeft",
  "invisible",
  "colorError",
  "colorInfo",
  "colorPrimary",
  "colorSecondary",
  "colorSuccess",
  "colorWarning",
  "overlapRectangular",
  "overlapCircular",
  // TODO: v6 remove the overlap value from these class keys
  "anchorOriginTopLeftCircular",
  "anchorOriginTopLeftRectangular",
  "anchorOriginTopRightCircular",
  "anchorOriginTopRightRectangular",
  "anchorOriginBottomLeftCircular",
  "anchorOriginBottomLeftRectangular",
  "anchorOriginBottomRightCircular",
  "anchorOriginBottomRightRectangular"
]), oo = da, ua = ["anchorOrigin", "className", "classes", "component", "components", "componentsProps", "children", "overlap", "color", "invisible", "max", "badgeContent", "slots", "slotProps", "showZero", "variant"], Go = 10, Ko = 4, fa = rt(), ga = (e) => {
  const {
    color: t,
    anchorOrigin: n,
    invisible: a,
    overlap: l,
    variant: p,
    classes: c = {}
  } = e, d = {
    root: ["root"],
    badge: ["badge", p, a && "invisible", `anchorOrigin${z(n.vertical)}${z(n.horizontal)}`, `anchorOrigin${z(n.vertical)}${z(n.horizontal)}${z(l)}`, `overlap${z(l)}`, t !== "default" && `color${z(t)}`]
  };
  return de(d, pa, c);
}, ba = N("span", {
  name: "MuiBadge",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  position: "relative",
  display: "inline-flex",
  // For correct alignment with the text.
  verticalAlign: "middle",
  flexShrink: 0
}), ma = N("span", {
  name: "MuiBadge",
  slot: "Badge",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.badge, t[n.variant], t[`anchorOrigin${z(n.anchorOrigin.vertical)}${z(n.anchorOrigin.horizontal)}${z(n.overlap)}`], n.color !== "default" && t[`color${z(n.color)}`], n.invisible && t.invisible];
  }
})(({
  theme: e
}) => {
  var t;
  return {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "absolute",
    boxSizing: "border-box",
    fontFamily: e.typography.fontFamily,
    fontWeight: e.typography.fontWeightMedium,
    fontSize: e.typography.pxToRem(12),
    minWidth: Go * 2,
    lineHeight: 1,
    padding: "0 6px",
    height: Go * 2,
    borderRadius: Go,
    zIndex: 1,
    // Render the badge on top of potential ripples.
    transition: e.transitions.create("transform", {
      easing: e.transitions.easing.easeInOut,
      duration: e.transitions.duration.enteringScreen
    }),
    variants: [...Object.keys(((t = e.vars) != null ? t : e).palette).filter((n) => {
      var a, l;
      return ((a = e.vars) != null ? a : e).palette[n].main && ((l = e.vars) != null ? l : e).palette[n].contrastText;
    }).map((n) => ({
      props: {
        color: n
      },
      style: {
        backgroundColor: (e.vars || e).palette[n].main,
        color: (e.vars || e).palette[n].contrastText
      }
    })), {
      props: {
        variant: "dot"
      },
      style: {
        borderRadius: Ko,
        height: Ko * 2,
        minWidth: Ko * 2,
        padding: 0
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "top" && n.anchorOrigin.horizontal === "right" && n.overlap === "rectangular",
      style: {
        top: 0,
        right: 0,
        transform: "scale(1) translate(50%, -50%)",
        transformOrigin: "100% 0%",
        [`&.${oo.invisible}`]: {
          transform: "scale(0) translate(50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "bottom" && n.anchorOrigin.horizontal === "right" && n.overlap === "rectangular",
      style: {
        bottom: 0,
        right: 0,
        transform: "scale(1) translate(50%, 50%)",
        transformOrigin: "100% 100%",
        [`&.${oo.invisible}`]: {
          transform: "scale(0) translate(50%, 50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "top" && n.anchorOrigin.horizontal === "left" && n.overlap === "rectangular",
      style: {
        top: 0,
        left: 0,
        transform: "scale(1) translate(-50%, -50%)",
        transformOrigin: "0% 0%",
        [`&.${oo.invisible}`]: {
          transform: "scale(0) translate(-50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "bottom" && n.anchorOrigin.horizontal === "left" && n.overlap === "rectangular",
      style: {
        bottom: 0,
        left: 0,
        transform: "scale(1) translate(-50%, 50%)",
        transformOrigin: "0% 100%",
        [`&.${oo.invisible}`]: {
          transform: "scale(0) translate(-50%, 50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "top" && n.anchorOrigin.horizontal === "right" && n.overlap === "circular",
      style: {
        top: "14%",
        right: "14%",
        transform: "scale(1) translate(50%, -50%)",
        transformOrigin: "100% 0%",
        [`&.${oo.invisible}`]: {
          transform: "scale(0) translate(50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "bottom" && n.anchorOrigin.horizontal === "right" && n.overlap === "circular",
      style: {
        bottom: "14%",
        right: "14%",
        transform: "scale(1) translate(50%, 50%)",
        transformOrigin: "100% 100%",
        [`&.${oo.invisible}`]: {
          transform: "scale(0) translate(50%, 50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "top" && n.anchorOrigin.horizontal === "left" && n.overlap === "circular",
      style: {
        top: "14%",
        left: "14%",
        transform: "scale(1) translate(-50%, -50%)",
        transformOrigin: "0% 0%",
        [`&.${oo.invisible}`]: {
          transform: "scale(0) translate(-50%, -50%)"
        }
      }
    }, {
      props: ({
        ownerState: n
      }) => n.anchorOrigin.vertical === "bottom" && n.anchorOrigin.horizontal === "left" && n.overlap === "circular",
      style: {
        bottom: "14%",
        left: "14%",
        transform: "scale(1) translate(-50%, 50%)",
        transformOrigin: "0% 100%",
        [`&.${oo.invisible}`]: {
          transform: "scale(0) translate(-50%, 50%)"
        }
      }
    }, {
      props: {
        invisible: !0
      },
      style: {
        transition: e.transitions.create("transform", {
          easing: e.transitions.easing.easeInOut,
          duration: e.transitions.duration.leavingScreen
        })
      }
    }]
  };
}), At = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var a, l, p, c, d, m;
  const b = fa({
    props: t,
    name: "MuiBadge"
  }), {
    anchorOrigin: v = {
      vertical: "top",
      horizontal: "right"
    },
    className: P,
    component: I,
    components: y = {},
    componentsProps: C = {},
    children: M,
    overlap: R = "rectangular",
    color: T = "default",
    invisible: w = !1,
    max: S = 99,
    badgeContent: W,
    slots: E,
    slotProps: k,
    showZero: H = !1,
    variant: L = "standard"
  } = b, j = ee(b, ua), {
    badgeContent: q,
    invisible: G,
    max: B,
    displayValue: J
  } = zn({
    max: S,
    invisible: w,
    badgeContent: W,
    showZero: H
  }), ue = at({
    anchorOrigin: v,
    color: T,
    overlap: R,
    variant: L,
    badgeContent: W
  }), oe = G || q == null && L !== "dot", {
    color: te = T,
    overlap: se = R,
    anchorOrigin: Te = v,
    variant: U = L
  } = oe ? ue : b, le = U !== "dot" ? J : void 0, fe = s({}, b, {
    badgeContent: q,
    invisible: oe,
    max: B,
    displayValue: le,
    showZero: H,
    anchorOrigin: Te,
    color: te,
    overlap: se,
    variant: U
  }), Re = ga(fe), we = (a = (l = E == null ? void 0 : E.root) != null ? l : y.Root) != null ? a : ba, ne = (p = (c = E == null ? void 0 : E.badge) != null ? c : y.Badge) != null ? p : ma, Z = (d = k == null ? void 0 : k.root) != null ? d : C.root, he = (m = k == null ? void 0 : k.badge) != null ? m : C.badge, Ie = ut({
    elementType: we,
    externalSlotProps: Z,
    externalForwardedProps: j,
    additionalProps: {
      ref: n,
      as: I
    },
    ownerState: fe,
    className: V(Z == null ? void 0 : Z.className, Re.root, P)
  }), _ = ut({
    elementType: ne,
    externalSlotProps: he,
    ownerState: fe,
    className: V(Re.badge, he == null ? void 0 : he.className)
  });
  return /* @__PURE__ */ u.jsxs(we, s({}, Ie, {
    children: [M, /* @__PURE__ */ u.jsx(ne, s({}, _, {
      children: le
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (At.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The anchor of the badge.
   * @default {
   *   vertical: 'top',
   *   horizontal: 'right',
   * }
   */
  anchorOrigin: o.shape({
    horizontal: o.oneOf(["left", "right"]).isRequired,
    vertical: o.oneOf(["bottom", "top"]).isRequired
  }),
  /**
   * The content rendered within the badge.
   */
  badgeContent: o.node,
  /**
   * The badge will be added relative to this node.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Badge: o.elementType,
    Root: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    badge: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * If `true`, the badge is invisible.
   * @default false
   */
  invisible: o.bool,
  /**
   * Max count to show.
   * @default 99
   */
  max: o.number,
  /**
   * Wrapped shape the badge should overlap.
   * @default 'rectangular'
   */
  overlap: o.oneOf(["circular", "rectangular"]),
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   * @default false
   */
  showZero: o.bool,
  /**
   * The props used for each slot inside the Badge.
   * @default {}
   */
  slotProps: o.shape({
    badge: o.oneOfType([o.func, o.object]),
    root: o.oneOfType([o.func, o.object])
  }),
  /**
   * The components used for each slot inside the Badge.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    badge: o.elementType,
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: o.oneOfType([o.oneOf(["dot", "standard"]), o.string])
});
const js = At, ha = ie("MuiBox", ["root"]), va = ha, ya = gn(), zt = Ln({
  themeId: bn,
  defaultTheme: ya,
  defaultClassName: va.root,
  generateClassName: mn.generate
});
process.env.NODE_ENV !== "production" && (zt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Ms = zt;
function xa(e) {
  return pe("PrivateSwitchBase", e);
}
ie("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const Ca = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], Ta = (e) => {
  const {
    classes: t,
    checked: n,
    disabled: a,
    edge: l
  } = e, p = {
    root: ["root", n && "checked", a && "disabled", l && `edge${z(l)}`],
    input: ["input"]
  };
  return de(p, xa, t);
}, Pa = N(ot)(({
  ownerState: e
}) => s({
  padding: 9,
  borderRadius: "50%"
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
})), Ia = N("input", {
  shouldForwardProp: tt
})({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), Et = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const {
    autoFocus: a,
    checked: l,
    checkedIcon: p,
    className: c,
    defaultChecked: d,
    disabled: m,
    disableFocusRipple: b = !1,
    edge: v = !1,
    icon: P,
    id: I,
    inputProps: y,
    inputRef: C,
    name: M,
    onBlur: R,
    onChange: T,
    onFocus: w,
    readOnly: S,
    required: W = !1,
    tabIndex: E,
    type: k,
    value: H
  } = t, L = ee(t, Ca), [j, q] = yo({
    controlled: l,
    default: !!d,
    name: "SwitchBase",
    state: "checked"
  }), G = Bt(), B = (U) => {
    w && w(U), G && G.onFocus && G.onFocus(U);
  }, J = (U) => {
    R && R(U), G && G.onBlur && G.onBlur(U);
  }, ue = (U) => {
    if (U.nativeEvent.defaultPrevented)
      return;
    const le = U.target.checked;
    q(le), T && T(U, le);
  };
  let oe = m;
  G && typeof oe == "undefined" && (oe = G.disabled);
  const te = k === "checkbox" || k === "radio", se = s({}, t, {
    checked: j,
    disabled: oe,
    disableFocusRipple: b,
    edge: v
  }), Te = Ta(se);
  return /* @__PURE__ */ u.jsxs(Pa, s({
    component: "span",
    className: V(Te.root, c),
    centerRipple: !0,
    focusRipple: !b,
    disabled: oe,
    tabIndex: null,
    role: void 0,
    onFocus: B,
    onBlur: J,
    ownerState: se,
    ref: n
  }, L, {
    children: [/* @__PURE__ */ u.jsx(Ia, s({
      autoFocus: a,
      checked: l,
      defaultChecked: d,
      className: Te.input,
      disabled: oe,
      id: te ? I : void 0,
      name: M,
      onChange: ue,
      readOnly: S,
      ref: C,
      required: W,
      ownerState: se,
      tabIndex: E,
      type: k
    }, k === "checkbox" && H === void 0 ? {} : {
      value: H
    }, y)), j ? p : P]
  }));
});
process.env.NODE_ENV !== "production" && (Et.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: o.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: o.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * @ignore
   */
  defaultChecked: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: o.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ho,
  /*
   * @ignore
   */
  name: o.string,
  /**
   * @ignore
   */
  onBlur: o.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * @ignore
   */
  onFocus: o.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: o.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.object,
  /**
   * @ignore
   */
  tabIndex: o.oneOfType([o.number, o.string]),
  /**
   * The input component prop `type`.
   */
  type: o.string.isRequired,
  /**
   * The value of the component.
   */
  value: o.any
});
const Dt = Et, Oa = He(/* @__PURE__ */ u.jsx("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), $a = He(/* @__PURE__ */ u.jsx("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), Ra = He(/* @__PURE__ */ u.jsx("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function wa(e) {
  return pe("MuiCheckbox", e);
}
const ka = ie("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), Xo = ka, Ba = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"], Na = (e) => {
  const {
    classes: t,
    indeterminate: n,
    color: a,
    size: l
  } = e, p = {
    root: ["root", n && "indeterminate", `color${z(a)}`, `size${z(l)}`]
  }, c = de(p, wa, t);
  return s({}, t, c);
}, La = N(Dt, {
  shouldForwardProp: (e) => tt(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.indeterminate && t.indeterminate, t[`size${z(n.size)}`], n.color !== "default" && t[`color${z(n.color)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => s({
  color: (e.vars || e).palette.text.secondary
}, !t.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${t.color === "default" ? e.vars.palette.action.activeChannel : e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : re(t.color === "default" ? e.palette.action.active : e.palette[t.color].main, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, t.color !== "default" && {
  [`&.${Xo.checked}, &.${Xo.indeterminate}`]: {
    color: (e.vars || e).palette[t.color].main
  },
  [`&.${Xo.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  }
})), Sa = /* @__PURE__ */ u.jsx($a, {}), ja = /* @__PURE__ */ u.jsx(Oa, {}), Ma = /* @__PURE__ */ u.jsx(Ra, {}), _t = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var a, l;
  const p = Ce({
    props: t,
    name: "MuiCheckbox"
  }), {
    checkedIcon: c = Sa,
    color: d = "primary",
    icon: m = ja,
    indeterminate: b = !1,
    indeterminateIcon: v = Ma,
    inputProps: P,
    size: I = "medium",
    className: y
  } = p, C = ee(p, Ba), M = b ? v : m, R = b ? v : c, T = s({}, p, {
    color: d,
    indeterminate: b,
    size: I
  }), w = Na(T);
  return /* @__PURE__ */ u.jsx(La, s({
    type: "checkbox",
    inputProps: s({
      "data-indeterminate": b
    }, P),
    icon: /* @__PURE__ */ x.cloneElement(M, {
      fontSize: (a = M.props.fontSize) != null ? a : I
    }),
    checkedIcon: /* @__PURE__ */ x.cloneElement(R, {
      fontSize: (l = R.props.fontSize) != null ? l : I
    }),
    ownerState: T,
    ref: n,
    className: V(w.root, y)
  }, C, {
    classes: w
  }));
});
process.env.NODE_ENV !== "production" && (_t.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: o.node,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: o.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: o.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ho,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: o.any
});
const As = _t;
function Aa(e) {
  return pe("MuiDivider", e);
}
const za = ie("MuiDivider", ["root", "absolute", "fullWidth", "inset", "middle", "flexItem", "light", "vertical", "withChildren", "withChildrenVertical", "textAlignRight", "textAlignLeft", "wrapper", "wrapperVertical"]), yt = za, Ea = ["absolute", "children", "className", "component", "flexItem", "light", "orientation", "role", "textAlign", "variant"], Da = (e) => {
  const {
    absolute: t,
    children: n,
    classes: a,
    flexItem: l,
    light: p,
    orientation: c,
    textAlign: d,
    variant: m
  } = e;
  return de({
    root: ["root", t && "absolute", m, p && "light", c === "vertical" && "vertical", l && "flexItem", n && "withChildren", n && c === "vertical" && "withChildrenVertical", d === "right" && c !== "vertical" && "textAlignRight", d === "left" && c !== "vertical" && "textAlignLeft"],
    wrapper: ["wrapper", c === "vertical" && "wrapperVertical"]
  }, Aa, a);
}, _a = N("div", {
  name: "MuiDivider",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.absolute && t.absolute, t[n.variant], n.light && t.light, n.orientation === "vertical" && t.vertical, n.flexItem && t.flexItem, n.children && t.withChildren, n.children && n.orientation === "vertical" && t.withChildrenVertical, n.textAlign === "right" && n.orientation !== "vertical" && t.textAlignRight, n.textAlign === "left" && n.orientation !== "vertical" && t.textAlignLeft];
  }
})(({
  theme: e,
  ownerState: t
}) => s({
  margin: 0,
  // Reset browser default style.
  flexShrink: 0,
  borderWidth: 0,
  borderStyle: "solid",
  borderColor: (e.vars || e).palette.divider,
  borderBottomWidth: "thin"
}, t.absolute && {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%"
}, t.light && {
  borderColor: e.vars ? `rgba(${e.vars.palette.dividerChannel} / 0.08)` : re(e.palette.divider, 0.08)
}, t.variant === "inset" && {
  marginLeft: 72
}, t.variant === "middle" && t.orientation === "horizontal" && {
  marginLeft: e.spacing(2),
  marginRight: e.spacing(2)
}, t.variant === "middle" && t.orientation === "vertical" && {
  marginTop: e.spacing(1),
  marginBottom: e.spacing(1)
}, t.orientation === "vertical" && {
  height: "100%",
  borderBottomWidth: 0,
  borderRightWidth: "thin"
}, t.flexItem && {
  alignSelf: "stretch",
  height: "auto"
}), ({
  ownerState: e
}) => s({}, e.children && {
  display: "flex",
  whiteSpace: "nowrap",
  textAlign: "center",
  border: 0,
  "&::before, &::after": {
    content: '""',
    alignSelf: "center"
  }
}), ({
  theme: e,
  ownerState: t
}) => s({}, t.children && t.orientation !== "vertical" && {
  "&::before, &::after": {
    width: "100%",
    borderTop: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  theme: e,
  ownerState: t
}) => s({}, t.children && t.orientation === "vertical" && {
  flexDirection: "column",
  "&::before, &::after": {
    height: "100%",
    borderLeft: `thin solid ${(e.vars || e).palette.divider}`
  }
}), ({
  ownerState: e
}) => s({}, e.textAlign === "right" && e.orientation !== "vertical" && {
  "&::before": {
    width: "90%"
  },
  "&::after": {
    width: "10%"
  }
}, e.textAlign === "left" && e.orientation !== "vertical" && {
  "&::before": {
    width: "10%"
  },
  "&::after": {
    width: "90%"
  }
})), Fa = N("span", {
  name: "MuiDivider",
  slot: "Wrapper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.wrapper, n.orientation === "vertical" && t.wrapperVertical];
  }
})(({
  theme: e,
  ownerState: t
}) => s({
  display: "inline-block",
  paddingLeft: `calc(${e.spacing(1)} * 1.2)`,
  paddingRight: `calc(${e.spacing(1)} * 1.2)`
}, t.orientation === "vertical" && {
  paddingTop: `calc(${e.spacing(1)} * 1.2)`,
  paddingBottom: `calc(${e.spacing(1)} * 1.2)`
})), it = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const a = Ce({
    props: t,
    name: "MuiDivider"
  }), {
    absolute: l = !1,
    children: p,
    className: c,
    component: d = p ? "div" : "hr",
    flexItem: m = !1,
    light: b = !1,
    orientation: v = "horizontal",
    role: P = d !== "hr" ? "separator" : void 0,
    textAlign: I = "center",
    variant: y = "fullWidth"
  } = a, C = ee(a, Ea), M = s({}, a, {
    absolute: l,
    component: d,
    flexItem: m,
    light: b,
    orientation: v,
    role: P,
    textAlign: I,
    variant: y
  }), R = Da(M);
  return /* @__PURE__ */ u.jsx(_a, s({
    as: d,
    className: V(R.root, c),
    role: P,
    ref: n,
    ownerState: M
  }, C, {
    children: p ? /* @__PURE__ */ u.jsx(Fa, {
      className: R.wrapper,
      ownerState: M,
      children: p
    }) : null
  }));
});
it.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (it.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Absolutely position the element.
   * @default false
   */
  absolute: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, a vertical divider will have the correct height when used in flex container.
   * (By default, a vertical divider will have a calculated height of `0px` if it is the child of a flex container.)
   * @default false
   */
  flexItem: o.bool,
  /**
   * If `true`, the divider will have a lighter color.
   * @default false
   * @deprecated Use <Divider sx={{ opacity: 0.6 }} /> (or any opacity or color) instead. [How to migrate](/material-ui/migration/migrating-from-deprecated-apis/)
   */
  light: o.bool,
  /**
   * The component orientation.
   * @default 'horizontal'
   */
  orientation: o.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  role: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The text alignment.
   * @default 'center'
   */
  textAlign: o.oneOf(["center", "left", "right"]),
  /**
   * The variant to use.
   * @default 'fullWidth'
   */
  variant: o.oneOfType([o.oneOf(["fullWidth", "inset", "middle"]), o.string])
});
const zs = it;
function Va(e) {
  return pe("MuiFormControlLabel", e);
}
const Ua = ie("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), $o = Ua, Ha = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"], Wa = (e) => {
  const {
    classes: t,
    disabled: n,
    labelPlacement: a,
    error: l,
    required: p
  } = e, c = {
    root: ["root", n && "disabled", `labelPlacement${z(a)}`, l && "error", p && "required"],
    label: ["label", n && "disabled"],
    asterisk: ["asterisk", l && "error"]
  };
  return de(c, Va, t);
}, qa = N("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${$o.label}`]: t.label
    }, t.root, t[`labelPlacement${z(n.labelPlacement)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => s({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${$o.disabled}`]: {
    cursor: "default"
  }
}, t.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, t.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, t.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${$o.label}`]: {
    [`&.${$o.disabled}`]: {
      color: (e.vars || e).palette.text.disabled
    }
  }
})), Ga = N("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (e, t) => t.asterisk
})(({
  theme: e
}) => ({
  [`&.${$o.error}`]: {
    color: (e.vars || e).palette.error.main
  }
})), Ft = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var a, l;
  const p = Ce({
    props: t,
    name: "MuiFormControlLabel"
  }), {
    className: c,
    componentsProps: d = {},
    control: m,
    disabled: b,
    disableTypography: v,
    label: P,
    labelPlacement: I = "end",
    required: y,
    slotProps: C = {}
  } = p, M = ee(p, Ha), R = Bt(), T = (a = b != null ? b : m.props.disabled) != null ? a : R == null ? void 0 : R.disabled, w = y != null ? y : m.props.required, S = {
    disabled: T,
    required: w
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((j) => {
    typeof m.props[j] == "undefined" && typeof p[j] != "undefined" && (S[j] = p[j]);
  });
  const W = hn({
    props: p,
    muiFormControl: R,
    states: ["error"]
  }), E = s({}, p, {
    disabled: T,
    labelPlacement: I,
    required: w,
    error: W.error
  }), k = Wa(E), H = (l = C.typography) != null ? l : d.typography;
  let L = P;
  return L != null && L.type !== uo && !v && (L = /* @__PURE__ */ u.jsx(uo, s({
    component: "span"
  }, H, {
    className: V(k.label, H == null ? void 0 : H.className),
    children: L
  }))), /* @__PURE__ */ u.jsxs(qa, s({
    className: V(k.root, c),
    ownerState: E,
    ref: n
  }, M, {
    children: [/* @__PURE__ */ x.cloneElement(m, S), w ? /* @__PURE__ */ u.jsxs(vn, {
      display: "block",
      children: [L, /* @__PURE__ */ u.jsxs(Ga, {
        ownerState: E,
        "aria-hidden": !0,
        className: k.asterisk,
        children: [" ", "*"]
      })]
    }) : L]
  }));
});
process.env.NODE_ENV !== "production" && (Ft.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component appears selected.
   */
  checked: o.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: o.shape({
    typography: o.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: o.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: o.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ho,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: o.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: o.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: o.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: o.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: o.shape({
    typography: o.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the component.
   */
  value: o.any
});
const Es = Ft;
function Ka(e) {
  return pe("MuiListItemIcon", e);
}
const Xa = ie("MuiListItemIcon", ["root", "alignItemsFlexStart"]), xt = Xa, Ja = ["className"], Ya = (e) => {
  const {
    alignItems: t,
    classes: n
  } = e;
  return de({
    root: ["root", t === "flex-start" && "alignItemsFlexStart"]
  }, Ka, n);
}, Za = N("div", {
  name: "MuiListItemIcon",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.alignItems === "flex-start" && t.alignItemsFlexStart];
  }
})(({
  theme: e,
  ownerState: t
}) => s({
  minWidth: 56,
  color: (e.vars || e).palette.action.active,
  flexShrink: 0,
  display: "inline-flex"
}, t.alignItems === "flex-start" && {
  marginTop: 8
})), Vt = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const a = Ce({
    props: t,
    name: "MuiListItemIcon"
  }), {
    className: l
  } = a, p = ee(a, Ja), c = x.useContext(_o), d = s({}, a, {
    alignItems: c.alignItems
  }), m = Ya(d);
  return /* @__PURE__ */ u.jsx(Za, s({
    className: V(m.root, l),
    ownerState: d,
    ref: n
  }, p));
});
process.env.NODE_ENV !== "production" && (Vt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally `Icon`, `SvgIcon`,
   * or a `@mui/icons-material` SVG icon element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Ds = Vt;
function Qa(e) {
  return pe("MuiListItemText", e);
}
const er = ie("MuiListItemText", ["root", "multiline", "dense", "inset", "primary", "secondary"]), Fo = er, or = ["children", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"], tr = (e) => {
  const {
    classes: t,
    inset: n,
    primary: a,
    secondary: l,
    dense: p
  } = e;
  return de({
    root: ["root", n && "inset", p && "dense", a && l && "multiline"],
    primary: ["primary"],
    secondary: ["secondary"]
  }, Qa, t);
}, nr = N("div", {
  name: "MuiListItemText",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [{
      [`& .${Fo.primary}`]: t.primary
    }, {
      [`& .${Fo.secondary}`]: t.secondary
    }, t.root, n.inset && t.inset, n.primary && n.secondary && t.multiline, n.dense && t.dense];
  }
})(({
  ownerState: e
}) => s({
  flex: "1 1 auto",
  minWidth: 0,
  marginTop: 4,
  marginBottom: 4
}, e.primary && e.secondary && {
  marginTop: 6,
  marginBottom: 6
}, e.inset && {
  paddingLeft: 56
})), Ut = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const a = Ce({
    props: t,
    name: "MuiListItemText"
  }), {
    children: l,
    className: p,
    disableTypography: c = !1,
    inset: d = !1,
    primary: m,
    primaryTypographyProps: b,
    secondary: v,
    secondaryTypographyProps: P
  } = a, I = ee(a, or), {
    dense: y
  } = x.useContext(_o);
  let C = m != null ? m : l, M = v;
  const R = s({}, a, {
    disableTypography: c,
    inset: d,
    primary: !!C,
    secondary: !!M,
    dense: y
  }), T = tr(R);
  return C != null && C.type !== uo && !c && (C = /* @__PURE__ */ u.jsx(uo, s({
    variant: y ? "body2" : "body1",
    className: T.primary,
    component: b != null && b.variant ? void 0 : "span",
    display: "block"
  }, b, {
    children: C
  }))), M != null && M.type !== uo && !c && (M = /* @__PURE__ */ u.jsx(uo, s({
    variant: "body2",
    className: T.secondary,
    color: "text.secondary",
    display: "block"
  }, P, {
    children: M
  }))), /* @__PURE__ */ u.jsxs(nr, s({
    className: V(T.root, p),
    ownerState: R,
    ref: n
  }, I, {
    children: [C, M]
  }));
});
process.env.NODE_ENV !== "production" && (Ut.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Alias for the `primary` prop.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   * @default false
   */
  disableTypography: o.bool,
  /**
   * If `true`, the children are indented.
   * This should be used if there is no left avatar or left icon.
   * @default false
   */
  inset: o.bool,
  /**
   * The main content element.
   */
  primary: o.node,
  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: o.object,
  /**
   * The secondary content element.
   */
  secondary: o.node,
  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const _s = Ut;
function ar(e) {
  return pe("MuiMenuItem", e);
}
const rr = ie("MuiMenuItem", ["root", "focusVisible", "dense", "disabled", "divider", "gutters", "selected"]), Io = rr, sr = ["autoFocus", "component", "dense", "divider", "disableGutters", "focusVisibleClassName", "role", "tabIndex", "className"], ir = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, n.dense && t.dense, n.divider && t.divider, !n.disableGutters && t.gutters];
}, lr = (e) => {
  const {
    disabled: t,
    dense: n,
    divider: a,
    disableGutters: l,
    selected: p,
    classes: c
  } = e, m = de({
    root: ["root", n && "dense", t && "disabled", !l && "gutters", a && "divider", p && "selected"]
  }, ar, c);
  return s({}, c, m);
}, cr = N(ot, {
  shouldForwardProp: (e) => tt(e) || e === "classes",
  name: "MuiMenuItem",
  slot: "Root",
  overridesResolver: ir
})(({
  theme: e,
  ownerState: t
}) => s({}, e.typography.body1, {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  minHeight: 48,
  paddingTop: 6,
  paddingBottom: 6,
  boxSizing: "border-box",
  whiteSpace: "nowrap"
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, {
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Io.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : re(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${Io.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : re(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${Io.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : re(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : re(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  },
  [`&.${Io.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Io.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  [`& + .${yt.root}`]: {
    marginTop: e.spacing(1),
    marginBottom: e.spacing(1)
  },
  [`& + .${yt.inset}`]: {
    marginLeft: 52
  },
  [`& .${Fo.root}`]: {
    marginTop: 0,
    marginBottom: 0
  },
  [`& .${Fo.inset}`]: {
    paddingLeft: 36
  },
  [`& .${xt.root}`]: {
    minWidth: 36
  }
}, !t.dense && {
  [e.breakpoints.up("sm")]: {
    minHeight: "auto"
  }
}, t.dense && s({
  minHeight: 32,
  // https://m2.material.io/components/menus#specs > Dense
  paddingTop: 4,
  paddingBottom: 4
}, e.typography.body2, {
  [`& .${xt.root} svg`]: {
    fontSize: "1.25rem"
  }
}))), Ht = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const a = Ce({
    props: t,
    name: "MuiMenuItem"
  }), {
    autoFocus: l = !1,
    component: p = "li",
    dense: c = !1,
    divider: d = !1,
    disableGutters: m = !1,
    focusVisibleClassName: b,
    role: v = "menuitem",
    tabIndex: P,
    className: I
  } = a, y = ee(a, sr), C = x.useContext(_o), M = x.useMemo(() => ({
    dense: c || C.dense || !1,
    disableGutters: m
  }), [C.dense, c, m]), R = x.useRef(null);
  yn(() => {
    l && (R.current ? R.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a MenuItem whose component has not been rendered."));
  }, [l]);
  const T = s({}, a, {
    dense: M.dense,
    divider: d,
    disableGutters: m
  }), w = lr(a), S = et(R, n);
  let W;
  return a.disabled || (W = P !== void 0 ? P : -1), /* @__PURE__ */ u.jsx(_o.Provider, {
    value: M,
    children: /* @__PURE__ */ u.jsx(cr, s({
      ref: S,
      role: v,
      tabIndex: W,
      component: p,
      focusVisibleClassName: V(w.focusVisible, b),
      className: V(w.root, I)
    }, y, {
      ownerState: T,
      classes: w
    }))
  });
});
process.env.NODE_ENV !== "production" && (Ht.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   */
  autoFocus: o.bool,
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent Menu component.
   * @default false
   */
  dense: o.bool,
  /**
   * @ignore
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the menu item.
   * @default false
   */
  divider: o.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: o.string,
  /**
   * @ignore
   */
  role: o.string,
  /**
   * If `true`, the component is selected.
   * @default false
   */
  selected: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * @default 0
   */
  tabIndex: o.number
});
const pr = Ht;
function dr(e) {
  return pe("MuiPagination", e);
}
ie("MuiPagination", ["root", "ul", "outlined", "text"]);
const ur = ["boundaryCount", "componentName", "count", "defaultPage", "disabled", "hideNextButton", "hidePrevButton", "onChange", "page", "showFirstButton", "showLastButton", "siblingCount"];
function fr(e = {}) {
  const {
    boundaryCount: t = 1,
    componentName: n = "usePagination",
    count: a = 1,
    defaultPage: l = 1,
    disabled: p = !1,
    hideNextButton: c = !1,
    hidePrevButton: d = !1,
    onChange: m,
    page: b,
    showFirstButton: v = !1,
    showLastButton: P = !1,
    siblingCount: I = 1
  } = e, y = ee(e, ur), [C, M] = yo({
    controlled: b,
    default: l,
    name: n,
    state: "page"
  }), R = (j, q) => {
    b || M(q), m && m(j, q);
  }, T = (j, q) => {
    const G = q - j + 1;
    return Array.from({
      length: G
    }, (B, J) => j + J);
  }, w = T(1, Math.min(t, a)), S = T(Math.max(a - t + 1, t + 1), a), W = Math.max(
    Math.min(
      // Natural start
      C - I,
      // Lower boundary when page is high
      a - t - I * 2 - 1
    ),
    // Greater than startPages
    t + 2
  ), E = Math.min(
    Math.max(
      // Natural end
      C + I,
      // Upper boundary when page is low
      t + I * 2 + 2
    ),
    // Less than endPages
    S.length > 0 ? S[0] - 2 : a - 1
  ), k = [
    ...v ? ["first"] : [],
    ...d ? [] : ["previous"],
    ...w,
    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...W > t + 2 ? ["start-ellipsis"] : t + 1 < a - t ? [t + 1] : [],
    // Sibling pages
    ...T(W, E),
    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...E < a - t - 1 ? ["end-ellipsis"] : a - t > t ? [a - t] : [],
    ...S,
    ...c ? [] : ["next"],
    ...P ? ["last"] : []
  ], H = (j) => {
    switch (j) {
      case "first":
        return 1;
      case "previous":
        return C - 1;
      case "next":
        return C + 1;
      case "last":
        return a;
      default:
        return null;
    }
  }, L = k.map((j) => typeof j == "number" ? {
    onClick: (q) => {
      R(q, j);
    },
    type: "page",
    page: j,
    selected: j === C,
    disabled: p,
    "aria-current": j === C ? "true" : void 0
  } : {
    onClick: (q) => {
      R(q, H(j));
    },
    type: j,
    page: H(j),
    selected: !1,
    disabled: p || j.indexOf("ellipsis") === -1 && (j === "next" || j === "last" ? C >= a : C <= 1)
  });
  return s({
    items: L
  }, y);
}
function gr(e) {
  return pe("MuiPaginationItem", e);
}
const br = ie("MuiPaginationItem", ["root", "page", "sizeSmall", "sizeLarge", "text", "textPrimary", "textSecondary", "outlined", "outlinedPrimary", "outlinedSecondary", "rounded", "ellipsis", "firstLast", "previousNext", "focusVisible", "disabled", "selected", "icon", "colorPrimary", "colorSecondary"]), Me = br, Yo = He(/* @__PURE__ */ u.jsx("path", {
  d: "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"
}), "FirstPage"), Zo = He(/* @__PURE__ */ u.jsx("path", {
  d: "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"
}), "LastPage"), Ct = He(/* @__PURE__ */ u.jsx("path", {
  d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
}), "NavigateBefore"), Tt = He(/* @__PURE__ */ u.jsx("path", {
  d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
}), "NavigateNext"), mr = ["className", "color", "component", "components", "disabled", "page", "selected", "shape", "size", "slots", "type", "variant"], Wt = (e, t) => {
  const {
    ownerState: n
  } = e;
  return [t.root, t[n.variant], t[`size${z(n.size)}`], n.variant === "text" && t[`text${z(n.color)}`], n.variant === "outlined" && t[`outlined${z(n.color)}`], n.shape === "rounded" && t.rounded, n.type === "page" && t.page, (n.type === "start-ellipsis" || n.type === "end-ellipsis") && t.ellipsis, (n.type === "previous" || n.type === "next") && t.previousNext, (n.type === "first" || n.type === "last") && t.firstLast];
}, hr = (e) => {
  const {
    classes: t,
    color: n,
    disabled: a,
    selected: l,
    size: p,
    shape: c,
    type: d,
    variant: m
  } = e, b = {
    root: ["root", `size${z(p)}`, m, c, n !== "standard" && `color${z(n)}`, n !== "standard" && `${m}${z(n)}`, a && "disabled", l && "selected", {
      page: "page",
      first: "firstLast",
      last: "firstLast",
      "start-ellipsis": "ellipsis",
      "end-ellipsis": "ellipsis",
      previous: "previousNext",
      next: "previousNext"
    }[d]],
    icon: ["icon"]
  };
  return de(b, gr, t);
}, vr = N("div", {
  name: "MuiPaginationItem",
  slot: "Root",
  overridesResolver: Wt
})(({
  theme: e,
  ownerState: t
}) => s({}, e.typography.body2, {
  borderRadius: 32 / 2,
  textAlign: "center",
  boxSizing: "border-box",
  minWidth: 32,
  padding: "0 6px",
  margin: "0 3px",
  color: (e.vars || e).palette.text.primary,
  height: "auto",
  [`&.${Me.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.size === "small" && {
  minWidth: 26,
  borderRadius: 26 / 2,
  margin: "0 1px",
  padding: "0 4px"
}, t.size === "large" && {
  minWidth: 40,
  borderRadius: 40 / 2,
  padding: "0 10px",
  fontSize: e.typography.pxToRem(15)
})), yr = N(ot, {
  name: "MuiPaginationItem",
  slot: "Root",
  overridesResolver: Wt
})(({
  theme: e,
  ownerState: t
}) => s({}, e.typography.body2, {
  borderRadius: 32 / 2,
  textAlign: "center",
  boxSizing: "border-box",
  minWidth: 32,
  height: 32,
  padding: "0 6px",
  margin: "0 3px",
  color: (e.vars || e).palette.text.primary,
  [`&.${Me.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${Me.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  },
  transition: e.transitions.create(["color", "background-color"], {
    duration: e.transitions.duration.short
  }),
  "&:hover": {
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${Me.selected}`]: {
    backgroundColor: (e.vars || e).palette.action.selected,
    "&:hover": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : re(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette.action.selected
      }
    },
    [`&.${Me.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : re(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    },
    [`&.${Me.disabled}`]: {
      opacity: 1,
      color: (e.vars || e).palette.action.disabled,
      backgroundColor: (e.vars || e).palette.action.selected
    }
  }
}, t.size === "small" && {
  minWidth: 26,
  height: 26,
  borderRadius: 26 / 2,
  margin: "0 1px",
  padding: "0 4px"
}, t.size === "large" && {
  minWidth: 40,
  height: 40,
  borderRadius: 40 / 2,
  padding: "0 10px",
  fontSize: e.typography.pxToRem(15)
}, t.shape === "rounded" && {
  borderRadius: (e.vars || e).shape.borderRadius
}), ({
  theme: e,
  ownerState: t
}) => s({}, t.variant === "text" && {
  [`&.${Me.selected}`]: s({}, t.color !== "standard" && {
    color: (e.vars || e).palette[t.color].contrastText,
    backgroundColor: (e.vars || e).palette[t.color].main,
    "&:hover": {
      backgroundColor: (e.vars || e).palette[t.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (e.vars || e).palette[t.color].main
      }
    },
    [`&.${Me.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  }, {
    [`&.${Me.disabled}`]: {
      color: (e.vars || e).palette.action.disabled
    }
  })
}, t.variant === "outlined" && {
  border: e.vars ? `1px solid rgba(${e.vars.palette.common.onBackgroundChannel} / 0.23)` : `1px solid ${e.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)"}`,
  [`&.${Me.selected}`]: s({}, t.color !== "standard" && {
    color: (e.vars || e).palette[t.color].main,
    border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.5)` : re(e.palette[t.color].main, 0.5)}`,
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.activatedOpacity})` : re(e.palette[t.color].main, e.palette.action.activatedOpacity),
    "&:hover": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))` : re(e.palette[t.color].main, e.palette.action.activatedOpacity + e.palette.action.focusOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    [`&.${Me.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / calc(${e.vars.palette.action.activatedOpacity} + ${e.vars.palette.action.focusOpacity}))` : re(e.palette[t.color].main, e.palette.action.activatedOpacity + e.palette.action.focusOpacity)
    }
  }, {
    [`&.${Me.disabled}`]: {
      borderColor: (e.vars || e).palette.action.disabledBackground,
      color: (e.vars || e).palette.action.disabled
    }
  })
})), xr = N("div", {
  name: "MuiPaginationItem",
  slot: "Icon",
  overridesResolver: (e, t) => t.icon
})(({
  theme: e,
  ownerState: t
}) => s({
  fontSize: e.typography.pxToRem(20),
  margin: "0 -8px"
}, t.size === "small" && {
  fontSize: e.typography.pxToRem(18)
}, t.size === "large" && {
  fontSize: e.typography.pxToRem(22)
})), qt = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const a = Ce({
    props: t,
    name: "MuiPaginationItem"
  }), {
    className: l,
    color: p = "standard",
    component: c,
    components: d = {},
    disabled: m = !1,
    page: b,
    selected: v = !1,
    shape: P = "circular",
    size: I = "medium",
    slots: y = {},
    type: C = "page",
    variant: M = "text"
  } = a, R = ee(a, mr), T = s({}, a, {
    color: p,
    disabled: m,
    selected: v,
    shape: P,
    size: I,
    type: C,
    variant: M
  }), w = nt(), S = hr(T), E = (w ? {
    previous: y.next || d.next || Tt,
    next: y.previous || d.previous || Ct,
    last: y.first || d.first || Yo,
    first: y.last || d.last || Zo
  } : {
    previous: y.previous || d.previous || Ct,
    next: y.next || d.next || Tt,
    first: y.first || d.first || Yo,
    last: y.last || d.last || Zo
  })[C];
  return C === "start-ellipsis" || C === "end-ellipsis" ? /* @__PURE__ */ u.jsx(vr, {
    ref: n,
    ownerState: T,
    className: V(S.root, l),
    children: "…"
  }) : /* @__PURE__ */ u.jsxs(yr, s({
    ref: n,
    ownerState: T,
    component: c,
    disabled: m,
    className: V(S.root, l)
  }, R, {
    children: [C === "page" && b, E ? /* @__PURE__ */ u.jsx(xr, {
      as: E,
      ownerState: T,
      className: S.icon
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (qt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "standard"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    first: o.elementType,
    last: o.elementType,
    next: o.elementType,
    previous: o.elementType
  }),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * The current page number.
   */
  page: o.node,
  /**
   * If `true` the pagination item is selected.
   * @default false
   */
  selected: o.bool,
  /**
   * The shape of the pagination item.
   * @default 'circular'
   */
  shape: o.oneOf(["circular", "rounded"]),
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    first: o.elementType,
    last: o.elementType,
    next: o.elementType,
    previous: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The type of pagination item.
   * @default 'page'
   */
  type: o.oneOf(["end-ellipsis", "first", "last", "next", "page", "previous", "start-ellipsis"]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: o.oneOfType([o.oneOf(["outlined", "text"]), o.string])
});
const Cr = qt, Tr = ["boundaryCount", "className", "color", "count", "defaultPage", "disabled", "getItemAriaLabel", "hideNextButton", "hidePrevButton", "onChange", "page", "renderItem", "shape", "showFirstButton", "showLastButton", "siblingCount", "size", "variant"], Pr = (e) => {
  const {
    classes: t,
    variant: n
  } = e;
  return de({
    root: ["root", n],
    ul: ["ul"]
  }, dr, t);
}, Ir = N("nav", {
  name: "MuiPagination",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant]];
  }
})({}), Or = N("ul", {
  name: "MuiPagination",
  slot: "Ul",
  overridesResolver: (e, t) => t.ul
})({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 0,
  margin: 0,
  listStyle: "none"
});
function $r(e, t, n) {
  return e === "page" ? `${n ? "" : "Go to "}page ${t}` : `Go to ${e} page`;
}
const Gt = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const a = Ce({
    props: t,
    name: "MuiPagination"
  }), {
    boundaryCount: l = 1,
    className: p,
    color: c = "standard",
    count: d = 1,
    defaultPage: m = 1,
    disabled: b = !1,
    getItemAriaLabel: v = $r,
    hideNextButton: P = !1,
    hidePrevButton: I = !1,
    renderItem: y = (L) => /* @__PURE__ */ u.jsx(Cr, s({}, L)),
    shape: C = "circular",
    showFirstButton: M = !1,
    showLastButton: R = !1,
    siblingCount: T = 1,
    size: w = "medium",
    variant: S = "text"
  } = a, W = ee(a, Tr), {
    items: E
  } = fr(s({}, a, {
    componentName: "Pagination"
  })), k = s({}, a, {
    boundaryCount: l,
    color: c,
    count: d,
    defaultPage: m,
    disabled: b,
    getItemAriaLabel: v,
    hideNextButton: P,
    hidePrevButton: I,
    renderItem: y,
    shape: C,
    showFirstButton: M,
    showLastButton: R,
    siblingCount: T,
    size: w,
    variant: S
  }), H = Pr(k);
  return /* @__PURE__ */ u.jsx(Ir, s({
    "aria-label": "pagination navigation",
    className: V(H.root, p),
    ownerState: k,
    ref: n
  }, W, {
    children: /* @__PURE__ */ u.jsx(Or, {
      className: H.ul,
      ownerState: k,
      children: E.map((L, j) => /* @__PURE__ */ u.jsx("li", {
        children: y(s({}, L, {
          color: c,
          "aria-label": v(L.type, L.page, L.selected),
          shape: C,
          size: w,
          variant: S
        }))
      }, j))
    })
  }));
});
process.env.NODE_ENV !== "production" && (Gt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Number of always visible pages at the beginning and end.
   * @default 1
   */
  boundaryCount: Ze,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The active color.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'standard'
   */
  color: o.oneOfType([o.oneOf(["primary", "secondary", "standard"]), o.string]),
  /**
   * The total number of pages.
   * @default 1
   */
  count: Ze,
  /**
   * The page selected by default when the component is uncontrolled.
   * @default 1
   */
  defaultPage: Ze,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous' | 'start-ellipsis' | 'end-ellipsis'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @param {bool} selected If true, the current page is selected.
   * @returns {string}
   */
  getItemAriaLabel: o.func,
  /**
   * If `true`, hide the next-page button.
   * @default false
   */
  hideNextButton: o.bool,
  /**
   * If `true`, hide the previous-page button.
   * @default false
   */
  hidePrevButton: o.bool,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.ChangeEvent<unknown>} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onChange: o.func,
  /**
   * The current page.
   */
  page: Ze,
  /**
   * Render the item.
   * @param {PaginationRenderItemParams} params The props to spread on a PaginationItem.
   * @returns {ReactNode}
   * @default (item) => <PaginationItem {...item} />
   */
  renderItem: o.func,
  /**
   * The shape of the pagination items.
   * @default 'circular'
   */
  shape: o.oneOf(["circular", "rounded"]),
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: o.bool,
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: o.bool,
  /**
   * Number of always visible pages before and after the current page.
   * @default 1
   */
  siblingCount: Ze,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["small", "medium", "large"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: o.oneOfType([o.oneOf(["outlined", "text"]), o.string])
});
const Rr = Gt;
function wr(e) {
  return pe("MuiSkeleton", e);
}
ie("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const kr = ["animation", "className", "component", "height", "style", "variant", "width"];
let Vo = (e) => e, Pt, It, Ot, $t;
const Br = (e) => {
  const {
    classes: t,
    variant: n,
    animation: a,
    hasChildren: l,
    width: p,
    height: c
  } = e;
  return de({
    root: ["root", n, a, l && "withChildren", l && !p && "fitContent", l && !c && "heightAuto"]
  }, wr, t);
}, Nr = jt(Pt || (Pt = Vo`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)), Lr = jt(It || (It = Vo`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)), Sr = N("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], n.animation !== !1 && t[n.animation], n.hasChildren && t.withChildren, n.hasChildren && !n.width && t.fitContent, n.hasChildren && !n.height && t.heightAuto];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const n = jn(e.shape.borderRadius) || "px", a = Mn(e.shape.borderRadius);
  return s({
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: e.vars ? e.vars.palette.Skeleton.bg : xn(e.palette.text.primary, e.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em"
  }, t.variant === "text" && {
    marginTop: 0,
    marginBottom: 0,
    height: "auto",
    transformOrigin: "0 55%",
    transform: "scale(1, 0.60)",
    borderRadius: `${a}${n}/${Math.round(a / 0.6 * 10) / 10}${n}`,
    "&:empty:before": {
      content: '"\\00a0"'
    }
  }, t.variant === "circular" && {
    borderRadius: "50%"
  }, t.variant === "rounded" && {
    borderRadius: (e.vars || e).shape.borderRadius
  }, t.hasChildren && {
    "& > *": {
      visibility: "hidden"
    }
  }, t.hasChildren && !t.width && {
    maxWidth: "fit-content"
  }, t.hasChildren && !t.height && {
    height: "auto"
  });
}, ({
  ownerState: e
}) => e.animation === "pulse" && gt(Ot || (Ot = Vo`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `), Nr), ({
  ownerState: e,
  theme: t
}) => e.animation === "wave" && gt($t || ($t = Vo`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), Lr, (t.vars || t).palette.action.hover)), Kt = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const a = Ce({
    props: t,
    name: "MuiSkeleton"
  }), {
    animation: l = "pulse",
    className: p,
    component: c = "span",
    height: d,
    style: m,
    variant: b = "text",
    width: v
  } = a, P = ee(a, kr), I = s({}, a, {
    animation: l,
    component: c,
    variant: b,
    hasChildren: !!P.children
  }), y = Br(I);
  return /* @__PURE__ */ u.jsx(Sr, s({
    as: c,
    ref: n,
    className: V(y.root, p),
    ownerState: I
  }, P, {
    style: s({
      width: v,
      height: d
    }, m)
  }));
});
process.env.NODE_ENV !== "production" && (Kt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The animation.
   * If `false` the animation effect is disabled.
   * @default 'pulse'
   */
  animation: o.oneOf(["pulse", "wave", !1]),
  /**
   * Optional children to infer width and height from.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Height of the skeleton.
   * Useful when you don't want to adapt the skeleton to a text element but for instance a card.
   */
  height: o.oneOfType([o.number, o.string]),
  /**
   * @ignore
   */
  style: o.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The type of content that will be rendered.
   * @default 'text'
   */
  variant: o.oneOfType([o.oneOf(["circular", "rectangular", "rounded", "text"]), o.string]),
  /**
   * Width of the skeleton.
   * Useful when the skeleton is inside an inline element with no width of its own.
   */
  width: o.oneOfType([o.number, o.string])
});
const Fs = Kt;
function jr(e) {
  return pe("MuiTooltip", e);
}
const Mr = ie("MuiTooltip", ["popper", "popperInteractive", "popperArrow", "popperClose", "tooltip", "tooltipArrow", "touch", "tooltipPlacementLeft", "tooltipPlacementRight", "tooltipPlacementTop", "tooltipPlacementBottom", "arrow"]), to = Mr, Ar = ["arrow", "children", "classes", "components", "componentsProps", "describeChild", "disableFocusListener", "disableHoverListener", "disableInteractive", "disableTouchListener", "enterDelay", "enterNextDelay", "enterTouchDelay", "followCursor", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperComponent", "PopperProps", "slotProps", "slots", "title", "TransitionComponent", "TransitionProps"];
function zr(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Er = (e) => {
  const {
    classes: t,
    disableInteractive: n,
    arrow: a,
    touch: l,
    placement: p
  } = e, c = {
    popper: ["popper", !n && "popperInteractive", a && "popperArrow"],
    tooltip: ["tooltip", a && "tooltipArrow", l && "touch", `tooltipPlacement${z(p.split("-")[0])}`],
    arrow: ["arrow"]
  };
  return de(c, jr, t);
}, Dr = N(Uo, {
  name: "MuiTooltip",
  slot: "Popper",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.popper, !n.disableInteractive && t.popperInteractive, n.arrow && t.popperArrow, !n.open && t.popperClose];
  }
})(({
  theme: e,
  ownerState: t,
  open: n
}) => s({
  zIndex: (e.vars || e).zIndex.tooltip,
  pointerEvents: "none"
}, !t.disableInteractive && {
  pointerEvents: "auto"
}, !n && {
  pointerEvents: "none"
}, t.arrow && {
  [`&[data-popper-placement*="bottom"] .${to.arrow}`]: {
    top: 0,
    marginTop: "-0.71em",
    "&::before": {
      transformOrigin: "0 100%"
    }
  },
  [`&[data-popper-placement*="top"] .${to.arrow}`]: {
    bottom: 0,
    marginBottom: "-0.71em",
    "&::before": {
      transformOrigin: "100% 0"
    }
  },
  [`&[data-popper-placement*="right"] .${to.arrow}`]: s({}, t.isRtl ? {
    right: 0,
    marginRight: "-0.71em"
  } : {
    left: 0,
    marginLeft: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "100% 100%"
    }
  }),
  [`&[data-popper-placement*="left"] .${to.arrow}`]: s({}, t.isRtl ? {
    left: 0,
    marginLeft: "-0.71em"
  } : {
    right: 0,
    marginRight: "-0.71em"
  }, {
    height: "1em",
    width: "0.71em",
    "&::before": {
      transformOrigin: "0 0"
    }
  })
})), _r = N("div", {
  name: "MuiTooltip",
  slot: "Tooltip",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.tooltip, n.touch && t.touch, n.arrow && t.tooltipArrow, t[`tooltipPlacement${z(n.placement.split("-")[0])}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => s({
  backgroundColor: e.vars ? e.vars.palette.Tooltip.bg : re(e.palette.grey[700], 0.92),
  borderRadius: (e.vars || e).shape.borderRadius,
  color: (e.vars || e).palette.common.white,
  fontFamily: e.typography.fontFamily,
  padding: "4px 8px",
  fontSize: e.typography.pxToRem(11),
  maxWidth: 300,
  margin: 2,
  wordWrap: "break-word",
  fontWeight: e.typography.fontWeightMedium
}, t.arrow && {
  position: "relative",
  margin: 0
}, t.touch && {
  padding: "8px 16px",
  fontSize: e.typography.pxToRem(14),
  lineHeight: `${zr(16 / 14)}em`,
  fontWeight: e.typography.fontWeightRegular
}, {
  [`.${to.popper}[data-popper-placement*="left"] &`]: s({
    transformOrigin: "right center"
  }, t.isRtl ? s({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  }) : s({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  })),
  [`.${to.popper}[data-popper-placement*="right"] &`]: s({
    transformOrigin: "left center"
  }, t.isRtl ? s({
    marginRight: "14px"
  }, t.touch && {
    marginRight: "24px"
  }) : s({
    marginLeft: "14px"
  }, t.touch && {
    marginLeft: "24px"
  })),
  [`.${to.popper}[data-popper-placement*="top"] &`]: s({
    transformOrigin: "center bottom",
    marginBottom: "14px"
  }, t.touch && {
    marginBottom: "24px"
  }),
  [`.${to.popper}[data-popper-placement*="bottom"] &`]: s({
    transformOrigin: "center top",
    marginTop: "14px"
  }, t.touch && {
    marginTop: "24px"
  })
})), Fr = N("span", {
  name: "MuiTooltip",
  slot: "Arrow",
  overridesResolver: (e, t) => t.arrow
})(({
  theme: e
}) => ({
  overflow: "hidden",
  position: "absolute",
  width: "1em",
  height: "0.71em",
  boxSizing: "border-box",
  color: e.vars ? e.vars.palette.Tooltip.bg : re(e.palette.grey[700], 0.9),
  "&::before": {
    content: '""',
    margin: "auto",
    display: "block",
    width: "100%",
    height: "100%",
    backgroundColor: "currentColor",
    transform: "rotate(45deg)"
  }
}));
let zo = !1;
const Rt = new In();
let Oo = {
  x: 0,
  y: 0
};
function Eo(e, t) {
  return (n, ...a) => {
    t && t(n, ...a), e(n, ...a);
  };
}
const Xt = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var a, l, p, c, d, m, b, v, P, I, y, C, M, R, T, w, S, W, E;
  const k = Ce({
    props: t,
    name: "MuiTooltip"
  }), {
    arrow: H = !1,
    children: L,
    components: j = {},
    componentsProps: q = {},
    describeChild: G = !1,
    disableFocusListener: B = !1,
    disableHoverListener: J = !1,
    disableInteractive: ue = !1,
    disableTouchListener: oe = !1,
    enterDelay: te = 100,
    enterNextDelay: se = 0,
    enterTouchDelay: Te = 700,
    followCursor: U = !1,
    id: le,
    leaveDelay: fe = 0,
    leaveTouchDelay: Re = 1500,
    onClose: we,
    onOpen: ne,
    open: Z,
    placement: he = "bottom",
    PopperComponent: Ie,
    PopperProps: _ = {},
    slotProps: K = {},
    slots: Ae = {},
    title: ke,
    TransitionComponent: ge = ft,
    TransitionProps: no
  } = k, ao = ee(k, Ar), Y = /* @__PURE__ */ x.isValidElement(L) ? L : /* @__PURE__ */ u.jsx("span", {
    children: L
  }), O = Cn(), wo = nt(), [A, Be] = x.useState(), [_e, fo] = x.useState(null), Ne = x.useRef(!1), Le = ue || U, ro = So(), so = So(), We = So(), io = So(), [be, X] = yo({
    controlled: Z,
    default: !1,
    name: "Tooltip",
    state: "open"
  });
  let ae = be;
  if (process.env.NODE_ENV !== "production") {
    const {
      current: h
    } = x.useRef(Z !== void 0);
    x.useEffect(() => {
      A && A.disabled && !h && ke !== "" && A.tagName.toLowerCase() === "button" && console.error(["MUI: You are providing a disabled `button` child to the Tooltip component.", "A disabled element does not fire events.", "Tooltip needs to listen to the child element's events to display the title.", "", "Add a simple wrapper element, such as a `span`."].join(`
`));
    }, [ke, A, h]);
  }
  const qe = Do(le), Se = x.useRef(), ze = ho(() => {
    Se.current !== void 0 && (document.body.style.WebkitUserSelect = Se.current, Se.current = void 0), io.clear();
  });
  x.useEffect(() => ze, [ze]);
  const Oe = (h) => {
    Rt.clear(), zo = !0, X(!0), ne && !ae && ne(h);
  }, me = ho(
    /**
     * @param {React.SyntheticEvent | Event} event
     */
    (h) => {
      Rt.start(800 + fe, () => {
        zo = !1;
      }), X(!1), we && ae && we(h), ro.start(O.transitions.duration.shortest, () => {
        Ne.current = !1;
      });
    }
  ), Ee = (h) => {
    Ne.current && h.type !== "touchstart" || (A && A.removeAttribute("title"), so.clear(), We.clear(), te || zo && se ? so.start(zo ? se : te, () => {
      Oe(h);
    }) : Oe(h));
  }, Ge = (h) => {
    so.clear(), We.start(fe, () => {
      me(h);
    });
  }, {
    isFocusVisibleRef: go,
    onBlur: Pe,
    onFocus: De,
    ref: je
  } = Tn(), [, Ke] = x.useState(!1), Fe = (h) => {
    Pe(h), go.current === !1 && (Ke(!1), Ge(h));
  }, lo = (h) => {
    A || Be(h.currentTarget), De(h), go.current === !0 && (Ke(!0), Ee(h));
  }, co = (h) => {
    Ne.current = !0;
    const F = Y.props;
    F.onTouchStart && F.onTouchStart(h);
  }, bo = (h) => {
    co(h), We.clear(), ro.clear(), ze(), Se.current = document.body.style.WebkitUserSelect, document.body.style.WebkitUserSelect = "none", io.start(Te, () => {
      document.body.style.WebkitUserSelect = Se.current, Ee(h);
    });
  }, xo = (h) => {
    Y.props.onTouchEnd && Y.props.onTouchEnd(h), ze(), We.start(Re, () => {
      me(h);
    });
  };
  x.useEffect(() => {
    if (!ae)
      return;
    function h(F) {
      (F.key === "Escape" || F.key === "Esc") && me(F);
    }
    return document.addEventListener("keydown", h), () => {
      document.removeEventListener("keydown", h);
    };
  }, [me, ae]);
  const ko = et(Y.ref, je, Be, n);
  !ke && ke !== 0 && (ae = !1);
  const Ve = x.useRef(), ce = (h) => {
    const F = Y.props;
    F.onMouseMove && F.onMouseMove(h), Oo = {
      x: h.clientX,
      y: h.clientY
    }, Ve.current && Ve.current.update();
  }, Q = {}, ve = typeof ke == "string";
  G ? (Q.title = !ae && ve && !J ? ke : null, Q["aria-describedby"] = ae ? qe : null) : (Q["aria-label"] = ve ? ke : null, Q["aria-labelledby"] = ae && !ve ? qe : null);
  const ye = s({}, Q, ao, Y.props, {
    className: V(ao.className, Y.props.className),
    onTouchStart: co,
    ref: ko
  }, U ? {
    onMouseMove: ce
  } : {});
  process.env.NODE_ENV !== "production" && (ye["data-mui-internal-clone-element"] = !0, x.useEffect(() => {
    A && !A.getAttribute("data-mui-internal-clone-element") && console.error(["MUI: The `children` component of the Tooltip is not forwarding its props correctly.", "Please make sure that props are spread on the same element that the ref is applied to."].join(`
`));
  }, [A]));
  const Xe = {};
  oe || (ye.onTouchStart = bo, ye.onTouchEnd = xo), J || (ye.onMouseOver = Eo(Ee, ye.onMouseOver), ye.onMouseLeave = Eo(Ge, ye.onMouseLeave), Le || (Xe.onMouseOver = Ee, Xe.onMouseLeave = Ge)), B || (ye.onFocus = Eo(lo, ye.onFocus), ye.onBlur = Eo(Fe, ye.onBlur), Le || (Xe.onFocus = lo, Xe.onBlur = Fe)), process.env.NODE_ENV !== "production" && Y.props.title && console.error(["MUI: You have provided a `title` prop to the child of <Tooltip />.", `Remove this title prop \`${Y.props.title}\` or the Tooltip component.`].join(`
`));
  const Co = x.useMemo(() => {
    var h;
    let F = [{
      name: "arrow",
      enabled: !!_e,
      options: {
        element: _e,
        padding: 4
      }
    }];
    return (h = _.popperOptions) != null && h.modifiers && (F = F.concat(_.popperOptions.modifiers)), s({}, _.popperOptions, {
      modifiers: F
    });
  }, [_e, _]), Je = s({}, k, {
    isRtl: wo,
    arrow: H,
    disableInteractive: Le,
    placement: he,
    PopperComponentProp: Ie,
    touch: Ne.current
  }), Qe = Er(Je), eo = (a = (l = Ae.popper) != null ? l : j.Popper) != null ? a : Dr, Ue = (p = (c = (d = Ae.transition) != null ? d : j.Transition) != null ? c : ge) != null ? p : ft, Ye = (m = (b = Ae.tooltip) != null ? b : j.Tooltip) != null ? m : _r, i = (v = (P = Ae.arrow) != null ? P : j.Arrow) != null ? v : Fr, r = jo(eo, s({}, _, (I = K.popper) != null ? I : q.popper, {
    className: V(Qe.popper, _ == null ? void 0 : _.className, (y = (C = K.popper) != null ? C : q.popper) == null ? void 0 : y.className)
  }), Je), g = jo(Ue, s({}, no, (M = K.transition) != null ? M : q.transition), Je), f = jo(Ye, s({}, (R = K.tooltip) != null ? R : q.tooltip, {
    className: V(Qe.tooltip, (T = (w = K.tooltip) != null ? w : q.tooltip) == null ? void 0 : T.className)
  }), Je), $ = jo(i, s({}, (S = K.arrow) != null ? S : q.arrow, {
    className: V(Qe.arrow, (W = (E = K.arrow) != null ? E : q.arrow) == null ? void 0 : W.className)
  }), Je);
  return /* @__PURE__ */ u.jsxs(x.Fragment, {
    children: [/* @__PURE__ */ x.cloneElement(Y, ye), /* @__PURE__ */ u.jsx(eo, s({
      as: Ie != null ? Ie : Uo,
      placement: he,
      anchorEl: U ? {
        getBoundingClientRect: () => ({
          top: Oo.y,
          left: Oo.x,
          right: Oo.x,
          bottom: Oo.y,
          width: 0,
          height: 0
        })
      } : A,
      popperRef: Ve,
      open: A ? ae : !1,
      id: qe,
      transition: !0
    }, Xe, r, {
      popperOptions: Co,
      children: ({
        TransitionProps: h
      }) => /* @__PURE__ */ u.jsx(Ue, s({
        timeout: O.transitions.duration.shorter
      }, h, g, {
        children: /* @__PURE__ */ u.jsxs(Ye, s({}, f, {
          children: [ke, H ? /* @__PURE__ */ u.jsx(i, s({}, $, {
            ref: fo
          })) : null]
        }))
      }))
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Xt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, adds an arrow to the tooltip.
   * @default false
   */
  arrow: o.bool,
  /**
   * Tooltip reference element.
   */
  children: Pn.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
    Arrow: o.elementType,
    Popper: o.elementType,
    Tooltip: o.elementType,
    Transition: o.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: o.shape({
    arrow: o.object,
    popper: o.object,
    tooltip: o.object,
    transition: o.object
  }),
  /**
   * Set to `true` if the `title` acts as an accessible description.
   * By default the `title` acts as an accessible label for the child.
   * @default false
   */
  describeChild: o.bool,
  /**
   * Do not respond to focus-visible events.
   * @default false
   */
  disableFocusListener: o.bool,
  /**
   * Do not respond to hover events.
   * @default false
   */
  disableHoverListener: o.bool,
  /**
   * Makes a tooltip not interactive, i.e. it will close when the user
   * hovers over the tooltip before the `leaveDelay` is expired.
   * @default false
   */
  disableInteractive: o.bool,
  /**
   * Do not respond to long press touch events.
   * @default false
   */
  disableTouchListener: o.bool,
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay (`enterTouchDelay`).
   * @default 100
   */
  enterDelay: o.number,
  /**
   * The number of milliseconds to wait before showing the tooltip when one was already recently opened.
   * @default 0
   */
  enterNextDelay: o.number,
  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   * @default 700
   */
  enterTouchDelay: o.number,
  /**
   * If `true`, the tooltip follow the cursor over the wrapped element.
   * @default false
   */
  followCursor: o.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide this prop. It falls back to a randomly generated id.
   */
  id: o.string,
  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This prop won't impact the leave touch delay (`leaveTouchDelay`).
   * @default 0
   */
  leaveDelay: o.number,
  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   * @default 1500
   */
  leaveTouchDelay: o.number,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: o.func,
  /**
   * Callback fired when the component requests to be open.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool,
  /**
   * Tooltip placement.
   * @default 'bottom'
   */
  placement: o.oneOf(["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * The component used for the popper.
   * @default Popper
   */
  PopperComponent: o.elementType,
  /**
   * Props applied to the [`Popper`](/material-ui/api/popper/) element.
   * @default {}
   */
  PopperProps: o.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    arrow: o.object,
    popper: o.object,
    tooltip: o.object,
    transition: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    arrow: o.elementType,
    popper: o.elementType,
    tooltip: o.elementType,
    transition: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Tooltip title. Zero-length titles string, undefined, null and false are never displayed.
   */
  title: o.node,
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: o.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: o.object
});
const Vs = Xt;
function Vr(e) {
  return pe("MuiSwitch", e);
}
const Ur = ie("MuiSwitch", ["root", "edgeStart", "edgeEnd", "switchBase", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium", "checked", "disabled", "input", "thumb", "track"]), xe = Ur, Hr = ["className", "color", "edge", "size", "sx"], Wr = rt(), qr = (e) => {
  const {
    classes: t,
    edge: n,
    size: a,
    color: l,
    checked: p,
    disabled: c
  } = e, d = {
    root: ["root", n && `edge${z(n)}`, `size${z(a)}`],
    switchBase: ["switchBase", `color${z(l)}`, p && "checked", c && "disabled"],
    thumb: ["thumb"],
    track: ["track"],
    input: ["input"]
  }, m = de(d, Vr, t);
  return s({}, t, m);
}, Gr = N("span", {
  name: "MuiSwitch",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, n.edge && t[`edge${z(n.edge)}`], t[`size${z(n.size)}`]];
  }
})({
  display: "inline-flex",
  width: 34 + 12 * 2,
  height: 14 + 12 * 2,
  overflow: "hidden",
  padding: 12,
  boxSizing: "border-box",
  position: "relative",
  flexShrink: 0,
  zIndex: 0,
  // Reset the stacking context.
  verticalAlign: "middle",
  // For correct alignment with the text.
  "@media print": {
    colorAdjust: "exact"
  },
  variants: [{
    props: {
      edge: "start"
    },
    style: {
      marginLeft: -8
    }
  }, {
    props: {
      edge: "end"
    },
    style: {
      marginRight: -8
    }
  }, {
    props: {
      size: "small"
    },
    style: {
      width: 40,
      height: 24,
      padding: 7,
      [`& .${xe.thumb}`]: {
        width: 16,
        height: 16
      },
      [`& .${xe.switchBase}`]: {
        padding: 4,
        [`&.${xe.checked}`]: {
          transform: "translateX(16px)"
        }
      }
    }
  }]
}), Kr = N(Dt, {
  name: "MuiSwitch",
  slot: "SwitchBase",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.switchBase, {
      [`& .${xe.input}`]: t.input
    }, n.color !== "default" && t[`color${z(n.color)}`]];
  }
})(({
  theme: e
}) => ({
  position: "absolute",
  top: 0,
  left: 0,
  zIndex: 1,
  // Render above the focus ripple.
  color: e.vars ? e.vars.palette.Switch.defaultColor : `${e.palette.mode === "light" ? e.palette.common.white : e.palette.grey[300]}`,
  transition: e.transitions.create(["left", "transform"], {
    duration: e.transitions.duration.shortest
  }),
  [`&.${xe.checked}`]: {
    transform: "translateX(20px)"
  },
  [`&.${xe.disabled}`]: {
    color: e.vars ? e.vars.palette.Switch.defaultDisabledColor : `${e.palette.mode === "light" ? e.palette.grey[100] : e.palette.grey[600]}`
  },
  [`&.${xe.checked} + .${xe.track}`]: {
    opacity: 0.5
  },
  [`&.${xe.disabled} + .${xe.track}`]: {
    opacity: e.vars ? e.vars.opacity.switchTrackDisabled : `${e.palette.mode === "light" ? 0.12 : 0.2}`
  },
  [`& .${xe.input}`]: {
    left: "-100%",
    width: "300%"
  }
}), ({
  theme: e
}) => ({
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})` : re(e.palette.action.active, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  variants: [...Object.entries(e.palette).filter(([, t]) => t.main && t.light).map(([t]) => ({
    props: {
      color: t
    },
    style: {
      [`&.${xe.checked}`]: {
        color: (e.vars || e).palette[t].main,
        "&:hover": {
          backgroundColor: e.vars ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : re(e.palette[t].main, e.palette.action.hoverOpacity),
          "@media (hover: none)": {
            backgroundColor: "transparent"
          }
        },
        [`&.${xe.disabled}`]: {
          color: e.vars ? e.vars.palette.Switch[`${t}DisabledColor`] : `${e.palette.mode === "light" ? Nt(e.palette[t].main, 0.62) : Lt(e.palette[t].main, 0.55)}`
        }
      },
      [`&.${xe.checked} + .${xe.track}`]: {
        backgroundColor: (e.vars || e).palette[t].main
      }
    }
  }))]
})), Xr = N("span", {
  name: "MuiSwitch",
  slot: "Track",
  overridesResolver: (e, t) => t.track
})(({
  theme: e
}) => ({
  height: "100%",
  width: "100%",
  borderRadius: 14 / 2,
  zIndex: -1,
  transition: e.transitions.create(["opacity", "background-color"], {
    duration: e.transitions.duration.shortest
  }),
  backgroundColor: e.vars ? e.vars.palette.common.onBackground : `${e.palette.mode === "light" ? e.palette.common.black : e.palette.common.white}`,
  opacity: e.vars ? e.vars.opacity.switchTrack : `${e.palette.mode === "light" ? 0.38 : 0.3}`
})), Jr = N("span", {
  name: "MuiSwitch",
  slot: "Thumb",
  overridesResolver: (e, t) => t.thumb
})(({
  theme: e
}) => ({
  boxShadow: (e.vars || e).shadows[1],
  backgroundColor: "currentColor",
  width: 20,
  height: 20,
  borderRadius: "50%"
})), Jt = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const a = Wr({
    props: t,
    name: "MuiSwitch"
  }), {
    className: l,
    color: p = "primary",
    edge: c = !1,
    size: d = "medium",
    sx: m
  } = a, b = ee(a, Hr), v = s({}, a, {
    color: p,
    edge: c,
    size: d
  }), P = qr(v), I = /* @__PURE__ */ u.jsx(Jr, {
    className: P.thumb,
    ownerState: v
  });
  return /* @__PURE__ */ u.jsxs(Gr, {
    className: V(P.root, l),
    sx: m,
    ownerState: v,
    children: [/* @__PURE__ */ u.jsx(Kr, s({
      type: "checkbox",
      icon: I,
      checkedIcon: I,
      ref: n,
      ownerState: v
    }, b, {
      classes: s({}, P, {
        root: P.switchBase
      })
    })), /* @__PURE__ */ u.jsx(Xr, {
      className: P.track,
      ownerState: v
    })]
  });
});
process.env.NODE_ENV !== "production" && (Jt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: o.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: o.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: o.node,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Ho,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense switch styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: o.any
});
const Us = Jt, Yt = /* @__PURE__ */ x.createContext();
process.env.NODE_ENV !== "production" && (Yt.displayName = "TableContext");
const Yr = Yt, Zt = /* @__PURE__ */ x.createContext();
process.env.NODE_ENV !== "production" && (Zt.displayName = "Tablelvl2Context");
const Zr = Zt;
function Qr(e) {
  return pe("MuiTableCell", e);
}
const es = ie("MuiTableCell", ["root", "head", "body", "footer", "sizeSmall", "sizeMedium", "paddingCheckbox", "paddingNone", "alignLeft", "alignCenter", "alignRight", "alignJustify", "stickyHeader"]), os = es, ts = ["align", "className", "component", "padding", "scope", "size", "sortDirection", "variant"], ns = (e) => {
  const {
    classes: t,
    variant: n,
    align: a,
    padding: l,
    size: p,
    stickyHeader: c
  } = e, d = {
    root: ["root", n, c && "stickyHeader", a !== "inherit" && `align${z(a)}`, l !== "normal" && `padding${z(l)}`, `size${z(p)}`]
  };
  return de(d, Qr, t);
}, as = N("td", {
  name: "MuiTableCell",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, t[n.variant], t[`size${z(n.size)}`], n.padding !== "normal" && t[`padding${z(n.padding)}`], n.align !== "inherit" && t[`align${z(n.align)}`], n.stickyHeader && t.stickyHeader];
  }
})(({
  theme: e,
  ownerState: t
}) => s({}, e.typography.body2, {
  display: "table-cell",
  verticalAlign: "inherit",
  // Workaround for a rendering bug with spanned columns in Chrome 62.0.
  // Removes the alpha (sets it to 1), and lightens or darkens the theme color.
  borderBottom: e.vars ? `1px solid ${e.vars.palette.TableCell.border}` : `1px solid
    ${e.palette.mode === "light" ? Nt(re(e.palette.divider, 1), 0.88) : Lt(re(e.palette.divider, 1), 0.68)}`,
  textAlign: "left",
  padding: 16
}, t.variant === "head" && {
  color: (e.vars || e).palette.text.primary,
  lineHeight: e.typography.pxToRem(24),
  fontWeight: e.typography.fontWeightMedium
}, t.variant === "body" && {
  color: (e.vars || e).palette.text.primary
}, t.variant === "footer" && {
  color: (e.vars || e).palette.text.secondary,
  lineHeight: e.typography.pxToRem(21),
  fontSize: e.typography.pxToRem(12)
}, t.size === "small" && {
  padding: "6px 16px",
  [`&.${os.paddingCheckbox}`]: {
    width: 24,
    // prevent the checkbox column from growing
    padding: "0 12px 0 16px",
    "& > *": {
      padding: 0
    }
  }
}, t.padding === "checkbox" && {
  width: 48,
  // prevent the checkbox column from growing
  padding: "0 0 0 4px"
}, t.padding === "none" && {
  padding: 0
}, t.align === "left" && {
  textAlign: "left"
}, t.align === "center" && {
  textAlign: "center"
}, t.align === "right" && {
  textAlign: "right",
  flexDirection: "row-reverse"
}, t.align === "justify" && {
  textAlign: "justify"
}, t.stickyHeader && {
  position: "sticky",
  top: 0,
  zIndex: 2,
  backgroundColor: (e.vars || e).palette.background.default
})), Qt = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const a = Ce({
    props: t,
    name: "MuiTableCell"
  }), {
    align: l = "inherit",
    className: p,
    component: c,
    padding: d,
    scope: m,
    size: b,
    sortDirection: v,
    variant: P
  } = a, I = ee(a, ts), y = x.useContext(Yr), C = x.useContext(Zr), M = C && C.variant === "head";
  let R;
  c ? R = c : R = M ? "th" : "td";
  let T = m;
  R === "td" ? T = void 0 : !T && M && (T = "col");
  const w = P || C && C.variant, S = s({}, a, {
    align: l,
    component: R,
    padding: d || (y && y.padding ? y.padding : "normal"),
    size: b || (y && y.size ? y.size : "medium"),
    sortDirection: v,
    stickyHeader: w === "head" && y && y.stickyHeader,
    variant: w
  }), W = ns(S);
  let E = null;
  return v && (E = v === "asc" ? "ascending" : "descending"), /* @__PURE__ */ u.jsx(as, s({
    as: R,
    ref: n,
    className: V(W.root, p),
    "aria-sort": E,
    scope: T,
    ownerState: S
  }, I));
});
process.env.NODE_ENV !== "production" && (Qt.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Set the text-align on the table cell content.
   *
   * Monetary or generally number fields **should be right aligned** as that allows
   * you to add them up quickly in your head without having to worry about decimals.
   * @default 'inherit'
   */
  align: o.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * Sets the padding applied to the cell.
   * The prop defaults to the value (`'default'`) inherited from the parent Table component.
   */
  padding: o.oneOf(["checkbox", "none", "normal"]),
  /**
   * Set scope attribute.
   */
  scope: o.string,
  /**
   * Specify the size of the cell.
   * The prop defaults to the value (`'medium'`) inherited from the parent Table component.
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * Set aria-sort direction.
   */
  sortDirection: o.oneOf(["asc", "desc", !1]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Specify the cell type.
   * The prop defaults to the value inherited from the parent TableHead, TableBody, or TableFooter components.
   */
  variant: o.oneOfType([o.oneOf(["body", "footer", "head"]), o.string])
});
const Qo = Qt;
function rs(e) {
  return pe("MuiToolbar", e);
}
ie("MuiToolbar", ["root", "gutters", "regular", "dense"]);
const ss = ["className", "component", "disableGutters", "variant"], is = (e) => {
  const {
    classes: t,
    disableGutters: n,
    variant: a
  } = e;
  return de({
    root: ["root", !n && "gutters", a]
  }, rs, t);
}, ls = N("div", {
  name: "MuiToolbar",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: n
    } = e;
    return [t.root, !n.disableGutters && t.gutters, t[n.variant]];
  }
})(({
  theme: e,
  ownerState: t
}) => s({
  position: "relative",
  display: "flex",
  alignItems: "center"
}, !t.disableGutters && {
  paddingLeft: e.spacing(2),
  paddingRight: e.spacing(2),
  [e.breakpoints.up("sm")]: {
    paddingLeft: e.spacing(3),
    paddingRight: e.spacing(3)
  }
}, t.variant === "dense" && {
  minHeight: 48
}), ({
  theme: e,
  ownerState: t
}) => t.variant === "regular" && e.mixins.toolbar), en = /* @__PURE__ */ x.forwardRef(function(t, n) {
  const a = Ce({
    props: t,
    name: "MuiToolbar"
  }), {
    className: l,
    component: p = "div",
    disableGutters: c = !1,
    variant: d = "regular"
  } = a, m = ee(a, ss), b = s({}, a, {
    component: p,
    disableGutters: c,
    variant: d
  }), v = is(b);
  return /* @__PURE__ */ u.jsx(ls, s({
    as: p,
    className: V(v.root, l),
    ref: n,
    ownerState: b
  }, m));
});
process.env.NODE_ENV !== "production" && (en.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   * The Toolbar is a flex container, allowing flex item properties to be used to lay out the children.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * If `true`, disables gutter padding.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The variant to use.
   * @default 'regular'
   */
  variant: o.oneOfType([o.oneOf(["dense", "regular"]), o.string])
});
const cs = en, ps = He(/* @__PURE__ */ u.jsx("path", {
  d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"
}), "KeyboardArrowLeft"), ds = He(/* @__PURE__ */ u.jsx("path", {
  d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"
}), "KeyboardArrowRight"), us = ["backIconButtonProps", "count", "disabled", "getItemAriaLabel", "nextIconButtonProps", "onPageChange", "page", "rowsPerPage", "showFirstButton", "showLastButton", "slots", "slotProps"], on = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var a, l, p, c, d, m, b, v;
  const {
    backIconButtonProps: P,
    count: I,
    disabled: y = !1,
    getItemAriaLabel: C,
    nextIconButtonProps: M,
    onPageChange: R,
    page: T,
    rowsPerPage: w,
    showFirstButton: S,
    showLastButton: W,
    slots: E = {},
    slotProps: k = {}
  } = t, H = ee(t, us), L = nt(), j = (K) => {
    R(K, 0);
  }, q = (K) => {
    R(K, T - 1);
  }, G = (K) => {
    R(K, T + 1);
  }, B = (K) => {
    R(K, Math.max(0, Math.ceil(I / w) - 1));
  }, J = (a = E.firstButton) != null ? a : vo, ue = (l = E.lastButton) != null ? l : vo, oe = (p = E.nextButton) != null ? p : vo, te = (c = E.previousButton) != null ? c : vo, se = (d = E.firstButtonIcon) != null ? d : Yo, Te = (m = E.lastButtonIcon) != null ? m : Zo, U = (b = E.nextButtonIcon) != null ? b : ds, le = (v = E.previousButtonIcon) != null ? v : ps, fe = L ? ue : J, Re = L ? oe : te, we = L ? te : oe, ne = L ? J : ue, Z = L ? k.lastButton : k.firstButton, he = L ? k.nextButton : k.previousButton, Ie = L ? k.previousButton : k.nextButton, _ = L ? k.firstButton : k.lastButton;
  return /* @__PURE__ */ u.jsxs("div", s({
    ref: n
  }, H, {
    children: [S && /* @__PURE__ */ u.jsx(fe, s({
      onClick: j,
      disabled: y || T === 0,
      "aria-label": C("first", T),
      title: C("first", T)
    }, Z, {
      children: L ? /* @__PURE__ */ u.jsx(Te, s({}, k.lastButtonIcon)) : /* @__PURE__ */ u.jsx(se, s({}, k.firstButtonIcon))
    })), /* @__PURE__ */ u.jsx(Re, s({
      onClick: q,
      disabled: y || T === 0,
      color: "inherit",
      "aria-label": C("previous", T),
      title: C("previous", T)
    }, he != null ? he : P, {
      children: L ? /* @__PURE__ */ u.jsx(U, s({}, k.nextButtonIcon)) : /* @__PURE__ */ u.jsx(le, s({}, k.previousButtonIcon))
    })), /* @__PURE__ */ u.jsx(we, s({
      onClick: G,
      disabled: y || (I !== -1 ? T >= Math.ceil(I / w) - 1 : !1),
      color: "inherit",
      "aria-label": C("next", T),
      title: C("next", T)
    }, Ie != null ? Ie : M, {
      children: L ? /* @__PURE__ */ u.jsx(le, s({}, k.previousButtonIcon)) : /* @__PURE__ */ u.jsx(U, s({}, k.nextButtonIcon))
    })), W && /* @__PURE__ */ u.jsx(ne, s({
      onClick: B,
      disabled: y || T >= Math.ceil(I / w) - 1,
      "aria-label": C("last", T),
      title: C("last", T)
    }, _, {
      children: L ? /* @__PURE__ */ u.jsx(se, s({}, k.firstButtonIcon)) : /* @__PURE__ */ u.jsx(Te, s({}, k.lastButtonIcon))
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (on.propTypes = {
  /**
   * Props applied to the back arrow [`IconButton`](/material-ui/api/icon-button/) element.
   */
  backIconButtonProps: o.object,
  /**
   * The total number of rows.
   */
  count: o.number.isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   *
   * @param {string} type The link or button type to format ('page' | 'first' | 'last' | 'next' | 'previous'). Defaults to 'page'.
   * @param {number} page The page number to format.
   * @returns {string}
   */
  getItemAriaLabel: o.func.isRequired,
  /**
   * Props applied to the next arrow [`IconButton`](/material-ui/api/icon-button/) element.
   */
  nextIconButtonProps: o.object,
  /**
   * Callback fired when the page is changed.
   *
   * @param {object} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: o.func.isRequired,
  /**
   * The zero-based index of the current page.
   */
  page: o.number.isRequired,
  /**
   * The number of rows per page.
   */
  rowsPerPage: o.number.isRequired,
  /**
   * If `true`, show the first-page button.
   */
  showFirstButton: o.bool.isRequired,
  /**
   * If `true`, show the last-page button.
   */
  showLastButton: o.bool.isRequired,
  /**
   * The props used for each slot inside the TablePaginationActions.
   * @default {}
   */
  slotProps: o.shape({
    firstButton: o.object,
    firstButtonIcon: o.object,
    lastButton: o.object,
    lastButtonIcon: o.object,
    nextButton: o.object,
    nextButtonIcon: o.object,
    previousButton: o.object,
    previousButtonIcon: o.object
  }),
  /**
   * The components used for each slot inside the TablePaginationActions.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    firstButton: o.elementType,
    firstButtonIcon: o.elementType,
    lastButton: o.elementType,
    lastButtonIcon: o.elementType,
    nextButton: o.elementType,
    nextButtonIcon: o.elementType,
    previousButton: o.elementType,
    previousButtonIcon: o.elementType
  })
});
const fs = on;
function gs(e) {
  return pe("MuiTablePagination", e);
}
const bs = ie("MuiTablePagination", ["root", "toolbar", "spacer", "selectLabel", "selectRoot", "select", "selectIcon", "input", "menuItem", "displayedRows", "actions"]), Ro = bs;
var wt;
const ms = ["ActionsComponent", "backIconButtonProps", "className", "colSpan", "component", "count", "disabled", "getItemAriaLabel", "labelDisplayedRows", "labelRowsPerPage", "nextIconButtonProps", "onPageChange", "onRowsPerPageChange", "page", "rowsPerPage", "rowsPerPageOptions", "SelectProps", "showFirstButton", "showLastButton", "slotProps", "slots"], hs = N(Qo, {
  name: "MuiTablePagination",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})(({
  theme: e
}) => ({
  overflow: "auto",
  color: (e.vars || e).palette.text.primary,
  fontSize: e.typography.pxToRem(14),
  // Increase the specificity to override TableCell.
  "&:last-child": {
    padding: 0
  }
})), vs = N(cs, {
  name: "MuiTablePagination",
  slot: "Toolbar",
  overridesResolver: (e, t) => s({
    [`& .${Ro.actions}`]: t.actions
  }, t.toolbar)
})(({
  theme: e
}) => ({
  minHeight: 52,
  paddingRight: 2,
  [`${e.breakpoints.up("xs")} and (orientation: landscape)`]: {
    minHeight: 52
  },
  [e.breakpoints.up("sm")]: {
    minHeight: 52,
    paddingRight: 2
  },
  [`& .${Ro.actions}`]: {
    flexShrink: 0,
    marginLeft: 20
  }
})), ys = N("div", {
  name: "MuiTablePagination",
  slot: "Spacer",
  overridesResolver: (e, t) => t.spacer
})({
  flex: "1 1 100%"
}), xs = N("p", {
  name: "MuiTablePagination",
  slot: "SelectLabel",
  overridesResolver: (e, t) => t.selectLabel
})(({
  theme: e
}) => s({}, e.typography.body2, {
  flexShrink: 0
})), Cs = N(On, {
  name: "MuiTablePagination",
  slot: "Select",
  overridesResolver: (e, t) => s({
    [`& .${Ro.selectIcon}`]: t.selectIcon,
    [`& .${Ro.select}`]: t.select
  }, t.input, t.selectRoot)
})({
  color: "inherit",
  fontSize: "inherit",
  flexShrink: 0,
  marginRight: 32,
  marginLeft: 8,
  [`& .${Ro.select}`]: {
    paddingLeft: 8,
    paddingRight: 24,
    textAlign: "right",
    textAlignLast: "right"
    // Align <select> on Chrome.
  }
}), Ts = N(pr, {
  name: "MuiTablePagination",
  slot: "MenuItem",
  overridesResolver: (e, t) => t.menuItem
})({}), Ps = N("p", {
  name: "MuiTablePagination",
  slot: "DisplayedRows",
  overridesResolver: (e, t) => t.displayedRows
})(({
  theme: e
}) => s({}, e.typography.body2, {
  flexShrink: 0
}));
function Is({
  from: e,
  to: t,
  count: n
}) {
  return `${e}–${t} of ${n !== -1 ? n : `more than ${t}`}`;
}
function Os(e) {
  return `Go to ${e} page`;
}
const $s = (e) => {
  const {
    classes: t
  } = e;
  return de({
    root: ["root"],
    toolbar: ["toolbar"],
    spacer: ["spacer"],
    selectLabel: ["selectLabel"],
    select: ["select"],
    input: ["input"],
    selectIcon: ["selectIcon"],
    menuItem: ["menuItem"],
    displayedRows: ["displayedRows"],
    actions: ["actions"]
  }, gs, t);
}, tn = /* @__PURE__ */ x.forwardRef(function(t, n) {
  var a;
  const l = Ce({
    props: t,
    name: "MuiTablePagination"
  }), {
    ActionsComponent: p = fs,
    backIconButtonProps: c,
    className: d,
    colSpan: m,
    component: b = Qo,
    count: v,
    disabled: P = !1,
    getItemAriaLabel: I = Os,
    labelDisplayedRows: y = Is,
    labelRowsPerPage: C = "Rows per page:",
    nextIconButtonProps: M,
    onPageChange: R,
    onRowsPerPageChange: T,
    page: w,
    rowsPerPage: S,
    rowsPerPageOptions: W = [10, 25, 50, 100],
    SelectProps: E = {},
    showFirstButton: k = !1,
    showLastButton: H = !1,
    slotProps: L = {},
    slots: j = {}
  } = l, q = ee(l, ms), G = l, B = $s(G), J = (a = L == null ? void 0 : L.select) != null ? a : E, ue = J.native ? "option" : Ts;
  let oe;
  (b === Qo || b === "td") && (oe = m || 1e3);
  const te = Do(J.id), se = Do(J.labelId), Te = () => v === -1 ? (w + 1) * S : S === -1 ? v : Math.min(v, (w + 1) * S);
  return /* @__PURE__ */ u.jsx(hs, s({
    colSpan: oe,
    ref: n,
    as: b,
    ownerState: G,
    className: V(B.root, d)
  }, q, {
    children: /* @__PURE__ */ u.jsxs(vs, {
      className: B.toolbar,
      children: [/* @__PURE__ */ u.jsx(ys, {
        className: B.spacer
      }), W.length > 1 && /* @__PURE__ */ u.jsx(xs, {
        className: B.selectLabel,
        id: se,
        children: C
      }), W.length > 1 && /* @__PURE__ */ u.jsx(Cs, s({
        variant: "standard"
      }, !J.variant && {
        input: wt || (wt = /* @__PURE__ */ u.jsx($n, {}))
      }, {
        value: S,
        onChange: T,
        id: te,
        labelId: se
      }, J, {
        classes: s({}, J.classes, {
          // TODO v5 remove `classes.input`
          root: V(B.input, B.selectRoot, (J.classes || {}).root),
          select: V(B.select, (J.classes || {}).select),
          // TODO v5 remove `selectIcon`
          icon: V(B.selectIcon, (J.classes || {}).icon)
        }),
        disabled: P,
        children: W.map((U) => /* @__PURE__ */ St(ue, s({}, !Rn(ue) && {
          ownerState: G
        }, {
          className: B.menuItem,
          key: U.label ? U.label : U,
          value: U.value ? U.value : U
        }), U.label ? U.label : U))
      })), /* @__PURE__ */ u.jsx(Ps, {
        className: B.displayedRows,
        children: y({
          from: v === 0 ? 0 : w * S + 1,
          to: Te(),
          count: v === -1 ? -1 : v,
          page: w
        })
      }), /* @__PURE__ */ u.jsx(p, {
        className: B.actions,
        backIconButtonProps: c,
        count: v,
        nextIconButtonProps: M,
        onPageChange: R,
        page: w,
        rowsPerPage: S,
        showFirstButton: k,
        showLastButton: H,
        slotProps: L.actions,
        slots: j.actions,
        getItemAriaLabel: I,
        disabled: P
      })]
    })
  }));
});
process.env.NODE_ENV !== "production" && (tn.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The component used for displaying the actions.
   * Either a string to use a HTML element or a component.
   * @default TablePaginationActions
   */
  ActionsComponent: o.elementType,
  /**
   * Props applied to the back arrow [`IconButton`](/material-ui/api/icon-button/) component.
   *
   * This prop is an alias for `slotProps.actions.previousButton` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.actions.previousButton` instead.
   */
  backIconButtonProps: o.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * @ignore
   */
  colSpan: o.number,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The total number of rows.
   *
   * To enable server side pagination for an unknown number of items, provide -1.
   */
  count: Ze.isRequired,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current page.
   * This is important for screen reader users.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @param {string} type The link or button type to format ('first' | 'last' | 'next' | 'previous').
   * @returns {string}
   * @default function defaultGetAriaLabel(type) {
   *   return `Go to ${type} page`;
   * }
   */
  getItemAriaLabel: o.func,
  /**
   * Customize the displayed rows label. Invoked with a `{ from, to, count, page }`
   * object.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default function defaultLabelDisplayedRows({ from, to, count }) {
   *   return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
   * }
   */
  labelDisplayedRows: o.func,
  /**
   * Customize the rows per page label.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Rows per page:'
   */
  labelRowsPerPage: o.node,
  /**
   * Props applied to the next arrow [`IconButton`](/material-ui/api/icon-button/) element.
   *
   * This prop is an alias for `slotProps.actions.nextButton` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.actions.nextButton` instead.
   */
  nextIconButtonProps: o.object,
  /**
   * Callback fired when the page is changed.
   *
   * @param {React.MouseEvent<HTMLButtonElement> | null} event The event source of the callback.
   * @param {number} page The page selected.
   */
  onPageChange: o.func.isRequired,
  /**
   * Callback fired when the number of rows per page is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   */
  onRowsPerPageChange: o.func,
  /**
   * The zero-based index of the current page.
   */
  page: Jo(Ze.isRequired, (e) => {
    const {
      count: t,
      page: n,
      rowsPerPage: a
    } = e;
    if (t === -1)
      return null;
    const l = Math.max(0, Math.ceil(t / a) - 1);
    return n < 0 || n > l ? new Error(`MUI: The page prop of a TablePagination is out of range (0 to ${l}, but page is ${n}).`) : null;
  }),
  /**
   * The number of rows per page.
   *
   * Set -1 to display all the rows.
   */
  rowsPerPage: Ze.isRequired,
  /**
   * Customizes the options of the rows per page select field. If less than two options are
   * available, no select field will be displayed.
   * Use -1 for the value with a custom label to show all the rows.
   * @default [10, 25, 50, 100]
   */
  rowsPerPageOptions: o.arrayOf(o.oneOfType([o.number, o.shape({
    label: o.string.isRequired,
    value: o.number.isRequired
  })]).isRequired),
  /**
   * Props applied to the rows per page [`Select`](/material-ui/api/select/) element.
   *
   * This prop is an alias for `slotProps.select` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.select` instead.
   *
   * @default {}
   */
  SelectProps: o.object,
  /**
   * If `true`, show the first-page button.
   * @default false
   */
  showFirstButton: o.bool,
  /**
   * If `true`, show the last-page button.
   * @default false
   */
  showLastButton: o.bool,
  /**
   * The props used for each slot inside the TablePagination.
   * @default {}
   */
  slotProps: o.shape({
    actions: o.shape({
      firstButton: o.object,
      firstButtonIcon: o.object,
      lastButton: o.object,
      lastButtonIcon: o.object,
      nextButton: o.object,
      nextButtonIcon: o.object,
      previousButton: o.object,
      previousButtonIcon: o.object
    }),
    select: o.object
  }),
  /**
   * The components used for each slot inside the TablePagination.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: o.shape({
    actions: o.shape({
      firstButton: o.elementType,
      firstButtonIcon: o.elementType,
      lastButton: o.elementType,
      lastButtonIcon: o.elementType,
      nextButton: o.elementType,
      nextButtonIcon: o.elementType,
      previousButton: o.elementType,
      previousButtonIcon: o.elementType
    })
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const Hs = tn, Rs = "button", Ws = Wo(function(P, v) {
  var I = P, {
    component: e = Rs,
    loading: t = !1,
    loadingText: n = "Loading…",
    disabled: a,
    children: l,
    startIcon: p,
    endIcon: c,
    shape: d = "rounded",
    size: m = "medium"
  } = I, b = Lo(I, [
    "component",
    "loading",
    "loadingText",
    "disabled",
    "children",
    "startIcon",
    "endIcon",
    "shape",
    "size"
  ]);
  let y;
  switch (m) {
    case "small":
      y = `calc(${Mo.space[3]} + ${Mo.space[0.5]})`;
      break;
    case "medium":
      y = Mo.space[4];
      break;
    case "large":
      y = Mo.space[5];
      break;
  }
  return /* @__PURE__ */ u.jsx(
    wn,
    Po(To({
      disabled: t || a,
      size: m,
      "data-is-loading": t ? "true" : "false",
      "data-shape": d,
      startIcon: t ? /* @__PURE__ */ u.jsx(kn, { thickness: 3, size: y }) : p,
      endIcon: t ? void 0 : c
    }, b), {
      ref: v,
      component: e,
      children: t ? n : l
    })
  );
}), qs = Wo(function(a, n) {
  var l = a, { variant: e = "body2" } = l, t = Lo(l, ["variant"]);
  return /* @__PURE__ */ u.jsx(
    uo,
    Po(To({
      variant: e,
      variantMapping: {
        display1: "h1",
        display2: "h2",
        display3: "h3",
        body3: "p",
        subtitle3: "h6",
        inputLabel1: "label",
        inputLabel2: "label"
      }
    }, t), {
      ref: n
    })
  );
}), ws = "div", Gs = Wo(function(p, l) {
  var c = p, {
    component: e = ws,
    variant: t,
    labelPlacement: n = "top"
  } = c, a = Lo(c, [
    "component",
    "variant",
    "labelPlacement"
  ]);
  return /* @__PURE__ */ u.jsx(
    Bn,
    Po(To({}, a), {
      "data-label-placement": n,
      variant: t,
      ref: l,
      component: e
    })
  );
}), Ks = Wo((e, t) => /* @__PURE__ */ u.jsx(Rr, Po(To({}, e), { ref: t })));
export {
  Ss as A,
  js as B,
  An as C,
  zs as D,
  Es as F,
  ps as K,
  Ds as L,
  As as M,
  Ks as P,
  Dt as S,
  Yr as T,
  Zr as a,
  ds as b,
  rt as c,
  Ms as d,
  qs as e,
  qn as f,
  _s as g,
  pr as h,
  Ws as i,
  Cr as j,
  Fs as k,
  Us as l,
  Qo as m,
  Hs as n,
  Vs as o,
  oo as p,
  Xo as q,
  xt as r,
  Fo as s,
  Io as t,
  Me as u,
  os as v,
  Gs as w,
  xe as x,
  En as y,
  Ro as z
};
