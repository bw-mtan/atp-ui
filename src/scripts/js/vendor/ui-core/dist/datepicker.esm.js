var jr = Object.defineProperty, _r = Object.defineProperties;
var Lr = Object.getOwnPropertyDescriptors;
var Yt = Object.getOwnPropertySymbols;
var Qn = Object.prototype.hasOwnProperty, Zn = Object.prototype.propertyIsEnumerable;
var Gn = (t, n, o) => n in t ? jr(t, n, { enumerable: !0, configurable: !0, writable: !0, value: o }) : t[n] = o, Oe = (t, n) => {
  for (var o in n || (n = {}))
    Qn.call(n, o) && Gn(t, o, n[o]);
  if (Yt)
    for (var o of Yt(n))
      Zn.call(n, o) && Gn(t, o, n[o]);
  return t;
}, dt = (t, n) => _r(t, Lr(n));
var gn = (t, n) => {
  var o = {};
  for (var r in t)
    Qn.call(t, r) && n.indexOf(r) < 0 && (o[r] = t[r]);
  if (t != null && Yt)
    for (var r of Yt(t))
      n.indexOf(r) < 0 && Zn.call(t, r) && (o[r] = t[r]);
  return o;
};
import { dw as Br, dx as Hr, d as Z, q as vo, _ as d, dy as Wr, P as e, o as fe, j as P, f as De, v as We, G as tt, h as we, m as Ce, n as X, M as tn, r as Pt, J as Ze, g as ve, C as Ge, ae as Y, F as zr, ag as et, a6 as yt, dz as nn, aG as Yr, B as qr, aL as Ur, dh as Kr, af as bn, dl as It, aD as Gr, ax as Qr, dA as xo, dm as wo, di as On, a9 as nt, i as Co, aa as on, bt as In, aq as Mo, bz as So, bA as Ro, ba as ko, aj as Ae, ar as Zr, at as _, az as Xr, al as Jr, aT as To, b3 as ea, aN as pt, b4 as yn, ay as qt } from "./theme-59e10499.js";
import { M as ta, b as Xn, e as na, u as rn, c as oa, L as ra, I as aa } from "./InputAdornment-410b7154.js";
import * as g from "react";
import Jn, { forwardRef as Oo } from "react";
import { u as Vn, W as sa } from "./Watermark-b0561d03.js";
import "@emotion/react";
import "react-dom";
import "@emotion/styled";
function ia(t, n) {
  return t.classList ? !!n && t.classList.contains(n) : (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + n + " ") !== -1;
}
function la(t, n) {
  t.classList ? t.classList.add(n) : ia(t, n) || (typeof t.className == "string" ? t.className = t.className + " " + n : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + n));
}
function eo(t, n) {
  return t.replace(new RegExp("(^|\\s)" + n + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function ca(t, n) {
  t.classList ? t.classList.remove(n) : typeof t.className == "string" ? t.className = eo(t.className, n) : t.setAttribute("class", eo(t.className && t.className.baseVal || "", n));
}
var ua = function(n, o) {
  return n && o && o.split(" ").forEach(function(r) {
    return la(n, r);
  });
}, Dn = function(n, o) {
  return n && o && o.split(" ").forEach(function(r) {
    return ca(n, r);
  });
}, Fn = /* @__PURE__ */ function(t) {
  Br(n, t);
  function n() {
    for (var r, a = arguments.length, s = new Array(a), i = 0; i < a; i++)
      s[i] = arguments[i];
    return r = t.call.apply(t, [this].concat(s)) || this, r.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    }, r.onEnter = function(l, c) {
      var u = r.resolveArguments(l, c), p = u[0], m = u[1];
      r.removeClasses(p, "exit"), r.addClass(p, m ? "appear" : "enter", "base"), r.props.onEnter && r.props.onEnter(l, c);
    }, r.onEntering = function(l, c) {
      var u = r.resolveArguments(l, c), p = u[0], m = u[1], h = m ? "appear" : "enter";
      r.addClass(p, h, "active"), r.props.onEntering && r.props.onEntering(l, c);
    }, r.onEntered = function(l, c) {
      var u = r.resolveArguments(l, c), p = u[0], m = u[1], h = m ? "appear" : "enter";
      r.removeClasses(p, h), r.addClass(p, h, "done"), r.props.onEntered && r.props.onEntered(l, c);
    }, r.onExit = function(l) {
      var c = r.resolveArguments(l), u = c[0];
      r.removeClasses(u, "appear"), r.removeClasses(u, "enter"), r.addClass(u, "exit", "base"), r.props.onExit && r.props.onExit(l);
    }, r.onExiting = function(l) {
      var c = r.resolveArguments(l), u = c[0];
      r.addClass(u, "exit", "active"), r.props.onExiting && r.props.onExiting(l);
    }, r.onExited = function(l) {
      var c = r.resolveArguments(l), u = c[0];
      r.removeClasses(u, "exit"), r.addClass(u, "exit", "done"), r.props.onExited && r.props.onExited(l);
    }, r.resolveArguments = function(l, c) {
      return r.props.nodeRef ? [r.props.nodeRef.current, l] : [l, c];
    }, r.getClassNames = function(l) {
      var c = r.props.classNames, u = typeof c == "string", p = u && c ? c + "-" : "", m = u ? "" + p + l : c[l], h = u ? m + "-active" : c[l + "Active"], f = u ? m + "-done" : c[l + "Done"];
      return {
        baseClassName: m,
        activeClassName: h,
        doneClassName: f
      };
    }, r;
  }
  var o = n.prototype;
  return o.addClass = function(a, s, i) {
    var l = this.getClassNames(s)[i + "ClassName"], c = this.getClassNames("enter"), u = c.doneClassName;
    s === "appear" && i === "done" && u && (l += " " + u), i === "active" && a && Hr(a), l && (this.appliedClasses[s][i] = l, ua(a, l));
  }, o.removeClasses = function(a, s) {
    var i = this.appliedClasses[s], l = i.base, c = i.active, u = i.done;
    this.appliedClasses[s] = {}, l && Dn(a, l), c && Dn(a, c), u && Dn(a, u);
  }, o.render = function() {
    var a = this.props;
    a.classNames;
    var s = Z(a, ["classNames"]);
    return /* @__PURE__ */ Jn.createElement(vo, d({}, s, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  }, n;
}(Jn.Component);
Fn.defaultProps = {
  classNames: ""
};
Fn.propTypes = process.env.NODE_ENV !== "production" ? d({}, vo.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: Wr,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: e.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: e.func,
  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: e.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: e.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: e.func,
  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: e.func
}) : {};
const da = Fn, pa = ["localeText"], Zt = /* @__PURE__ */ g.createContext(null);
process.env.NODE_ENV !== "production" && (Zt.displayName = "MuiPickersAdapterContext");
const At = function(n) {
  var o;
  const {
    localeText: r
  } = n, a = Z(n, pa), {
    utils: s,
    localeText: i
  } = (o = g.useContext(Zt)) != null ? o : {
    utils: void 0,
    localeText: void 0
  }, l = fe({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: a,
    name: "MuiLocalizationProvider"
  }), {
    children: c,
    dateAdapter: u,
    dateFormats: p,
    dateLibInstance: m,
    adapterLocale: h,
    localeText: f
  } = l, x = g.useMemo(() => d({}, f, i, r), [f, i, r]), D = g.useMemo(() => {
    if (!u)
      return s || null;
    const v = new u({
      locale: h,
      formats: p,
      instance: m
    });
    if (!v.isMUIAdapter)
      throw new Error(["MUI: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`", "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", "More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation"].join(`
`));
    return v;
  }, [u, h, p, m, s]), C = g.useMemo(() => D ? {
    minDate: D.date("1900-01-01T00:00:00.000"),
    maxDate: D.date("2099-12-31T00:00:00.000")
  } : null, [D]), S = g.useMemo(() => ({
    utils: D,
    defaultDates: C,
    localeText: x
  }), [C, D, x]);
  return /* @__PURE__ */ P.jsx(Zt.Provider, {
    value: S,
    children: c
  });
};
process.env.NODE_ENV !== "production" && (At.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Locale for the date library you are using
   */
  adapterLocale: e.any,
  children: e.node,
  /**
   * Date library adapter class function.
   * @see See the localization provider {@link https://mui.com/x/react-date-pickers/getting-started/#setup-your-date-library-adapter date adapter setup section} for more details.
   */
  dateAdapter: e.func,
  /**
   * Formats that are used for any child pickers
   */
  dateFormats: e.shape({
    dayOfMonth: e.string,
    fullDate: e.string,
    fullDateTime: e.string,
    fullDateTime12h: e.string,
    fullDateTime24h: e.string,
    fullDateWithWeekday: e.string,
    fullTime: e.string,
    fullTime12h: e.string,
    fullTime24h: e.string,
    hours12h: e.string,
    hours24h: e.string,
    keyboardDate: e.string,
    keyboardDateTime: e.string,
    keyboardDateTime12h: e.string,
    keyboardDateTime24h: e.string,
    meridiem: e.string,
    minutes: e.string,
    month: e.string,
    monthAndDate: e.string,
    monthAndYear: e.string,
    monthShort: e.string,
    normalDate: e.string,
    normalDateWithWeekday: e.string,
    seconds: e.string,
    shortDate: e.string,
    weekday: e.string,
    weekdayShort: e.string,
    year: e.string
  }),
  /**
   * Date library instance you are using, if it has some global overrides
   * ```jsx
   * dateLibInstance={momentTimeZone}
   * ```
   */
  dateLibInstance: e.any,
  /**
   * Locale for components texts
   */
  localeText: e.object
});
const fa = (t) => ({
  components: {
    MuiLocalizationProvider: {
      defaultProps: {
        localeText: d({}, t)
      }
    }
  }
}), Io = {
  // Calendar navigation
  previousMonth: "Previous month",
  nextMonth: "Next month",
  // View navigation
  openPreviousView: "open previous view",
  openNextView: "open next view",
  calendarViewSwitchingButtonAriaLabel: (t) => t === "year" ? "year view is open, switch to calendar view" : "calendar view is open, switch to year view",
  // DateRange placeholders
  start: "Start",
  end: "End",
  // Action bar
  cancelButtonLabel: "Cancel",
  clearButtonLabel: "Clear",
  okButtonLabel: "OK",
  todayButtonLabel: "Today",
  // Toolbar titles
  datePickerToolbarTitle: "Select date",
  dateTimePickerToolbarTitle: "Select date & time",
  timePickerToolbarTitle: "Select time",
  dateRangePickerToolbarTitle: "Select date range",
  // Clock labels
  clockLabelText: (t, n, o) => `Select ${t}. ${n === null ? "No time selected" : `Selected time is ${o.format(n, "fullTime")}`}`,
  hoursClockNumberText: (t) => `${t} hours`,
  minutesClockNumberText: (t) => `${t} minutes`,
  secondsClockNumberText: (t) => `${t} seconds`,
  // Digital clock labels
  selectViewText: (t) => `Select ${t}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: "Week number",
  calendarWeekNumberHeaderText: "#",
  calendarWeekNumberAriaLabelText: (t) => `Week ${t}`,
  calendarWeekNumberText: (t) => `${t}`,
  // Open picker labels
  openDatePickerDialogue: (t, n) => t !== null && n.isValid(t) ? `Choose date, selected date is ${n.format(t, "fullDate")}` : "Choose date",
  openTimePickerDialogue: (t, n) => t !== null && n.isValid(t) ? `Choose time, selected time is ${n.format(t, "fullTime")}` : "Choose time",
  fieldClearLabel: "Clear value",
  // Table labels
  timeTableLabel: "pick time",
  dateTableLabel: "pick date",
  // Field section placeholders
  fieldYearPlaceholder: (t) => "Y".repeat(t.digitAmount),
  fieldMonthPlaceholder: (t) => t.contentType === "letter" ? "MMMM" : "MM",
  fieldDayPlaceholder: () => "DD",
  fieldWeekDayPlaceholder: (t) => t.contentType === "letter" ? "EEEE" : "EE",
  fieldHoursPlaceholder: () => "hh",
  fieldMinutesPlaceholder: () => "mm",
  fieldSecondsPlaceholder: () => "ss",
  fieldMeridiemPlaceholder: () => "aa"
}, ha = Io;
fa(Io);
const ot = () => {
  const t = g.useContext(Zt);
  if (t === null)
    throw new Error(["MUI: Can not find the date and time pickers localization context.", "It looks like you forgot to wrap your component in LocalizationProvider.", "This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package"].join(`
`));
  if (t.utils === null)
    throw new Error(["MUI: Can not find the date and time pickers adapter from its localization context.", "It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider."].join(`
`));
  const n = g.useMemo(() => d({}, ha, t.localeText), [t.localeText]);
  return g.useMemo(() => d({}, t, {
    localeText: n
  }), [t, n]);
}, ue = () => ot().utils, rt = () => ot().defaultDates, $e = () => ot().localeText, Nt = (t) => {
  const n = ue(), o = g.useRef();
  return o.current === void 0 && (o.current = n.dateWithTimezone(void 0, t)), o.current;
};
function ma(t) {
  return typeof t == "string";
}
function ga(t, n, o) {
  return t === void 0 || ma(t) ? n : d({}, n, {
    ownerState: d({}, n.ownerState, o)
  });
}
function ba(t, n = []) {
  if (t === void 0)
    return {};
  const o = {};
  return Object.keys(t).filter((r) => r.match(/^on[A-Z]/) && typeof t[r] == "function" && !n.includes(r)).forEach((r) => {
    o[r] = t[r];
  }), o;
}
function Ke(t, n, o) {
  return typeof t == "function" ? t(n, o) : t;
}
function to(t) {
  if (t === void 0)
    return {};
  const n = {};
  return Object.keys(t).filter((o) => !(o.match(/^on[A-Z]/) && typeof t[o] == "function")).forEach((o) => {
    n[o] = t[o];
  }), n;
}
function ya(t) {
  const {
    getSlotProps: n,
    additionalProps: o,
    externalSlotProps: r,
    externalForwardedProps: a,
    className: s
  } = t;
  if (!n) {
    const f = De(o == null ? void 0 : o.className, s, a == null ? void 0 : a.className, r == null ? void 0 : r.className), x = d({}, o == null ? void 0 : o.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), D = d({}, o, a, r);
    return f.length > 0 && (D.className = f), Object.keys(x).length > 0 && (D.style = x), {
      props: D,
      internalRef: void 0
    };
  }
  const i = ba(d({}, a, r)), l = to(r), c = to(a), u = n(i), p = De(u == null ? void 0 : u.className, o == null ? void 0 : o.className, s, a == null ? void 0 : a.className, r == null ? void 0 : r.className), m = d({}, u == null ? void 0 : u.style, o == null ? void 0 : o.style, a == null ? void 0 : a.style, r == null ? void 0 : r.style), h = d({}, u, o, c, l);
  return p.length > 0 && (h.className = p), Object.keys(m).length > 0 && (h.style = m), {
    props: h,
    internalRef: u.ref
  };
}
const Da = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function me(t) {
  var n;
  const {
    elementType: o,
    externalSlotProps: r,
    ownerState: a,
    skipResolvingSlotProps: s = !1
  } = t, i = Z(t, Da), l = s ? {} : Ke(r, a), {
    props: c,
    internalRef: u
  } = ya(d({}, i, {
    externalSlotProps: l
  })), p = We(u, l == null ? void 0 : l.ref, (n = t.additionalProps) == null ? void 0 : n.ref);
  return ga(o, d({}, c, {
    ref: p
  }), a);
}
const Pa = tt(/* @__PURE__ */ P.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), va = tt(/* @__PURE__ */ P.jsx("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), "ArrowLeft"), xa = tt(/* @__PURE__ */ P.jsx("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), "ArrowRight"), wa = tt(/* @__PURE__ */ P.jsx("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), "Calendar");
tt(/* @__PURE__ */ P.jsxs(g.Fragment, {
  children: [/* @__PURE__ */ P.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ P.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Clock");
tt(/* @__PURE__ */ P.jsx("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), "DateRange");
tt(/* @__PURE__ */ P.jsxs(g.Fragment, {
  children: [/* @__PURE__ */ P.jsx("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /* @__PURE__ */ P.jsx("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), "Time");
const Ca = tt(/* @__PURE__ */ P.jsx("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), "Clear");
function Ma(t) {
  return we("MuiPickersArrowSwitcher", t);
}
Ce("MuiPickersArrowSwitcher", ["root", "spacer", "button"]);
const Sa = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel"], Ra = ["ownerState"], ka = ["ownerState"], Ta = X("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})({
  display: "flex"
}), Oa = X("div", {
  name: "MuiPickersArrowSwitcher",
  slot: "Spacer",
  overridesResolver: (t, n) => n.spacer
})(({
  theme: t
}) => ({
  width: t.spacing(3)
})), no = X(tn, {
  name: "MuiPickersArrowSwitcher",
  slot: "Button",
  overridesResolver: (t, n) => n.button
})(({
  ownerState: t
}) => d({}, t.hidden && {
  visibility: "hidden"
})), Ia = (t) => {
  const {
    classes: n
  } = t;
  return ve({
    root: ["root"],
    spacer: ["spacer"],
    button: ["button"]
  }, Ma, n);
}, Vo = /* @__PURE__ */ g.forwardRef(function(n, o) {
  var r, a, s, i;
  const c = Pt().direction === "rtl", u = fe({
    props: n,
    name: "MuiPickersArrowSwitcher"
  }), {
    children: p,
    className: m,
    slots: h,
    slotProps: f,
    isNextDisabled: x,
    isNextHidden: D,
    onGoToNext: C,
    nextLabel: S,
    isPreviousDisabled: v,
    isPreviousHidden: M,
    onGoToPrevious: b,
    previousLabel: y
  } = u, k = Z(u, Sa), O = u, V = Ia(O), w = {
    isDisabled: x,
    isHidden: D,
    goTo: C,
    label: S
  }, A = {
    isDisabled: v,
    isHidden: M,
    goTo: b,
    label: y
  }, I = (r = h == null ? void 0 : h.previousIconButton) != null ? r : no, F = me({
    elementType: I,
    externalSlotProps: f == null ? void 0 : f.previousIconButton,
    additionalProps: {
      size: "medium",
      title: A.label,
      "aria-label": A.label,
      disabled: A.isDisabled,
      edge: "end",
      onClick: A.goTo
    },
    ownerState: d({}, O, {
      hidden: A.isHidden
    }),
    className: V.button
  }), N = (a = h == null ? void 0 : h.nextIconButton) != null ? a : no, T = me({
    elementType: N,
    externalSlotProps: f == null ? void 0 : f.nextIconButton,
    additionalProps: {
      size: "medium",
      title: w.label,
      "aria-label": w.label,
      disabled: w.isDisabled,
      edge: "start",
      onClick: w.goTo
    },
    ownerState: d({}, O, {
      hidden: w.isHidden
    }),
    className: V.button
  }), R = (s = h == null ? void 0 : h.leftArrowIcon) != null ? s : va, z = me({
    elementType: R,
    externalSlotProps: f == null ? void 0 : f.leftArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), K = Z(z, Ra), B = (i = h == null ? void 0 : h.rightArrowIcon) != null ? i : xa, q = me({
    elementType: B,
    externalSlotProps: f == null ? void 0 : f.rightArrowIcon,
    additionalProps: {
      fontSize: "inherit"
    },
    ownerState: void 0
  }), Q = Z(q, ka);
  return /* @__PURE__ */ P.jsxs(Ta, d({
    ref: o,
    className: De(V.root, m),
    ownerState: O
  }, k, {
    children: [/* @__PURE__ */ P.jsx(I, d({}, F, {
      children: c ? /* @__PURE__ */ P.jsx(B, d({}, Q)) : /* @__PURE__ */ P.jsx(R, d({}, K))
    })), p ? /* @__PURE__ */ P.jsx(Ze, {
      variant: "subtitle1",
      component: "span",
      children: p
    }) : /* @__PURE__ */ P.jsx(Oa, {
      className: V.spacer,
      ownerState: O
    }), /* @__PURE__ */ P.jsx(N, d({}, T, {
      children: c ? /* @__PURE__ */ P.jsx(R, d({}, K)) : /* @__PURE__ */ P.jsx(B, d({}, Q))
    }))]
  }));
}), kt = (t, n) => t.length !== n.length ? !1 : n.every((o) => t.includes(o)), Va = ({
  openTo: t,
  defaultOpenTo: n,
  views: o,
  defaultViews: r
}) => {
  const a = o != null ? o : r;
  let s;
  if (t != null)
    s = t;
  else if (a.includes(n))
    s = n;
  else if (a.length > 0)
    s = a[0];
  else
    throw new Error("MUI: The `views` prop must contain at least one view");
  return {
    views: a,
    openTo: s
  };
}, Fa = ["hours", "minutes", "seconds"], Ea = (t) => Fa.includes(t), oo = (t, n) => n.getHours(t) * 3600 + n.getMinutes(t) * 60 + n.getSeconds(t), $a = (t, n) => (o, r) => t ? n.isAfter(o, r) : oo(o, n) > oo(r, n);
let Pn = !1;
function Fo({
  onChange: t,
  onViewChange: n,
  openTo: o,
  view: r,
  views: a,
  autoFocus: s,
  focusedView: i,
  onFocusedViewChange: l
}) {
  var c, u;
  process.env.NODE_ENV !== "production" && (Pn || (r != null && !a.includes(r) && (console.warn(`MUI: \`view="${r}"\` is not a valid prop.`, `It must be an element of \`views=["${a.join('", "')}"]\`.`), Pn = !0), r == null && o != null && !a.includes(o) && (console.warn(`MUI: \`openTo="${o}"\` is not a valid prop.`, `It must be an element of \`views=["${a.join('", "')}"]\`.`), Pn = !0)));
  const p = g.useRef(o), m = g.useRef(a), h = g.useRef(a.includes(o) ? o : a[0]), [f, x] = Ge({
    name: "useViews",
    state: "view",
    controlled: r,
    default: h.current
  }), D = g.useRef(s ? f : null), [C, S] = Ge({
    name: "useViews",
    state: "focusedView",
    controlled: i,
    default: D.current
  });
  g.useEffect(() => {
    (p.current && p.current !== o || m.current && m.current.some((w) => !a.includes(w))) && (x(a.includes(o) ? o : a[0]), m.current = a, p.current = o);
  }, [o, x, f, a]);
  const v = a.indexOf(f), M = (c = a[v - 1]) != null ? c : null, b = (u = a[v + 1]) != null ? u : null, y = Y((w, A) => {
    S(A ? w : (I) => w === I ? null : I), l == null || l(w, A);
  }), k = Y((w) => {
    y(w, !0), w !== f && (x(w), n && n(w));
  }), O = Y(() => {
    b && k(b);
  }), V = Y((w, A, I) => {
    const F = A === "finish", N = I ? (
      // handles case like `DateTimePicker`, where a view might return a `finish` selection state
      // but we it's not the final view given all `views` -> overall selection state should be `partial`.
      a.indexOf(I) < a.length - 1
    ) : !!b;
    if (t(w, F && N ? "partial" : A, I), I && I !== f) {
      const R = a[a.indexOf(I) + 1];
      R && k(R);
    } else
      F && O();
  });
  return {
    view: f,
    setView: k,
    focusedView: C,
    setFocusedView: y,
    nextView: b,
    previousView: M,
    // Always return up to date default view instead of the initial one (i.e. defaultView.current)
    defaultView: a.includes(o) ? o : a[0],
    goToNextView: O,
    setValueAndGoToNextView: V
  };
}
function Eo(t, {
  disableFuture: n,
  maxDate: o,
  timezone: r
}) {
  const a = ue();
  return g.useMemo(() => {
    const s = a.dateWithTimezone(void 0, r), i = a.startOfMonth(n && a.isBefore(s, o) ? s : o);
    return !a.isAfter(i, t);
  }, [n, o, t, a, r]);
}
function $o(t, {
  disablePast: n,
  minDate: o,
  timezone: r
}) {
  const a = ue();
  return g.useMemo(() => {
    const s = a.dateWithTimezone(void 0, r), i = a.startOfMonth(n && a.isAfter(s, o) ? s : o);
    return !a.isBefore(i, t);
  }, [n, o, t, a, r]);
}
const Et = 36, jt = 2, an = 320, Aa = 280, En = 334, Na = X("div")({
  overflow: "hidden",
  width: an,
  maxHeight: En,
  display: "flex",
  flexDirection: "column",
  margin: "0 auto"
}), Xt = (t, n, o) => {
  let r = n;
  return r = t.setHours(r, t.getHours(o)), r = t.setMinutes(r, t.getMinutes(o)), r = t.setSeconds(r, t.getSeconds(o)), r;
}, Ft = ({
  date: t,
  disableFuture: n,
  disablePast: o,
  maxDate: r,
  minDate: a,
  isDateDisabled: s,
  utils: i,
  timezone: l
}) => {
  const c = Xt(i, i.dateWithTimezone(void 0, l), t);
  o && i.isBefore(a, c) && (a = c), n && i.isAfter(r, c) && (r = c);
  let u = t, p = t;
  for (i.isBefore(t, a) && (u = a, p = null), i.isAfter(t, r) && (p && (p = r), u = null); u || p; ) {
    if (u && i.isAfter(u, r) && (u = null), p && i.isBefore(p, a) && (p = null), u) {
      if (!s(u))
        return u;
      u = i.addDays(u, 1);
    }
    if (p) {
      if (!s(p))
        return p;
      p = i.addDays(p, -1);
    }
  }
  return null;
}, Ao = (t, n) => n == null || !t.isValid(n) ? null : n, Te = (t, n, o) => n == null || !t.isValid(n) ? o : n, Cn = (t, n, o) => !t.isValid(n) && n != null && !t.isValid(o) && o != null ? !0 : t.isEqual(n, o), $n = (t, n) => {
  const r = [t.startOfYear(n)];
  for (; r.length < 12; ) {
    const a = r[r.length - 1];
    r.push(t.addMonths(a, 1));
  }
  return r;
}, Jt = (t, n, o) => o === "date" ? t.startOfDay(t.dateWithTimezone(void 0, n)) : t.dateWithTimezone(void 0, n), ja = ["year", "month", "day"], ro = (t) => ja.includes(t), An = (t, {
  format: n,
  views: o
}, r) => {
  if (n != null)
    return n;
  const a = t.formats;
  return kt(o, ["year"]) ? a.year : kt(o, ["month"]) ? a.month : kt(o, ["day"]) ? a.dayOfMonth : kt(o, ["month", "year"]) ? `${a.month} ${a.year}` : kt(o, ["day", "month"]) ? `${a.month} ${a.dayOfMonth}` : r ? /en/.test(t.getCurrentLocaleCode()) ? a.normalDateWithWeekday : a.normalDate : a.keyboardDate;
}, _a = (t, n) => {
  const o = t.startOfWeek(n);
  return [0, 1, 2, 3, 4, 5, 6].map((r) => t.addDays(o, r));
}, Nn = ({
  timezone: t,
  value: n,
  defaultValue: o,
  onChange: r,
  valueManager: a
}) => {
  var s, i;
  const l = ue(), c = g.useRef(o), u = (s = n != null ? n : c.current) != null ? s : a.emptyValue, p = g.useMemo(() => a.getTimezone(l, u), [l, a, u]), m = Y((D) => p == null ? D : a.setTimezone(l, p, D)), h = (i = t != null ? t : p) != null ? i : "default", f = g.useMemo(() => a.setTimezone(l, h, u), [a, l, h, u]), x = Y((D, ...C) => {
    const S = m(D);
    r == null || r(S, ...C);
  });
  return {
    value: f,
    handleValueChange: x,
    timezone: h
  };
}, _t = ({
  name: t,
  timezone: n,
  value: o,
  defaultValue: r,
  onChange: a,
  valueManager: s
}) => {
  const [i, l] = Ge({
    name: t,
    state: "value",
    controlled: o,
    default: r != null ? r : s.emptyValue
  }), c = Y((u, ...p) => {
    l(u), a == null || a(u, ...p);
  });
  return Nn({
    timezone: n,
    value: i,
    defaultValue: void 0,
    onChange: c,
    valueManager: s
  });
}, He = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
}, La = (t) => Math.max(...t.map((n) => {
  var o;
  return (o = He[n.type]) != null ? o : 1;
})), Tt = (t, n, o) => {
  if (n === He.year)
    return t.startOfYear(o);
  if (n === He.month)
    return t.startOfMonth(o);
  if (n === He.day)
    return t.startOfDay(o);
  let r = o;
  return n < He.minutes && (r = t.setMinutes(r, 0)), n < He.seconds && (r = t.setSeconds(r, 0)), n < He.milliseconds && (r = t.setMilliseconds(r, 0)), r;
}, No = ({
  props: t,
  utils: n,
  granularity: o,
  timezone: r,
  getTodayDate: a
}) => {
  var s;
  let i = a ? a() : Tt(n, o, Jt(n, r));
  t.minDate != null && n.isAfterDay(t.minDate, i) && (i = Tt(n, o, t.minDate)), t.maxDate != null && n.isBeforeDay(t.maxDate, i) && (i = Tt(n, o, t.maxDate));
  const l = $a((s = t.disableIgnoringDatePartForTimeValidation) != null ? s : !1, n);
  return t.minTime != null && l(t.minTime, i) && (i = Tt(n, o, t.disableIgnoringDatePartForTimeValidation ? t.minTime : Xt(n, i, t.minTime))), t.maxTime != null && l(i, t.maxTime) && (i = Tt(n, o, t.disableIgnoringDatePartForTimeValidation ? t.maxTime : Xt(n, i, t.maxTime))), i;
}, jn = (t, n) => {
  const o = t.formatTokenMap[n];
  if (o == null)
    throw new Error([`MUI: The token "${n}" is not supported by the Date and Time Pickers.`, "Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported."].join(`
`));
  return typeof o == "string" ? {
    type: o,
    contentType: o === "meridiem" ? "letter" : "digit",
    maxLength: void 0
  } : {
    type: o.sectionType,
    contentType: o.contentType,
    maxLength: o.maxLength
  };
}, Ba = (t) => {
  switch (t) {
    case "ArrowUp":
      return 1;
    case "ArrowDown":
      return -1;
    case "PageUp":
      return 5;
    case "PageDown":
      return -5;
    default:
      return 0;
  }
}, sn = (t, n, o) => {
  const r = [], a = t.dateWithTimezone(void 0, n), s = t.startOfWeek(a), i = t.endOfWeek(a);
  let l = s;
  for (; t.isBefore(l, i); )
    r.push(l), l = t.addDays(l, 1);
  return r.map((c) => t.formatByString(c, o));
}, jo = (t, n, o, r) => {
  switch (o) {
    case "month":
      return $n(t, t.dateWithTimezone(void 0, n)).map((a) => t.formatByString(a, r));
    case "weekDay":
      return sn(t, n, r);
    case "meridiem": {
      const a = t.dateWithTimezone(void 0, n);
      return [t.startOfDay(a), t.endOfDay(a)].map((s) => t.formatByString(s, r));
    }
    default:
      return [];
  }
}, _o = (t, n, o) => {
  let r = n;
  for (r = Number(r).toString(); r.length < o; )
    r = `0${r}`;
  return r;
}, Lo = (t, n, o, r, a) => {
  if (process.env.NODE_ENV !== "production" && a.type !== "day" && a.contentType === "digit-with-letter")
    throw new Error([`MUI: The token "${a.format}" is a digit format with letter in it.'
             This type of format is only supported for 'day' sections`].join(`
`));
  if (a.type === "day" && a.contentType === "digit-with-letter") {
    const i = t.setDate(r.longestMonth, o);
    return t.formatByString(i, a.format);
  }
  const s = o.toString();
  return a.hasLeadingZerosInInput ? _o(t, s, a.maxLength) : s;
}, Ha = (t, n, o, r, a, s, i) => {
  const l = Ba(r), c = r === "Home", u = r === "End", p = o.value === "" || c || u, m = () => {
    const f = a[o.type]({
      currentDate: s,
      format: o.format,
      contentType: o.contentType
    }), x = (v) => Lo(t, n, v, f, o), D = o.type === "minutes" && i != null && i.minutesStep ? i.minutesStep : 1;
    let S = parseInt(o.value, 10) + l * D;
    if (p) {
      if (o.type === "year" && !u && !c)
        return t.formatByString(t.dateWithTimezone(void 0, n), o.format);
      l > 0 || c ? S = f.minimum : S = f.maximum;
    }
    return S % D !== 0 && ((l < 0 || c) && (S += D - (D + S) % D), (l > 0 || u) && (S -= S % D)), S > f.maximum ? x(f.minimum + (S - f.maximum - 1) % (f.maximum - f.minimum + 1)) : S < f.minimum ? x(f.maximum - (f.minimum - S - 1) % (f.maximum - f.minimum + 1)) : x(S);
  }, h = () => {
    const f = jo(t, n, o.type, o.format);
    if (f.length === 0)
      return o.value;
    if (p)
      return l > 0 || c ? f[0] : f[f.length - 1];
    const D = (f.indexOf(o.value) + f.length + l) % f.length;
    return f[D];
  };
  return o.contentType === "digit" || o.contentType === "digit-with-letter" ? m() : h();
}, _n = (t, n) => {
  let o = t.value || t.placeholder;
  const r = n === "non-input" ? t.hasLeadingZerosInFormat : t.hasLeadingZerosInInput;
  return n === "non-input" && t.hasLeadingZerosInInput && !t.hasLeadingZerosInFormat && (o = Number(o).toString()), ["input-rtl", "input-ltr"].includes(n) && t.contentType === "digit" && !r && o.length === 1 && (o = `${o}‎`), n === "input-rtl" && (o = `⁨${o}⁩`), o;
}, mt = (t) => t.replace(/[\u2066\u2067\u2068\u2069]/g, ""), Ln = (t, n) => {
  let o = 0, r = n ? 1 : 0;
  const a = [];
  for (let s = 0; s < t.length; s += 1) {
    const i = t[s], l = _n(i, n ? "input-rtl" : "input-ltr"), c = `${i.startSeparator}${l}${i.endSeparator}`, u = mt(c).length, p = c.length, m = mt(l), h = r + l.indexOf(m[0]) + i.startSeparator.length, f = h + m.length;
    a.push(d({}, i, {
      start: o,
      end: o + u,
      startInInput: h,
      endInInput: f
    })), o += u, r += p;
  }
  return a;
}, Wa = (t, n, o, r, a) => {
  switch (r.type) {
    case "year":
      return o.fieldYearPlaceholder({
        digitAmount: t.formatByString(t.dateWithTimezone(void 0, n), a).length,
        format: a
      });
    case "month":
      return o.fieldMonthPlaceholder({
        contentType: r.contentType,
        format: a
      });
    case "day":
      return o.fieldDayPlaceholder({
        format: a
      });
    case "weekDay":
      return o.fieldWeekDayPlaceholder({
        contentType: r.contentType,
        format: a
      });
    case "hours":
      return o.fieldHoursPlaceholder({
        format: a
      });
    case "minutes":
      return o.fieldMinutesPlaceholder({
        format: a
      });
    case "seconds":
      return o.fieldSecondsPlaceholder({
        format: a
      });
    case "meridiem":
      return o.fieldMeridiemPlaceholder({
        format: a
      });
    default:
      return a;
  }
}, ao = (t, n, o, r) => {
  if (process.env.NODE_ENV !== "production" && jn(t, o).type === "weekDay")
    throw new Error("changeSectionValueFormat doesn't support week day formats");
  return t.formatByString(t.parse(n, o), r);
}, Bo = (t, n, o) => t.formatByString(t.dateWithTimezone(void 0, n), o).length === 4, Ho = (t, n, o, r, a) => {
  if (o !== "digit")
    return !1;
  const s = t.dateWithTimezone(void 0, n);
  switch (r) {
    case "year":
      return Bo(t, n, a) ? t.formatByString(t.setYear(s, 1), a) === "0001" : t.formatByString(t.setYear(s, 2001), a) === "01";
    case "month":
      return t.formatByString(t.startOfYear(s), a).length > 1;
    case "day":
      return t.formatByString(t.startOfMonth(s), a).length > 1;
    case "weekDay":
      return t.formatByString(t.startOfWeek(s), a).length > 1;
    case "hours":
      return t.formatByString(t.setHours(s, 1), a).length > 1;
    case "minutes":
      return t.formatByString(t.setMinutes(s, 1), a).length > 1;
    case "seconds":
      return t.formatByString(t.setSeconds(s, 1), a).length > 1;
    default:
      throw new Error("Invalid section type");
  }
}, za = (t, n) => {
  const o = [], {
    start: r,
    end: a
  } = t.escapedCharacters, s = new RegExp(`(\\${r}[^\\${a}]*\\${a})+`, "g");
  let i = null;
  for (; i = s.exec(n); )
    o.push({
      start: i.index,
      end: s.lastIndex - 1
    });
  return o;
}, so = (t, n, o, r, a, s, i, l) => {
  let c = "";
  const u = [], p = t.date(), m = (M) => {
    if (M === "")
      return null;
    const b = jn(t, M), y = Ho(t, n, b.contentType, b.type, M), k = i ? y : b.contentType === "digit", O = a != null && t.isValid(a);
    let V = O ? t.formatByString(a, M) : "", w = null;
    if (k)
      if (y)
        w = V === "" ? t.formatByString(p, M).length : V.length;
      else {
        if (b.maxLength == null)
          throw new Error(`MUI: The token ${M} should have a 'maxDigitNumber' property on it's adapter`);
        w = b.maxLength, O && (V = _o(t, V, w));
      }
    return u.push(d({}, b, {
      format: M,
      maxLength: w,
      value: V,
      placeholder: Wa(t, n, o, b, M),
      hasLeadingZeros: y,
      hasLeadingZerosInFormat: y,
      hasLeadingZerosInInput: k,
      startSeparator: u.length === 0 ? c : "",
      endSeparator: "",
      modified: !1
    })), null;
  };
  let h = 10, f = r, x = t.expandFormat(r);
  for (; x !== f; )
    if (f = x, x = t.expandFormat(f), h -= 1, h < 0)
      throw new Error("MUI: The format expansion seems to be  enter in an infinite loop. Please open an issue with the format passed to the picker component");
  const D = x, C = za(t, D), S = new RegExp(`^(${Object.keys(t.formatTokenMap).sort((M, b) => b.length - M.length).join("|")})`, "g");
  let v = "";
  for (let M = 0; M < D.length; M += 1) {
    const b = C.find((w) => w.start <= M && w.end >= M), y = D[M], k = b != null, O = `${v}${D.slice(M)}`, V = S.test(O);
    !k && y.match(/([A-Za-z]+)/) && V ? (v = O.slice(0, S.lastIndex), M += S.lastIndex - 1) : k && (b == null ? void 0 : b.start) === M || (b == null ? void 0 : b.end) === M || (m(v), v = "", u.length === 0 ? c += y : u[u.length - 1].endSeparator += y);
  }
  return m(v), u.map((M) => {
    const b = (y) => {
      let k = y;
      return l && k !== null && k.includes(" ") && (k = `⁩${k}⁦`), s === "spacious" && ["/", ".", "-"].includes(k) && (k = ` ${k} `), k;
    };
    return M.startSeparator = b(M.startSeparator), M.endSeparator = b(M.endSeparator), M;
  });
}, Ya = (t, n) => {
  const o = n.some((l) => l.type === "day"), r = [], a = [];
  for (let l = 0; l < n.length; l += 1) {
    const c = n[l];
    o && c.type === "weekDay" || (r.push(c.format), a.push(_n(c, "non-input")));
  }
  const s = r.join(" "), i = a.join(" ");
  return t.parse(i, s);
}, Wo = (t, n) => {
  const r = t.map((a) => {
    const s = _n(a, n ? "input-rtl" : "input-ltr");
    return `${a.startSeparator}${s}${a.endSeparator}`;
  }).join("");
  return n ? `⁦${r}⁩` : r;
}, qa = (t, n) => {
  const o = t.dateWithTimezone(void 0, n), r = t.endOfYear(o), a = t.endOfDay(o), {
    maxDaysInMonth: s,
    longestMonth: i
  } = $n(t, o).reduce((l, c) => {
    const u = t.getDaysInMonth(c);
    return u > l.maxDaysInMonth ? {
      maxDaysInMonth: u,
      longestMonth: c
    } : l;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format: l
    }) => ({
      minimum: 0,
      maximum: Bo(t, n, l) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: t.getMonth(r) + 1
    }),
    day: ({
      currentDate: l
    }) => ({
      minimum: 1,
      maximum: l != null && t.isValid(l) ? t.getDaysInMonth(l) : s,
      longestMonth: i
    }),
    weekDay: ({
      format: l,
      contentType: c
    }) => {
      if (c === "digit") {
        const u = sn(t, n, l).map(Number);
        return {
          minimum: Math.min(...u),
          maximum: Math.max(...u)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format: l
    }) => {
      const c = t.getHours(a);
      return t.formatByString(t.endOfDay(o), l) !== c.toString() ? {
        minimum: 1,
        maximum: Number(t.formatByString(t.startOfDay(o), l))
      } : {
        minimum: 0,
        maximum: c
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: t.getMinutes(a)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: t.getSeconds(a)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
let io = !1;
const lo = (t, n) => {
  if (process.env.NODE_ENV !== "production" && !io) {
    const o = [];
    ["date", "date-time"].includes(n) && o.push("weekDay", "day", "month", "year"), ["time", "date-time"].includes(n) && o.push("hours", "minutes", "seconds", "meridiem");
    const r = t.find((a) => !o.includes(a.type));
    r && (console.warn(`MUI: The field component you are using is not compatible with the "${r.type} date section.`, `The supported date sections are ["${o.join('", "')}"]\`.`), io = !0);
  }
}, Ua = (t, n, o, r, a) => {
  switch (o.type) {
    case "year":
      return t.setYear(a, t.getYear(r));
    case "month":
      return t.setMonth(a, t.getMonth(r));
    case "weekDay": {
      const s = sn(t, n, o.format), i = t.formatByString(r, o.format), l = s.indexOf(i), u = s.indexOf(o.value) - l;
      return t.addDays(r, u);
    }
    case "day":
      return t.setDate(a, t.getDate(r));
    case "meridiem": {
      const s = t.getHours(r) < 12, i = t.getHours(a);
      return s && i >= 12 ? t.addHours(a, -12) : !s && i < 12 ? t.addHours(a, 12) : a;
    }
    case "hours":
      return t.setHours(a, t.getHours(r));
    case "minutes":
      return t.setMinutes(a, t.getMinutes(r));
    case "seconds":
      return t.setSeconds(a, t.getSeconds(r));
    default:
      return a;
  }
}, co = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8
}, uo = (t, n, o, r, a, s) => (
  // cloning sections before sort to avoid mutating it
  [...r].sort((i, l) => co[i.type] - co[l.type]).reduce((i, l) => !s || l.modified ? Ua(t, n, l, o, i) : i, a)
), Ka = () => navigator.userAgent.toLowerCase().indexOf("android") > -1, Ga = (t, n) => {
  const o = {};
  if (!n)
    return t.forEach((c, u) => {
      const p = u === 0 ? null : u - 1, m = u === t.length - 1 ? null : u + 1;
      o[u] = {
        leftIndex: p,
        rightIndex: m
      };
    }), {
      neighbors: o,
      startIndex: 0,
      endIndex: t.length - 1
    };
  const r = {}, a = {};
  let s = 0, i = 0, l = t.length - 1;
  for (; l >= 0; ) {
    i = t.findIndex(
      // eslint-disable-next-line @typescript-eslint/no-loop-func
      (c, u) => {
        var p;
        return u >= s && ((p = c.endSeparator) == null ? void 0 : p.includes(" ")) && // Special case where the spaces were not there in the initial input
        c.endSeparator !== " / ";
      }
    ), i === -1 && (i = t.length - 1);
    for (let c = i; c >= s; c -= 1)
      a[c] = l, r[l] = c, l -= 1;
    s = i + 1;
  }
  return t.forEach((c, u) => {
    const p = a[u], m = p === 0 ? null : r[p - 1], h = p === t.length - 1 ? null : r[p + 1];
    o[u] = {
      leftIndex: m,
      rightIndex: h
    };
  }), {
    neighbors: o,
    startIndex: r[0],
    endIndex: r[t.length - 1]
  };
}, Qa = ["value", "referenceDate"], Qe = {
  emptyValue: null,
  getTodayValue: Jt,
  getInitialReferenceValue: (t) => {
    let {
      value: n,
      referenceDate: o
    } = t, r = Z(t, Qa);
    return n != null && r.utils.isValid(n) ? n : o != null ? o : No(r);
  },
  cleanValue: Ao,
  areValuesEqual: Cn,
  isSameError: (t, n) => t === n,
  hasError: (t) => t != null,
  defaultErrorState: null,
  getTimezone: (t, n) => n == null || !t.isValid(n) ? null : t.getTimezone(n),
  setTimezone: (t, n, o) => o == null ? null : t.setTimezone(o, n)
}, Za = {
  updateReferenceValue: (t, n, o) => n == null || !t.isValid(n) ? o : n,
  getSectionsFromValue: (t, n, o, r, a) => !t.isValid(n) && !!o ? o : Ln(a(n), r),
  getValueStrFromSections: Wo,
  getActiveDateManager: (t, n) => ({
    date: n.value,
    referenceDate: n.referenceValue,
    getSections: (o) => o,
    getNewValuesFromNewActiveDate: (o) => ({
      value: o,
      referenceValue: o == null || !t.isValid(o) ? n.referenceValue : o
    })
  }),
  parseValueStr: (t, n, o) => o(t.trim(), n)
}, Lt = (t) => {
  if (t !== void 0)
    return Object.keys(t).reduce((n, o) => d({}, n, {
      [`${o.slice(0, 1).toLowerCase()}${o.slice(1)}`]: t[o]
    }), {});
};
function Xa(t) {
  return we("MuiPickersDay", t);
}
const Ue = Ce("MuiPickersDay", ["root", "dayWithMargin", "dayOutsideMonth", "hiddenDaySpacingFiller", "today", "selected", "disabled"]), Ja = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"], es = (t) => {
  const {
    selected: n,
    disableMargin: o,
    disableHighlightToday: r,
    today: a,
    disabled: s,
    outsideCurrentMonth: i,
    showDaysOutsideCurrentMonth: l,
    classes: c
  } = t, u = i && !l;
  return ve({
    root: ["root", n && !u && "selected", s && "disabled", !o && "dayWithMargin", !r && a && "today", i && l && "dayOutsideMonth", u && "hiddenDaySpacingFiller"],
    hiddenDaySpacingFiller: ["hiddenDaySpacingFiller"]
  }, Xa, c);
}, zo = ({
  theme: t,
  ownerState: n
}) => d({}, t.typography.caption, {
  width: Et,
  height: Et,
  borderRadius: "50%",
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: "transparent",
  transition: t.transitions.create("background-color", {
    duration: t.transitions.duration.short
  }),
  color: (t.vars || t).palette.text.primary,
  "@media (pointer: fine)": {
    "&:hover": {
      backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.hoverOpacity})` : et(t.palette.primary.main, t.palette.action.hoverOpacity)
    }
  },
  "&:focus": {
    backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.focusOpacity})` : et(t.palette.primary.main, t.palette.action.focusOpacity),
    [`&.${Ue.selected}`]: {
      willChange: "background-color",
      backgroundColor: (t.vars || t).palette.primary.dark
    }
  },
  [`&.${Ue.selected}`]: {
    color: (t.vars || t).palette.primary.contrastText,
    backgroundColor: (t.vars || t).palette.primary.main,
    fontWeight: t.typography.fontWeightMedium,
    "&:hover": {
      willChange: "background-color",
      backgroundColor: (t.vars || t).palette.primary.dark
    }
  },
  [`&.${Ue.disabled}:not(.${Ue.selected})`]: {
    color: (t.vars || t).palette.text.disabled
  },
  [`&.${Ue.disabled}&.${Ue.selected}`]: {
    opacity: 0.6
  }
}, !n.disableMargin && {
  margin: `0 ${jt}px`
}, n.outsideCurrentMonth && n.showDaysOutsideCurrentMonth && {
  color: (t.vars || t).palette.text.secondary
}, !n.disableHighlightToday && n.today && {
  [`&:not(.${Ue.selected})`]: {
    border: `1px solid ${(t.vars || t).palette.text.secondary}`
  }
}), Yo = (t, n) => {
  const {
    ownerState: o
  } = t;
  return [n.root, !o.disableMargin && n.dayWithMargin, !o.disableHighlightToday && o.today && n.today, !o.outsideCurrentMonth && o.showDaysOutsideCurrentMonth && n.dayOutsideMonth, o.outsideCurrentMonth && !o.showDaysOutsideCurrentMonth && n.hiddenDaySpacingFiller];
}, ts = X(zr, {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: Yo
})(zo), ns = X("div", {
  name: "MuiPickersDay",
  slot: "Root",
  overridesResolver: Yo
})(({
  theme: t,
  ownerState: n
}) => d({}, zo({
  theme: t,
  ownerState: n
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: "none"
})), Ot = () => {
}, qo = /* @__PURE__ */ g.forwardRef(function(n, o) {
  const r = fe({
    props: n,
    name: "MuiPickersDay"
  }), {
    autoFocus: a = !1,
    className: s,
    day: i,
    disabled: l = !1,
    disableHighlightToday: c = !1,
    disableMargin: u = !1,
    isAnimating: p,
    onClick: m,
    onDaySelect: h,
    onFocus: f = Ot,
    onBlur: x = Ot,
    onKeyDown: D = Ot,
    onMouseDown: C = Ot,
    onMouseEnter: S = Ot,
    outsideCurrentMonth: v,
    selected: M = !1,
    showDaysOutsideCurrentMonth: b = !1,
    children: y,
    today: k = !1
  } = r, O = Z(r, Ja), V = d({}, r, {
    autoFocus: a,
    disabled: l,
    disableHighlightToday: c,
    disableMargin: u,
    selected: M,
    showDaysOutsideCurrentMonth: b,
    today: k
  }), w = es(V), A = ue(), I = g.useRef(null), F = We(I, o);
  yt(() => {
    a && !l && !p && !v && I.current.focus();
  }, [a, l, p, v]);
  const N = (R) => {
    C(R), v && R.preventDefault();
  }, T = (R) => {
    l || h(i), v && R.currentTarget.focus(), m && m(R);
  };
  return v && !b ? /* @__PURE__ */ P.jsx(ns, {
    className: De(w.root, w.hiddenDaySpacingFiller, s),
    ownerState: V,
    role: O.role
  }) : /* @__PURE__ */ P.jsx(ts, d({
    className: De(w.root, s),
    ref: F,
    centerRipple: !0,
    disabled: l,
    tabIndex: M ? 0 : -1,
    onKeyDown: (R) => D(R, i),
    onFocus: (R) => f(R, i),
    onBlur: (R) => x(R, i),
    onMouseEnter: (R) => S(R, i),
    onClick: T,
    onMouseDown: N
  }, O, {
    ownerState: V,
    children: y || A.format(i, "dayOfMonth")
  }));
});
process.env.NODE_ENV !== "production" && (qo.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: e.oneOfType([e.func, e.shape({
    current: e.shape({
      focusVisible: e.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: e.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  className: e.string,
  component: e.elementType,
  /**
   * The date to show.
   */
  day: e.any.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: e.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: e.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: e.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: e.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: e.string,
  isAnimating: e.bool,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: e.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: e.bool.isRequired,
  onBlur: e.func,
  onDaySelect: e.func.isRequired,
  onFocus: e.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: e.func,
  onKeyDown: e.func,
  onMouseEnter: e.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: e.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: e.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: e.bool,
  style: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * @default 0
   */
  tabIndex: e.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: e.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: e.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: e.oneOfType([e.func, e.shape({
    current: e.shape({
      pulsate: e.func.isRequired,
      start: e.func.isRequired,
      stop: e.func.isRequired
    })
  })])
});
const Uo = /* @__PURE__ */ g.memo(qo);
function Bn(t, n, o, r) {
  const {
    value: a,
    onError: s
  } = t, i = ot(), l = g.useRef(r), c = n({
    adapter: i,
    value: a,
    props: t
  });
  return g.useEffect(() => {
    s && !o(c, l.current) && s(c, a), l.current = c;
  }, [o, s, l, c, a]), c;
}
const os = (t) => {
  const n = ue(), o = $e(), r = ot(), s = Pt().direction === "rtl", {
    valueManager: i,
    fieldValueManager: l,
    valueType: c,
    validator: u,
    internalProps: p,
    internalProps: {
      value: m,
      defaultValue: h,
      referenceDate: f,
      onChange: x,
      format: D,
      formatDensity: C = "dense",
      selectedSections: S,
      onSelectedSectionsChange: v,
      shouldRespectLeadingZeros: M = !1,
      timezone: b
    }
  } = t, {
    timezone: y,
    value: k,
    handleValueChange: O
  } = Nn({
    timezone: b,
    value: m,
    defaultValue: h,
    onChange: x,
    valueManager: i
  }), V = g.useMemo(() => qa(n, y), [n, y]), w = g.useCallback((H, L = null) => l.getSectionsFromValue(n, H, L, s, (oe) => so(n, y, o, D, oe, C, M, s)), [l, D, o, s, M, n, C, y]), A = g.useMemo(() => l.getValueStrFromSections(w(i.emptyValue), s), [l, w, i.emptyValue, s]), [I, F] = g.useState(() => {
    const H = w(k);
    lo(H, c);
    const L = {
      sections: H,
      value: k,
      referenceValue: i.emptyValue,
      tempValueStrAndroid: null
    }, oe = La(H), $ = i.getInitialReferenceValue({
      referenceDate: f,
      value: k,
      utils: n,
      props: p,
      granularity: oe,
      timezone: y
    });
    return d({}, L, {
      referenceValue: $
    });
  }), [N, T] = Ge({
    controlled: S,
    default: null,
    name: "useField",
    state: "selectedSectionIndexes"
  }), R = (H) => {
    T(H), v == null || v(H), F((L) => d({}, L, {
      selectedSectionQuery: null
    }));
  }, z = g.useMemo(() => {
    if (N == null)
      return null;
    if (N === "all")
      return {
        startIndex: 0,
        endIndex: I.sections.length - 1,
        shouldSelectBoundarySelectors: !0
      };
    if (typeof N == "number")
      return {
        startIndex: N,
        endIndex: N
      };
    if (typeof N == "string") {
      const H = I.sections.findIndex((L) => L.type === N);
      return {
        startIndex: H,
        endIndex: H
      };
    }
    return N;
  }, [N, I.sections]), K = ({
    value: H,
    referenceValue: L,
    sections: oe
  }) => {
    if (F((j) => d({}, j, {
      sections: oe,
      value: H,
      referenceValue: L,
      tempValueStrAndroid: null
    })), i.areValuesEqual(n, I.value, H))
      return;
    const $ = {
      validationError: u({
        adapter: r,
        value: H,
        props: d({}, p, {
          value: H,
          timezone: y
        })
      })
    };
    O(H, $);
  }, B = (H, L) => {
    const oe = [...I.sections];
    return oe[H] = d({}, oe[H], {
      value: L,
      modified: !0
    }), Ln(oe, s);
  }, q = () => {
    K({
      value: i.emptyValue,
      referenceValue: I.referenceValue,
      sections: w(i.emptyValue)
    });
  }, Q = () => {
    if (z == null)
      return;
    const H = I.sections[z.startIndex], L = l.getActiveDateManager(n, I, H), $ = L.getSections(I.sections).filter((G) => G.value !== "").length === (H.value === "" ? 0 : 1), j = B(z.startIndex, ""), pe = $ ? null : n.date(/* @__PURE__ */ new Date("")), ce = L.getNewValuesFromNewActiveDate(pe);
    (pe != null && !n.isValid(pe)) != (L.date != null && !n.isValid(L.date)) ? K(d({}, ce, {
      sections: j
    })) : F((G) => d({}, G, ce, {
      sections: j,
      tempValueStrAndroid: null
    }));
  }, ie = (H) => {
    const L = (j, pe) => {
      const ce = n.parse(j, D);
      if (ce == null || !n.isValid(ce))
        return null;
      const G = so(n, y, o, D, ce, C, M, s);
      return uo(n, y, ce, G, pe, !1);
    }, oe = l.parseValueStr(H, I.referenceValue, L), $ = l.updateReferenceValue(n, oe, I.referenceValue);
    K({
      value: oe,
      referenceValue: $,
      sections: w(oe, I.sections)
    });
  }, ae = ({
    activeSection: H,
    newSectionValue: L,
    shouldGoToNextSection: oe
  }) => {
    oe && z && z.startIndex < I.sections.length - 1 ? R(z.startIndex + 1) : z && z.startIndex !== z.endIndex && R(z.startIndex);
    const $ = l.getActiveDateManager(n, I, H), j = B(z.startIndex, L), pe = $.getSections(j), ce = Ya(n, pe);
    let G, ee;
    if (ce != null && n.isValid(ce)) {
      const E = uo(n, y, ce, pe, $.referenceDate, !0);
      G = $.getNewValuesFromNewActiveDate(E), ee = !0;
    } else
      G = $.getNewValuesFromNewActiveDate(ce), ee = (ce != null && !n.isValid(ce)) != ($.date != null && !n.isValid($.date));
    return ee ? K(d({}, G, {
      sections: j
    })) : F((E) => d({}, E, G, {
      sections: j,
      tempValueStrAndroid: null
    }));
  }, se = (H) => F((L) => d({}, L, {
    tempValueStrAndroid: H
  }));
  return g.useEffect(() => {
    const H = w(I.value);
    lo(H, c), F((L) => d({}, L, {
      sections: H
    }));
  }, [D, n.locale]), g.useEffect(() => {
    let H = !1;
    i.areValuesEqual(n, I.value, k) ? H = i.getTimezone(n, I.value) !== i.getTimezone(n, k) : H = !0, H && F((L) => d({}, L, {
      value: k,
      referenceValue: l.updateReferenceValue(n, k, L.referenceValue),
      sections: w(k)
    }));
  }, [k]), {
    state: I,
    selectedSectionIndexes: z,
    setSelectedSections: R,
    clearValue: q,
    clearActiveSection: Q,
    updateSectionValue: ae,
    updateValueFromValueStr: ie,
    setTempAndroidValueStr: se,
    sectionsValueBoundaries: V,
    placeholder: A,
    timezone: y
  };
}, rs = 5e3, ft = (t) => t.saveQuery != null, as = ({
  sections: t,
  updateSectionValue: n,
  sectionsValueBoundaries: o,
  setTempAndroidValueStr: r,
  timezone: a
}) => {
  const s = ue(), [i, l] = g.useState(null), c = Y(() => l(null));
  g.useEffect(() => {
    var f;
    i != null && ((f = t[i.sectionIndex]) == null ? void 0 : f.type) !== i.sectionType && c();
  }, [t, i, c]), g.useEffect(() => {
    if (i != null) {
      const f = setTimeout(() => c(), rs);
      return () => {
        window.clearTimeout(f);
      };
    }
    return () => {
    };
  }, [i, c]);
  const u = ({
    keyPressed: f,
    sectionIndex: x
  }, D, C) => {
    const S = f.toLowerCase(), v = t[x];
    if (i != null && (!C || C(i.value)) && i.sectionIndex === x) {
      const b = `${i.value}${S}`, y = D(b, v);
      if (!ft(y))
        return l({
          sectionIndex: x,
          value: b,
          sectionType: v.type
        }), y;
    }
    const M = D(S, v);
    return ft(M) && !M.saveQuery ? (c(), null) : (l({
      sectionIndex: x,
      value: S,
      sectionType: v.type
    }), ft(M) ? null : M);
  }, p = (f) => {
    const x = (S, v, M) => {
      const b = v.filter((y) => y.toLowerCase().startsWith(M));
      return b.length === 0 ? {
        saveQuery: !1
      } : {
        sectionValue: b[0],
        shouldGoToNextSection: b.length === 1
      };
    }, D = (S, v, M, b) => {
      const y = (k) => jo(s, a, v.type, k);
      if (v.contentType === "letter")
        return x(v.format, y(v.format), S);
      if (M && b != null && jn(s, M).contentType === "letter") {
        const k = y(M), O = x(M, k, S);
        return ft(O) ? {
          saveQuery: !1
        } : d({}, O, {
          sectionValue: b(O.sectionValue, k)
        });
      }
      return {
        saveQuery: !1
      };
    };
    return u(f, (S, v) => {
      switch (v.type) {
        case "month": {
          const M = (b) => ao(s, b, s.formats.month, v.format);
          return D(S, v, s.formats.month, M);
        }
        case "weekDay": {
          const M = (b, y) => y.indexOf(b).toString();
          return D(S, v, s.formats.weekday, M);
        }
        case "meridiem":
          return D(S, v);
        default:
          return {
            saveQuery: !1
          };
      }
    });
  }, m = (f) => {
    const x = (C, S) => {
      const v = +`${C}`, M = o[S.type]({
        currentDate: null,
        format: S.format,
        contentType: S.contentType
      });
      if (v > M.maximum)
        return {
          saveQuery: !1
        };
      if (v < M.minimum)
        return {
          saveQuery: !0
        };
      const b = +`${C}0` > M.maximum || C.length === M.maximum.toString().length;
      return {
        sectionValue: Lo(s, a, v, M, S),
        shouldGoToNextSection: b
      };
    };
    return u(f, (C, S) => {
      if (S.contentType === "digit" || S.contentType === "digit-with-letter")
        return x(C, S);
      if (S.type === "month") {
        const v = Ho(s, a, "digit", "month", "MM"), M = x(C, {
          type: S.type,
          format: "MM",
          hasLeadingZerosInFormat: v,
          hasLeadingZerosInInput: !0,
          contentType: "digit",
          maxLength: 2
        });
        if (ft(M))
          return M;
        const b = ao(s, M.sectionValue, "MM", S.format);
        return d({}, M, {
          sectionValue: b
        });
      }
      if (S.type === "weekDay") {
        const v = x(C, S);
        if (ft(v))
          return v;
        const M = sn(s, a, S.format)[Number(v.sectionValue) - 1];
        return d({}, v, {
          sectionValue: M
        });
      }
      return {
        saveQuery: !1
      };
    }, (C) => !Number.isNaN(Number(C)));
  };
  return {
    applyCharacterEditing: Y((f) => {
      const x = t[f.sectionIndex], C = !Number.isNaN(Number(f.keyPressed)) ? m(f) : p(f);
      C == null ? r(null) : n({
        activeSection: x,
        newSectionValue: C.sectionValue,
        shouldGoToNextSection: C.shouldGoToNextSection
      });
    }),
    resetCharacterQuery: c
  };
};
function ss(t, n) {
  return Array.isArray(n) ? n.every((o) => t.indexOf(o) !== -1) : t.indexOf(n) !== -1;
}
const en = (t, n) => (o) => {
  (o.key === "Enter" || o.key === " ") && (t(o), o.preventDefault(), o.stopPropagation()), n && n(o);
}, is = (t) => {
  setTimeout(t, 0);
}, ut = (t = document) => {
  const n = t.activeElement;
  return n ? n.shadowRoot ? ut(n.shadowRoot) : n : null;
}, Ko = "@media (pointer: fine)", ls = ["onClick", "onKeyDown", "onFocus", "onBlur", "onMouseUp", "onPaste", "error", "clearable", "onClear", "disabled"], Go = (t) => {
  const n = ue(), {
    state: o,
    selectedSectionIndexes: r,
    setSelectedSections: a,
    clearValue: s,
    clearActiveSection: i,
    updateSectionValue: l,
    updateValueFromValueStr: c,
    setTempAndroidValueStr: u,
    sectionsValueBoundaries: p,
    placeholder: m,
    timezone: h
  } = os(t), {
    inputRef: f,
    internalProps: x,
    internalProps: {
      readOnly: D = !1,
      unstableFieldRef: C,
      minutesStep: S
    },
    forwardedProps: {
      onClick: v,
      onKeyDown: M,
      onFocus: b,
      onBlur: y,
      onMouseUp: k,
      onPaste: O,
      error: V,
      clearable: w,
      onClear: A,
      disabled: I
    },
    fieldValueManager: F,
    valueManager: N,
    validator: T
  } = t, R = Z(t.forwardedProps, ls), {
    applyCharacterEditing: z,
    resetCharacterQuery: K
  } = as({
    sections: o.sections,
    updateSectionValue: l,
    sectionsValueBoundaries: p,
    setTempAndroidValueStr: u,
    timezone: h
  }), B = g.useRef(null), q = We(f, B), Q = g.useRef(void 0), ae = Pt().direction === "rtl", se = g.useMemo(() => Ga(o.sections, ae), [o.sections, ae]), H = () => {
    var W;
    if (D) {
      a(null);
      return;
    }
    const U = (W = B.current.selectionStart) != null ? W : 0;
    let re;
    U <= o.sections[0].startInInput || U >= o.sections[o.sections.length - 1].endInInput ? re = 1 : re = o.sections.findIndex((Re) => Re.startInInput - Re.startSeparator.length > U);
    const be = re === -1 ? o.sections.length - 1 : re - 1;
    a(be);
  }, L = Y((W, ...U) => {
    W.isDefaultPrevented() || (v == null || v(W, ...U), H());
  }), oe = Y((W) => {
    k == null || k(W), W.preventDefault();
  }), $ = Y((...W) => {
    b == null || b(...W);
    const U = B.current;
    window.clearTimeout(Q.current), Q.current = setTimeout(() => {
      !U || U !== B.current || r != null || D || (// avoid selecting all sections when focusing empty field without value
      U.value.length && Number(U.selectionEnd) - Number(U.selectionStart) === U.value.length ? a("all") : H());
    });
  }), j = Y((...W) => {
    y == null || y(...W), a(null);
  }), pe = Y((W) => {
    if (O == null || O(W), D) {
      W.preventDefault();
      return;
    }
    const U = W.clipboardData.getData("text");
    if (r && r.startIndex === r.endIndex) {
      const re = o.sections[r.startIndex], be = /^[a-zA-Z]+$/.test(U), Re = /^[0-9]+$/.test(U), Me = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(U);
      if (re.contentType === "letter" && be || re.contentType === "digit" && Re || re.contentType === "digit-with-letter" && Me) {
        K(), l({
          activeSection: re,
          newSectionValue: U,
          shouldGoToNextSection: !0
        }), W.preventDefault();
        return;
      }
      if (be || Re) {
        W.preventDefault();
        return;
      }
    }
    W.preventDefault(), K(), c(U);
  }), ce = Y((W) => {
    if (D)
      return;
    const U = W.target.value;
    if (U === "") {
      K(), s();
      return;
    }
    const re = W.nativeEvent.data, be = re && re.length > 1, Re = be ? re : U, Me = mt(Re);
    if (r == null || be) {
      c(be ? re : Me);
      return;
    }
    let Ie;
    if (r.startIndex === 0 && r.endIndex === o.sections.length - 1 && Me.length === 1)
      Ie = Me;
    else {
      const Se = mt(F.getValueStrFromSections(o.sections, ae));
      let Xe = -1, ke = -1;
      for (let Fe = 0; Fe < Se.length; Fe += 1)
        Xe === -1 && Se[Fe] !== Me[Fe] && (Xe = Fe), ke === -1 && Se[Se.length - Fe - 1] !== Me[Me.length - Fe - 1] && (ke = Fe);
      const je = o.sections[r.startIndex];
      if (Xe < je.start || Se.length - ke - 1 > je.end)
        return;
      const at = Me.length - Se.length + je.end - mt(je.endSeparator || "").length;
      Ie = Me.slice(je.start + mt(je.startSeparator || "").length, at);
    }
    if (Ie.length === 0) {
      Ka() ? u(Re) : (K(), i());
      return;
    }
    z({
      keyPressed: Ie,
      sectionIndex: r.startIndex
    });
  }), G = Y((W) => {
    switch (M == null || M(W), !0) {
      case (W.key === "a" && (W.ctrlKey || W.metaKey)): {
        W.preventDefault(), a("all");
        break;
      }
      case W.key === "ArrowRight": {
        if (W.preventDefault(), r == null)
          a(se.startIndex);
        else if (r.startIndex !== r.endIndex)
          a(r.endIndex);
        else {
          const U = se.neighbors[r.startIndex].rightIndex;
          U !== null && a(U);
        }
        break;
      }
      case W.key === "ArrowLeft": {
        if (W.preventDefault(), r == null)
          a(se.endIndex);
        else if (r.startIndex !== r.endIndex)
          a(r.startIndex);
        else {
          const U = se.neighbors[r.startIndex].leftIndex;
          U !== null && a(U);
        }
        break;
      }
      case W.key === "Delete": {
        if (W.preventDefault(), D)
          break;
        r == null || r.startIndex === 0 && r.endIndex === o.sections.length - 1 ? s() : i(), K();
        break;
      }
      case ["ArrowUp", "ArrowDown", "Home", "End", "PageUp", "PageDown"].includes(W.key): {
        if (W.preventDefault(), D || r == null)
          break;
        const U = o.sections[r.startIndex], re = F.getActiveDateManager(n, o, U), be = Ha(n, h, U, W.key, p, re.date, {
          minutesStep: S
        });
        l({
          activeSection: U,
          newSectionValue: be,
          shouldGoToNextSection: !1
        });
        break;
      }
    }
  });
  yt(() => {
    if (!B.current)
      return;
    if (r == null) {
      B.current.scrollLeft && (B.current.scrollLeft = 0);
      return;
    }
    const W = o.sections[r.startIndex], U = o.sections[r.endIndex];
    let re = W.startInInput, be = U.endInInput;
    if (r.shouldSelectBoundarySelectors && (re -= W.startSeparator.length, be += U.endSeparator.length), re !== B.current.selectionStart || be !== B.current.selectionEnd) {
      const Re = B.current.scrollTop;
      B.current === ut(document) && B.current.setSelectionRange(re, be), B.current.scrollTop = Re;
    }
  });
  const ee = Bn(d({}, x, {
    value: o.value,
    timezone: h
  }), T, N.isSameError, N.defaultErrorState), E = g.useMemo(() => V !== void 0 ? V : N.hasError(ee), [N, ee, V]);
  g.useEffect(() => {
    !E && !r && K();
  }, [o.referenceValue, r, E]), g.useEffect(() => (B.current && B.current === document.activeElement && a("all"), () => window.clearTimeout(Q.current)), []), g.useEffect(() => {
    o.tempValueStrAndroid != null && r != null && (K(), i());
  }, [o.tempValueStrAndroid]);
  const ne = g.useMemo(() => {
    var W;
    return (W = o.tempValueStrAndroid) != null ? W : F.getValueStrFromSections(o.sections, ae);
  }, [o.sections, F, o.tempValueStrAndroid, ae]), xe = g.useMemo(() => r == null || o.sections[r.startIndex].contentType === "letter" ? "text" : "numeric", [r, o.sections]), ge = B.current && B.current === ut(document), Ne = N.areValuesEqual(n, o.value, N.emptyValue), te = !ge && Ne;
  g.useImperativeHandle(C, () => ({
    getSections: () => o.sections,
    getActiveSectionIndex: () => {
      var W, U, re;
      const be = (W = B.current.selectionStart) != null ? W : 0, Re = (U = B.current.selectionEnd) != null ? U : 0, Me = !!((re = B.current) != null && re.readOnly);
      if (be === 0 && Re === 0 || Me)
        return null;
      const Ie = be <= o.sections[0].startInInput ? 1 : o.sections.findIndex((Se) => Se.startInInput - Se.startSeparator.length > be);
      return Ie === -1 ? o.sections.length - 1 : Ie - 1;
    },
    setSelectedSections: (W) => a(W)
  }));
  const J = Y((W, ...U) => {
    var re;
    W.preventDefault(), A == null || A(W, ...U), s(), B == null || (re = B.current) == null || re.focus(), a(0);
  });
  return d({
    placeholder: m,
    autoComplete: "off",
    disabled: !!I
  }, R, {
    value: te ? "" : ne,
    inputMode: xe,
    readOnly: D,
    onClick: L,
    onFocus: $,
    onBlur: j,
    onPaste: pe,
    onChange: ce,
    onKeyDown: G,
    onMouseUp: oe,
    onClear: J,
    error: E,
    ref: q,
    clearable: !!(w && !Ne && !D && !I)
  });
}, Dt = ({
  props: t,
  value: n,
  adapter: o
}) => {
  if (n === null)
    return null;
  const {
    shouldDisableDate: r,
    shouldDisableMonth: a,
    shouldDisableYear: s,
    disablePast: i,
    disableFuture: l,
    timezone: c
  } = t, u = o.utils.dateWithTimezone(void 0, c), p = Te(o.utils, t.minDate, o.defaultDates.minDate), m = Te(o.utils, t.maxDate, o.defaultDates.maxDate);
  switch (!0) {
    case !o.utils.isValid(n):
      return "invalidDate";
    case !!(r && r(n)):
      return "shouldDisableDate";
    case !!(a && a(n)):
      return "shouldDisableMonth";
    case !!(s && s(n)):
      return "shouldDisableYear";
    case !!(l && o.utils.isAfterDay(n, u)):
      return "disableFuture";
    case !!(i && o.utils.isBeforeDay(n, u)):
      return "disablePast";
    case !!(p && o.utils.isBeforeDay(n, p)):
      return "minDate";
    case !!(m && o.utils.isAfterDay(n, m)):
      return "maxDate";
    default:
      return null;
  }
}, Mn = ["disablePast", "disableFuture", "minDate", "maxDate", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear"], Sn = ["disablePast", "disableFuture", "minTime", "maxTime", "shouldDisableClock", "shouldDisableTime", "minutesStep", "ampm", "disableIgnoringDatePartForTimeValidation"], Qo = ["minDateTime", "maxDateTime"], cs = [...Mn, ...Sn, ...Qo], ln = (t) => cs.reduce((n, o) => (t.hasOwnProperty(o) && (n[o] = t[o]), n), {}), us = ["value", "defaultValue", "referenceDate", "format", "formatDensity", "onChange", "timezone", "readOnly", "onError", "shouldRespectLeadingZeros", "selectedSections", "onSelectedSectionsChange", "unstableFieldRef"], Hn = (t, n) => {
  const o = d({}, t), r = {}, a = (s) => {
    o.hasOwnProperty(s) && (r[s] = o[s], delete o[s]);
  };
  return us.forEach(a), n === "date" ? Mn.forEach(a) : n === "time" ? Sn.forEach(a) : n === "date-time" && (Mn.forEach(a), Sn.forEach(a), Qo.forEach(a)), {
    forwardedProps: o,
    internalProps: r
  };
}, ds = (t) => {
  var n, o, r;
  const a = ue(), s = rt();
  return d({}, t, {
    disablePast: (n = t.disablePast) != null ? n : !1,
    disableFuture: (o = t.disableFuture) != null ? o : !1,
    format: (r = t.format) != null ? r : a.formats.keyboardDate,
    minDate: Te(a, t.minDate, s.minDate),
    maxDate: Te(a, t.maxDate, s.maxDate)
  });
}, Rn = ({
  props: t,
  inputRef: n
}) => {
  const o = ds(t), {
    forwardedProps: r,
    internalProps: a
  } = Hn(o, "date");
  return Go({
    inputRef: n,
    forwardedProps: r,
    internalProps: a,
    valueManager: Qe,
    fieldValueManager: Za,
    validator: Dt,
    valueType: "date"
  });
}, ps = X(ta)({
  [`& .${Xn.container}`]: {
    outline: 0
  },
  [`& .${Xn.paper}`]: {
    outline: 0,
    minWidth: an
  }
}), fs = X(na)({
  "&:first-of-type": {
    padding: 0
  }
});
function Zo(t) {
  var n, o;
  const {
    children: r,
    onDismiss: a,
    open: s,
    slots: i,
    slotProps: l
  } = t, c = (n = i == null ? void 0 : i.dialog) != null ? n : ps, u = (o = i == null ? void 0 : i.mobileTransition) != null ? o : nn;
  return /* @__PURE__ */ P.jsx(c, d({
    open: s,
    onClose: a
  }, l == null ? void 0 : l.dialog, {
    TransitionComponent: u,
    TransitionProps: l == null ? void 0 : l.mobileTransition,
    PaperComponent: i == null ? void 0 : i.mobilePaper,
    PaperProps: l == null ? void 0 : l.mobilePaper,
    children: /* @__PURE__ */ P.jsx(fs, {
      children: r
    })
  }));
}
function hs(t) {
  return we("MuiPickersPopper", t);
}
Ce("MuiPickersPopper", ["root", "paper"]);
const ms = "@media (prefers-reduced-motion: reduce)", gt = typeof navigator != "undefined" && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i), po = gt && gt[1] ? parseInt(gt[1], 10) : null, fo = gt && gt[2] ? parseInt(gt[2], 10) : null, gs = po && po < 10 || fo && fo < 13 || !1, Wn = () => rn(ms, {
  defaultMatches: !1
}) || gs, bs = ["PaperComponent", "popperPlacement", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"], ys = (t) => {
  const {
    classes: n
  } = t;
  return ve({
    root: ["root"],
    paper: ["paper"]
  }, hs, n);
}, Ds = X(Yr, {
  name: "MuiPickersPopper",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})(({
  theme: t
}) => ({
  zIndex: t.zIndex.modal
})), Ps = X(qr, {
  name: "MuiPickersPopper",
  slot: "Paper",
  overridesResolver: (t, n) => n.paper
})(({
  ownerState: t
}) => d({
  outline: 0,
  transformOrigin: "top center"
}, t.placement.includes("top") && {
  transformOrigin: "bottom center"
}));
function vs(t, n) {
  return n.documentElement.clientWidth < t.clientX || n.documentElement.clientHeight < t.clientY;
}
function xs(t, n) {
  const o = g.useRef(!1), r = g.useRef(!1), a = g.useRef(null), s = g.useRef(!1);
  g.useEffect(() => {
    if (!t)
      return;
    function c() {
      s.current = !0;
    }
    return document.addEventListener("mousedown", c, !0), document.addEventListener("touchstart", c, !0), () => {
      document.removeEventListener("mousedown", c, !0), document.removeEventListener("touchstart", c, !0), s.current = !1;
    };
  }, [t]);
  const i = Y((c) => {
    if (!s.current)
      return;
    const u = r.current;
    r.current = !1;
    const p = bn(a.current);
    if (!a.current || // is a TouchEvent?
    "clientX" in c && vs(c, p))
      return;
    if (o.current) {
      o.current = !1;
      return;
    }
    let m;
    c.composedPath ? m = c.composedPath().indexOf(a.current) > -1 : m = !p.documentElement.contains(c.target) || a.current.contains(c.target), !m && !u && n(c);
  }), l = () => {
    r.current = !0;
  };
  return g.useEffect(() => {
    if (t) {
      const c = bn(a.current), u = () => {
        o.current = !0;
      };
      return c.addEventListener("touchstart", i), c.addEventListener("touchmove", u), () => {
        c.removeEventListener("touchstart", i), c.removeEventListener("touchmove", u);
      };
    }
  }, [t, i]), g.useEffect(() => {
    if (t) {
      const c = bn(a.current);
      return c.addEventListener("click", i), () => {
        c.removeEventListener("click", i), r.current = !1;
      };
    }
  }, [t, i]), [a, l, l];
}
const ws = /* @__PURE__ */ g.forwardRef((t, n) => {
  const {
    PaperComponent: o,
    popperPlacement: r,
    ownerState: a,
    children: s,
    paperSlotProps: i,
    paperClasses: l,
    onPaperClick: c,
    onPaperTouchStart: u
    // picks up the style props provided by `Transition`
    // https://mui.com/material-ui/transitions/#child-requirement
  } = t, p = Z(t, bs), m = d({}, a, {
    placement: r
  }), h = me({
    elementType: o,
    externalSlotProps: i,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref: n
    },
    className: l,
    ownerState: m
  });
  return /* @__PURE__ */ P.jsx(o, d({}, p, h, {
    onClick: (f) => {
      var x;
      c(f), (x = h.onClick) == null || x.call(h, f);
    },
    onTouchStart: (f) => {
      var x;
      u(f), (x = h.onTouchStart) == null || x.call(h, f);
    },
    ownerState: m,
    children: s
  }));
});
function Xo(t) {
  var n, o, r, a;
  const s = fe({
    props: t,
    name: "MuiPickersPopper"
  }), {
    anchorEl: i,
    children: l,
    containerRef: c = null,
    shouldRestoreFocus: u,
    onBlur: p,
    onDismiss: m,
    open: h,
    role: f,
    placement: x,
    slots: D,
    slotProps: C,
    reduceAnimations: S
  } = s;
  g.useEffect(() => {
    function q(Q) {
      h && (Q.key === "Escape" || Q.key === "Esc") && m();
    }
    return document.addEventListener("keydown", q), () => {
      document.removeEventListener("keydown", q);
    };
  }, [m, h]);
  const v = g.useRef(null);
  g.useEffect(() => {
    f === "tooltip" || u && !u() || (h ? v.current = ut(document) : v.current && v.current instanceof HTMLElement && setTimeout(() => {
      v.current instanceof HTMLElement && v.current.focus();
    }));
  }, [h, f, u]);
  const [M, b, y] = xs(h, p != null ? p : m), k = g.useRef(null), O = We(k, c), V = We(O, M), w = s, A = ys(w), I = Wn(), F = S != null ? S : I, N = (q) => {
    q.key === "Escape" && (q.stopPropagation(), m());
  }, T = ((n = D == null ? void 0 : D.desktopTransition) != null ? n : F) ? nn : Ur, R = (o = D == null ? void 0 : D.desktopTrapFocus) != null ? o : Kr, z = (r = D == null ? void 0 : D.desktopPaper) != null ? r : Ps, K = (a = D == null ? void 0 : D.popper) != null ? a : Ds, B = me({
    elementType: K,
    externalSlotProps: C == null ? void 0 : C.popper,
    additionalProps: {
      transition: !0,
      role: f,
      open: h,
      anchorEl: i,
      placement: x,
      onKeyDown: N
    },
    className: A.root,
    ownerState: s
  });
  return /* @__PURE__ */ P.jsx(K, d({}, B, {
    children: ({
      TransitionProps: q,
      placement: Q
    }) => /* @__PURE__ */ P.jsx(R, d({
      open: h,
      disableAutoFocus: !0,
      disableRestoreFocus: !0,
      disableEnforceFocus: f === "tooltip",
      isEnabled: () => !0
    }, C == null ? void 0 : C.desktopTrapFocus, {
      children: /* @__PURE__ */ P.jsx(T, d({}, q, C == null ? void 0 : C.desktopTransition, {
        children: /* @__PURE__ */ P.jsx(ws, {
          PaperComponent: z,
          ownerState: w,
          popperPlacement: Q,
          ref: V,
          onPaperClick: b,
          onPaperTouchStart: y,
          paperClasses: A.paper,
          paperSlotProps: C == null ? void 0 : C.desktopPaper,
          children: l
        })
      }))
    }))
  }));
}
function Jo(t) {
  return we("MuiPickersToolbar", t);
}
Ce("MuiPickersToolbar", ["root", "content"]);
const Cs = (t) => {
  const {
    classes: n,
    isLandscape: o
  } = t;
  return ve({
    root: ["root"],
    content: ["content"],
    penIconButton: ["penIconButton", o && "penIconButtonLandscape"]
  }, Jo, n);
}, Ms = X("div", {
  name: "MuiPickersToolbar",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})(({
  theme: t,
  ownerState: n
}) => d({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: t.spacing(2, 3)
}, n.isLandscape && {
  height: "auto",
  maxWidth: 160,
  padding: 16,
  justifyContent: "flex-start",
  flexWrap: "wrap"
})), Ss = X("div", {
  name: "MuiPickersToolbar",
  slot: "Content",
  overridesResolver: (t, n) => n.content
})(({
  ownerState: t
}) => {
  var n;
  return {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: t.isLandscape ? "flex-start" : "space-between",
    flexDirection: t.isLandscape ? (n = t.landscapeDirection) != null ? n : "column" : "row",
    flex: 1,
    alignItems: t.isLandscape ? "flex-start" : "center"
  };
}), er = /* @__PURE__ */ g.forwardRef(function(n, o) {
  const r = fe({
    props: n,
    name: "MuiPickersToolbar"
  }), {
    children: a,
    className: s,
    toolbarTitle: i,
    hidden: l,
    titleId: c
  } = r, u = r, p = Cs(u);
  return l ? null : /* @__PURE__ */ P.jsxs(Ms, {
    ref: o,
    className: De(p.root, s),
    ownerState: u,
    children: [/* @__PURE__ */ P.jsx(Ze, {
      color: "text.secondary",
      variant: "overline",
      id: c,
      children: i
    }), /* @__PURE__ */ P.jsx(Ss, {
      className: p.content,
      ownerState: u,
      children: a
    })]
  });
});
function Rs(t) {
  return we("MuiPickersToolbarText", t);
}
const ho = Ce("MuiPickersToolbarText", ["root", "selected"]), ks = ["className", "selected", "value"], Ts = (t) => {
  const {
    classes: n,
    selected: o
  } = t;
  return ve({
    root: ["root", o && "selected"]
  }, Rs, n);
}, Os = X(Ze, {
  name: "MuiPickersToolbarText",
  slot: "Root",
  overridesResolver: (t, n) => [n.root, {
    [`&.${ho.selected}`]: n.selected
  }]
})(({
  theme: t
}) => ({
  transition: t.transitions.create("color"),
  color: (t.vars || t).palette.text.secondary,
  [`&.${ho.selected}`]: {
    color: (t.vars || t).palette.text.primary
  }
})), Is = /* @__PURE__ */ g.forwardRef(function(n, o) {
  const r = fe({
    props: n,
    name: "MuiPickersToolbarText"
  }), {
    className: a,
    value: s
  } = r, i = Z(r, ks), l = Ts(r);
  return /* @__PURE__ */ P.jsx(Os, d({
    ref: o,
    className: De(a, l.root),
    component: "span"
  }, i, {
    children: s
  }));
}), Vs = ["align", "className", "selected", "typographyClassName", "value", "variant", "width"], Fs = (t) => {
  const {
    classes: n
  } = t;
  return ve({
    root: ["root"]
  }, Jo, n);
}, Es = X(It, {
  name: "MuiPickersToolbarButton",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})({
  padding: 0,
  minWidth: 16,
  textTransform: "none"
}), mo = /* @__PURE__ */ g.forwardRef(function(n, o) {
  const r = fe({
    props: n,
    name: "MuiPickersToolbarButton"
  }), {
    align: a,
    className: s,
    selected: i,
    typographyClassName: l,
    value: c,
    variant: u,
    width: p
  } = r, m = Z(r, Vs), h = Fs(r);
  return /* @__PURE__ */ P.jsx(Es, d({
    variant: "text",
    ref: o,
    className: De(s, h.root)
  }, p ? {
    sx: {
      width: p
    }
  } : {}, m, {
    children: /* @__PURE__ */ P.jsx(Is, {
      align: a,
      className: l,
      variant: u,
      value: c,
      selected: i
    })
  }));
}), $s = ({
  open: t,
  onOpen: n,
  onClose: o
}) => {
  const r = g.useRef(typeof t == "boolean").current, [a, s] = g.useState(!1);
  g.useEffect(() => {
    if (r) {
      if (typeof t != "boolean")
        throw new Error("You must not mix controlling and uncontrolled mode for `open` prop");
      s(t);
    }
  }, [r, t]);
  const i = g.useCallback((l) => {
    r || s(l), l && n && n(), !l && o && o();
  }, [r, n, o]);
  return {
    isOpen: a,
    setIsOpen: i
  };
}, As = (t) => {
  const {
    action: n,
    hasChanged: o,
    dateState: r,
    isControlled: a
  } = t, s = !a && !r.hasBeenModifiedSinceMount;
  return n.name === "setValueFromField" ? !0 : n.name === "setValueFromAction" ? s && ["accept", "today", "clear"].includes(n.pickerAction) ? !0 : o(r.lastPublishedValue) : n.name === "setValueFromView" && n.selectionState !== "shallow" || n.name === "setValueFromShortcut" ? s ? !0 : o(r.lastPublishedValue) : !1;
}, Ns = (t) => {
  const {
    action: n,
    hasChanged: o,
    dateState: r,
    isControlled: a,
    closeOnSelect: s
  } = t, i = !a && !r.hasBeenModifiedSinceMount;
  return n.name === "setValueFromAction" ? i && ["accept", "today", "clear"].includes(n.pickerAction) ? !0 : o(r.lastCommittedValue) : n.name === "setValueFromView" && n.selectionState === "finish" && s ? i ? !0 : o(r.lastCommittedValue) : n.name === "setValueFromShortcut" ? n.changeImportance === "accept" && o(r.lastCommittedValue) : !1;
}, js = (t) => {
  const {
    action: n,
    closeOnSelect: o
  } = t;
  return n.name === "setValueFromAction" ? !0 : n.name === "setValueFromView" ? n.selectionState === "finish" && o : n.name === "setValueFromShortcut" ? n.changeImportance === "accept" : !1;
}, _s = ({
  props: t,
  valueManager: n,
  valueType: o,
  wrapperVariant: r,
  validator: a
}) => {
  const {
    onAccept: s,
    onChange: i,
    value: l,
    defaultValue: c,
    closeOnSelect: u = r === "desktop",
    selectedSections: p,
    onSelectedSectionsChange: m,
    timezone: h
  } = t, {
    current: f
  } = g.useRef(c), {
    current: x
  } = g.useRef(l !== void 0);
  process.env.NODE_ENV !== "production" && (g.useEffect(() => {
    x !== (l !== void 0) && console.error([`MUI: A component is changing the ${x ? "" : "un"}controlled value of a picker to be ${x ? "un" : ""}controlled.`, "Elements should not switch from uncontrolled to controlled (or vice versa).", "Decide between using a controlled or uncontrolled valuefor the lifetime of the component.", "The nature of the state is determined during the first render. It's considered controlled if the value is not `undefined`.", "More info: https://fb.me/react-controlled-components"].join(`
`));
  }, [l]), g.useEffect(() => {
    !x && f !== c && console.error(["MUI: A component is changing the defaultValue of an uncontrolled picker after being initialized. To suppress this warning opt to use a controlled value."].join(`
`));
  }, [JSON.stringify(f)]));
  const D = ue(), C = ot(), [S, v] = Ge({
    controlled: p,
    default: null,
    name: "usePickerValue",
    state: "selectedSections"
  }), {
    isOpen: M,
    setIsOpen: b
  } = $s(t), [y, k] = g.useState(() => {
    let $;
    return l !== void 0 ? $ = l : f !== void 0 ? $ = f : $ = n.emptyValue, {
      draft: $,
      lastPublishedValue: $,
      lastCommittedValue: $,
      lastControlledValue: l,
      hasBeenModifiedSinceMount: !1
    };
  }), {
    timezone: O,
    handleValueChange: V
  } = Nn({
    timezone: h,
    value: l,
    defaultValue: f,
    onChange: i,
    valueManager: n
  });
  Bn(d({}, t, {
    value: y.draft,
    timezone: O
  }), a, n.isSameError, n.defaultErrorState);
  const w = Y(($) => {
    const j = {
      action: $,
      dateState: y,
      hasChanged: (ee) => !n.areValuesEqual(D, $.value, ee),
      isControlled: x,
      closeOnSelect: u
    }, pe = As(j), ce = Ns(j), G = js(j);
    if (k((ee) => d({}, ee, {
      draft: $.value,
      lastPublishedValue: pe ? $.value : ee.lastPublishedValue,
      lastCommittedValue: ce ? $.value : ee.lastCommittedValue,
      hasBeenModifiedSinceMount: !0
    })), pe) {
      const E = {
        validationError: $.name === "setValueFromField" ? $.context.validationError : a({
          adapter: C,
          value: $.value,
          props: d({}, t, {
            value: $.value,
            timezone: O
          })
        })
      };
      $.name === "setValueFromShortcut" && $.shortcut != null && (E.shortcut = $.shortcut), V($.value, E);
    }
    ce && s && s($.value), G && b(!1);
  });
  if (l !== void 0 && (y.lastControlledValue === void 0 || !n.areValuesEqual(D, y.lastControlledValue, l))) {
    const $ = n.areValuesEqual(D, y.draft, l);
    k((j) => d({}, j, {
      lastControlledValue: l
    }, $ ? {} : {
      lastCommittedValue: l,
      lastPublishedValue: l,
      draft: l,
      hasBeenModifiedSinceMount: !0
    }));
  }
  const A = Y(() => {
    w({
      value: n.emptyValue,
      name: "setValueFromAction",
      pickerAction: "clear"
    });
  }), I = Y(() => {
    w({
      value: y.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "accept"
    });
  }), F = Y(() => {
    w({
      value: y.lastPublishedValue,
      name: "setValueFromAction",
      pickerAction: "dismiss"
    });
  }), N = Y(() => {
    w({
      value: y.lastCommittedValue,
      name: "setValueFromAction",
      pickerAction: "cancel"
    });
  }), T = Y(() => {
    w({
      value: n.getTodayValue(D, O, o),
      name: "setValueFromAction",
      pickerAction: "today"
    });
  }), R = Y(() => b(!0)), z = Y(() => b(!1)), K = Y(($, j = "partial") => w({
    name: "setValueFromView",
    value: $,
    selectionState: j
  })), B = Y(($, j, pe) => w({
    name: "setValueFromShortcut",
    value: $,
    changeImportance: j != null ? j : "accept",
    shortcut: pe
  })), q = Y(($, j) => w({
    name: "setValueFromField",
    value: $,
    context: j
  })), Q = Y(($) => {
    v($), m == null || m($);
  }), ie = {
    onClear: A,
    onAccept: I,
    onDismiss: F,
    onCancel: N,
    onSetToday: T,
    onOpen: R,
    onClose: z
  }, ae = {
    value: y.draft,
    onChange: q,
    selectedSections: S,
    onSelectedSectionsChange: Q
  }, se = g.useMemo(() => n.cleanValue(D, y.draft), [D, n, y.draft]), H = {
    value: se,
    onChange: K,
    onClose: z,
    open: M,
    onSelectedSectionsChange: Q
  }, oe = d({}, ie, {
    value: se,
    onChange: K,
    onSelectShortcut: B,
    isValid: ($) => {
      const j = a({
        adapter: C,
        value: $,
        props: d({}, t, {
          value: $,
          timezone: O
        })
      });
      return !n.hasError(j);
    }
  });
  return {
    open: M,
    fieldProps: ae,
    viewProps: H,
    layoutProps: oe,
    actions: ie
  };
}, Ls = ["className", "sx"], Bs = ({
  props: t,
  propsFromPickerValue: n,
  additionalViewProps: o,
  inputRef: r,
  autoFocusView: a
}) => {
  const {
    onChange: s,
    open: i,
    onSelectedSectionsChange: l,
    onClose: c
  } = n, {
    views: u,
    openTo: p,
    onViewChange: m,
    disableOpenPicker: h,
    viewRenderers: f,
    timezone: x
  } = t, D = Z(t, Ls), {
    view: C,
    setView: S,
    defaultView: v,
    focusedView: M,
    setFocusedView: b,
    setValueAndGoToNextView: y
  } = Fo({
    view: void 0,
    views: u,
    openTo: p,
    onChange: s,
    onViewChange: m,
    autoFocus: a
  }), {
    hasUIView: k,
    viewModeLookup: O
  } = g.useMemo(() => u.reduce((T, R) => {
    let z;
    return h ? z = "field" : f[R] != null ? z = "UI" : z = "field", T.viewModeLookup[R] = z, z === "UI" && (T.hasUIView = !0), T;
  }, {
    hasUIView: !1,
    viewModeLookup: {}
  }), [h, f, u]), V = g.useMemo(() => u.reduce((T, R) => f[R] != null && Ea(R) ? T + 1 : T, 0), [f, u]), w = O[C], A = Y(() => w === "UI"), [I, F] = g.useState(w === "UI" ? C : null);
  return I !== C && O[C] === "UI" && F(C), yt(() => {
    w === "field" && i && (c(), setTimeout(() => {
      r == null || r.current.focus(), l(C);
    }));
  }, [C]), yt(() => {
    if (!i)
      return;
    let T = C;
    w === "field" && I != null && (T = I), T !== v && O[T] === "UI" && O[v] === "UI" && (T = v), T !== C && S(T), b(T, !0);
  }, [i]), {
    hasUIView: k,
    shouldRestoreFocus: A,
    layoutProps: {
      views: u,
      view: I,
      onViewChange: S
    },
    renderCurrentView: () => {
      if (I == null)
        return null;
      const T = f[I];
      return T == null ? null : T(d({}, D, o, n, {
        views: u,
        timezone: x,
        onChange: y,
        view: I,
        onViewChange: S,
        focusedView: M,
        onFocusedViewChange: b,
        showViewSwitcher: V > 1,
        timeViewsCount: V
      }));
    }
  };
};
function go() {
  return typeof window == "undefined" ? "portrait" : window.screen && window.screen.orientation && window.screen.orientation.angle ? Math.abs(window.screen.orientation.angle) === 90 ? "landscape" : "portrait" : window.orientation && Math.abs(Number(window.orientation)) === 90 ? "landscape" : "portrait";
}
const Hs = (t, n) => {
  const [o, r] = g.useState(go);
  return yt(() => {
    const s = () => {
      r(go());
    };
    return window.addEventListener("orientationchange", s), () => {
      window.removeEventListener("orientationchange", s);
    };
  }, []), ss(t, ["hours", "minutes", "seconds"]) ? !1 : (n || o) === "landscape";
}, Ws = ({
  props: t,
  propsFromPickerValue: n,
  propsFromPickerViews: o,
  wrapperVariant: r
}) => {
  const {
    orientation: a
  } = t, s = Hs(o.views, a);
  return {
    layoutProps: d({}, o, n, {
      isLandscape: s,
      wrapperVariant: r,
      disabled: t.disabled,
      readOnly: t.readOnly
    })
  };
}, tr = (t, n = "warning") => {
  let o = !1;
  const r = Array.isArray(t) ? t.join(`
`) : t;
  return () => {
    o || (o = !0, n === "error" ? console.error(r) : console.warn(r));
  };
}, zs = tr(["The `renderInput` prop has been removed in version 6.0 of the Date and Time Pickers.", "You can replace it with the `textField` component slot in most cases.", "For more information, please have a look at the migration guide (https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5)."]), cn = ({
  props: t,
  valueManager: n,
  valueType: o,
  wrapperVariant: r,
  inputRef: a,
  additionalViewProps: s,
  validator: i,
  autoFocusView: l
}) => {
  process.env.NODE_ENV !== "production" && t.renderInput != null && zs();
  const c = _s({
    props: t,
    valueManager: n,
    valueType: o,
    wrapperVariant: r,
    validator: i
  }), u = Bs({
    props: t,
    inputRef: a,
    additionalViewProps: s,
    autoFocusView: l,
    propsFromPickerValue: c.viewProps
  }), p = Ws({
    props: t,
    wrapperVariant: r,
    propsFromPickerValue: c.layoutProps,
    propsFromPickerViews: u.layoutProps
  });
  return {
    // Picker value
    open: c.open,
    actions: c.actions,
    fieldProps: c.fieldProps,
    // Picker views
    renderCurrentView: u.renderCurrentView,
    hasUIView: u.hasUIView,
    shouldRestoreFocus: u.shouldRestoreFocus,
    // Picker layout
    layoutProps: p.layoutProps
  };
};
function nr(t) {
  return we("MuiPickersLayout", t);
}
const st = Ce("MuiPickersLayout", ["root", "landscape", "contentWrapper", "toolbar", "actionBar", "tabs", "shortcuts"]), Ys = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];
function or(t) {
  const {
    onAccept: n,
    onClear: o,
    onCancel: r,
    onSetToday: a,
    actions: s
  } = t, i = Z(t, Ys), l = $e();
  if (s == null || s.length === 0)
    return null;
  const c = s == null ? void 0 : s.map((u) => {
    switch (u) {
      case "clear":
        return /* @__PURE__ */ P.jsx(It, {
          onClick: o,
          children: l.clearButtonLabel
        }, u);
      case "cancel":
        return /* @__PURE__ */ P.jsx(It, {
          onClick: r,
          children: l.cancelButtonLabel
        }, u);
      case "accept":
        return /* @__PURE__ */ P.jsx(It, {
          onClick: n,
          children: l.okButtonLabel
        }, u);
      case "today":
        return /* @__PURE__ */ P.jsx(It, {
          onClick: a,
          children: l.todayButtonLabel
        }, u);
      default:
        return null;
    }
  });
  return /* @__PURE__ */ P.jsx(oa, d({}, i, {
    children: c
  }));
}
process.env.NODE_ENV !== "production" && (or.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Ordered array of actions to display.
   * If empty, does not display that action bar.
   * @default `['cancel', 'accept']` for mobile and `[]` for desktop
   */
  actions: e.arrayOf(e.oneOf(["accept", "cancel", "clear", "today"]).isRequired),
  /**
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: e.bool,
  onAccept: e.func.isRequired,
  onCancel: e.func.isRequired,
  onClear: e.func.isRequired,
  onSetToday: e.func.isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
const qs = ["items", "changeImportance", "isLandscape", "onChange", "isValid"], Us = ["getValue"];
function rr(t) {
  const {
    items: n,
    changeImportance: o,
    onChange: r,
    isValid: a
  } = t, s = Z(t, qs);
  if (n == null || n.length === 0)
    return null;
  const i = n.map((l) => {
    let {
      getValue: c
    } = l, u = Z(l, Us);
    const p = c({
      isValid: a
    });
    return {
      label: u.label,
      onClick: () => {
        r(p, o, u);
      },
      disabled: !a(p)
    };
  });
  return /* @__PURE__ */ P.jsx(Gr, d({
    dense: !0,
    sx: [{
      maxHeight: En,
      maxWidth: 200,
      overflow: "auto"
    }, ...Array.isArray(s.sx) ? s.sx : [s.sx]]
  }, s, {
    children: i.map((l) => /* @__PURE__ */ P.jsx(ra, {
      children: /* @__PURE__ */ P.jsx(Qr, d({}, l))
    }, l.label))
  }));
}
process.env.NODE_ENV !== "production" && (rr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Importance of the change when picking a shortcut:
   * - "accept": fires `onChange`, fires `onAccept` and closes the picker.
   * - "set": fires `onChange` but do not fire `onAccept` and does not close the picker.
   * @default "accept"
   */
  changeImportance: e.oneOf(["accept", "set"]),
  className: e.string,
  component: e.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: e.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: e.bool,
  isLandscape: e.bool.isRequired,
  isValid: e.func.isRequired,
  /**
   * Ordered array of shortcuts to display.
   * If empty, does not display the shortcuts.
   * @default `[]`
   */
  items: e.arrayOf(e.shape({
    getValue: e.func.isRequired,
    label: e.string.isRequired
  })),
  onChange: e.func.isRequired,
  style: e.object,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: e.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
function Ks(t) {
  return t.view !== null;
}
const Gs = (t) => {
  const {
    classes: n,
    isLandscape: o
  } = t;
  return ve({
    root: ["root", o && "landscape"],
    contentWrapper: ["contentWrapper"],
    toolbar: ["toolbar"],
    actionBar: ["actionBar"],
    tabs: ["tabs"],
    landscape: ["landscape"],
    shortcuts: ["shortcuts"]
  }, nr, n);
}, Qs = (t) => {
  var n, o;
  const {
    wrapperVariant: r,
    onAccept: a,
    onClear: s,
    onCancel: i,
    onSetToday: l,
    view: c,
    views: u,
    onViewChange: p,
    value: m,
    onChange: h,
    onSelectShortcut: f,
    isValid: x,
    isLandscape: D,
    disabled: C,
    readOnly: S,
    children: v,
    components: M,
    componentsProps: b,
    slots: y,
    slotProps: k
    // TODO: Remove this "as" hack. It get introduced to mark `value` prop in PickersLayoutProps as not required.
    // The true type should be
    // - For pickers value: TDate | null
    // - For range pickers value: [TDate | null, TDate | null]
  } = t, O = y != null ? y : Lt(M), V = k != null ? k : b, w = Gs(t), A = (n = O == null ? void 0 : O.actionBar) != null ? n : or, I = me({
    elementType: A,
    externalSlotProps: V == null ? void 0 : V.actionBar,
    additionalProps: {
      onAccept: a,
      onClear: s,
      onCancel: i,
      onSetToday: l,
      actions: r === "desktop" ? [] : ["cancel", "accept"],
      className: w.actionBar
    },
    ownerState: d({}, t, {
      wrapperVariant: r
    })
  }), F = /* @__PURE__ */ P.jsx(A, d({}, I)), N = O == null ? void 0 : O.toolbar, T = me({
    elementType: N,
    externalSlotProps: V == null ? void 0 : V.toolbar,
    additionalProps: {
      isLandscape: D,
      onChange: h,
      value: m,
      view: c,
      onViewChange: p,
      views: u,
      disabled: C,
      readOnly: S,
      className: w.toolbar
    },
    ownerState: d({}, t, {
      wrapperVariant: r
    })
  }), R = Ks(T) && N ? /* @__PURE__ */ P.jsx(N, d({}, T)) : null, z = v, K = O == null ? void 0 : O.tabs, B = c && K ? /* @__PURE__ */ P.jsx(K, d({
    view: c,
    onViewChange: p,
    className: w.tabs
  }, V == null ? void 0 : V.tabs)) : null, q = (o = O == null ? void 0 : O.shortcuts) != null ? o : rr, Q = me({
    elementType: q,
    externalSlotProps: V == null ? void 0 : V.shortcuts,
    additionalProps: {
      isValid: x,
      isLandscape: D,
      onChange: f,
      className: w.shortcuts
    },
    ownerState: {
      isValid: x,
      isLandscape: D,
      onChange: f,
      className: w.shortcuts,
      wrapperVariant: r
    }
  }), ie = c && q ? /* @__PURE__ */ P.jsx(q, d({}, Q)) : null;
  return {
    toolbar: R,
    content: z,
    tabs: B,
    actionBar: F,
    shortcuts: ie
  };
}, Zs = Qs, Xs = (t) => {
  const {
    isLandscape: n,
    classes: o
  } = t;
  return ve({
    root: ["root", n && "landscape"],
    contentWrapper: ["contentWrapper"]
  }, nr, o);
}, ar = X("div", {
  name: "MuiPickersLayout",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})(({
  theme: t,
  ownerState: n
}) => ({
  display: "grid",
  gridAutoColumns: "max-content auto max-content",
  gridAutoRows: "max-content auto max-content",
  [`& .${st.toolbar}`]: n.isLandscape ? {
    gridColumn: t.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  } : {
    gridColumn: "2 / 4",
    gridRow: 1
  },
  [`.${st.shortcuts}`]: n.isLandscape ? {
    gridColumn: "2 / 4",
    gridRow: 1
  } : {
    gridColumn: t.direction === "rtl" ? 3 : 1,
    gridRow: "2 / 3"
  },
  [`& .${st.actionBar}`]: {
    gridColumn: "1 / 4",
    gridRow: 3
  }
}));
ar.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  as: e.elementType,
  ownerState: e.shape({
    isLandscape: e.bool.isRequired
  }).isRequired,
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
};
const Js = X("div", {
  name: "MuiPickersLayout",
  slot: "ContentWrapper",
  overridesResolver: (t, n) => n.contentWrapper
})({
  gridColumn: 2,
  gridRow: 2,
  display: "flex",
  flexDirection: "column"
}), Bt = function(n) {
  const o = fe({
    props: n,
    name: "MuiPickersLayout"
  }), {
    toolbar: r,
    content: a,
    tabs: s,
    actionBar: i,
    shortcuts: l
  } = Zs(o), {
    sx: c,
    className: u,
    isLandscape: p,
    ref: m,
    wrapperVariant: h
  } = o, f = o, x = Xs(f);
  return /* @__PURE__ */ P.jsxs(ar, {
    ref: m,
    sx: c,
    className: De(u, x.root),
    ownerState: f,
    children: [p ? l : r, p ? r : l, /* @__PURE__ */ P.jsx(Js, {
      className: x.contentWrapper,
      children: h === "desktop" ? /* @__PURE__ */ P.jsxs(g.Fragment, {
        children: [a, s]
      }) : /* @__PURE__ */ P.jsxs(g.Fragment, {
        children: [s, a]
      })
    }), i]
  });
};
process.env.NODE_ENV !== "production" && (Bt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  className: e.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  disabled: e.bool,
  isLandscape: e.bool.isRequired,
  isValid: e.func.isRequired,
  onAccept: e.func.isRequired,
  onCancel: e.func.isRequired,
  onChange: e.func.isRequired,
  onClear: e.func.isRequired,
  onClose: e.func.isRequired,
  onDismiss: e.func.isRequired,
  onOpen: e.func.isRequired,
  onSelectShortcut: e.func.isRequired,
  onSetToday: e.func.isRequired,
  onViewChange: e.func.isRequired,
  /**
   * Force rendering in particular orientation.
   */
  orientation: e.oneOf(["landscape", "portrait"]),
  readOnly: e.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  value: e.any,
  view: e.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]),
  views: e.arrayOf(e.oneOf(["day", "hours", "meridiem", "minutes", "month", "seconds", "year"]).isRequired).isRequired,
  wrapperVariant: e.oneOf(["desktop", "mobile"])
});
const ei = (t) => we("MuiPickersSlideTransition", t), Ve = Ce("MuiPickersSlideTransition", ["root", "slideEnter-left", "slideEnter-right", "slideEnterActive", "slideExit", "slideExitActiveLeft-left", "slideExitActiveLeft-right"]), ti = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"], ni = (t) => {
  const {
    classes: n,
    slideDirection: o
  } = t, r = {
    root: ["root"],
    exit: ["slideExit"],
    enterActive: ["slideEnterActive"],
    enter: [`slideEnter-${o}`],
    exitActive: [`slideExitActiveLeft-${o}`]
  };
  return ve(r, ei, n);
}, oi = X(xo, {
  name: "MuiPickersSlideTransition",
  slot: "Root",
  overridesResolver: (t, n) => [n.root, {
    [`.${Ve["slideEnter-left"]}`]: n["slideEnter-left"]
  }, {
    [`.${Ve["slideEnter-right"]}`]: n["slideEnter-right"]
  }, {
    [`.${Ve.slideEnterActive}`]: n.slideEnterActive
  }, {
    [`.${Ve.slideExit}`]: n.slideExit
  }, {
    [`.${Ve["slideExitActiveLeft-left"]}`]: n["slideExitActiveLeft-left"]
  }, {
    [`.${Ve["slideExitActiveLeft-right"]}`]: n["slideExitActiveLeft-right"]
  }]
})(({
  theme: t
}) => {
  const n = t.transitions.create("transform", {
    duration: t.transitions.duration.complex,
    easing: "cubic-bezier(0.35, 0.8, 0.4, 1)"
  });
  return {
    display: "block",
    position: "relative",
    overflowX: "hidden",
    "& > *": {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${Ve["slideEnter-left"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      zIndex: 1
    },
    [`& .${Ve["slideEnter-right"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      zIndex: 1
    },
    [`& .${Ve.slideEnterActive}`]: {
      transform: "translate(0%)",
      transition: n
    },
    [`& .${Ve.slideExit}`]: {
      transform: "translate(0%)"
    },
    [`& .${Ve["slideExitActiveLeft-left"]}`]: {
      willChange: "transform",
      transform: "translate(-100%)",
      transition: n,
      zIndex: 0
    },
    [`& .${Ve["slideExitActiveLeft-right"]}`]: {
      willChange: "transform",
      transform: "translate(100%)",
      transition: n,
      zIndex: 0
    }
  };
});
function ri(t) {
  const n = fe({
    props: t,
    name: "MuiPickersSlideTransition"
  }), {
    children: o,
    className: r,
    reduceAnimations: a,
    transKey: s
    // extracting `classes` from `other`
  } = n, i = Z(n, ti), l = ni(n), c = Pt();
  if (a)
    return /* @__PURE__ */ P.jsx("div", {
      className: De(l.root, r),
      children: o
    });
  const u = {
    exit: l.exit,
    enterActive: l.enterActive,
    enter: l.enter,
    exitActive: l.exitActive
  };
  return /* @__PURE__ */ P.jsx(oi, {
    className: De(l.root, r),
    childFactory: (p) => /* @__PURE__ */ g.cloneElement(p, {
      classNames: u
    }),
    role: "presentation",
    children: /* @__PURE__ */ P.jsx(da, d({
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: c.transitions.duration.complex,
      classNames: u
    }, i, {
      children: o
    }), s)
  });
}
const sr = ({
  shouldDisableDate: t,
  shouldDisableMonth: n,
  shouldDisableYear: o,
  minDate: r,
  maxDate: a,
  disableFuture: s,
  disablePast: i,
  timezone: l
}) => {
  const c = ot();
  return g.useCallback((u) => Dt({
    adapter: c,
    value: u,
    props: {
      shouldDisableDate: t,
      shouldDisableMonth: n,
      shouldDisableYear: o,
      minDate: r,
      maxDate: a,
      disableFuture: s,
      disablePast: i,
      timezone: l
    }
  }) !== null, [c, t, n, o, r, a, s, i, l]);
}, ai = (t) => we("MuiDayCalendar", t), qe = Ce("MuiDayCalendar", ["root", "header", "weekDayLabel", "loadingContainer", "slideTransition", "monthContainer", "weekContainer", "weekNumberLabel", "weekNumber"]), si = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"], ii = ["ownerState"], li = (t) => {
  const {
    classes: n
  } = t;
  return ve({
    root: ["root"],
    header: ["header"],
    weekDayLabel: ["weekDayLabel"],
    loadingContainer: ["loadingContainer"],
    slideTransition: ["slideTransition"],
    monthContainer: ["monthContainer"],
    weekContainer: ["weekContainer"],
    weekNumberLabel: ["weekNumberLabel"],
    weekNumber: ["weekNumber"]
  }, ai, n);
}, ir = (Et + jt * 2) * 6, ci = X("div", {
  name: "MuiDayCalendar",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})({}), ui = X("div", {
  name: "MuiDayCalendar",
  slot: "Header",
  overridesResolver: (t, n) => n.header
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}), di = X(Ze, {
  name: "MuiDayCalendar",
  slot: "WeekDayLabel",
  overridesResolver: (t, n) => n.weekDayLabel
})(({
  theme: t
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: (t.vars || t).palette.text.secondary
})), pi = X(Ze, {
  name: "MuiDayCalendar",
  slot: "WeekNumberLabel",
  overridesResolver: (t, n) => n.weekNumberLabel
})(({
  theme: t
}) => ({
  width: 36,
  height: 40,
  margin: "0 2px",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: t.palette.text.disabled
})), fi = X(Ze, {
  name: "MuiDayCalendar",
  slot: "WeekNumber",
  overridesResolver: (t, n) => n.weekNumber
})(({
  theme: t
}) => d({}, t.typography.caption, {
  width: Et,
  height: Et,
  padding: 0,
  margin: `0 ${jt}px`,
  color: t.palette.text.disabled,
  fontSize: "0.75rem",
  alignItems: "center",
  justifyContent: "center",
  display: "inline-flex"
})), hi = X("div", {
  name: "MuiDayCalendar",
  slot: "LoadingContainer",
  overridesResolver: (t, n) => n.loadingContainer
})({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: ir
}), mi = X(ri, {
  name: "MuiDayCalendar",
  slot: "SlideTransition",
  overridesResolver: (t, n) => n.slideTransition
})({
  minHeight: ir
}), gi = X("div", {
  name: "MuiDayCalendar",
  slot: "MonthContainer",
  overridesResolver: (t, n) => n.monthContainer
})({
  overflow: "hidden"
}), bi = X("div", {
  name: "MuiDayCalendar",
  slot: "WeekContainer",
  overridesResolver: (t, n) => n.weekContainer
})({
  margin: `${jt}px 0`,
  display: "flex",
  justifyContent: "center"
});
function yi(t) {
  var n, o, r;
  let {
    parentProps: a,
    day: s,
    focusableDay: i,
    selectedDays: l,
    isDateDisabled: c,
    currentMonthNumber: u,
    isViewFocused: p
  } = t, m = Z(t, si);
  const {
    disabled: h,
    disableHighlightToday: f,
    isMonthSwitchingAnimating: x,
    showDaysOutsideCurrentMonth: D,
    components: C,
    componentsProps: S,
    slots: v,
    slotProps: M,
    timezone: b
  } = a, y = ue(), k = Nt(b), O = i !== null && y.isSameDay(s, i), V = l.some((K) => y.isSameDay(K, s)), w = y.isSameDay(s, k), A = (n = (o = v == null ? void 0 : v.day) != null ? o : C == null ? void 0 : C.Day) != null ? n : Uo, I = me({
    elementType: A,
    externalSlotProps: (r = M == null ? void 0 : M.day) != null ? r : S == null ? void 0 : S.day,
    additionalProps: d({
      disableHighlightToday: f,
      showDaysOutsideCurrentMonth: D,
      role: "gridcell",
      isAnimating: x,
      // it is used in date range dragging logic by accessing `dataset.timestamp`
      "data-timestamp": y.toJsDate(s).valueOf()
    }, m),
    ownerState: d({}, a, {
      day: s,
      selected: V
    })
  }), F = Z(I, ii), N = g.useMemo(() => h || c(s), [h, c, s]), T = g.useMemo(() => y.getMonth(s) !== u, [y, s, u]), R = g.useMemo(() => {
    const K = y.startOfMonth(y.setMonth(s, u));
    return D ? y.isSameDay(s, y.startOfWeek(K)) : y.isSameDay(s, K);
  }, [u, s, D, y]), z = g.useMemo(() => {
    const K = y.endOfMonth(y.setMonth(s, u));
    return D ? y.isSameDay(s, y.endOfWeek(K)) : y.isSameDay(s, K);
  }, [u, s, D, y]);
  return /* @__PURE__ */ P.jsx(A, d({}, F, {
    day: s,
    disabled: N,
    autoFocus: p && O,
    today: w,
    outsideCurrentMonth: T,
    isFirstVisibleCell: R,
    isLastVisibleCell: z,
    selected: V,
    tabIndex: O ? 0 : -1,
    "aria-selected": V,
    "aria-current": w ? "date" : void 0
  }));
}
function lr(t) {
  const n = fe({
    props: t,
    name: "MuiDayCalendar"
  }), {
    onFocusedDayChange: o,
    className: r,
    currentMonth: a,
    selectedDays: s,
    focusedDay: i,
    loading: l,
    onSelectedDaysChange: c,
    onMonthSwitchingAnimationEnd: u,
    readOnly: p,
    reduceAnimations: m,
    renderLoading: h = () => /* @__PURE__ */ P.jsx("span", {
      children: "..."
    }),
    slideDirection: f,
    TransitionProps: x,
    disablePast: D,
    disableFuture: C,
    minDate: S,
    maxDate: v,
    shouldDisableDate: M,
    shouldDisableMonth: b,
    shouldDisableYear: y,
    dayOfWeekFormatter: k,
    hasFocus: O,
    onFocusedViewChange: V,
    gridLabelId: w,
    displayWeekNumber: A,
    fixedWeekNumber: I,
    autoFocus: F,
    timezone: N
  } = n, T = Nt(N), R = ue(), z = li(n), B = Pt().direction === "rtl", q = k || ((te, J) => R.format(J, "weekdayShort").charAt(0).toUpperCase()), Q = sr({
    shouldDisableDate: M,
    shouldDisableMonth: b,
    shouldDisableYear: y,
    minDate: S,
    maxDate: v,
    disablePast: D,
    disableFuture: C,
    timezone: N
  }), ie = $e(), [ae, se] = Ge({
    name: "DayCalendar",
    state: "hasFocus",
    controlled: O,
    default: F != null ? F : !1
  }), [H, L] = g.useState(() => i || T), oe = Y((te) => {
    p || c(te);
  }), $ = (te) => {
    Q(te) || (o(te), L(te), V == null || V(!0), se(!0));
  }, j = Y((te, J) => {
    switch (te.key) {
      case "ArrowUp":
        $(R.addDays(J, -7)), te.preventDefault();
        break;
      case "ArrowDown":
        $(R.addDays(J, 7)), te.preventDefault();
        break;
      case "ArrowLeft": {
        const W = R.addDays(J, B ? 1 : -1), U = R.addMonths(J, B ? 1 : -1), re = Ft({
          utils: R,
          date: W,
          minDate: B ? W : R.startOfMonth(U),
          maxDate: B ? R.endOfMonth(U) : W,
          isDateDisabled: Q,
          timezone: N
        });
        $(re || W), te.preventDefault();
        break;
      }
      case "ArrowRight": {
        const W = R.addDays(J, B ? -1 : 1), U = R.addMonths(J, B ? -1 : 1), re = Ft({
          utils: R,
          date: W,
          minDate: B ? R.startOfMonth(U) : W,
          maxDate: B ? W : R.endOfMonth(U),
          isDateDisabled: Q,
          timezone: N
        });
        $(re || W), te.preventDefault();
        break;
      }
      case "Home":
        $(R.startOfWeek(J)), te.preventDefault();
        break;
      case "End":
        $(R.endOfWeek(J)), te.preventDefault();
        break;
      case "PageUp":
        $(R.addMonths(J, 1)), te.preventDefault();
        break;
      case "PageDown":
        $(R.addMonths(J, -1)), te.preventDefault();
        break;
    }
  }), pe = Y((te, J) => $(J)), ce = Y((te, J) => {
    ae && R.isSameDay(H, J) && (V == null || V(!1));
  }), G = R.getMonth(a), ee = g.useMemo(() => s.filter((te) => !!te).map((te) => R.startOfDay(te)), [R, s]), E = G, ne = g.useMemo(() => /* @__PURE__ */ g.createRef(), [E]), xe = R.startOfWeek(T), ge = g.useMemo(() => {
    const te = R.startOfMonth(a), J = R.endOfMonth(a);
    return Q(H) || R.isAfterDay(H, J) || R.isBeforeDay(H, te) ? Ft({
      utils: R,
      date: H,
      minDate: te,
      maxDate: J,
      disablePast: D,
      disableFuture: C,
      isDateDisabled: Q,
      timezone: N
    }) : H;
  }, [a, C, D, H, Q, R, N]), Ne = g.useMemo(() => {
    const te = R.setTimezone(a, N), J = R.getWeekArray(te);
    let W = R.addMonths(te, 1);
    for (; I && J.length < I; ) {
      const U = R.getWeekArray(W), re = R.isSameDay(J[J.length - 1][0], U[0][0]);
      U.slice(re ? 1 : 0).forEach((be) => {
        J.length < I && J.push(be);
      }), W = R.addMonths(W, 1);
    }
    return J;
  }, [a, I, R, N]);
  return /* @__PURE__ */ P.jsxs(ci, {
    role: "grid",
    "aria-labelledby": w,
    className: z.root,
    children: [/* @__PURE__ */ P.jsxs(ui, {
      role: "row",
      className: z.header,
      children: [A && /* @__PURE__ */ P.jsx(pi, {
        variant: "caption",
        role: "columnheader",
        "aria-label": ie.calendarWeekNumberHeaderLabel,
        className: z.weekNumberLabel,
        children: ie.calendarWeekNumberHeaderText
      }), _a(R, T).map((te, J) => {
        var W;
        const U = R.format(te, "weekdayShort");
        return /* @__PURE__ */ P.jsx(di, {
          variant: "caption",
          role: "columnheader",
          "aria-label": R.format(R.addDays(xe, J), "weekday"),
          className: z.weekDayLabel,
          children: (W = q == null ? void 0 : q(U, te)) != null ? W : U
        }, U + J.toString());
      })]
    }), l ? /* @__PURE__ */ P.jsx(hi, {
      className: z.loadingContainer,
      children: h()
    }) : /* @__PURE__ */ P.jsx(mi, d({
      transKey: E,
      onExited: u,
      reduceAnimations: m,
      slideDirection: f,
      className: De(r, z.slideTransition)
    }, x, {
      nodeRef: ne,
      children: /* @__PURE__ */ P.jsx(gi, {
        ref: ne,
        role: "rowgroup",
        className: z.monthContainer,
        children: Ne.map((te, J) => /* @__PURE__ */ P.jsxs(bi, {
          role: "row",
          className: z.weekContainer,
          "aria-rowindex": J + 1,
          children: [A && /* @__PURE__ */ P.jsx(fi, {
            className: z.weekNumber,
            role: "rowheader",
            "aria-label": ie.calendarWeekNumberAriaLabelText(R.getWeekNumber(te[0])),
            children: ie.calendarWeekNumberText(R.getWeekNumber(te[0]))
          }), te.map((W, U) => /* @__PURE__ */ P.jsx(yi, {
            parentProps: n,
            day: W,
            selectedDays: ee,
            focusableDay: ge,
            onKeyDown: j,
            onFocus: pe,
            onBlur: ce,
            onDaySelect: oe,
            isDateDisabled: Q,
            currentMonthNumber: G,
            isViewFocused: ae,
            "aria-colindex": U + 1
          }, W.toString()))]
        }, `week-${te[0]}`))
      })
    }))]
  });
}
const Di = (t, n, o) => (r, a) => {
  switch (a.type) {
    case "changeMonth":
      return d({}, r, {
        slideDirection: a.direction,
        currentMonth: a.newMonth,
        isMonthSwitchingAnimating: !t
      });
    case "finishMonthSwitchingAnimation":
      return d({}, r, {
        isMonthSwitchingAnimating: !1
      });
    case "changeFocusedDay": {
      if (r.focusedDay != null && a.focusedDay != null && o.isSameDay(a.focusedDay, r.focusedDay))
        return r;
      const s = a.focusedDay != null && !n && !o.isSameMonth(r.currentMonth, a.focusedDay);
      return d({}, r, {
        focusedDay: a.focusedDay,
        isMonthSwitchingAnimating: s && !t && !a.withoutMonthSwitchingAnimation,
        currentMonth: s ? o.startOfMonth(a.focusedDay) : r.currentMonth,
        slideDirection: a.focusedDay != null && o.isAfterDay(a.focusedDay, r.currentMonth) ? "left" : "right"
      });
    }
    default:
      throw new Error("missing support");
  }
}, cr = (t) => {
  const {
    value: n,
    referenceDate: o,
    defaultCalendarMonth: r,
    disableFuture: a,
    disablePast: s,
    disableSwitchToMonthOnDayFocus: i = !1,
    maxDate: l,
    minDate: c,
    onMonthChange: u,
    reduceAnimations: p,
    shouldDisableDate: m,
    timezone: h
  } = t, f = ue(), x = g.useRef(Di(!!p, i, f)).current, D = g.useMemo(
    () => {
      let O = null;
      return o ? O = o : r && (O = f.startOfMonth(r)), Qe.getInitialReferenceValue({
        value: n,
        utils: f,
        timezone: h,
        props: t,
        referenceDate: O,
        granularity: He.day
      });
    },
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), [C, S] = g.useReducer(x, {
    isMonthSwitchingAnimating: !1,
    focusedDay: D,
    currentMonth: f.startOfMonth(D),
    slideDirection: "left"
  }), v = g.useCallback((O) => {
    S(d({
      type: "changeMonth"
    }, O)), u && u(O.newMonth);
  }, [u]), M = g.useCallback((O) => {
    const V = O;
    f.isSameMonth(V, C.currentMonth) || v({
      newMonth: f.startOfMonth(V),
      direction: f.isAfterDay(V, C.currentMonth) ? "left" : "right"
    });
  }, [C.currentMonth, v, f]), b = sr({
    shouldDisableDate: m,
    minDate: c,
    maxDate: l,
    disableFuture: a,
    disablePast: s,
    timezone: h
  }), y = g.useCallback(() => {
    S({
      type: "finishMonthSwitchingAnimation"
    });
  }, []), k = Y((O, V) => {
    b(O) || S({
      type: "changeFocusedDay",
      focusedDay: O,
      withoutMonthSwitchingAnimation: V
    });
  });
  return {
    referenceDate: D,
    calendarState: C,
    changeMonth: M,
    changeFocusedDay: k,
    isDateDisabled: b,
    onMonthSwitchingAnimationEnd: y,
    handleChangeMonth: v
  };
}, Pi = ["ownerState"], ur = ({
  clearable: t,
  fieldProps: n,
  InputProps: o,
  onClear: r,
  slots: a,
  slotProps: s,
  components: i,
  componentsProps: l
}) => {
  var c, u, p, m, h, f;
  const x = $e(), D = (c = (u = a == null ? void 0 : a.clearButton) != null ? u : i == null ? void 0 : i.ClearButton) != null ? c : tn, C = me({
    elementType: D,
    externalSlotProps: (p = s == null ? void 0 : s.clearButton) != null ? p : l == null ? void 0 : l.clearButton,
    ownerState: {},
    className: "clearButton",
    additionalProps: {
      title: x.fieldClearLabel
    }
  }), S = Z(C, Pi), v = (m = (h = a == null ? void 0 : a.clearIcon) != null ? h : i == null ? void 0 : i.ClearIcon) != null ? m : Ca, M = me({
    elementType: v,
    externalSlotProps: (f = s == null ? void 0 : s.clearIcon) != null ? f : l == null ? void 0 : l.clearIcon,
    ownerState: {}
  }), b = d({}, o, {
    endAdornment: /* @__PURE__ */ P.jsxs(g.Fragment, {
      children: [t && /* @__PURE__ */ P.jsx(wo, {
        position: "end",
        sx: {
          marginRight: o != null && o.endAdornment ? -1 : -1.5
        },
        children: /* @__PURE__ */ P.jsx(D, d({}, S, {
          onClick: r,
          children: /* @__PURE__ */ P.jsx(v, d({
            fontSize: "small"
          }, M))
        }))
      }), o == null ? void 0 : o.endAdornment]
    })
  }), y = d({}, n, {
    sx: [{
      "& .clearButton": {
        opacity: 1
      },
      "@media (pointer: fine)": {
        "& .clearButton": {
          opacity: 0
        },
        "&:hover, &:focus-within": {
          ".clearButton": {
            opacity: 1
          }
        }
      }
    }, ...Array.isArray(n.sx) ? n.sx : [n.sx]]
  });
  return {
    InputProps: b,
    fieldProps: y
  };
}, vi = ["components", "componentsProps", "slots", "slotProps", "InputProps", "inputProps"], xi = ["inputRef"], wi = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly", "clearable", "onClear"], zn = /* @__PURE__ */ g.forwardRef(function(n, o) {
  var r, a, s;
  const i = fe({
    props: n,
    name: "MuiDateField"
  }), {
    components: l,
    componentsProps: c,
    slots: u,
    slotProps: p,
    InputProps: m,
    inputProps: h
  } = i, f = Z(i, vi), x = i, D = (r = (a = u == null ? void 0 : u.textField) != null ? a : l == null ? void 0 : l.TextField) != null ? r : On, C = me({
    elementType: D,
    externalSlotProps: (s = p == null ? void 0 : p.textField) != null ? s : c == null ? void 0 : c.textField,
    externalForwardedProps: f,
    ownerState: x
  }), {
    inputRef: S
  } = C, v = Z(C, xi);
  v.inputProps = d({}, h, v.inputProps), v.InputProps = d({}, m, v.InputProps);
  const M = Rn({
    props: v,
    inputRef: S
  }), {
    ref: b,
    onPaste: y,
    onKeyDown: k,
    inputMode: O,
    readOnly: V,
    clearable: w,
    onClear: A
  } = M, I = Z(M, wi), {
    InputProps: F,
    fieldProps: N
  } = ur({
    onClear: A,
    clearable: w,
    fieldProps: I,
    InputProps: I.InputProps,
    slots: u,
    slotProps: p,
    components: l,
    componentsProps: c
  });
  return /* @__PURE__ */ P.jsx(D, d({
    ref: o
  }, N, {
    InputProps: d({}, F, {
      readOnly: V
    }),
    inputProps: d({}, I.inputProps, {
      inputMode: O,
      onPaste: y,
      onKeyDown: k,
      ref: b
    })
  }));
});
process.env.NODE_ENV !== "production" && (zn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: e.bool,
  className: e.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: e.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: e.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: e.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: e.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: e.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: e.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: e.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: e.bool,
  /**
   * The helper text content.
   */
  helperText: e.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: e.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: e.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: e.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: e.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: e.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: nt,
  /**
   * The label content.
   */
  label: e.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: e.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Name attribute of the `input` element.
   */
  name: e.string,
  onBlur: e.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: e.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: e.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: e.func,
  onFocus: e.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: e.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: e.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: e.any,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: e.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: e.oneOfType([e.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), e.number, e.shape({
    endIndex: e.number.isRequired,
    startIndex: e.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: e.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: e.func,
  /**
   * If `true`, the format will respect the leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (e.g: "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default `false`
   */
  shouldRespectLeadingZeros: e.bool,
  /**
   * The size of the component.
   */
  size: e.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  style: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: e.oneOfType([e.func, e.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: e.oneOf(["filled", "outlined", "standard"])
});
const Ci = (t) => we("MuiPickersFadeTransitionGroup", t);
Ce("MuiPickersFadeTransitionGroup", ["root"]);
const Mi = (t) => {
  const {
    classes: n
  } = t;
  return ve({
    root: ["root"]
  }, Ci, n);
}, Si = X(xo, {
  name: "MuiPickersFadeTransitionGroup",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})({
  display: "block",
  position: "relative"
});
function dr(t) {
  const n = fe({
    props: t,
    name: "MuiPickersFadeTransitionGroup"
  }), {
    children: o,
    className: r,
    reduceAnimations: a,
    transKey: s
  } = n, i = Mi(n), l = Pt();
  return a ? o : /* @__PURE__ */ P.jsx(Si, {
    className: De(i.root, r),
    children: /* @__PURE__ */ P.jsx(nn, {
      appear: !1,
      mountOnEnter: !0,
      unmountOnExit: !0,
      timeout: {
        appear: l.transitions.duration.enteringScreen,
        enter: l.transitions.duration.enteringScreen,
        exit: 0
      },
      children: o
    }, s)
  });
}
function Ri(t) {
  return we("MuiPickersMonth", t);
}
const it = Ce("MuiPickersMonth", ["root", "monthButton", "disabled", "selected"]), ki = ["autoFocus", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "aria-label", "monthsPerRow"], Ti = (t) => {
  const {
    disabled: n,
    selected: o,
    classes: r
  } = t;
  return ve({
    root: ["root"],
    monthButton: ["monthButton", n && "disabled", o && "selected"]
  }, Ri, r);
}, Oi = X("div", {
  name: "MuiPickersMonth",
  slot: "Root",
  overridesResolver: (t, n) => [n.root]
})(({
  ownerState: t
}) => ({
  flexBasis: t.monthsPerRow === 3 ? "33.3%" : "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})), Ii = X("button", {
  name: "MuiPickersMonth",
  slot: "MonthButton",
  overridesResolver: (t, n) => [n.monthButton, {
    [`&.${it.disabled}`]: n.disabled
  }, {
    [`&.${it.selected}`]: n.selected
  }]
})(({
  theme: t
}) => d({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, t.typography.subtitle1, {
  margin: "8px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: t.vars ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})` : et(t.palette.action.active, t.palette.action.hoverOpacity)
  },
  "&:hover": {
    backgroundColor: t.vars ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})` : et(t.palette.action.active, t.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${it.disabled}`]: {
    color: (t.vars || t).palette.text.secondary
  },
  [`&.${it.selected}`]: {
    color: (t.vars || t).palette.primary.contrastText,
    backgroundColor: (t.vars || t).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (t.vars || t).palette.primary.dark
    }
  }
})), Vi = /* @__PURE__ */ g.memo(function(n) {
  const o = fe({
    props: n,
    name: "MuiPickersMonth"
  }), {
    autoFocus: r,
    children: a,
    disabled: s,
    selected: i,
    value: l,
    tabIndex: c,
    onClick: u,
    onKeyDown: p,
    onFocus: m,
    onBlur: h,
    "aria-current": f,
    "aria-label": x
    // We don't want to forward this prop to the root element
  } = o, D = Z(o, ki), C = g.useRef(null), S = Ti(o);
  return yt(() => {
    if (r) {
      var v;
      (v = C.current) == null || v.focus();
    }
  }, [r]), /* @__PURE__ */ P.jsx(Oi, d({
    className: S.root,
    ownerState: o
  }, D, {
    children: /* @__PURE__ */ P.jsx(Ii, {
      ref: C,
      disabled: s,
      type: "button",
      role: "radio",
      tabIndex: s ? -1 : c,
      "aria-current": f,
      "aria-checked": i,
      "aria-label": x,
      onClick: (v) => u(v, l),
      onKeyDown: (v) => p(v, l),
      onFocus: (v) => m(v, l),
      onBlur: (v) => h(v, l),
      className: S.monthButton,
      ownerState: o,
      children: a
    })
  }));
});
function Fi(t) {
  return we("MuiMonthCalendar", t);
}
const bo = Ce("MuiMonthCalendar", ["root"]), Ei = ["className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId"], $i = (t) => {
  const {
    classes: n
  } = t;
  return ve({
    root: ["root"]
  }, Fi, n);
};
function Ai(t, n) {
  const o = ue(), r = rt(), a = fe({
    props: t,
    name: n
  });
  return d({
    disableFuture: !1,
    disablePast: !1
  }, a, {
    minDate: Te(o, a.minDate, r.minDate),
    maxDate: Te(o, a.maxDate, r.maxDate)
  });
}
const Ni = X("div", {
  name: "MuiMonthCalendar",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "stretch",
  padding: "0 4px",
  width: an,
  // avoid padding increasing width over defined
  boxSizing: "border-box"
}), pr = /* @__PURE__ */ g.forwardRef(function(n, o) {
  const r = Ai(n, "MuiMonthCalendar"), {
    className: a,
    value: s,
    defaultValue: i,
    referenceDate: l,
    disabled: c,
    disableFuture: u,
    disablePast: p,
    maxDate: m,
    minDate: h,
    onChange: f,
    shouldDisableMonth: x,
    readOnly: D,
    disableHighlightToday: C,
    autoFocus: S = !1,
    onMonthFocus: v,
    hasFocus: M,
    onFocusedViewChange: b,
    monthsPerRow: y = 3,
    timezone: k,
    gridLabelId: O
  } = r, V = Z(r, Ei), {
    value: w,
    handleValueChange: A,
    timezone: I
  } = _t({
    name: "MonthCalendar",
    timezone: k,
    value: s,
    defaultValue: i,
    onChange: f,
    valueManager: Qe
  }), F = Nt(I), N = Co(), T = ue(), R = g.useMemo(
    () => Qe.getInitialReferenceValue({
      value: w,
      utils: T,
      props: r,
      timezone: I,
      referenceDate: l,
      granularity: He.month
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), z = r, K = $i(z), B = g.useMemo(() => T.getMonth(F), [T, F]), q = g.useMemo(() => w != null ? T.getMonth(w) : C ? null : T.getMonth(R), [w, T, C, R]), [Q, ie] = g.useState(() => q || B), [ae, se] = Ge({
    name: "MonthCalendar",
    state: "hasFocus",
    controlled: M,
    default: S != null ? S : !1
  }), H = Y((G) => {
    se(G), b && b(G);
  }), L = g.useCallback((G) => {
    const ee = T.startOfMonth(p && T.isAfter(F, h) ? F : h), E = T.startOfMonth(u && T.isBefore(F, m) ? F : m), ne = T.startOfMonth(G);
    return T.isBefore(ne, ee) || T.isAfter(ne, E) ? !0 : x ? x(ne) : !1;
  }, [u, p, m, h, F, x, T]), oe = Y((G, ee) => {
    if (D)
      return;
    const E = T.setMonth(w != null ? w : R, ee);
    A(E);
  }), $ = Y((G) => {
    L(T.setMonth(w != null ? w : R, G)) || (ie(G), H(!0), v && v(G));
  });
  g.useEffect(() => {
    ie((G) => q !== null && G !== q ? q : G);
  }, [q]);
  const j = Y((G, ee) => {
    switch (G.key) {
      case "ArrowUp":
        $((12 + ee - 3) % 12), G.preventDefault();
        break;
      case "ArrowDown":
        $((12 + ee + 3) % 12), G.preventDefault();
        break;
      case "ArrowLeft":
        $((12 + ee + (N.direction === "ltr" ? -1 : 1)) % 12), G.preventDefault();
        break;
      case "ArrowRight":
        $((12 + ee + (N.direction === "ltr" ? 1 : -1)) % 12), G.preventDefault();
        break;
    }
  }), pe = Y((G, ee) => {
    $(ee);
  }), ce = Y((G, ee) => {
    Q === ee && H(!1);
  });
  return /* @__PURE__ */ P.jsx(Ni, d({
    ref: o,
    className: De(K.root, a),
    ownerState: z,
    role: "radiogroup",
    "aria-labelledby": O
  }, V, {
    children: $n(T, w != null ? w : R).map((G) => {
      const ee = T.getMonth(G), E = T.format(G, "monthShort"), ne = T.format(G, "month"), xe = ee === q, ge = c || L(G);
      return /* @__PURE__ */ P.jsx(Vi, {
        selected: xe,
        value: ee,
        onClick: oe,
        onKeyDown: j,
        autoFocus: ae && ee === Q,
        disabled: ge,
        tabIndex: ee === Q ? 0 : -1,
        onFocus: pe,
        onBlur: ce,
        "aria-current": B === ee ? "date" : void 0,
        "aria-label": ne,
        monthsPerRow: y,
        children: E
      }, E);
    })
  }));
});
process.env.NODE_ENV !== "production" && (pr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: e.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * className applied to the root element.
   */
  className: e.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true` picker is disabled
   */
  disabled: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  gridLabelId: e.string,
  hasFocus: e.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: e.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: e.func,
  onFocusedViewChange: e.func,
  onMonthFocus: e.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: e.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid month using the validation props, except callbacks such as `shouldDisableMonth`.
   */
  referenceDate: e.any,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: e.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.any
});
function ji(t) {
  return we("MuiPickersYear", t);
}
const lt = Ce("MuiPickersYear", ["root", "yearButton", "selected", "disabled"]), _i = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow"], Li = (t) => {
  const {
    disabled: n,
    selected: o,
    classes: r
  } = t;
  return ve({
    root: ["root"],
    yearButton: ["yearButton", n && "disabled", o && "selected"]
  }, ji, r);
}, Bi = X("div", {
  name: "MuiPickersYear",
  slot: "Root",
  overridesResolver: (t, n) => [n.root]
})(({
  ownerState: t
}) => ({
  flexBasis: t.yearsPerRow === 3 ? "33.3%" : "25%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})), Hi = X("button", {
  name: "MuiPickersYear",
  slot: "YearButton",
  overridesResolver: (t, n) => [n.yearButton, {
    [`&.${lt.disabled}`]: n.disabled
  }, {
    [`&.${lt.selected}`]: n.selected
  }]
})(({
  theme: t
}) => d({
  color: "unset",
  backgroundColor: "transparent",
  border: 0,
  outline: 0
}, t.typography.subtitle1, {
  margin: "6px 0",
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: "pointer",
  "&:focus": {
    backgroundColor: t.vars ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.focusOpacity})` : et(t.palette.action.active, t.palette.action.focusOpacity)
  },
  "&:hover": {
    backgroundColor: t.vars ? `rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})` : et(t.palette.action.active, t.palette.action.hoverOpacity)
  },
  "&:disabled": {
    cursor: "auto",
    pointerEvents: "none"
  },
  [`&.${lt.disabled}`]: {
    color: (t.vars || t).palette.text.secondary
  },
  [`&.${lt.selected}`]: {
    color: (t.vars || t).palette.primary.contrastText,
    backgroundColor: (t.vars || t).palette.primary.main,
    "&:focus, &:hover": {
      backgroundColor: (t.vars || t).palette.primary.dark
    }
  }
})), Wi = /* @__PURE__ */ g.memo(function(n) {
  const o = fe({
    props: n,
    name: "MuiPickersYear"
  }), {
    autoFocus: r,
    className: a,
    children: s,
    disabled: i,
    selected: l,
    value: c,
    tabIndex: u,
    onClick: p,
    onKeyDown: m,
    onFocus: h,
    onBlur: f,
    "aria-current": x
    // We don't want to forward this prop to the root element
  } = o, D = Z(o, _i), C = g.useRef(null), S = Li(o);
  return g.useEffect(() => {
    r && C.current.focus();
  }, [r]), /* @__PURE__ */ P.jsx(Bi, d({
    className: De(S.root, a),
    ownerState: o
  }, D, {
    children: /* @__PURE__ */ P.jsx(Hi, {
      ref: C,
      disabled: i,
      type: "button",
      role: "radio",
      tabIndex: i ? -1 : u,
      "aria-current": x,
      "aria-checked": l,
      onClick: (v) => p(v, c),
      onKeyDown: (v) => m(v, c),
      onFocus: (v) => h(v, c),
      onBlur: (v) => f(v, c),
      className: S.yearButton,
      ownerState: o,
      children: s
    })
  }));
});
function zi(t) {
  return we("MuiYearCalendar", t);
}
const yo = Ce("MuiYearCalendar", ["root"]), Yi = ["autoFocus", "className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsPerRow", "timezone", "gridLabelId"], qi = (t) => {
  const {
    classes: n
  } = t;
  return ve({
    root: ["root"]
  }, zi, n);
};
function Ui(t, n) {
  var o;
  const r = ue(), a = rt(), s = fe({
    props: t,
    name: n
  });
  return d({
    disablePast: !1,
    disableFuture: !1
  }, s, {
    yearsPerRow: (o = s.yearsPerRow) != null ? o : 3,
    minDate: Te(r, s.minDate, a.minDate),
    maxDate: Te(r, s.maxDate, a.maxDate)
  });
}
const Ki = X("div", {
  name: "MuiYearCalendar",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  overflowY: "auto",
  height: "100%",
  padding: "0 4px",
  width: an,
  maxHeight: Aa,
  // avoid padding increasing width over defined
  boxSizing: "border-box",
  position: "relative"
}), fr = /* @__PURE__ */ g.forwardRef(function(n, o) {
  const r = Ui(n, "MuiYearCalendar"), {
    autoFocus: a,
    className: s,
    value: i,
    defaultValue: l,
    referenceDate: c,
    disabled: u,
    disableFuture: p,
    disablePast: m,
    maxDate: h,
    minDate: f,
    onChange: x,
    readOnly: D,
    shouldDisableYear: C,
    disableHighlightToday: S,
    onYearFocus: v,
    hasFocus: M,
    onFocusedViewChange: b,
    yearsPerRow: y,
    timezone: k,
    gridLabelId: O
  } = r, V = Z(r, Yi), {
    value: w,
    handleValueChange: A,
    timezone: I
  } = _t({
    name: "YearCalendar",
    timezone: k,
    value: i,
    defaultValue: l,
    onChange: x,
    valueManager: Qe
  }), F = Nt(I), N = Co(), T = ue(), R = g.useMemo(
    () => Qe.getInitialReferenceValue({
      value: w,
      utils: T,
      props: r,
      timezone: I,
      referenceDate: c,
      granularity: He.year
    }),
    []
    // eslint-disable-line react-hooks/exhaustive-deps
  ), z = r, K = qi(z), B = g.useMemo(() => T.getYear(F), [T, F]), q = g.useMemo(() => w != null ? T.getYear(w) : S ? null : T.getYear(R), [w, T, S, R]), [Q, ie] = g.useState(() => q || B), [ae, se] = Ge({
    name: "YearCalendar",
    state: "hasFocus",
    controlled: M,
    default: a != null ? a : !1
  }), H = Y((E) => {
    se(E), b && b(E);
  }), L = g.useCallback((E) => {
    if (m && T.isBeforeYear(E, F) || p && T.isAfterYear(E, F) || f && T.isBeforeYear(E, f) || h && T.isAfterYear(E, h))
      return !0;
    if (!C)
      return !1;
    const ne = T.startOfYear(E);
    return C(ne);
  }, [p, m, h, f, F, C, T]), oe = Y((E, ne) => {
    if (D)
      return;
    const xe = T.setYear(w != null ? w : R, ne);
    A(xe);
  }), $ = Y((E) => {
    L(T.setYear(w != null ? w : R, E)) || (ie(E), H(!0), v == null || v(E));
  });
  g.useEffect(() => {
    ie((E) => q !== null && E !== q ? q : E);
  }, [q]);
  const j = Y((E, ne) => {
    switch (E.key) {
      case "ArrowUp":
        $(ne - y), E.preventDefault();
        break;
      case "ArrowDown":
        $(ne + y), E.preventDefault();
        break;
      case "ArrowLeft":
        $(ne + (N.direction === "ltr" ? -1 : 1)), E.preventDefault();
        break;
      case "ArrowRight":
        $(ne + (N.direction === "ltr" ? 1 : -1)), E.preventDefault();
        break;
    }
  }), pe = Y((E, ne) => {
    $(ne);
  }), ce = Y((E, ne) => {
    Q === ne && H(!1);
  }), G = g.useRef(null), ee = We(o, G);
  return g.useEffect(() => {
    if (a || G.current === null)
      return;
    const E = G.current.querySelector('[tabindex="0"]');
    if (!E)
      return;
    const ne = E.offsetHeight, xe = E.offsetTop, ge = G.current.clientHeight, Ne = G.current.scrollTop, te = xe + ne;
    ne > ge || xe < Ne || (G.current.scrollTop = te - ge / 2 - ne / 2);
  }, [a]), /* @__PURE__ */ P.jsx(Ki, d({
    ref: ee,
    className: De(K.root, s),
    ownerState: z,
    role: "radiogroup",
    "aria-labelledby": O
  }, V, {
    children: T.getYearRange(f, h).map((E) => {
      const ne = T.getYear(E), xe = ne === q, ge = u || L(E);
      return /* @__PURE__ */ P.jsx(Wi, {
        selected: xe,
        value: ne,
        onClick: oe,
        onKeyDown: j,
        autoFocus: ae && ne === Q,
        disabled: ge,
        tabIndex: ne === Q ? 0 : -1,
        onFocus: pe,
        onBlur: ce,
        "aria-current": B === ne ? "date" : void 0,
        yearsPerRow: y,
        children: T.format(E, "year")
      }, T.format(E, "year"));
    })
  }));
});
process.env.NODE_ENV !== "production" && (fr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: e.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * className applied to the root element.
   */
  className: e.string,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true` picker is disabled
   */
  disabled: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  gridLabelId: e.string,
  hasFocus: e.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {TDate} value The new value.
   */
  onChange: e.func,
  onFocusedViewChange: e.func,
  onYearFocus: e.func,
  /**
   * If `true` picker is readonly
   */
  readOnly: e.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid year using the validation props, except callbacks such as `shouldDisableYear`.
   */
  referenceDate: e.any,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: e.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.any,
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: e.oneOf([3, 4])
});
const Gi = (t) => we("MuiPickersCalendarHeader", t), Qi = Ce("MuiPickersCalendarHeader", ["root", "labelContainer", "label", "switchViewButton", "switchViewIcon"]), Zi = ["slots", "slotProps", "components", "componentsProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "timezone"], Xi = ["ownerState"], Ji = (t) => {
  const {
    classes: n
  } = t;
  return ve({
    root: ["root"],
    labelContainer: ["labelContainer"],
    label: ["label"],
    switchViewButton: ["switchViewButton"],
    switchViewIcon: ["switchViewIcon"]
  }, Gi, n);
}, el = X("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})({
  display: "flex",
  alignItems: "center",
  marginTop: 16,
  marginBottom: 8,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 30,
  minHeight: 30
}), tl = X("div", {
  name: "MuiPickersCalendarHeader",
  slot: "LabelContainer",
  overridesResolver: (t, n) => n.labelContainer
})(({
  theme: t
}) => d({
  display: "flex",
  overflow: "hidden",
  alignItems: "center",
  cursor: "pointer",
  marginRight: "auto"
}, t.typography.body1, {
  fontWeight: t.typography.fontWeightMedium
})), nl = X("div", {
  name: "MuiPickersCalendarHeader",
  slot: "Label",
  overridesResolver: (t, n) => n.label
})({
  marginRight: 6
}), ol = X(tn, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewButton",
  overridesResolver: (t, n) => n.switchViewButton
})(({
  ownerState: t
}) => d({
  marginRight: "auto"
}, t.view === "year" && {
  [`.${Qi.switchViewIcon}`]: {
    transform: "rotate(180deg)"
  }
})), rl = X(Pa, {
  name: "MuiPickersCalendarHeader",
  slot: "SwitchViewIcon",
  overridesResolver: (t, n) => n.switchViewIcon
})(({
  theme: t
}) => ({
  willChange: "transform",
  transition: t.transitions.create("transform"),
  transform: "rotate(0deg)"
})), Yn = /* @__PURE__ */ g.forwardRef(function(n, o) {
  var r, a, s, i;
  const l = $e(), c = ue(), u = fe({
    props: n,
    name: "MuiPickersCalendarHeader"
  }), {
    slots: p,
    slotProps: m,
    components: h,
    currentMonth: f,
    disabled: x,
    disableFuture: D,
    disablePast: C,
    maxDate: S,
    minDate: v,
    onMonthChange: M,
    onViewChange: b,
    view: y,
    reduceAnimations: k,
    views: O,
    labelId: V,
    className: w,
    timezone: A
  } = u, I = Z(u, Zi), F = u, N = Ji(u), T = (r = (a = p == null ? void 0 : p.switchViewButton) != null ? a : h == null ? void 0 : h.SwitchViewButton) != null ? r : ol, R = me({
    elementType: T,
    externalSlotProps: m == null ? void 0 : m.switchViewButton,
    additionalProps: {
      size: "small",
      "aria-label": l.calendarViewSwitchingButtonAriaLabel(y)
    },
    ownerState: F,
    className: N.switchViewButton
  }), z = (s = (i = p == null ? void 0 : p.switchViewIcon) != null ? i : h == null ? void 0 : h.SwitchViewIcon) != null ? s : rl, K = me({
    elementType: z,
    externalSlotProps: m == null ? void 0 : m.switchViewIcon,
    ownerState: void 0,
    className: N.switchViewIcon
  }), B = Z(K, Xi), q = () => M(c.addMonths(f, 1), "left"), Q = () => M(c.addMonths(f, -1), "right"), ie = Eo(f, {
    disableFuture: D,
    maxDate: S,
    timezone: A
  }), ae = $o(f, {
    disablePast: C,
    minDate: v,
    timezone: A
  }), se = () => {
    if (!(O.length === 1 || !b || x))
      if (O.length === 2)
        b(O.find((H) => H !== y) || O[0]);
      else {
        const H = O.indexOf(y) !== 0 ? 0 : 1;
        b(O[H]);
      }
  };
  return O.length === 1 && O[0] === "year" ? null : /* @__PURE__ */ P.jsxs(el, d({}, I, {
    ownerState: F,
    className: De(w, N.root),
    ref: o,
    children: [/* @__PURE__ */ P.jsxs(tl, {
      role: "presentation",
      onClick: se,
      ownerState: F,
      "aria-live": "polite",
      className: N.labelContainer,
      children: [/* @__PURE__ */ P.jsx(dr, {
        reduceAnimations: k,
        transKey: c.format(f, "monthAndYear"),
        children: /* @__PURE__ */ P.jsx(nl, {
          id: V,
          ownerState: F,
          className: N.label,
          children: c.format(f, "monthAndYear")
        })
      }), O.length > 1 && !x && /* @__PURE__ */ P.jsx(T, d({}, R, {
        children: /* @__PURE__ */ P.jsx(z, d({}, B))
      }))]
    }), /* @__PURE__ */ P.jsx(nn, {
      in: y === "day",
      children: /* @__PURE__ */ P.jsx(Vo, {
        slots: p,
        slotProps: m,
        onGoToPrevious: Q,
        isPreviousDisabled: ae,
        previousLabel: l.previousMonth,
        onGoToNext: q,
        isNextDisabled: ie,
        nextLabel: l.nextMonth
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (Yn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * className applied to the root element.
   */
  className: e.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  currentMonth: e.any.isRequired,
  disabled: e.bool,
  disableFuture: e.bool,
  disablePast: e.bool,
  labelId: e.string,
  maxDate: e.any.isRequired,
  minDate: e.any.isRequired,
  onMonthChange: e.func.isRequired,
  onViewChange: e.func,
  reduceAnimations: e.bool.isRequired,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  timezone: e.string.isRequired,
  view: e.oneOf(["day", "month", "year"]).isRequired,
  views: e.arrayOf(e.oneOf(["day", "month", "year"]).isRequired).isRequired
});
const al = (t) => we("MuiDateCalendar", t);
Ce("MuiDateCalendar", ["root", "viewTransitionContainer"]);
const sl = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "defaultCalendarMonth", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "components", "componentsProps", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsPerRow", "monthsPerRow", "timezone"], il = (t) => {
  const {
    classes: n
  } = t;
  return ve({
    root: ["root"],
    viewTransitionContainer: ["viewTransitionContainer"]
  }, al, n);
};
function ll(t, n) {
  var o, r, a, s, i, l, c;
  const u = ue(), p = rt(), m = Wn(), h = fe({
    props: t,
    name: n
  });
  return d({}, h, {
    loading: (o = h.loading) != null ? o : !1,
    disablePast: (r = h.disablePast) != null ? r : !1,
    disableFuture: (a = h.disableFuture) != null ? a : !1,
    openTo: (s = h.openTo) != null ? s : "day",
    views: (i = h.views) != null ? i : ["year", "day"],
    reduceAnimations: (l = h.reduceAnimations) != null ? l : m,
    renderLoading: (c = h.renderLoading) != null ? c : () => /* @__PURE__ */ P.jsx("span", {
      children: "..."
    }),
    minDate: Te(u, h.minDate, p.minDate),
    maxDate: Te(u, h.maxDate, p.maxDate)
  });
}
const cl = X(Na, {
  name: "MuiDateCalendar",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})({
  display: "flex",
  flexDirection: "column",
  height: En
}), ul = X(dr, {
  name: "MuiDateCalendar",
  slot: "ViewTransitionContainer",
  overridesResolver: (t, n) => n.viewTransitionContainer
})({}), hr = /* @__PURE__ */ g.forwardRef(function(n, o) {
  var r, a, s;
  const i = ue(), l = on(), c = ll(n, "MuiDateCalendar"), {
    autoFocus: u,
    onViewChange: p,
    value: m,
    defaultValue: h,
    referenceDate: f,
    disableFuture: x,
    disablePast: D,
    defaultCalendarMonth: C,
    onChange: S,
    onYearChange: v,
    onMonthChange: M,
    reduceAnimations: b,
    shouldDisableDate: y,
    shouldDisableMonth: k,
    shouldDisableYear: O,
    view: V,
    views: w,
    openTo: A,
    className: I,
    disabled: F,
    readOnly: N,
    minDate: T,
    maxDate: R,
    disableHighlightToday: z,
    focusedView: K,
    onFocusedViewChange: B,
    showDaysOutsideCurrentMonth: q,
    fixedWeekNumber: Q,
    dayOfWeekFormatter: ie,
    components: ae,
    componentsProps: se,
    slots: H,
    slotProps: L,
    loading: oe,
    renderLoading: $,
    displayWeekNumber: j,
    yearsPerRow: pe,
    monthsPerRow: ce,
    timezone: G
  } = c, ee = Z(c, sl), {
    value: E,
    handleValueChange: ne,
    timezone: xe
  } = _t({
    name: "DateCalendar",
    timezone: G,
    value: m,
    defaultValue: h,
    onChange: S,
    valueManager: Qe
  }), {
    view: ge,
    setView: Ne,
    focusedView: te,
    setFocusedView: J,
    goToNextView: W,
    setValueAndGoToNextView: U
  } = Fo({
    view: V,
    views: w,
    openTo: A,
    onChange: ne,
    onViewChange: p,
    autoFocus: u,
    focusedView: K,
    onFocusedViewChange: B
  }), {
    referenceDate: re,
    calendarState: be,
    changeFocusedDay: Re,
    changeMonth: Me,
    handleChangeMonth: Ie,
    isDateDisabled: Se,
    onMonthSwitchingAnimationEnd: Xe
  } = cr({
    value: E,
    defaultCalendarMonth: C,
    referenceDate: f,
    reduceAnimations: b,
    onMonthChange: M,
    minDate: T,
    maxDate: R,
    shouldDisableDate: y,
    disablePast: D,
    disableFuture: x,
    timezone: xe
  }), ke = F && E || T, je = F && E || R, ze = `${l}-grid-label`, at = te !== null, Fe = (r = (a = H == null ? void 0 : H.calendarHeader) != null ? a : ae == null ? void 0 : ae.CalendarHeader) != null ? r : Yn, vt = me({
    elementType: Fe,
    externalSlotProps: (s = L == null ? void 0 : L.calendarHeader) != null ? s : se == null ? void 0 : se.calendarHeader,
    additionalProps: {
      views: w,
      view: ge,
      currentMonth: be.currentMonth,
      onViewChange: Ne,
      onMonthChange: (he, Ee) => Ie({
        newMonth: he,
        direction: Ee
      }),
      minDate: ke,
      maxDate: je,
      disabled: F,
      disablePast: D,
      disableFuture: x,
      reduceAnimations: b,
      timezone: xe,
      labelId: ze,
      slots: H,
      slotProps: L
    },
    ownerState: c
  }), pn = Y((he) => {
    const Ee = i.startOfMonth(he), Ye = i.endOfMonth(he), _e = Se(he) ? Ft({
      utils: i,
      date: he,
      minDate: i.isBefore(T, Ee) ? Ee : T,
      maxDate: i.isAfter(R, Ye) ? Ye : R,
      disablePast: D,
      disableFuture: x,
      isDateDisabled: Se,
      timezone: xe
    }) : he;
    _e ? (U(_e, "finish"), M == null || M(Ee)) : (W(), Me(Ee)), Re(_e, !0);
  }), fn = Y((he) => {
    const Ee = i.startOfYear(he), Ye = i.endOfYear(he), _e = Se(he) ? Ft({
      utils: i,
      date: he,
      minDate: i.isBefore(T, Ee) ? Ee : T,
      maxDate: i.isAfter(R, Ye) ? Ye : R,
      disablePast: D,
      disableFuture: x,
      isDateDisabled: Se,
      timezone: xe
    }) : he;
    _e ? (U(_e, "finish"), v == null || v(_e)) : (W(), Me(Ee)), Re(_e, !0);
  }), hn = Y((he) => ne(he && Xt(i, he, E != null ? E : re), "finish", ge));
  g.useEffect(() => {
    E != null && i.isValid(E) && Me(E);
  }, [E]);
  const xt = c, Wt = il(xt), wt = {
    disablePast: D,
    disableFuture: x,
    maxDate: R,
    minDate: T
  }, Ct = {
    disableHighlightToday: z,
    readOnly: N,
    disabled: F,
    timezone: xe,
    gridLabelId: ze
  }, Mt = g.useRef(ge);
  g.useEffect(() => {
    Mt.current !== ge && (te === Mt.current && J(ge, !0), Mt.current = ge);
  }, [te, J, ge]);
  const mn = g.useMemo(() => [E], [E]);
  return /* @__PURE__ */ P.jsxs(cl, d({
    ref: o,
    className: De(Wt.root, I),
    ownerState: xt
  }, ee, {
    children: [/* @__PURE__ */ P.jsx(Fe, d({}, vt)), /* @__PURE__ */ P.jsx(ul, {
      reduceAnimations: b,
      className: Wt.viewTransitionContainer,
      transKey: ge,
      ownerState: xt,
      children: /* @__PURE__ */ P.jsxs("div", {
        children: [ge === "year" && /* @__PURE__ */ P.jsx(fr, d({}, wt, Ct, {
          value: E,
          onChange: fn,
          shouldDisableYear: O,
          hasFocus: at,
          onFocusedViewChange: (he) => J("year", he),
          yearsPerRow: pe,
          referenceDate: re
        })), ge === "month" && /* @__PURE__ */ P.jsx(pr, d({}, wt, Ct, {
          hasFocus: at,
          className: I,
          value: E,
          onChange: pn,
          shouldDisableMonth: k,
          onFocusedViewChange: (he) => J("month", he),
          monthsPerRow: ce,
          referenceDate: re
        })), ge === "day" && /* @__PURE__ */ P.jsx(lr, d({}, be, wt, Ct, {
          onMonthSwitchingAnimationEnd: Xe,
          onFocusedDayChange: Re,
          reduceAnimations: b,
          selectedDays: mn,
          onSelectedDaysChange: hn,
          shouldDisableDate: y,
          shouldDisableMonth: k,
          shouldDisableYear: O,
          hasFocus: at,
          onFocusedViewChange: (he) => J("day", he),
          showDaysOutsideCurrentMonth: q,
          fixedWeekNumber: Q,
          dayOfWeekFormatter: ie,
          displayWeekNumber: j,
          components: ae,
          componentsProps: se,
          slots: H,
          slotProps: L,
          loading: oe,
          renderLoading: $
        }))]
      })
    })]
  }));
});
process.env.NODE_ENV !== "production" && (hr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: e.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  className: e.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: e.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: e.any,
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: e.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: e.number,
  /**
   * Controlled focused view.
   */
  focusedView: e.oneOf(["day", "month", "year"]),
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: e.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: e.oneOf([3, 4]),
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TView The view type. Will be one of date or time views.
   * @param {TValue} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date selection is complete.
   * @param {TView | undefined} selectedView Indicates the view in which the selection has been made.
   */
  onChange: e.func,
  /**
   * Callback fired on focused view change.
   * @template TView
   * @param {TView} view The new view to focus or not.
   * @param {boolean} hasFocus `true` if the view should be focused.
   */
  onFocusedViewChange: e.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: e.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: e.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: e.func,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: e.oneOf(["day", "month", "year"]),
  /**
   * Make picker read only.
   * @default false
   */
  readOnly: e.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: e.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: e.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: e.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: e.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: e.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: e.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: e.oneOf(["day", "month", "year"]),
  /**
   * Available views.
   */
  views: e.arrayOf(e.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: e.oneOf([3, 4])
});
function dl(t) {
  return we("MuiDatePickerToolbar", t);
}
Ce("MuiDatePickerToolbar", ["root", "title"]);
const pl = ["value", "isLandscape", "onChange", "toolbarFormat", "toolbarPlaceholder", "views", "className"], fl = (t) => {
  const {
    classes: n
  } = t;
  return ve({
    root: ["root"],
    title: ["title"]
  }, dl, n);
}, hl = X(er, {
  name: "MuiDatePickerToolbar",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})({}), ml = X(Ze, {
  name: "MuiDatePickerToolbar",
  slot: "Title",
  overridesResolver: (t, n) => n.title
})(({
  ownerState: t
}) => d({}, t.isLandscape && {
  margin: "auto 16px auto auto"
})), mr = /* @__PURE__ */ g.forwardRef(function(n, o) {
  const r = fe({
    props: n,
    name: "MuiDatePickerToolbar"
  }), {
    value: a,
    isLandscape: s,
    toolbarFormat: i,
    toolbarPlaceholder: l = "––",
    views: c,
    className: u
  } = r, p = Z(r, pl), m = ue(), h = $e(), f = fl(r), x = g.useMemo(() => {
    if (!a)
      return l;
    const C = An(m, {
      format: i,
      views: c
    }, !0);
    return m.formatByString(a, C);
  }, [a, i, l, m, c]), D = r;
  return /* @__PURE__ */ P.jsx(hl, d({
    ref: o,
    toolbarTitle: h.datePickerToolbarTitle,
    isLandscape: s,
    className: De(f.root, u)
  }, p, {
    children: /* @__PURE__ */ P.jsx(ml, {
      variant: "h4",
      align: s ? "left" : "center",
      ownerState: D,
      className: f.title,
      children: x
    })
  }));
});
process.env.NODE_ENV !== "production" && (mr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * className applied to the root component.
   */
  className: e.string,
  disabled: e.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: e.bool,
  isLandscape: e.bool.isRequired,
  onChange: e.func.isRequired,
  /**
   * Callback called when a toolbar is clicked
   * @template TView
   * @param {TView} view The view to open
   */
  onViewChange: e.func.isRequired,
  readOnly: e.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  titleId: e.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: e.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: e.node,
  value: e.any,
  /**
   * Currently visible picker view.
   */
  view: e.oneOf(["day", "month", "year"]).isRequired,
  views: e.arrayOf(e.oneOf(["day", "month", "year"]).isRequired).isRequired
});
function gr(t, n) {
  var o, r, a, s;
  const i = ue(), l = rt(), c = fe({
    props: t,
    name: n
  }), u = g.useMemo(() => {
    var m;
    return ((m = c.localeText) == null ? void 0 : m.toolbarTitle) == null ? c.localeText : d({}, c.localeText, {
      datePickerToolbarTitle: c.localeText.toolbarTitle
    });
  }, [c.localeText]), p = (o = c.slots) != null ? o : Lt(c.components);
  return d({}, c, {
    localeText: u
  }, Va({
    views: c.views,
    openTo: c.openTo,
    defaultViews: ["year", "day"],
    defaultOpenTo: "day"
  }), {
    disableFuture: (r = c.disableFuture) != null ? r : !1,
    disablePast: (a = c.disablePast) != null ? a : !1,
    minDate: Te(i, c.minDate, l.minDate),
    maxDate: Te(i, c.maxDate, l.maxDate),
    slots: d({
      toolbar: mr
    }, p),
    slotProps: (s = c.slotProps) != null ? s : c.componentsProps
  });
}
const gl = ["props", "getOpenDialogAriaText"], bl = ["ownerState"], yl = ["ownerState"], Dl = (t) => {
  var n, o, r, a, s;
  let {
    props: i,
    getOpenDialogAriaText: l
  } = t, c = Z(t, gl);
  const {
    slots: u,
    slotProps: p,
    className: m,
    sx: h,
    format: f,
    formatDensity: x,
    timezone: D,
    name: C,
    label: S,
    inputRef: v,
    readOnly: M,
    disabled: b,
    autoFocus: y,
    localeText: k,
    reduceAnimations: O
  } = i, V = ue(), w = g.useRef(null), A = g.useRef(null), I = on(), F = (n = p == null || (o = p.toolbar) == null ? void 0 : o.hidden) != null ? n : !1, {
    open: N,
    actions: T,
    hasUIView: R,
    layoutProps: z,
    renderCurrentView: K,
    shouldRestoreFocus: B,
    fieldProps: q
  } = cn(d({}, c, {
    props: i,
    inputRef: w,
    autoFocusView: !0,
    additionalViewProps: {},
    wrapperVariant: "desktop"
  })), Q = (r = u.inputAdornment) != null ? r : wo, ie = me({
    elementType: Q,
    externalSlotProps: p == null ? void 0 : p.inputAdornment,
    additionalProps: {
      position: "end"
    },
    ownerState: i
  }), ae = Z(ie, bl), se = (a = u.openPickerButton) != null ? a : tn, H = me({
    elementType: se,
    externalSlotProps: p == null ? void 0 : p.openPickerButton,
    additionalProps: {
      disabled: b || M,
      onClick: N ? T.onClose : T.onOpen,
      "aria-label": l(q.value, V),
      edge: ae.position
    },
    ownerState: i
  }), L = Z(H, yl), oe = u.openPickerIcon, $ = u.field, j = me({
    elementType: $,
    externalSlotProps: p == null ? void 0 : p.field,
    additionalProps: d({}, q, F && {
      id: I
    }, {
      readOnly: M,
      disabled: b,
      className: m,
      sx: h,
      format: f,
      formatDensity: x,
      timezone: D,
      label: S,
      name: C,
      autoFocus: y && !i.open,
      focused: N ? !0 : void 0
    }),
    ownerState: i
  });
  R && (j.InputProps = d({}, j.InputProps, {
    ref: A,
    [`${ae.position}Adornment`]: /* @__PURE__ */ P.jsx(Q, d({}, ae, {
      children: /* @__PURE__ */ P.jsx(se, d({}, L, {
        children: /* @__PURE__ */ P.jsx(oe, d({}, p == null ? void 0 : p.openPickerIcon))
      }))
    }))
  }));
  const pe = d({
    textField: u.textField,
    clearIcon: u.clearIcon,
    clearButton: u.clearButton
  }, j.slots), ce = (s = u.layout) != null ? s : Bt, G = We(w, j.inputRef, v);
  let ee = I;
  F && (S ? ee = `${I}-label` : ee = void 0);
  const E = d({}, p, {
    toolbar: d({}, p == null ? void 0 : p.toolbar, {
      titleId: I
    }),
    popper: d({
      "aria-labelledby": ee
    }, p == null ? void 0 : p.popper)
  });
  return {
    renderPicker: () => /* @__PURE__ */ P.jsxs(At, {
      localeText: k,
      children: [/* @__PURE__ */ P.jsx($, d({}, j, {
        slots: pe,
        slotProps: E,
        inputRef: G
      })), /* @__PURE__ */ P.jsx(Xo, d({
        role: "dialog",
        placement: "bottom-start",
        anchorEl: A.current
      }, T, {
        open: N,
        slots: u,
        slotProps: E,
        shouldRestoreFocus: B,
        reduceAnimations: O,
        children: /* @__PURE__ */ P.jsx(ce, d({}, z, E == null ? void 0 : E.layout, {
          slots: u,
          slotProps: E,
          children: K()
        }))
      }))]
    })
  };
}, bt = ({
  view: t,
  onViewChange: n,
  views: o,
  focusedView: r,
  onFocusedViewChange: a,
  value: s,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: u,
  classes: p,
  disableFuture: m,
  disablePast: h,
  minDate: f,
  maxDate: x,
  shouldDisableDate: D,
  shouldDisableMonth: C,
  shouldDisableYear: S,
  reduceAnimations: v,
  onMonthChange: M,
  monthsPerRow: b,
  onYearChange: y,
  yearsPerRow: k,
  defaultCalendarMonth: O,
  components: V,
  componentsProps: w,
  slots: A,
  slotProps: I,
  loading: F,
  renderLoading: N,
  disableHighlightToday: T,
  readOnly: R,
  disabled: z,
  showDaysOutsideCurrentMonth: K,
  dayOfWeekFormatter: B,
  sx: q,
  autoFocus: Q,
  fixedWeekNumber: ie,
  displayWeekNumber: ae,
  timezone: se
}) => /* @__PURE__ */ P.jsx(hr, {
  view: t,
  onViewChange: n,
  views: o.filter(ro),
  focusedView: r && ro(r) ? r : null,
  onFocusedViewChange: a,
  value: s,
  defaultValue: i,
  referenceDate: l,
  onChange: c,
  className: u,
  classes: p,
  disableFuture: m,
  disablePast: h,
  minDate: f,
  maxDate: x,
  shouldDisableDate: D,
  shouldDisableMonth: C,
  shouldDisableYear: S,
  reduceAnimations: v,
  onMonthChange: M,
  monthsPerRow: b,
  onYearChange: y,
  yearsPerRow: k,
  defaultCalendarMonth: O,
  components: V,
  componentsProps: w,
  slots: A,
  slotProps: I,
  loading: F,
  renderLoading: N,
  disableHighlightToday: T,
  readOnly: R,
  disabled: z,
  showDaysOutsideCurrentMonth: K,
  dayOfWeekFormatter: B,
  sx: q,
  autoFocus: Q,
  fixedWeekNumber: ie,
  displayWeekNumber: ae,
  timezone: se
}), br = /* @__PURE__ */ g.forwardRef(function(n, o) {
  var r, a, s, i;
  const l = $e(), c = ue(), u = gr(n, "MuiDesktopDatePicker"), p = d({
    day: bt,
    month: bt,
    year: bt
  }, u.viewRenderers), m = d({}, u, {
    viewRenderers: p,
    format: An(c, u, !1),
    yearsPerRow: (r = u.yearsPerRow) != null ? r : 4,
    slots: d({
      openPickerIcon: wa,
      field: zn
    }, u.slots),
    slotProps: d({}, u.slotProps, {
      field: (f) => {
        var x;
        return d({}, Ke((x = u.slotProps) == null ? void 0 : x.field, f), ln(u), {
          ref: o
        });
      },
      toolbar: d({
        hidden: !0
      }, (a = u.slotProps) == null ? void 0 : a.toolbar)
    })
  }), {
    renderPicker: h
  } = Dl({
    props: m,
    valueManager: Qe,
    valueType: "date",
    getOpenDialogAriaText: (s = (i = m.localeText) == null ? void 0 : i.openDatePickerDialogue) != null ? s : l.openDatePickerDialogue,
    validator: Dt
  });
  return h();
});
br.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: e.bool,
  /**
   * Class name applied to the root element.
   */
  className: e.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: e.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: e.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: e.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: e.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: e.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: e.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: e.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: nt,
  /**
   * The label content.
   */
  label: e.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: e.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: e.object,
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: e.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: e.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: e.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: e.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: e.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: e.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: e.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: e.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: e.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: e.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: e.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: e.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: e.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: e.oneOf(["landscape", "portrait"]),
  readOnly: e.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: e.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: e.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: e.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: e.oneOfType([e.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), e.number, e.shape({
    endIndex: e.number.isRequired,
    startIndex: e.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: e.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: e.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: e.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: e.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: e.shape({
    day: e.func,
    month: e.func,
    year: e.func
  }),
  /**
   * Available views.
   */
  views: e.arrayOf(e.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: e.oneOf([3, 4])
};
const Pl = ["props", "getOpenDialogAriaText"], vl = (t) => {
  var n, o, r;
  let {
    props: a,
    getOpenDialogAriaText: s
  } = t, i = Z(t, Pl);
  const {
    slots: l,
    slotProps: c,
    className: u,
    sx: p,
    format: m,
    formatDensity: h,
    timezone: f,
    name: x,
    label: D,
    inputRef: C,
    readOnly: S,
    disabled: v,
    localeText: M
  } = a, b = ue(), y = g.useRef(null), k = on(), O = (n = c == null || (o = c.toolbar) == null ? void 0 : o.hidden) != null ? n : !1, {
    open: V,
    actions: w,
    layoutProps: A,
    renderCurrentView: I,
    fieldProps: F
  } = cn(d({}, i, {
    props: a,
    inputRef: y,
    autoFocusView: !0,
    additionalViewProps: {},
    wrapperVariant: "mobile"
  })), N = l.field, T = me({
    elementType: N,
    externalSlotProps: c == null ? void 0 : c.field,
    additionalProps: d({}, F, O && {
      id: k
    }, !(v || S) && {
      onClick: w.onOpen,
      onKeyDown: en(w.onOpen)
    }, {
      readOnly: S != null ? S : !0,
      disabled: v,
      className: u,
      sx: p,
      format: m,
      formatDensity: h,
      timezone: f,
      label: D,
      name: x
    }),
    ownerState: a
  });
  T.inputProps = d({}, T.inputProps, {
    "aria-label": s(F.value, b)
  });
  const R = d({
    textField: l.textField
  }, T.slots), z = (r = l.layout) != null ? r : Bt, K = We(y, T.inputRef, C);
  let B = k;
  O && (D ? B = `${k}-label` : B = void 0);
  const q = d({}, c, {
    toolbar: d({}, c == null ? void 0 : c.toolbar, {
      titleId: k
    }),
    mobilePaper: d({
      "aria-labelledby": B
    }, c == null ? void 0 : c.mobilePaper)
  });
  return {
    renderPicker: () => /* @__PURE__ */ P.jsxs(At, {
      localeText: M,
      children: [/* @__PURE__ */ P.jsx(N, d({}, T, {
        slots: R,
        slotProps: q,
        inputRef: K
      })), /* @__PURE__ */ P.jsx(Zo, d({}, w, {
        open: V,
        slots: l,
        slotProps: q,
        children: /* @__PURE__ */ P.jsx(z, d({}, A, q == null ? void 0 : q.layout, {
          slots: l,
          slotProps: q,
          children: I()
        }))
      }))]
    })
  };
}, yr = /* @__PURE__ */ g.forwardRef(function(n, o) {
  var r, a, s;
  const i = $e(), l = ue(), c = gr(n, "MuiMobileDatePicker"), u = d({
    day: bt,
    month: bt,
    year: bt
  }, c.viewRenderers), p = d({}, c, {
    viewRenderers: u,
    format: An(l, c, !1),
    slots: d({
      field: zn
    }, c.slots),
    slotProps: d({}, c.slotProps, {
      field: (h) => {
        var f;
        return d({}, Ke((f = c.slotProps) == null ? void 0 : f.field, h), ln(c), {
          ref: o
        });
      },
      toolbar: d({
        hidden: !1
      }, (r = c.slotProps) == null ? void 0 : r.toolbar)
    })
  }), {
    renderPicker: m
  } = vl({
    props: p,
    valueManager: Qe,
    valueType: "date",
    getOpenDialogAriaText: (a = (s = p.localeText) == null ? void 0 : s.openDatePickerDialogue) != null ? a : i.openDatePickerDialogue,
    validator: Dt
  });
  return m();
});
yr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: e.bool,
  /**
   * Class name applied to the root element.
   */
  className: e.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: e.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: e.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: e.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: e.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: e.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: e.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: e.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: nt,
  /**
   * The label content.
   */
  label: e.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: e.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: e.object,
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: e.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: e.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: e.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: e.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: e.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: e.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: e.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: e.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: e.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: e.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: e.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: e.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: e.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: e.oneOf(["landscape", "portrait"]),
  readOnly: e.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: e.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: e.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: e.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: e.oneOfType([e.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), e.number, e.shape({
    endIndex: e.number.isRequired,
    startIndex: e.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: e.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: e.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: e.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: e.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: e.shape({
    day: e.func,
    month: e.func,
    year: e.func
  }),
  /**
   * Available views.
   */
  views: e.arrayOf(e.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: e.oneOf([3, 4])
};
const xl = ["desktopModeMediaQuery"], Dr = /* @__PURE__ */ g.forwardRef(function(n, o) {
  const r = fe({
    props: n,
    name: "MuiDatePicker"
  }), {
    desktopModeMediaQuery: a = Ko
  } = r, s = Z(r, xl);
  return rn(a, {
    defaultMatches: !0
  }) ? /* @__PURE__ */ P.jsx(br, d({
    ref: o
  }, s)) : /* @__PURE__ */ P.jsx(yr, d({
    ref: o
  }, s));
});
process.env.NODE_ENV !== "production" && (Dr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: e.bool,
  /**
   * Class name applied to the root element.
   */
  className: e.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: e.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: e.func,
  /**
   * Default calendar month displayed when `value` and `defaultValue` are empty.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: e.any,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: e.string,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: e.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: e.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: e.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: e.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: nt,
  /**
   * The label content.
   */
  label: e.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: e.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: e.object,
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: e.oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: e.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: e.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: e.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: e.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: e.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: e.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: e.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: e.func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: e.func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: e.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: e.bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: e.oneOf(["day", "month", "year"]),
  /**
   * Force rendering in particular orientation.
   */
  orientation: e.oneOf(["landscape", "portrait"]),
  readOnly: e.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: e.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: e.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span data-mui-test="loading-progress">...</span>
   */
  renderLoading: e.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: e.oneOfType([e.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), e.number, e.shape({
    endIndex: e.number.isRequired,
    startIndex: e.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: e.func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: e.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: e.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.any,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: e.oneOf(["day", "month", "year"]),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: e.shape({
    day: e.func,
    month: e.func,
    year: e.func
  }),
  /**
   * Available views.
   */
  views: e.arrayOf(e.oneOf(["day", "month", "year"]).isRequired),
  /**
   * Years rendered per row.
   * @default 4 on desktop, 3 on mobile
   */
  yearsPerRow: e.oneOf([3, 4])
});
const Vc = Oo(function(c, l) {
  var u = c, {
    slotProps: t = {},
    slots: n,
    views: o = ["year", "month", "day"],
    yearsPerRow: r = 3,
    monthsPerRow: a = 3,
    dayOfWeekFormatter: s = (p) => p
  } = u, i = gn(u, [
    "slotProps",
    "slots",
    "views",
    "yearsPerRow",
    "monthsPerRow",
    "dayOfWeekFormatter"
  ]);
  return /* @__PURE__ */ P.jsx(
    Dr,
    dt(Oe({
      views: o,
      yearsPerRow: r,
      monthsPerRow: a,
      dayOfWeekFormatter: s,
      slots: Oe({
        openPickerIcon: In,
        switchViewIcon: Mo,
        leftArrowIcon: So,
        rightArrowIcon: Ro,
        textField: ko,
        previousIconButton: Ae,
        nextIconButton: Ae,
        switchViewButton: Ae,
        openPickerButton: Ae,
        clearButton: Ae
      }, n),
      slotProps: Zr(
        {
          textField: {
            InputProps: {
              sx: {
                backgroundColor: _.color.background.paper
              }
            }
          },
          leftArrowIcon: { fontSize: "medium" },
          rightArrowIcon: { fontSize: "medium" },
          openPickerButton: {
            size: "small",
            color: "context",
            sx: { color: _.color.text.muted }
          },
          nextIconButton: {
            size: "small",
            color: "context",
            sx: { color: _.color.text.primary }
          },
          previousIconButton: {
            size: "small",
            color: "context",
            sx: { color: _.color.text.primary }
          },
          switchViewButton: {
            size: "small",
            color: "context",
            sx: { color: _.color.text.primary }
          },
          clearButton: {
            size: "small",
            color: "context",
            sx: { color: _.color.text.muted }
          }
        },
        t
      )
    }, i), {
      ref: l
    })
  );
});
function wl(t) {
  return we("MuiDateRangePickerDay", t);
}
const de = Ce("MuiDateRangePickerDay", ["root", "rangeIntervalDayHighlight", "rangeIntervalDayHighlightStart", "rangeIntervalDayHighlightEnd", "rangeIntervalPreview", "rangeIntervalDayPreview", "rangeIntervalDayPreviewStart", "rangeIntervalDayPreviewEnd", "outsideCurrentMonth", "startOfMonth", "endOfMonth", "firstVisibleCell", "lastVisibleCell", "hiddenDayFiller", "day", "dayOutsideRangeInterval", "dayInsideRangeInterval", "notSelectedDate"]), un = () => {
  const t = "MTcxMjI2NDQwMDAwMA==";
  return process.env.NODE_ENV, t;
}, Cl = ["className", "day", "outsideCurrentMonth", "isEndOfHighlighting", "isEndOfPreviewing", "isHighlighting", "isPreviewing", "isStartOfHighlighting", "isStartOfPreviewing", "selected", "isVisuallySelected", "sx", "draggable", "isFirstVisibleCell", "isLastVisibleCell"], Ml = un(), Sl = (t) => {
  const {
    isHighlighting: n,
    outsideCurrentMonth: o,
    isStartOfHighlighting: r,
    isStartOfMonth: a,
    isEndOfHighlighting: s,
    isEndOfMonth: i,
    isPreviewing: l,
    isStartOfPreviewing: c,
    isEndOfPreviewing: u,
    isFirstVisibleCell: p,
    isLastVisibleCell: m,
    isHiddenDayFiller: h,
    selected: f,
    classes: x
  } = t;
  return ve({
    root: ["root", n && "rangeIntervalDayHighlight", r && "rangeIntervalDayHighlightStart", s && "rangeIntervalDayHighlightEnd", o && "outsideCurrentMonth", a && "startOfMonth", i && "endOfMonth", p && "firstVisibleCell", m && "lastVisibleCell", h && "hiddenDayFiller"],
    rangeIntervalPreview: ["rangeIntervalPreview", l && "rangeIntervalDayPreview", (c || a) && "rangeIntervalDayPreviewStart", (u || i) && "rangeIntervalDayPreviewEnd"],
    day: ["day", !f && "notSelectedDate", !n && "dayOutsideRangeInterval", !f && n && "dayInsideRangeInterval"]
  }, wl, x);
}, Kt = {
  borderTopRightRadius: "50%",
  borderBottomRightRadius: "50%"
}, Gt = {
  borderTopLeftRadius: "50%",
  borderBottomLeftRadius: "50%"
}, Pr = X("div", {
  name: "MuiDateRangePickerDay",
  slot: "Root",
  overridesResolver: (t, n) => [{
    [`&.${de.rangeIntervalDayHighlight}`]: n.rangeIntervalDayHighlight
  }, {
    [`&.${de.rangeIntervalDayHighlightStart}`]: n.rangeIntervalDayHighlightStart
  }, {
    [`&.${de.rangeIntervalDayHighlightEnd}`]: n.rangeIntervalDayHighlightEnd
  }, {
    [`&.${de.firstVisibleCell}`]: n.firstVisibleCell
  }, {
    [`&.${de.lastVisibleCell}`]: n.lastVisibleCell
  }, {
    [`&.${de.startOfMonth}`]: n.startOfMonth
  }, {
    [`&.${de.endOfMonth}`]: n.endOfMonth
  }, {
    [`&.${de.outsideCurrentMonth}`]: n.outsideCurrentMonth
  }, {
    [`&.${de.hiddenDayFiller}`]: n.hiddenDayFiller
  }, n.root]
})(({
  theme: t,
  ownerState: n
}) => n.isHiddenDayFiller ? {} : d({
  [`&:first-of-type .${de.rangeIntervalDayPreview}`]: d({}, Gt, {
    borderLeftColor: (t.vars || t).palette.divider
  }),
  [`&:last-of-type .${de.rangeIntervalDayPreview}`]: d({}, Kt, {
    borderRightColor: (t.vars || t).palette.divider
  })
}, n.isHighlighting && {
  borderRadius: 0,
  color: (t.vars || t).palette.primary.contrastText,
  backgroundColor: t.vars ? `rgba(${t.vars.palette.primary.mainChannel} / ${t.vars.palette.action.focusOpacity})` : et(t.palette.primary.main, t.palette.action.focusOpacity),
  "&:first-of-type": Gt,
  "&:last-of-type": Kt
}, (n.isStartOfHighlighting || n.isFirstVisibleCell) && d({}, Gt, {
  paddingLeft: 0
}), (n.isEndOfHighlighting || n.isLastVisibleCell) && d({}, Kt, {
  paddingRight: 0
})));
Pr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: e.object.isRequired
};
const vr = X("div", {
  name: "MuiDateRangePickerDay",
  slot: "RangeIntervalPreview",
  overridesResolver: (t, n) => [{
    [`&.${de.rangeIntervalDayPreview}`]: n.rangeIntervalDayPreview
  }, {
    [`&.${de.rangeIntervalDayPreviewStart}`]: n.rangeIntervalDayPreviewStart
  }, {
    [`&.${de.rangeIntervalDayPreviewEnd}`]: n.rangeIntervalDayPreviewEnd
  }, n.rangeIntervalPreview]
})(({
  theme: t,
  ownerState: n
}) => d({
  // replace default day component margin with transparent border to avoid jumping on preview
  border: "2px solid transparent"
}, n.isPreviewing && !n.isHiddenDayFiller && d({
  borderRadius: 0,
  border: `2px dashed ${(t.vars || t).palette.divider}`,
  borderLeftColor: "transparent",
  borderRightColor: "transparent"
}, (n.isStartOfPreviewing || n.isFirstVisibleCell) && d({
  borderLeftColor: (t.vars || t).palette.divider
}, Gt), (n.isEndOfPreviewing || n.isLastVisibleCell) && d({
  borderRightColor: (t.vars || t).palette.divider
}, Kt))));
vr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  ownerState: e.object.isRequired
};
const Rl = X(Uo, {
  name: "MuiDateRangePickerDay",
  slot: "Day",
  overridesResolver: (t, n) => [{
    [`&.${de.dayInsideRangeInterval}`]: n.dayInsideRangeInterval
  }, {
    [`&.${de.dayOutsideRangeInterval}`]: n.dayOutsideRangeInterval
  }, {
    [`&.${de.notSelectedDate}`]: n.notSelectedDate
  }, n.day]
})(({
  ownerState: t
}) => d({
  // Required to overlap preview border
  transform: "scale(1.1)",
  "& > *": {
    transform: "scale(0.9)"
  }
}, t.draggable && {
  cursor: "grab"
}, t.draggable && {
  touchAction: "none"
})), xr = /* @__PURE__ */ g.forwardRef(function(n, o) {
  const r = fe({
    props: n,
    name: "MuiDateRangePickerDay"
  }), {
    className: a,
    day: s,
    outsideCurrentMonth: i,
    isHighlighting: l,
    isPreviewing: c,
    selected: u = !1,
    isVisuallySelected: p,
    sx: m,
    draggable: h,
    isFirstVisibleCell: f,
    isLastVisibleCell: x
  } = r, D = Z(r, Cl);
  Vn("x-date-pickers-pro", Ml);
  const C = ue(), S = C.isSameDay(s, C.endOfMonth(s)), v = C.isSameDay(s, C.startOfMonth(s)), M = d({}, r, {
    selected: u,
    isStartOfMonth: v,
    isEndOfMonth: S,
    draggable: h,
    isFirstVisibleCell: f,
    isLastVisibleCell: x,
    isHiddenDayFiller: i && !D.showDaysOutsideCurrentMonth
  }), b = Sl(M);
  return /* @__PURE__ */ P.jsx(Pr, {
    className: De(b.root, a),
    ownerState: M,
    sx: m,
    children: /* @__PURE__ */ P.jsx(vr, {
      className: b.rangeIntervalPreview,
      ownerState: M,
      children: /* @__PURE__ */ P.jsx(Rl, d({}, D, {
        ref: o,
        disableMargin: !0,
        day: s,
        selected: p,
        outsideCurrentMonth: i,
        className: b.day,
        ownerState: M,
        draggable: h,
        isFirstVisibleCell: f,
        isLastVisibleCell: x
      }))
    })
  });
});
process.env.NODE_ENV !== "production" && (xr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: e.oneOfType([e.func, e.shape({
    current: e.shape({
      focusVisible: e.func.isRequired
    })
  })]),
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: e.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  className: e.string,
  component: e.elementType,
  /**
   * The date to show.
   */
  day: e.any.isRequired,
  /**
   * If `true`, renders as disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, days are rendering without margin. Useful for displaying linked range of days.
   * @default false
   */
  disableMargin: e.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: e.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: e.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: e.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: e.string,
  isAnimating: e.bool,
  /**
   * Set to `true` if the `day` is the end of a highlighted date range.
   */
  isEndOfHighlighting: e.bool.isRequired,
  /**
   * Set to `true` if the `day` is the end of a previewing date range.
   */
  isEndOfPreviewing: e.bool.isRequired,
  /**
   * If `true`, day is the first visible cell of the month.
   * Either the first day of the month or the first day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isFirstVisibleCell: e.bool.isRequired,
  /**
   * Set to `true` if the `day` is in a highlighted date range.
   */
  isHighlighting: e.bool.isRequired,
  /**
   * If `true`, day is the last visible cell of the month.
   * Either the last day of the month or the last day of the week depending on `showDaysOutsideCurrentMonth`.
   */
  isLastVisibleCell: e.bool.isRequired,
  /**
   * Set to `true` if the `day` is in a preview date range.
   */
  isPreviewing: e.bool.isRequired,
  /**
   * Set to `true` if the `day` is the start of a highlighted date range.
   */
  isStartOfHighlighting: e.bool.isRequired,
  /**
   * Set to `true` if the `day` is the start of a previewing date range.
   */
  isStartOfPreviewing: e.bool.isRequired,
  /**
   * Indicates if the day should be visually selected.
   */
  isVisuallySelected: e.bool,
  onDaySelect: e.func.isRequired,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: e.func,
  onMouseEnter: e.func,
  /**
   * If `true`, day is outside of month and will be hidden.
   */
  outsideCurrentMonth: e.bool.isRequired,
  /**
   * If `true`, renders as selected.
   * @default false
   */
  selected: e.bool,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: e.bool,
  style: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * @default 0
   */
  tabIndex: e.number,
  /**
   * If `true`, renders as today date.
   * @default false
   */
  today: e.bool,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: e.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: e.oneOfType([e.func, e.shape({
    current: e.shape({
      pulsate: e.func.isRequired,
      start: e.func.isRequired,
      stop: e.func.isRequired
    })
  })])
});
const kl = /* @__PURE__ */ g.memo(xr), vn = (t) => {
  const n = [], o = [];
  return t.forEach((r) => {
    r.dateName === "start" ? n.push(r) : o.push(r);
  }), {
    startDate: n,
    endDate: o
  };
}, Tl = (t) => t.map((n, o) => o === t.length - 1 ? d({}, n, {
  separator: null
}) : n), Ol = ["value", "referenceDate"], ct = {
  emptyValue: [null, null],
  getTodayValue: (t, n, o) => [Jt(t, n, o), Jt(t, n, o)],
  getInitialReferenceValue: (t) => {
    let {
      value: n,
      referenceDate: o
    } = t, r = Z(t, Ol);
    const a = n[0] != null && r.utils.isValid(n[0]), s = n[1] != null && r.utils.isValid(n[1]);
    if (a && s)
      return n;
    const i = o != null ? o : No(r);
    return [a ? n[0] : i, s ? n[1] : i];
  },
  cleanValue: (t, n) => n.map((o) => Ao(t, o)),
  areValuesEqual: (t, n, o) => Cn(t, n[0], o[0]) && Cn(t, n[1], o[1]),
  isSameError: (t, n) => n !== null && t[1] === n[1] && t[0] === n[0],
  hasError: (t) => t[0] != null || t[1] != null,
  defaultErrorState: [null, null],
  getTimezone: (t, n) => {
    const o = n[0] == null || !t.isValid(n[0]) ? null : t.getTimezone(n[0]), r = n[1] == null || !t.isValid(n[1]) ? null : t.getTimezone(n[1]);
    if (o != null && r != null && o !== r)
      throw new Error("MUI: The timezone of the start and the end date should be the same");
    return o != null ? o : r;
  },
  setTimezone: (t, n, o) => [o[0] == null ? null : t.setTimezone(o[0], n), o[1] == null ? null : t.setTimezone(o[1], n)]
}, Il = {
  updateReferenceValue: (t, n, o) => {
    const r = n[0] != null && t.isValid(n[0]), a = n[1] != null && t.isValid(n[1]);
    return !r && !a ? o : r && a ? n : r ? [n[0], o[0]] : [o[1], n[1]];
  },
  getSectionsFromValue: (t, [n, o], r, a, s) => {
    const i = r == null ? {
      startDate: null,
      endDate: null
    } : vn(r), l = (c, u, p) => {
      if (!t.isValid(c) && !!u)
        return u;
      const h = s(c);
      return h.map((f, x) => x === h.length - 1 && p === "start" ? d({}, f, {
        dateName: p,
        endSeparator: `${f.endSeparator}${a ? "⁩ – ⁦" : " – "}`
      }) : d({}, f, {
        dateName: p
      }));
    };
    return Ln([...l(n, i.startDate, "start"), ...l(o, i.endDate, "end")], a);
  },
  getValueStrFromSections: (t, n) => {
    const o = vn(t);
    return Wo([...o.startDate, ...o.endDate], n);
  },
  parseValueStr: (t, n, o) => {
    const [r, a] = t.split("–");
    return [r, a].map((s, i) => s == null ? null : o(s.trim(), n[i]));
  },
  getActiveDateManager: (t, n, o) => {
    const r = o.dateName === "start" ? 0 : 1, a = (s, i) => r === 0 ? [s, i[1]] : [i[0], s];
    return {
      date: n.value[r],
      referenceDate: n.referenceValue[r],
      getSections: (s) => {
        const i = vn(s);
        return r === 0 ? Tl(i.startDate) : i.endDate;
      },
      getNewValuesFromNewActiveDate: (s) => ({
        value: a(s, n.value),
        referenceValue: s == null || !t.isValid(s) ? n.referenceValue : a(s, n.referenceValue)
      })
    };
  }
}, Ht = (t, n) => !!(n && n[0] && n[1] && !t.isBefore(n[1], n[0])), xn = (t, n, o) => Ht(t, o) && t.isWithinRange(n, o), Qt = (t, n, o) => Ht(t, o) && t.isSameDay(n, o[0]), Vt = (t, n, o) => Ht(t, o) && t.isSameDay(n, o[1]), Vl = ["shouldDisableDate"], $t = ({
  props: t,
  value: n,
  adapter: o
}) => {
  const [r, a] = n, {
    shouldDisableDate: s
  } = t, i = Z(t, Vl), l = [Dt({
    adapter: o,
    value: r,
    props: d({}, i, {
      shouldDisableDate: (c) => !!(s != null && s(c, "start"))
    })
  }), Dt({
    adapter: o,
    value: a,
    props: d({}, i, {
      shouldDisableDate: (c) => !!(s != null && s(c, "end"))
    })
  })];
  return l[0] || l[1] ? l : r === null || a === null ? [null, null] : Ht(o.utils, n) ? [null, null] : ["invalidRange", "invalidRange"];
}, wr = (t) => {
  var n, o, r;
  const a = ue(), s = rt();
  return d({}, t, {
    disablePast: (n = t.disablePast) != null ? n : !1,
    disableFuture: (o = t.disableFuture) != null ? o : !1,
    format: (r = t.format) != null ? r : a.formats.keyboardDate,
    minDate: Te(a, t.minDate, s.minDate),
    maxDate: Te(a, t.maxDate, s.maxDate)
  });
}, Fl = ({
  props: t,
  inputRef: n
}) => {
  const o = wr(t), {
    forwardedProps: r,
    internalProps: a
  } = Hn(o, "date");
  return Go({
    inputRef: n,
    forwardedProps: r,
    internalProps: a,
    valueManager: ct,
    fieldValueManager: Il,
    validator: $t,
    valueType: "date"
  });
}, Do = (t, n) => Object.keys(t).reduce((o, r) => (n.includes(r) || (o[r] = t[r]), o), {}), El = ({
  sharedProps: t,
  startTextFieldProps: n,
  startInputRef: o,
  unstableStartFieldRef: r,
  endTextFieldProps: a,
  endInputRef: s,
  unstableEndFieldRef: i
}) => {
  const l = wr(t), c = ot(), {
    value: u,
    defaultValue: p,
    format: m,
    formatDensity: h,
    shouldRespectLeadingZeros: f,
    onChange: x,
    disabled: D,
    readOnly: C,
    selectedSections: S,
    onSelectedSectionsChange: v,
    timezone: M
  } = l, {
    value: b,
    handleValueChange: y,
    timezone: k
  } = _t({
    name: "useMultiInputDateRangeField",
    timezone: M,
    value: u,
    defaultValue: p,
    onChange: x,
    valueManager: ct
  }), O = (R) => (z, K) => {
    const B = R === 0 ? [z, b[1]] : [b[0], z], q = d({}, K, {
      validationError: $t({
        adapter: c,
        value: B,
        props: d({}, l, {
          timezone: k
        })
      })
    });
    y(B, q);
  }, V = Y(O(0)), w = Y(O(1)), A = Bn(d({}, l, {
    value: b,
    timezone: k
  }), $t, ct.isSameError, ct.defaultErrorState), I = d({
    error: !!A[0]
  }, n, {
    disabled: D,
    readOnly: C,
    format: m,
    formatDensity: h,
    shouldRespectLeadingZeros: f,
    timezone: k,
    unstableFieldRef: r,
    value: u === void 0 ? void 0 : u[0],
    defaultValue: p === void 0 ? void 0 : p[0],
    onChange: V,
    selectedSections: S,
    onSelectedSectionsChange: v
  }), F = d({
    error: !!A[1]
  }, a, {
    format: m,
    formatDensity: h,
    shouldRespectLeadingZeros: f,
    disabled: D,
    readOnly: C,
    timezone: k,
    unstableFieldRef: i,
    value: u === void 0 ? void 0 : u[1],
    defaultValue: p === void 0 ? void 0 : p[1],
    onChange: w,
    selectedSections: S,
    onSelectedSectionsChange: v
  }), N = Rn({
    props: I,
    inputRef: o
  }), T = Rn({
    props: F,
    inputRef: s
  });
  return {
    startDate: Do(N, ["clearable", "onClear"]),
    endDate: Do(T, ["clearable", "onClear"])
  };
}, $l = ["slots", "slotProps", "components", "componentsProps", "disabled", "autoFocus", "unstableStartFieldRef", "unstableEndFieldRef", "className"], Al = ["onKeyDown", "ref", "readOnly", "inputMode"], Nl = ["onKeyDown", "ref", "readOnly", "inputMode"], Po = Ce("MuiMultiInputDateRangeField", ["root", "separator"]), jl = (t) => we("MuiMultiInputDateRangeField", t), _l = (t) => {
  const {
    classes: n
  } = t;
  return ve({
    root: ["root"],
    separator: ["separator"]
  }, jl, n);
}, Ll = X(/* @__PURE__ */ g.forwardRef((t, n) => /* @__PURE__ */ P.jsx(Xr, d({
  ref: n,
  spacing: 2,
  direction: "row",
  alignItems: "baseline"
}, t))), {
  name: "MuiMultiInputDateRangeField",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})({}), Bl = X((t) => {
  var n;
  return /* @__PURE__ */ P.jsx(Ze, d({}, t, {
    children: (n = t.children) != null ? n : " – "
  }));
}, {
  name: "MuiMultiInputDateRangeField",
  slot: "Separator",
  overridesResolver: (t, n) => n.separator
})({}), dn = /* @__PURE__ */ g.forwardRef(function(n, o) {
  var r, a, s, i;
  const l = fe({
    props: n,
    name: "MuiMultiInputDateRangeField"
  }), {
    internalProps: c,
    forwardedProps: u
  } = Hn(l, "date"), {
    slots: p,
    slotProps: m,
    components: h,
    componentsProps: f,
    disabled: x,
    autoFocus: D,
    unstableStartFieldRef: C,
    unstableEndFieldRef: S,
    className: v
  } = u, M = Z(u, $l), b = p != null ? p : Lt(h), y = m != null ? m : f, k = l, O = _l(k), V = (r = b == null ? void 0 : b.root) != null ? r : Ll, w = me({
    elementType: V,
    externalSlotProps: y == null ? void 0 : y.root,
    externalForwardedProps: M,
    additionalProps: {
      ref: o
    },
    ownerState: k,
    className: De(v, O.root)
  }), A = (a = b == null ? void 0 : b.textField) != null ? a : On, I = me({
    elementType: A,
    externalSlotProps: y == null ? void 0 : y.textField,
    additionalProps: {
      autoFocus: D
    },
    ownerState: d({}, k, {
      position: "start"
    })
  }), F = me({
    elementType: A,
    externalSlotProps: y == null ? void 0 : y.textField,
    ownerState: d({}, k, {
      position: "end"
    })
  }), N = (s = b == null ? void 0 : b.separator) != null ? s : Bl, T = me({
    elementType: N,
    externalSlotProps: (i = y == null ? void 0 : y.separator) != null ? i : f == null ? void 0 : f.separator,
    ownerState: k,
    className: O.separator
  }), R = El({
    sharedProps: d({}, c, {
      disabled: x
    }),
    startTextFieldProps: I,
    endTextFieldProps: F,
    unstableStartFieldRef: C,
    unstableEndFieldRef: S,
    startInputRef: I.inputRef,
    endInputRef: F.inputRef
  }), {
    startDate: {
      onKeyDown: z,
      ref: K,
      readOnly: B,
      inputMode: q
    },
    endDate: {
      onKeyDown: Q,
      ref: ie,
      readOnly: ae,
      inputMode: se
    }
  } = R, H = Z(R.startDate, Nl), L = Z(R.endDate, Al);
  return /* @__PURE__ */ P.jsxs(V, d({}, w, {
    children: [/* @__PURE__ */ P.jsx(A, d({
      fullWidth: !0
    }, H, {
      InputProps: d({}, H.InputProps, {
        readOnly: B
      }),
      inputProps: d({}, H.inputProps, {
        ref: K,
        inputMode: q,
        onKeyDown: z
      })
    })), /* @__PURE__ */ P.jsx(N, d({}, T)), /* @__PURE__ */ P.jsx(A, d({
      fullWidth: !0
    }, L, {
      InputProps: d({}, L.InputProps, {
        readOnly: ae
      }),
      inputProps: d({}, L.inputProps, {
        ref: ie,
        readOnly: ae,
        inputMode: se,
        onKeyDown: Q
      })
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (dn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  autoFocus: e.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  className: e.string,
  component: e.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: e.arrayOf(e.any),
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: e.oneOfType([e.oneOf(["column-reverse", "column", "row-reverse", "row"]), e.arrayOf(e.oneOf(["column-reverse", "column", "row-reverse", "row"])), e.object]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * Add an element between each child.
   */
  divider: e.node,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: e.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: e.oneOf(["dense", "spacious"]),
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: e.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: e.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: e.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: e.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: e.any,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: e.oneOfType([e.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), e.number, e.shape({
    endIndex: e.number.isRequired,
    startIndex: e.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * If `true`, the format will respect the leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (e.g: "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default `false`
   */
  shouldRespectLeadingZeros: e.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: e.oneOfType([e.arrayOf(e.oneOfType([e.number, e.string])), e.number, e.object, e.string]),
  style: e.object,
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  unstableEndFieldRef: e.oneOfType([e.func, e.object]),
  unstableStartFieldRef: e.oneOfType([e.func, e.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: e.bool,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.arrayOf(e.any)
});
const Hl = ["slots", "slotProps", "components", "componentsProps", "InputProps", "inputProps"], Wl = ["inputRef"], zl = ["ref", "onPaste", "onKeyDown", "inputMode", "readOnly", "clearable", "onClear"], qn = /* @__PURE__ */ g.forwardRef(function(n, o) {
  var r, a, s;
  const i = fe({
    props: n,
    name: "MuiSingleInputDateRangeField"
  }), {
    slots: l,
    slotProps: c,
    components: u,
    componentsProps: p,
    InputProps: m,
    inputProps: h
  } = i, f = Z(i, Hl), x = i, D = (r = (a = l == null ? void 0 : l.textField) != null ? a : u == null ? void 0 : u.TextField) != null ? r : On, C = me({
    elementType: D,
    externalSlotProps: (s = c == null ? void 0 : c.textField) != null ? s : p == null ? void 0 : p.textField,
    externalForwardedProps: f,
    ownerState: x
  }), {
    inputRef: S
  } = C, v = Z(C, Wl);
  v.inputProps = d({}, h, v.inputProps), v.InputProps = d({}, m, v.InputProps);
  const M = Fl({
    props: v,
    inputRef: S
  }), {
    ref: b,
    onPaste: y,
    onKeyDown: k,
    inputMode: O,
    readOnly: V,
    clearable: w,
    onClear: A
  } = M, I = Z(M, zl), {
    InputProps: F,
    fieldProps: N
  } = ur({
    onClear: A,
    clearable: w,
    fieldProps: I,
    InputProps: I.InputProps,
    slots: l,
    slotProps: c,
    components: u,
    componentsProps: p
  });
  return /* @__PURE__ */ P.jsx(D, d({
    ref: o
  }, N, {
    InputProps: d({}, F, {
      readOnly: V
    }),
    inputProps: d({}, I.inputProps, {
      inputMode: O,
      onPaste: y,
      onKeyDown: k,
      ref: b
    })
  }));
});
qn.fieldType = "single-input";
process.env.NODE_ENV !== "production" && (qn.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: e.bool,
  className: e.string,
  /**
   * If `true`, a clear button will be shown in the field allowing value clearing.
   * @default false
   */
  clearable: e.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: e.oneOf(["error", "info", "primary", "secondary", "success", "warning"]),
  component: e.elementType,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: e.arrayOf(e.any),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: e.bool,
  /**
   * Format of the date when rendered in the input(s).
   */
  format: e.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: e.oneOf(["dense", "spacious"]),
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: e.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: e.bool,
  /**
   * The helper text content.
   */
  helperText: e.node,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: e.bool,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: e.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: e.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: e.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: e.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: nt,
  /**
   * The label content.
   */
  label: e.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: e.oneOf(["dense", "none", "normal"]),
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Name attribute of the `input` element.
   */
  name: e.string,
  onBlur: e.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: e.func,
  /**
   * Callback fired when the clear button is clicked.
   */
  onClear: e.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error.
   * @param {TValue} value The value associated to the error.
   */
  onError: e.func,
  onFocus: e.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: e.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   * @default false
   */
  readOnly: e.bool,
  /**
   * The date used to generate a part of the new value that is not present in the format when both `value` and `defaultValue` are empty.
   * For example, on time fields it will be used to determine the date to set.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`. Value is rounded to the most granular section used.
   */
  referenceDate: e.any,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: e.bool,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: e.oneOfType([e.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), e.number, e.shape({
    endIndex: e.number.isRequired,
    startIndex: e.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * If `true`, the format will respect the leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `8/16/2018`)
   * If `false`, the format will always add leading zeroes (e.g: on dayjs, the format `M/D/YYYY` will render `08/16/2018`)
   *
   * Warning n°1: Luxon is not able to respect the leading zeroes when using macro tokens (e.g: "DD"), so `shouldRespectLeadingZeros={true}` might lead to inconsistencies when using `AdapterLuxon`.
   *
   * Warning n°2: When `shouldRespectLeadingZeros={true}`, the field will add an invisible character on the sections containing a single digit to make sure `onChange` is fired.
   * If you need to get the clean value from the input, you can remove this character using `input.value.replace(/\u200e/g, '')`.
   *
   * Warning n°3: When used in strict mode, dayjs and moment require to respect the leading zeros.
   * This mean that when using `shouldRespectLeadingZeros={false}`, if you retrieve the value directly from the input (not listening to `onChange`) and your format contains tokens without leading zeros, the value will not be parsed by your library.
   *
   * @default `false`
   */
  shouldRespectLeadingZeros: e.bool,
  /**
   * The size of the component.
   */
  size: e.oneOf(["medium", "small"]),
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  style: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The ref object used to imperatively interact with the field.
   */
  unstableFieldRef: e.oneOfType([e.func, e.object]),
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.arrayOf(e.any),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: e.oneOf(["filled", "outlined", "standard"])
});
const Yl = (t) => we("MuiDateRangeCalendar", t), kn = Ce("MuiDateRangeCalendar", ["root", "monthContainer", "dayDragging"]);
function Tn({
  utils: t,
  range: n,
  newDate: o,
  rangePosition: r,
  allowRangeFlip: a = !1
}) {
  const [s, i] = n;
  if (r === "start") {
    const c = a ? {
      nextSelection: "start",
      newRange: [i, o]
    } : {
      nextSelection: "end",
      newRange: [o, null]
    };
    return i && t.isAfter(o, i) ? c : {
      nextSelection: "end",
      newRange: [o, i]
    };
  }
  const l = a ? {
    nextSelection: "end",
    newRange: [o, s]
  } : {
    nextSelection: "end",
    newRange: [o, null]
  };
  return s && t.isBefore(o, s) ? l : {
    nextSelection: "start",
    newRange: [s, o]
  };
}
function ql(t) {
  if (t.newDate == null)
    return [null, null];
  const [n, o] = t.range, {
    newRange: r
  } = Tn(t);
  if (!n || !o)
    return r;
  const [a, s] = r;
  return t.rangePosition === "end" ? [o, s] : [a, n];
}
const ht = (t, n, o) => {
  const r = t.dataset.timestamp;
  if (!r)
    return null;
  const a = +r;
  return n.dateWithTimezone(new Date(a).toISOString(), o);
}, Ul = (t) => t.target.dataset.timestamp === t.dataTransfer.getData("draggingDate"), Cr = (t) => t && (t instanceof HTMLButtonElement && !t.disabled ? t : t.children.length ? Cr(t.children[0]) : null), wn = (t, n) => {
  var o;
  if (((o = t.changedTouches) == null ? void 0 : o.length) === 1 && t.touches.length <= 1) {
    const r = document.elementFromPoint(t.changedTouches[0].clientX, t.changedTouches[0].clientY), a = Cr(r);
    return n && a === t.changedTouches[0].target ? null : a;
  }
  return null;
}, Kl = ({
  utils: t,
  setRangeDragDay: n,
  setIsDragging: o,
  isDragging: r,
  onDatePositionChange: a,
  onDrop: s,
  disableDragEditing: i,
  dateRange: l,
  timezone: c
}) => {
  const u = g.useRef(null);
  g.useEffect(() => {
    u.current = document.createElement("img"), u.current.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  }, []);
  const p = (b) => {
    if (b == null)
      return !1;
    const y = !i && !!l[0] && !!l[1], k = Qt(t, b, l), O = Vt(t, b, l);
    return y && (k || O);
  }, m = Y((b) => {
    const y = ht(b.target, t, c);
    if (!p(y))
      return;
    b.stopPropagation(), u.current && b.dataTransfer.setDragImage(u.current, 0, 0), n(y), b.dataTransfer.effectAllowed = "move", o(!0);
    const k = b.target.dataset;
    k.timestamp && b.dataTransfer.setData("draggingDate", k.timestamp), k.position && a(k.position);
  }), h = Y((b) => {
    const y = wn(b);
    if (!y)
      return;
    const k = ht(y, t, c);
    p(k) && n(k);
  }), f = Y((b) => {
    r && (b.preventDefault(), b.stopPropagation(), b.dataTransfer.dropEffect = "move", n(ht(b.target, t, c)));
  }), x = Y((b) => {
    const y = wn(b);
    if (!y)
      return;
    const k = ht(y, t, c);
    if (k && n(k), !(y === b.changedTouches[0].target) || !p(k))
      return;
    o(!0);
    const w = b.target.dataset;
    w.position && a(w.position);
  }), D = Y((b) => {
    r && (b.preventDefault(), b.stopPropagation());
  }), C = Y((b) => {
    r && (b.preventDefault(), b.stopPropagation(), b.dataTransfer.dropEffect = "move");
  }), S = Y((b) => {
    if (!r)
      return;
    n(null), o(!1);
    const y = wn(b, !0);
    if (!y)
      return;
    y.focus();
    const k = ht(y, t, c);
    k && s(k);
  }), v = Y((b) => {
    r && (b.preventDefault(), b.stopPropagation(), o(!1), n(null));
  }), M = Y((b) => {
    if (!r || (b.preventDefault(), b.stopPropagation(), o(!1), n(null), b.currentTarget.focus(), Ul(b)))
      return;
    const y = ht(b.target, t, c);
    y && s(y);
  });
  return {
    onDragStart: m,
    onDragEnter: f,
    onDragLeave: D,
    onDragOver: C,
    onDragEnd: v,
    onDrop: M,
    onTouchStart: h,
    onTouchMove: x,
    onTouchEnd: S
  };
}, Gl = ({
  disableDragEditing: t,
  utils: n,
  onDatePositionChange: o,
  onDrop: r,
  dateRange: a,
  timezone: s
}) => {
  const [i, l] = g.useState(!1), [c, u] = g.useState(null), p = Y((f) => {
    n.isEqual(f, c) || u(f);
  }), m = g.useMemo(() => {
    const [f, x] = a;
    if (c) {
      if (f && n.isBefore(c, f))
        return "start";
      if (x && n.isAfter(c, x))
        return "end";
    }
    return null;
  }, [a, c, n]), h = Kl({
    utils: n,
    onDatePositionChange: o,
    onDrop: r,
    setIsDragging: l,
    isDragging: i,
    setRangeDragDay: p,
    disableDragEditing: t,
    dateRange: a,
    timezone: s
  });
  return g.useMemo(() => d({
    isDragging: i,
    rangeDragDay: c,
    draggingDatePosition: m
  }, t ? {} : h), [i, c, m, t, h]);
}, Un = (t) => {
  var n;
  const o = g.useRef(), [r, a] = Ge({
    name: "useRangePosition",
    state: "rangePosition",
    controlled: t.rangePosition,
    default: (n = t.defaultRangePosition) != null ? n : "start"
  }), s = (l) => {
    if (o.current == null)
      return;
    const c = o.current.getSections(), u = l === "start" ? 0 : c.length / 2;
    o.current.setSelectedSections(u);
  }, i = Y((l) => {
    var c;
    a(l), (c = t.onRangePositionChange) == null || c.call(t, l), s(l);
  });
  return {
    rangePosition: r,
    onRangePositionChange: i,
    singleInputFieldRef: o
  };
}, Ql = ["value", "defaultValue", "referenceDate", "onChange", "className", "disableFuture", "disablePast", "minDate", "maxDate", "shouldDisableDate", "reduceAnimations", "onMonthChange", "defaultCalendarMonth", "rangePosition", "defaultRangePosition", "onRangePositionChange", "calendars", "currentMonthCalendarPosition", "components", "componentsProps", "slots", "slotProps", "loading", "renderLoading", "disableHighlightToday", "readOnly", "disabled", "showDaysOutsideCurrentMonth", "dayOfWeekFormatter", "disableAutoMonthSwitching", "autoFocus", "fixedWeekNumber", "disableDragEditing", "displayWeekNumber", "timezone"], Zl = ["isDragging", "rangeDragDay", "draggingDatePosition"], Xl = un(), Jl = X("div", {
  name: "MuiDateRangeCalendar",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})({
  display: "flex",
  flexDirection: "row"
}), ec = X("div", {
  name: "MuiDateRangeCalendar",
  slot: "Container",
  overridesResolver: (t, n) => n.monthContainer
})(({
  theme: t
}) => ({
  "&:not(:last-of-type)": {
    borderRight: `1px solid ${(t.vars || t).palette.divider}`
  }
})), tc = X(Vo)({
  padding: "16px 16px 8px 16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
}), nc = 40, oc = (nc + jt * 2) * 6, rc = tr(["The `currentMonthCalendarPosition` prop must be an integer between `1` and the amount of calendars rendered.", "For example if you have 2 calendars rendered, it should be equal to either 1 or 2."]), ac = X(lr)(({
  theme: t
}) => ({
  minWidth: 312,
  minHeight: oc,
  [`&.${kn.dayDragging}`]: {
    [`& .${de.day}`]: {
      cursor: "grabbing"
    },
    [`& .${de.root}:not(.${de.rangeIntervalDayHighlightStart}):not(.${de.rangeIntervalDayHighlightEnd}) .${de.day}:not(.${de.notSelectedDate})`]: {
      // we can't override `PickersDay` background color here, because it's styles take precedence
      opacity: 0.6
    }
  },
  [`&:not(.${kn.dayDragging}) .${de.dayOutsideRangeInterval}`]: {
    "@media (pointer: fine)": {
      "&:hover": {
        border: `1px solid ${(t.vars || t).palette.grey[500]}`
      }
    }
  }
}));
function sc(t, n) {
  var o, r, a, s, i, l, c;
  const u = ue(), p = rt(), m = Wn(), h = fe({
    props: t,
    name: n
  });
  return d({}, h, {
    renderLoading: (o = h.renderLoading) != null ? o : () => /* @__PURE__ */ P.jsx("span", {
      children: "..."
    }),
    reduceAnimations: (r = h.reduceAnimations) != null ? r : m,
    loading: (a = t.loading) != null ? a : !1,
    disablePast: (s = t.disablePast) != null ? s : !1,
    disableFuture: (i = t.disableFuture) != null ? i : !1,
    minDate: Te(u, h.minDate, p.minDate),
    maxDate: Te(u, h.maxDate, p.maxDate),
    calendars: (l = h.calendars) != null ? l : 2,
    disableDragEditing: (c = h.disableDragEditing) != null ? c : !1
  });
}
const ic = (t) => {
  const {
    classes: n,
    isDragging: o
  } = t;
  return ve({
    root: ["root"],
    monthContainer: ["monthContainer"],
    dayCalendar: [o && "dayDragging"]
  }, Yl, n);
}, Mr = /* @__PURE__ */ g.forwardRef(function(n, o) {
  const r = sc(n, "MuiDateRangeCalendar"), a = rn(Ko, {
    defaultMatches: !1
  }), {
    value: s,
    defaultValue: i,
    referenceDate: l,
    onChange: c,
    className: u,
    disableFuture: p,
    disablePast: m,
    minDate: h,
    maxDate: f,
    shouldDisableDate: x,
    reduceAnimations: D,
    onMonthChange: C,
    defaultCalendarMonth: S,
    rangePosition: v,
    defaultRangePosition: M,
    onRangePositionChange: b,
    calendars: y,
    currentMonthCalendarPosition: k = 1,
    components: O,
    componentsProps: V,
    slots: w,
    slotProps: A,
    loading: I,
    renderLoading: F,
    disableHighlightToday: N,
    readOnly: T,
    disabled: R,
    showDaysOutsideCurrentMonth: z,
    dayOfWeekFormatter: K,
    disableAutoMonthSwitching: B,
    autoFocus: q,
    fixedWeekNumber: Q,
    disableDragEditing: ie,
    displayWeekNumber: ae,
    timezone: se
  } = r, H = Z(r, Ql), {
    value: L,
    handleValueChange: oe,
    timezone: $
  } = _t({
    name: "DateRangeCalendar",
    timezone: se,
    value: s,
    defaultValue: i,
    onChange: c,
    valueManager: ct
  }), j = ue(), pe = $e(), ce = Nt($), G = w != null ? w : Lt(O), ee = A != null ? A : V, {
    rangePosition: E,
    onRangePositionChange: ne
  } = Un({
    rangePosition: v,
    defaultRangePosition: M,
    onRangePositionChange: b
  }), xe = Y((le) => {
    E !== le && ne(le);
  }), ge = Y((le, Pe, ye = !1) => {
    const {
      nextSelection: Le,
      newRange: Be
    } = Tn({
      newDate: le,
      utils: j,
      range: L,
      rangePosition: E,
      allowRangeFlip: ye
    });
    ne(Le);
    const St = E === "end" && Ht(j, Be);
    oe(Be, St ? "finish" : "partial");
  }), Ne = Y((le) => {
    ge(le, void 0, !0);
  }), te = ie || R || T, J = g.useMemo(() => [L[0] == null || !j.isValid(L[0]) ? L[0] : j.startOfDay(L[0]), L[1] == null || !j.isValid(L[1]) ? L[1] : j.endOfDay(L[1])], [L, j]), W = Gl({
    disableDragEditing: te,
    onDrop: Ne,
    onDatePositionChange: xe,
    utils: j,
    dateRange: J,
    timezone: $
  }), {
    isDragging: U,
    rangeDragDay: re,
    draggingDatePosition: be
  } = W, Re = Z(W, Zl), Me = d({}, r, {
    isDragging: U
  }), Ie = ic(Me), Se = g.useMemo(() => {
    if (!J[0] || !J[1] || !re)
      return [null, null];
    const le = Tn({
      utils: j,
      range: J,
      newDate: re,
      rangePosition: E,
      allowRangeFlip: !0
    }).newRange;
    return le[0] !== null && le[1] !== null ? [j.startOfDay(le[0]), j.endOfDay(le[1])] : le;
  }, [E, re, j, J]), Xe = g.useMemo(() => {
    if (x)
      return (le) => x(le, be || E);
  }, [x, E, be]), {
    calendarState: ke,
    changeFocusedDay: je,
    changeMonth: ze,
    handleChangeMonth: at,
    onMonthSwitchingAnimationEnd: Fe
  } = cr({
    value: L[0] || L[1],
    referenceDate: l,
    defaultCalendarMonth: S,
    disableFuture: p,
    disablePast: m,
    disableSwitchToMonthOnDayFocus: !0,
    maxDate: f,
    minDate: h,
    onMonthChange: C,
    reduceAnimations: D,
    shouldDisableDate: Xe,
    timezone: $
  }), vt = g.useRef(null);
  g.useEffect(() => {
    var le, Pe;
    const ye = E === "start" ? L[0] : L[1];
    if (!ye || !j.isValid(ye))
      return;
    const Le = E === "start" ? (le = vt.current) == null ? void 0 : le[0] : (Pe = vt.current) == null ? void 0 : Pe[1];
    if (vt.current = L, B && Le && j.isEqual(Le, ye))
      return;
    const Be = y - 1, St = j.getMonth(ke.currentMonth), zt = j.getMonth(ye);
    if (!j.isSameYear(ke.currentMonth, ye) || zt < St || zt > St + Be) {
      const Rt = E === "start" ? ye : (
        // If need to focus end, scroll to the state when "end" is displaying in the last calendar
        j.addMonths(ye, -Be)
      );
      ze(Rt);
    }
  }, [E, L]);
  const pn = g.useCallback(() => {
    ze(j.addMonths(ke.currentMonth, 1));
  }, [ze, ke.currentMonth, j]), fn = g.useCallback(() => {
    ze(j.addMonths(ke.currentMonth, -1));
  }, [ze, ke.currentMonth, j]), hn = Eo(ke.currentMonth, {
    disableFuture: p,
    maxDate: f,
    timezone: $
  }), xt = $o(ke.currentMonth, {
    disablePast: m,
    minDate: h,
    timezone: $
  }), Wt = {
    disablePast: m,
    disableFuture: p,
    maxDate: f,
    minDate: h
  }, wt = {
    disableHighlightToday: N,
    readOnly: T,
    disabled: R
  }, Ct = R && L[0] || h, Mt = R && L[1] || f, [mn, he] = g.useState(null), Ee = g.useMemo(() => ({
    onMouseLeave: () => he(null)
  }), []), Ye = ql({
    utils: j,
    range: J,
    newDate: mn,
    rangePosition: E
  }), _e = Y((le, Pe) => {
    xn(j, Pe, J) ? he(null) : he(Pe);
  }), Fr = d({
    day: kl
  }, G), Er = d({}, ee, {
    day: (le) => {
      var Pe;
      const {
        day: ye
      } = le, Le = Qt(j, ye, J), Be = Vt(j, ye, J), zt = !te && J[0] && J[1] && (Le || Be);
      let Rt;
      Le ? Rt = "start" : Be && (Rt = "end");
      const Kn = U ? Qt(j, ye, Se) : Le, Nr = U ? Vt(j, ye, Se) : Be;
      return d({
        isPreviewing: a ? xn(j, ye, Ye) : !1,
        isStartOfPreviewing: a ? Qt(j, ye, Ye) : !1,
        isEndOfPreviewing: a ? Vt(j, ye, Ye) : !1,
        isHighlighting: xn(j, ye, U ? Se : J),
        isStartOfHighlighting: Kn,
        isEndOfHighlighting: U ? Vt(j, ye, Se) : Be,
        onMouseEnter: a ? _e : void 0,
        // apply selected styling to the dragging start or end day
        isVisuallySelected: le.selected || U && (Kn || Nr),
        "data-position": Rt
      }, Re, {
        draggable: zt ? !0 : void 0
      }, (Pe = Ke(ee == null ? void 0 : ee.day, le)) != null ? Pe : {});
    }
  }), $r = g.useMemo(() => Array.from({
    length: y
  }).map((le, Pe) => Pe), [y]), Je = g.useMemo(() => {
    process.env.NODE_ENV !== "production" && (k > y || k < 1) && rc();
    const le = j.addMonths(ke.currentMonth, 1 - k);
    return Array.from({
      length: y
    }).map((Pe, ye) => j.addMonths(le, ye));
  }, [j, ke.currentMonth, y, k]), Ar = g.useMemo(() => {
    var le;
    return q ? L[0] != null ? Je.find((Pe) => j.isSameMonth(Pe, L[0])) : L[1] != null ? Je.find((Pe) => j.isSameMonth(Pe, L[1])) : (le = Je.find((Pe) => j.isSameMonth(Pe, ce))) != null ? le : Je[0] : null;
  }, [j, L, Je, q, ce]);
  return /* @__PURE__ */ P.jsxs(Jl, d({
    ref: o,
    className: De(u, Ie.root),
    ownerState: Me
  }, H, {
    children: [/* @__PURE__ */ P.jsx(sa, {
      packageName: "x-date-pickers-pro",
      releaseInfo: Xl
    }), $r.map((le, Pe) => /* @__PURE__ */ P.jsxs(ec, {
      className: Ie.monthContainer,
      children: [y === 1 ? /* @__PURE__ */ P.jsx(Yn, {
        views: ["day"],
        view: "day",
        currentMonth: ke.currentMonth,
        onMonthChange: (ye, Le) => at({
          newMonth: ye,
          direction: Le
        }),
        minDate: Ct,
        maxDate: Mt,
        disabled: R,
        disablePast: m,
        disableFuture: p,
        reduceAnimations: D,
        slots: G,
        slotProps: ee,
        timezone: $
      }) : /* @__PURE__ */ P.jsx(tc, {
        onGoToPrevious: fn,
        onGoToNext: pn,
        isPreviousHidden: Pe !== 0,
        isPreviousDisabled: xt,
        previousLabel: pe.previousMonth,
        isNextHidden: Pe !== y - 1,
        isNextDisabled: hn,
        nextLabel: pe.nextMonth,
        slots: G,
        slotProps: ee,
        children: j.format(Je[le], "monthAndYear")
      }), /* @__PURE__ */ P.jsx(ac, d({
        className: Ie.dayCalendar
      }, ke, Wt, wt, {
        onMonthSwitchingAnimationEnd: Fe,
        onFocusedDayChange: je,
        reduceAnimations: D,
        selectedDays: L,
        onSelectedDaysChange: ge,
        currentMonth: Je[le],
        TransitionProps: Ee,
        shouldDisableDate: Xe,
        showDaysOutsideCurrentMonth: y === 1 && z,
        dayOfWeekFormatter: K,
        loading: I,
        renderLoading: F,
        slots: Fr,
        slotProps: Er,
        autoFocus: Je[le] === Ar,
        fixedWeekNumber: Q,
        displayWeekNumber: ae,
        timezone: $
      }), Pe)]
    }, le))]
  }));
});
process.env.NODE_ENV !== "production" && (Mr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: e.bool,
  /**
   * The number of calendars to render.
   * @default 2
   */
  calendars: e.oneOf([1, 2, 3]),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  className: e.string,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * Position the current month is rendered in.
   * @default 1
   */
  currentMonthCalendarPosition: e.oneOf([1, 2, 3]),
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: e.func,
  /**
   * Default calendar month displayed when `value={[null, null]}`.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: e.any,
  /**
   * The initial position in the edited date range.
   * Used when the component is not controlled.
   * @default 'start'
   */
  defaultRangePosition: e.oneOf(["end", "start"]),
  /**
   * The default selected value.
   * Used when the component is not controlled.
   */
  defaultValue: e.arrayOf(e.any),
  /**
   * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
   * @default false
   */
  disableAutoMonthSwitching: e.bool,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, editing dates by dragging is disabled.
   * @default false
   */
  disableDragEditing: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: e.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: e.number,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: e.bool,
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Callback fired when the value changes.
   * @template TDate
   * @param {DateRange<TDate>} value The new value.
   * @param {PickerSelectionState | undefined} selectionState Indicates if the date range selection is complete.
   */
  onChange: e.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: e.func,
  /**
   * Callback fired when the range position changes.
   * @param {RangePosition} rangePosition The new range position.
   */
  onRangePositionChange: e.func,
  /**
   * The position in the currently edited date range.
   * Used when the component position is controlled.
   */
  rangePosition: e.oneOf(["end", "start"]),
  /**
   * Make picker read only.
   * @default false
   */
  readOnly: e.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: e.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date using the validation props, except callbacks such as `shouldDisableDate`.
   */
  referenceDate: e.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => "..."
   */
  renderLoading: e.func,
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: e.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.arrayOf(e.any)
});
function lc(t) {
  return we("MuiDateRangePickerToolbar", t);
}
Ce("MuiDateRangePickerToolbar", ["root", "container"]);
const cc = ["value", "rangePosition", "onRangePositionChange", "toolbarFormat", "className"], uc = (t) => {
  const {
    classes: n
  } = t;
  return ve({
    root: ["root"],
    container: ["container"]
  }, lc, n);
}, dc = X(er, {
  name: "MuiDateRangePickerToolbar",
  slot: "Root",
  overridesResolver: (t, n) => n.root
})({}), pc = X("div", {
  name: "MuiDateRangePickerToolbar",
  slot: "Container",
  overridesResolver: (t, n) => n.container
})({
  display: "flex"
}), Sr = /* @__PURE__ */ g.forwardRef(function(n, o) {
  const r = ue(), a = fe({
    props: n,
    name: "MuiDateRangePickerToolbar"
  }), {
    value: [s, i],
    rangePosition: l,
    onRangePositionChange: c,
    toolbarFormat: u,
    className: p
  } = a, m = Z(a, cc), h = $e(), f = s ? r.formatByString(s, u || r.formats.shortDate) : h.start, x = i ? r.formatByString(i, u || r.formats.shortDate) : h.end, D = a, C = uc(D);
  return /* @__PURE__ */ P.jsx(dc, d({}, m, {
    toolbarTitle: h.dateRangePickerToolbarTitle,
    isLandscape: !1,
    className: De(p, C.root),
    ownerState: D,
    ref: o,
    children: /* @__PURE__ */ P.jsxs(pc, {
      className: C.container,
      children: [/* @__PURE__ */ P.jsx(mo, {
        variant: s !== null ? "h5" : "h6",
        value: f,
        selected: l === "start",
        onClick: () => c("start")
      }), /* @__PURE__ */ P.jsxs(Ze, {
        variant: "h5",
        children: [" ", "–", " "]
      }), /* @__PURE__ */ P.jsx(mo, {
        variant: i !== null ? "h5" : "h6",
        value: x,
        selected: l === "end",
        onClick: () => c("end")
      })]
    })
  }));
});
process.env.NODE_ENV !== "production" && (Sr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * className applied to the root component.
   */
  className: e.string,
  disabled: e.bool,
  /**
   * If `true`, show the toolbar even in desktop mode.
   * @default `true` for Desktop, `false` for Mobile.
   */
  hidden: e.bool,
  onRangePositionChange: e.func.isRequired,
  rangePosition: e.oneOf(["end", "start"]).isRequired,
  readOnly: e.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  titleId: e.string,
  /**
   * Toolbar date format.
   */
  toolbarFormat: e.string,
  /**
   * Toolbar value placeholder—it is displayed when the value is empty.
   * @default "––"
   */
  toolbarPlaceholder: e.node,
  value: e.arrayOf(e.any).isRequired
});
const fc = ["components", "componentsProps"];
function Rr(t, n) {
  var o, r, a, s;
  const i = ue(), l = rt(), c = fe({
    props: t,
    name: n
  }), {
    components: u,
    componentsProps: p
  } = c, m = Z(c, fc), h = g.useMemo(() => {
    var f;
    return ((f = m.localeText) == null ? void 0 : f.toolbarTitle) == null ? m.localeText : d({}, m.localeText, {
      dateRangePickerToolbarTitle: m.localeText.toolbarTitle
    });
  }, [m.localeText]);
  return d({}, m, {
    localeText: h,
    disableFuture: (o = m.disableFuture) != null ? o : !1,
    disablePast: (r = m.disablePast) != null ? r : !1,
    minDate: Te(i, m.minDate, l.minDate),
    maxDate: Te(i, m.maxDate, l.maxDate),
    slots: d({
      toolbar: Sr
    }, (a = m.slots) != null ? a : Lt(u)),
    slotProps: (s = m.slotProps) != null ? s : p
  });
}
const kr = ({
  value: t,
  defaultValue: n,
  referenceDate: o,
  onChange: r,
  className: a,
  classes: s,
  disableFuture: i,
  disablePast: l,
  minDate: c,
  maxDate: u,
  shouldDisableDate: p,
  reduceAnimations: m,
  onMonthChange: h,
  defaultCalendarMonth: f,
  rangePosition: x,
  defaultRangePosition: D,
  onRangePositionChange: C,
  calendars: S,
  currentMonthCalendarPosition: v,
  components: M,
  componentsProps: b,
  slots: y,
  slotProps: k,
  loading: O,
  renderLoading: V,
  disableHighlightToday: w,
  readOnly: A,
  disabled: I,
  showDaysOutsideCurrentMonth: F,
  dayOfWeekFormatter: N,
  disableAutoMonthSwitching: T,
  sx: R,
  autoFocus: z,
  fixedWeekNumber: K,
  disableDragEditing: B,
  displayWeekNumber: q,
  timezone: Q
}) => /* @__PURE__ */ P.jsx(Mr, {
  value: t,
  defaultValue: n,
  referenceDate: o,
  onChange: r,
  className: a,
  classes: s,
  disableFuture: i,
  disablePast: l,
  minDate: c,
  maxDate: u,
  shouldDisableDate: p,
  reduceAnimations: m,
  onMonthChange: h,
  defaultCalendarMonth: f,
  rangePosition: x,
  defaultRangePosition: D,
  onRangePositionChange: C,
  calendars: S,
  currentMonthCalendarPosition: v,
  components: M,
  componentsProps: b,
  slots: y,
  slotProps: k,
  loading: O,
  renderLoading: V,
  disableHighlightToday: w,
  readOnly: A,
  disabled: I,
  showDaysOutsideCurrentMonth: F,
  dayOfWeekFormatter: N,
  disableAutoMonthSwitching: T,
  sx: R,
  autoFocus: z,
  fixedWeekNumber: K,
  disableDragEditing: B,
  displayWeekNumber: q,
  timezone: Q
}), hc = ["clearable", "onClear"], mc = ({
  wrapperVariant: t,
  open: n,
  actions: o,
  readOnly: r,
  labelId: a,
  disableOpenPicker: s,
  onBlur: i,
  rangePosition: l,
  onRangePositionChange: c,
  localeText: u,
  pickerSlotProps: p,
  pickerSlots: m,
  fieldProps: h,
  anchorRef: f
}) => {
  const x = $e(), D = g.useRef(null), C = g.useRef(null);
  g.useEffect(() => {
    if (n) {
      if (l === "start") {
        var w;
        (w = D.current) == null || w.focus();
      } else if (l === "end") {
        var A;
        (A = C.current) == null || A.focus();
      }
    }
  }, [l, n]);
  const S = (w) => {
    w.stopPropagation(), c("start"), !r && !s && o.onOpen();
  }, v = (w) => {
    w.stopPropagation(), c("end"), !r && !s && o.onOpen();
  }, M = () => {
    n && c("start");
  }, b = () => {
    n && c("end");
  }, y = d({
    textField: m == null ? void 0 : m.textField,
    root: m == null ? void 0 : m.fieldRoot,
    separator: m == null ? void 0 : m.fieldSeparator
  }, h.slots), k = d({}, h.slotProps, {
    textField: (w) => {
      const A = Ke(p == null ? void 0 : p.textField, w);
      let I, F;
      if (w.position === "start") {
        var N;
        I = d({
          inputRef: D,
          label: (N = u == null ? void 0 : u.start) != null ? N : x.start,
          onKeyDown: en(S),
          onFocus: M,
          focused: n ? l === "start" : void 0
        }, !r && !h.disabled && {
          onClick: S
        }, t === "mobile" && {
          readOnly: !0
        }), f && (F = d({}, A == null ? void 0 : A.InputProps, {
          ref: f
        }));
      } else {
        var T;
        I = d({
          inputRef: C,
          label: (T = u == null ? void 0 : u.end) != null ? T : x.end,
          onKeyDown: en(v),
          onFocus: b,
          focused: n ? l === "end" : void 0
        }, !r && !h.disabled && {
          onClick: v
        }, t === "mobile" && {
          readOnly: !0
        }), F = A == null ? void 0 : A.InputProps;
      }
      return d({}, a != null && {
        id: `${a}-${w.position}`
      }, I, Ke(p == null ? void 0 : p.textField, w), {
        InputProps: F
      });
    },
    root: (w) => d({}, {
      onBlur: i
    }, Ke(p == null ? void 0 : p.fieldRoot, w)),
    separator: p == null ? void 0 : p.fieldSeparator
  }), O = Z(h, hc);
  return d({}, O, {
    slots: y,
    slotProps: k
  });
}, gc = ({
  wrapperVariant: t,
  open: n,
  actions: o,
  readOnly: r,
  inputRef: a,
  labelId: s,
  disableOpenPicker: i,
  label: l,
  onBlur: c,
  rangePosition: u,
  onRangePositionChange: p,
  singleInputFieldRef: m,
  pickerSlots: h,
  pickerSlotProps: f,
  fieldProps: x,
  anchorRef: D
}) => {
  const C = g.useRef(null), S = We(a, C), v = We(x.unstableFieldRef, m);
  g.useEffect(() => {
    var w;
    n && ((w = C.current) == null || w.focus());
  }, [u, n]);
  const M = () => {
    var w;
    if (!m.current || C.current !== ut(document))
      return;
    const A = m.current.getSections(), I = (w = m.current) == null ? void 0 : w.getActiveSectionIndex(), F = I == null || I < A.length / 2 ? "start" : "end";
    F != null && F !== u && p(F);
  }, b = Y((w) => {
    var A;
    setTimeout(M), (A = x.onSelectedSectionsChange) == null || A.call(x, w);
  }), y = (w) => {
    w.stopPropagation(), !r && !i && o.onOpen();
  }, k = d({}, x.slots, {
    textField: h == null ? void 0 : h.textField,
    clearButton: h == null ? void 0 : h.clearButton,
    clearIcon: h == null ? void 0 : h.clearIcon
  }), O = d({}, x.slotProps, {
    textField: f == null ? void 0 : f.textField,
    clearButton: h == null ? void 0 : h.clearButton,
    clearIcon: h == null ? void 0 : h.clearIcon
  });
  return d({}, x, {
    slots: k,
    slotProps: O,
    label: l,
    unstableFieldRef: v,
    inputRef: S,
    onKeyDown: en(y, x.onKeyDown),
    onSelectedSectionsChange: b,
    onBlur: c,
    InputProps: d({
      ref: D
    }, x == null ? void 0 : x.InputProps),
    focused: n ? !0 : void 0
  }, s != null && {
    id: s
  }, t === "mobile" && {
    readOnly: !0
  }, !r && !x.disabled && {
    onClick: y
  });
}, Tr = (t) => {
  if (process.env.NODE_ENV !== "production") {
    const n = g.useRef(t.fieldType);
    t.fieldType !== n.current && console.error("Should not switch between a multi input field and a single input field on a range picker.");
  }
  return t.fieldType === "multi-input" ? mc(t) : gc(t);
}, bc = ["props"], yc = un(), Dc = (t) => {
  var n, o;
  let {
    props: r
  } = t, a = Z(t, bc);
  Vn("x-date-pickers-pro", yc);
  const {
    slots: s,
    slotProps: i,
    className: l,
    sx: c,
    format: u,
    formatDensity: p,
    timezone: m,
    label: h,
    inputRef: f,
    name: x,
    readOnly: D,
    disabled: C,
    autoFocus: S,
    disableOpenPicker: v,
    localeText: M,
    reduceAnimations: b
  } = r, y = g.useRef(null), k = g.useRef(null), O = g.useRef(null), {
    rangePosition: V,
    onRangePositionChange: w,
    singleInputFieldRef: A
  } = Un(r), {
    open: I,
    actions: F,
    layoutProps: N,
    renderCurrentView: T,
    shouldRestoreFocus: R,
    fieldProps: z
  } = cn(d({}, a, {
    props: r,
    wrapperVariant: "desktop",
    autoFocusView: !0,
    additionalViewProps: {
      rangePosition: V,
      onRangePositionChange: w
    }
  })), K = () => {
    is(() => {
      var L, oe;
      (L = y.current) != null && L.contains(ut(document)) || (oe = O.current) != null && oe.contains(ut(document)) || F.onDismiss();
    });
  }, B = s.field, q = (n = B.fieldType) != null ? n : "multi-input", Q = me({
    elementType: B,
    externalSlotProps: i == null ? void 0 : i.field,
    additionalProps: d({}, z, {
      readOnly: D,
      disabled: C,
      className: l,
      sx: c,
      format: u,
      formatDensity: p,
      timezone: m,
      autoFocus: S && !r.open,
      ref: y
    }, q === "single-input" && {
      inputRef: f,
      name: x
    }),
    ownerState: r
  }), ie = Tr({
    wrapperVariant: "desktop",
    fieldType: q,
    open: I,
    actions: F,
    readOnly: D,
    disableOpenPicker: v,
    label: h,
    localeText: M,
    onBlur: K,
    rangePosition: V,
    onRangePositionChange: w,
    singleInputFieldRef: A,
    pickerSlotProps: i,
    pickerSlots: s,
    fieldProps: Q,
    anchorRef: k
  }), ae = d({}, i, {
    toolbar: d({}, i == null ? void 0 : i.toolbar, {
      rangePosition: V,
      onRangePositionChange: w
    })
  }), se = (o = s == null ? void 0 : s.layout) != null ? o : Bt;
  return {
    renderPicker: () => /* @__PURE__ */ P.jsxs(At, {
      localeText: M,
      children: [/* @__PURE__ */ P.jsx(B, d({}, ie)), /* @__PURE__ */ P.jsx(Xo, d({
        role: "tooltip",
        placement: "bottom-start",
        containerRef: O,
        anchorEl: k.current,
        onBlur: K
      }, F, {
        open: I,
        slots: s,
        slotProps: i,
        shouldRestoreFocus: R,
        reduceAnimations: b,
        children: /* @__PURE__ */ P.jsx(se, d({}, N, i == null ? void 0 : i.layout, {
          slots: s,
          slotProps: ae,
          children: T()
        }))
      }))]
    })
  };
}, Or = /* @__PURE__ */ g.forwardRef(function(n, o) {
  var r, a;
  const s = Rr(n, "MuiDesktopDateRangePicker"), i = d({
    day: kr
  }, s.viewRenderers), l = d({}, s, {
    viewRenderers: i,
    calendars: (r = s.calendars) != null ? r : 2,
    views: ["day"],
    openTo: "day",
    slots: d({
      field: dn
    }, s.slots),
    slotProps: d({}, s.slotProps, {
      field: (u) => {
        var p;
        return d({}, Ke((p = s.slotProps) == null ? void 0 : p.field, u), ln(s), {
          ref: o
        });
      },
      toolbar: d({
        hidden: !0
      }, (a = s.slotProps) == null ? void 0 : a.toolbar)
    })
  }), {
    renderPicker: c
  } = Dc({
    props: l,
    valueManager: ct,
    valueType: "date",
    validator: $t
  });
  return c();
});
Or.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: e.bool,
  /**
   * The number of calendars to render on **desktop**.
   * @default 2
   */
  calendars: e.oneOf([1, 2, 3]),
  /**
   * Class name applied to the root element.
   */
  className: e.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: e.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * Position the current month is rendered in.
   * @default 1
   */
  currentMonthCalendarPosition: e.oneOf([1, 2, 3]),
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: e.func,
  /**
   * Default calendar month displayed when `value={[null, null]}`.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: e.any,
  /**
   * The initial position in the edited date range.
   * Used when the component is not controlled.
   * @default 'start'
   */
  defaultRangePosition: e.oneOf(["end", "start"]),
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: e.arrayOf(e.any),
  /**
   * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
   * @default false
   */
  disableAutoMonthSwitching: e.bool,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, editing dates by dragging is disabled.
   * @default false
   */
  disableDragEditing: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: e.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: e.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: e.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: e.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   * Ignored if the field has several inputs.
   */
  inputRef: nt,
  /**
   * The label content.
   * Ignored if the field has several inputs.
   */
  label: e.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: e.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: e.object,
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Name attribute used by the `input` element in the Field.
   * Ignored if the field has several inputs.
   */
  name: e.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: e.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: e.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: e.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: e.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: e.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: e.func,
  /**
   * Callback fired when the range position changes.
   * @param {RangePosition} rangePosition The new range position.
   */
  onRangePositionChange: e.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: e.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: e.bool,
  /**
   * The position in the currently edited date range.
   * Used when the component position is controlled.
   */
  rangePosition: e.oneOf(["end", "start"]),
  readOnly: e.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: e.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: e.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => "..."
   */
  renderLoading: e.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: e.oneOfType([e.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), e.number, e.shape({
    endIndex: e.number.isRequired,
    startIndex: e.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: e.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.arrayOf(e.any),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: e.shape({
    day: e.func
  })
};
const Pc = ["props"], vc = un(), xc = (t) => {
  var n, o, r, a;
  let {
    props: s
  } = t, i = Z(t, Pc);
  Vn("x-date-pickers-pro", vc);
  const {
    slots: l,
    slotProps: c,
    className: u,
    sx: p,
    format: m,
    formatDensity: h,
    timezone: f,
    label: x,
    inputRef: D,
    name: C,
    readOnly: S,
    disabled: v,
    disableOpenPicker: M,
    localeText: b
  } = s, {
    rangePosition: y,
    onRangePositionChange: k,
    singleInputFieldRef: O
  } = Un(s), V = on(), w = $e(), {
    open: A,
    actions: I,
    layoutProps: F,
    renderCurrentView: N,
    fieldProps: T
  } = cn(d({}, i, {
    props: s,
    wrapperVariant: "mobile",
    autoFocusView: !0,
    additionalViewProps: {
      rangePosition: y,
      onRangePositionChange: k
    }
  })), R = l.field, z = (n = R.fieldType) != null ? n : "multi-input", K = me({
    elementType: R,
    externalSlotProps: c == null ? void 0 : c.field,
    additionalProps: d({}, T, {
      readOnly: S != null ? S : !0,
      disabled: v,
      className: u,
      sx: p,
      format: m,
      formatDensity: h,
      timezone: f
    }, z === "single-input" && {
      inputRef: D,
      name: C
    }),
    ownerState: s
  }), B = (o = c == null || (r = c.toolbar) == null ? void 0 : r.hidden) != null ? o : !1, q = Tr({
    wrapperVariant: "mobile",
    fieldType: z,
    open: A,
    actions: I,
    readOnly: S,
    labelId: V,
    disableOpenPicker: M,
    label: x,
    localeText: b,
    rangePosition: y,
    onRangePositionChange: k,
    singleInputFieldRef: O,
    pickerSlots: l,
    pickerSlotProps: c,
    fieldProps: K
  }), Q = d({}, c, {
    toolbar: d({}, c == null ? void 0 : c.toolbar, {
      titleId: V,
      rangePosition: y,
      onRangePositionChange: k
    })
  }), ie = (a = l == null ? void 0 : l.layout) != null ? a : Bt, ae = d({}, w, b);
  let se = V;
  if (B) {
    const oe = [];
    z === "multi-input" ? (ae.start && oe.push(`${V}-start-label`), ae.end && oe.push(`${V}-end-label`)) : x != null && oe.push(`${V}-label`), se = oe.length > 0 ? oe.join(" ") : void 0;
  }
  const H = d({}, c, {
    mobilePaper: d({
      "aria-labelledby": se
    }, c == null ? void 0 : c.mobilePaper)
  });
  return {
    renderPicker: () => /* @__PURE__ */ P.jsxs(At, {
      localeText: b,
      children: [/* @__PURE__ */ P.jsx(R, d({}, q)), /* @__PURE__ */ P.jsx(Zo, d({}, I, {
        open: A,
        slots: l,
        slotProps: H,
        children: /* @__PURE__ */ P.jsx(ie, d({}, F, H == null ? void 0 : H.layout, {
          slots: l,
          slotProps: Q,
          children: N()
        }))
      }))]
    })
  };
}, Ir = /* @__PURE__ */ g.forwardRef(function(n, o) {
  var r;
  const a = Rr(n, "MuiMobileDateRangePicker"), s = d({
    day: kr
  }, a.viewRenderers), i = d({}, a, {
    viewRenderers: s,
    // Force one calendar on mobile to avoid layout issues
    calendars: 1,
    views: ["day"],
    openTo: "day",
    slots: d({
      field: dn
    }, a.slots),
    slotProps: d({}, a.slotProps, {
      field: (c) => {
        var u;
        return d({}, Ke((u = a.slotProps) == null ? void 0 : u.field, c), ln(a), {
          ref: o
        });
      },
      toolbar: d({
        hidden: !1
      }, (r = a.slotProps) == null ? void 0 : r.toolbar)
    })
  }), {
    renderPicker: l
  } = xc({
    props: i,
    valueManager: ct,
    valueType: "date",
    validator: $t
  });
  return l();
});
Ir.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: e.bool,
  /**
   * Class name applied to the root element.
   */
  className: e.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: e.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * Position the current month is rendered in.
   * @default 1
   */
  currentMonthCalendarPosition: e.oneOf([1, 2, 3]),
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: e.func,
  /**
   * Default calendar month displayed when `value={[null, null]}`.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: e.any,
  /**
   * The initial position in the edited date range.
   * Used when the component is not controlled.
   * @default 'start'
   */
  defaultRangePosition: e.oneOf(["end", "start"]),
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: e.arrayOf(e.any),
  /**
   * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
   * @default false
   */
  disableAutoMonthSwitching: e.bool,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, editing dates by dragging is disabled.
   * @default false
   */
  disableDragEditing: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: e.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: e.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: e.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: e.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   * Ignored if the field has several inputs.
   */
  inputRef: nt,
  /**
   * The label content.
   * Ignored if the field has several inputs.
   */
  label: e.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: e.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: e.object,
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Name attribute used by the `input` element in the Field.
   * Ignored if the field has several inputs.
   */
  name: e.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: e.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: e.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: e.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: e.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: e.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: e.func,
  /**
   * Callback fired when the range position changes.
   * @param {RangePosition} rangePosition The new range position.
   */
  onRangePositionChange: e.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: e.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: e.bool,
  /**
   * The position in the currently edited date range.
   * Used when the component position is controlled.
   */
  rangePosition: e.oneOf(["end", "start"]),
  readOnly: e.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: e.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: e.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => "..."
   */
  renderLoading: e.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: e.oneOfType([e.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), e.number, e.shape({
    endIndex: e.number.isRequired,
    startIndex: e.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: e.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.arrayOf(e.any),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: e.shape({
    day: e.func
  })
};
const wc = ["desktopModeMediaQuery"], Vr = /* @__PURE__ */ g.forwardRef(function(n, o) {
  const r = fe({
    props: n,
    name: "MuiDateRangePicker"
  }), {
    desktopModeMediaQuery: a = "@media (pointer: fine)"
  } = r, s = Z(r, wc);
  return rn(a, {
    defaultMatches: !0
  }) ? /* @__PURE__ */ P.jsx(Or, d({
    ref: o
  }, s)) : /* @__PURE__ */ P.jsx(Ir, d({
    ref: o
  }, s));
});
process.env.NODE_ENV !== "production" && (Vr.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: e.bool,
  /**
   * The number of calendars to render on **desktop**.
   * @default 2
   */
  calendars: e.oneOf([1, 2, 3]),
  /**
   * Class name applied to the root element.
   */
  className: e.string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: e.bool,
  /**
   * Overridable components.
   * @default {}
   * @deprecated Please use `slots`.
   */
  components: e.object,
  /**
   * The props used for each component slot.
   * @default {}
   * @deprecated Please use `slotProps`.
   */
  componentsProps: e.object,
  /**
   * Position the current month is rendered in.
   * @default 1
   */
  currentMonthCalendarPosition: e.oneOf([1, 2, 3]),
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {string} day The day of week provided by the adapter.  Deprecated, will be removed in v7: Use `date` instead.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (_day: string, date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: e.func,
  /**
   * Default calendar month displayed when `value={[null, null]}`.
   * @deprecated Consider using `referenceDate` instead.
   */
  defaultCalendarMonth: e.any,
  /**
   * The initial position in the edited date range.
   * Used when the component is not controlled.
   * @default 'start'
   */
  defaultRangePosition: e.oneOf(["end", "start"]),
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: e.arrayOf(e.any),
  /**
   * CSS media query when `Mobile` mode will be changed to `Desktop`.
   * @default '@media (pointer: fine)'
   * @example '@media (min-width: 720px)' or theme.breakpoints.up("sm")
   */
  desktopModeMediaQuery: e.string,
  /**
   * If `true`, after selecting `start` date calendar will not automatically switch to the month of `end` date.
   * @default false
   */
  disableAutoMonthSwitching: e.bool,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, editing dates by dragging is disabled.
   * @default false
   */
  disableDragEditing: e.bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: e.bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: e.bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: e.bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: e.bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: e.bool,
  /**
   * Calendar will show more weeks in order to match this value.
   * Put it to 6 for having fix number of week in Gregorian calendars
   * @default undefined
   */
  fixedWeekNumber: e.number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: e.string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: e.oneOf(["dense", "spacious"]),
  /**
   * Pass a ref to the `input` element.
   * Ignored if the field has several inputs.
   */
  inputRef: nt,
  /**
   * The label content.
   * Ignored if the field has several inputs.
   */
  label: e.node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: e.bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: e.object,
  /**
   * Maximal selectable date.
   */
  maxDate: e.any,
  /**
   * Minimal selectable date.
   */
  minDate: e.any,
  /**
   * Name attribute used by the `input` element in the Field.
   * Ignored if the field has several inputs.
   */
  name: e.string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   */
  onAccept: e.func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: e.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: e.func,
  /**
   * Callback fired when the error associated to the current value changes.
   * If the error has a non-null value, then the `TextField` will be rendered in `error` state.
   *
   * @template TValue The value type. Will be either the same type as `value` or `null`. Can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. Will be either `string` or a `null`. Can be in `[start, end]` format in case of range value.
   * @param {TError} error The new error describing why the current value is not valid.
   * @param {TValue} value The value associated to the error.
   */
  onError: e.func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: e.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: e.func,
  /**
   * Callback fired when the range position changes.
   * @param {RangePosition} rangePosition The new range position.
   */
  onRangePositionChange: e.func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: e.func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: e.bool,
  /**
   * The position in the currently edited date range.
   * Used when the component position is controlled.
   */
  rangePosition: e.oneOf(["end", "start"]),
  readOnly: e.bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: e.bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: e.any,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => "..."
   */
  renderLoading: e.func,
  /**
   * The currently selected sections.
   * This prop accept four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If an object with a `startIndex` and `endIndex` properties are provided, the sections between those two indexes will be selected.
   * 3. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 4. If `null` is provided, no section will be selected
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: e.oneOfType([e.oneOf(["all", "day", "hours", "meridiem", "minutes", "month", "seconds", "weekDay", "year"]), e.number, e.shape({
    endIndex: e.number.isRequired,
    startIndex: e.number.isRequired
  })]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (e.g. when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @param {string} position The date to test, 'start' or 'end'.
   * @returns {boolean} Returns `true` if the date should be disabled.
   */
  shouldDisableDate: e.func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: e.bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: e.object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documention} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: e.string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: e.arrayOf(e.any),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be the used.
   */
  viewRenderers: e.shape({
    day: e.func
  })
});
const Fc = Oo(function(l, i) {
  var c = l, {
    layout: t = "default",
    showButton: n = !1,
    slots: o,
    slotProps: r = {},
    dayOfWeekFormatter: a = (u) => u
  } = c, s = gn(c, [
    "layout",
    "showButton",
    "slots",
    "slotProps",
    "dayOfWeekFormatter"
  ]);
  var u;
  return /* @__PURE__ */ P.jsx(
    Vr,
    dt(Oe({
      dayOfWeekFormatter: a,
      slots: Oe({
        switchViewIcon: Mo,
        leftArrowIcon: So,
        rightArrowIcon: Ro,
        previousIconButton: Ae,
        nextIconButton: Ae,
        switchViewButton: Ae,
        clearButton: Ae,
        field: t === "single" ? qn : dn,
        textField: ko
      }, o),
      slotProps: Jr(
        r,
        {
          leftArrowIcon: { fontSize: "medium" },
          rightArrowIcon: { fontSize: "medium" },
          nextIconButton: {
            size: "small",
            color: "context",
            sx: { color: _.color.text.primary }
          },
          previousIconButton: {
            size: "small",
            color: "context",
            sx: { color: _.color.text.primary }
          },
          switchViewButton: {
            size: "small",
            color: "context",
            sx: { color: _.color.text.primary }
          },
          clearButton: {
            size: "small",
            color: "context",
            sx: { color: _.color.text.muted }
          },
          textField: {
            InputProps: {
              sx: {
                backgroundColor: _.color.background.paper
              }
            },
            InputLabelProps: {
              shrink: !0
            }
          }
        },
        n ? {
          textField: {
            InputProps: {
              endAdornment: /* @__PURE__ */ P.jsx(
                Ae,
                {
                  size: "small",
                  edge: "end",
                  sx: { color: _.color.text.muted },
                  color: "context",
                  children: /* @__PURE__ */ P.jsx(In, {})
                }
              )
            }
          }
        } : {}
      )
    }, s), {
      sx: {
        [`&.${Po.root}`]: {
          [`>.${Po.separator}`]: {
            marginTop: ((u = r == null ? void 0 : r.textField) == null ? void 0 : u.labelPlacement) === "left" ? "initial" : `calc(${_.space[3]} + ${_.space[0.5]})`
          }
        }
      },
      ref: i
    })
  );
}), Ut = {
  pointerEvents: "none",
  [`.${To.root}`]: {
    display: "none"
  }
}, Ec = {
  components: {
    MuiMobileDatePicker: {
      defaultProps: {
        slotProps: {
          field: {
            InputProps: {
              // MUI MobileDatePicker does not show calendar icon adornment
              endAdornment: /* @__PURE__ */ P.jsx(aa, { position: "end", children: /* @__PURE__ */ P.jsx(Ae, { size: "small", edge: "end", color: "context", children: /* @__PURE__ */ P.jsx(In, {}) }) })
            }
          }
        }
      }
    },
    MuiDateField: {
      defaultProps: {
        InputLabelProps: {
          shrink: !0
        },
        slotProps: {
          textField: {
            sx: {
              [`.${ea.root}`]: {
                color: _.color.text.muted
              }
            }
          }
        }
      }
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        root: {
          paddingLeft: _.space[6],
          paddingRight: _.space[6],
          minHeight: _.space[8],
          maxHeight: _.space[8]
        },
        label: dt(Oe({}, pt.typography.h4), {
          marginRight: _.space[1]
        })
      }
    },
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          width: "initial"
        },
        viewTransitionContainer: ({
          ownerState: t
        }) => {
          const n = (t == null ? void 0 : t.yearsPerRow) === 4, o = (t == null ? void 0 : t.monthsPerRow) === 4;
          return {
            [`.${qe.header}`]: {
              gap: _.space[0.5],
              width: t != null && t.displayWeekNumber ? "350px" : "320px",
              [`.${qe.weekDayLabel}, .${qe.weekNumberLabel}`]: {
                width: `calc(${_.space[8]} + ${_.space[1]})`,
                height: _.space[10],
                margin: 0
              }
            },
            [`.${Ve.root}`]: {
              paddingBlock: _.space[2],
              minHeight: "242px"
            },
            [`.${qe.monthContainer}`]: {
              top: _.space[2],
              gap: _.space[0.5],
              display: "flex",
              flexDirection: "column",
              [`.${qe.weekContainer}`]: {
                margin: 0,
                gap: _.space[0.5],
                width: "initial",
                minWidth: "320px",
                [`.${qe.weekNumber}`]: {
                  margin: 0,
                  padding: _.space[2]
                }
              }
            },
            [`.${yo.root} , .${bo.root}`]: {
              padding: `${_.space[2]} 0`,
              justifyContent: "center",
              maxHeight: "208px",
              width: "320px",
              rowGap: _.space[4],
              [`.${lt.root} , .${it.root}`]: {
                paddingInline: 0,
                maxWidth: `calc(${_.space[16]} + ${_.space[2]})`
              },
              [`.${lt.yearButton} , .${it.monthButton}`]: {
                margin: 0
              }
            },
            [`.${yo.root}`]: {
              columnGap: n ? _.space[1] : _.space[6]
            },
            [`.${bo.root}`]: {
              columnGap: o ? _.space[1] : _.space[6]
            }
          };
        }
      }
    },
    MuiDatePickerToolbar: {
      defaultProps: {
        toolbarPlaceholder: "—"
      },
      styleOverrides: {
        root: {
          flexDirection: "column",
          display: "flex",
          gap: _.space[1],
          [`>.${yn.root}:first-of-type`]: Oe({}, pt.typography.overline)
        },
        title: dt(Oe({}, pt.typography.h2), {
          marginRight: 0,
          marginLeft: 0
        })
      }
    },
    MuiPickersPopper: {
      styleOverrides: {
        paper: {
          boxShadow: _.shadow.md
        }
      }
    },
    MuiPickersLayout: {
      styleOverrides: {
        root: {
          [`.${st.actionBar}`]: {
            paddingInline: _.space[2],
            paddingBlock: _.space[0.5],
            // for portrait & landscape orientation
            borderTop: `${_.space.px} solid ${_.color.border.primary}`
          },
          [`.${st.toolbar}`]: {
            // for portrait  orientation
            borderBottom: `${_.space.px} solid ${_.color.border.primary}`
          },
          [`&.${st.landscape} .${st.toolbar}`]: {
            // for landscape orientation
            borderBottom: 0,
            borderRight: `${_.space.px} solid ${_.color.border.primary}`,
            boxSizing: "content-box",
            minWidth: "138px"
          },
          [`.${To.root}`]: {
            color: _.color.text.muted
          }
        }
      }
    },
    MuiPickersDay: {
      styleOverrides: {
        root: dt(Oe({
          margin: 0,
          padding: _.space[0.5]
        }, pt.typography.body2), {
          [`&.${Ue.dayOutsideMonth}:hover`]: {
            backgroundColor: et(
              _.color.secondary.main,
              _.alpha[4]
            )
          }
        })
      }
    },
    MuiPickersMonth: {
      styleOverrides: {
        monthButton: {
          [`&.${it.disabled}`]: {
            color: _.color.text.subtle
          }
        }
      }
    },
    MuiPickersYear: {
      styleOverrides: {
        yearButton: {
          [`&.${lt.disabled}`]: {
            color: _.color.text.subtle
          }
        }
      }
    },
    MuiMultiInputDateRangeField: {
      styleOverrides: {
        root: {
          alignItems: "center",
          gap: _.space[3],
          ">:not(style):not(style)": {
            marginLeft: 0
          },
          ">:not(style)~:not(style)": {
            marginLeft: 0
          }
        }
      }
    },
    MuiDateRangeCalendar: {
      styleOverrides: {
        monthContainer: {
          "&:first-of-type": {
            [`>.MuiPickersArrowSwitcher-root >.${qt.edgeStart}`]: Oe({}, Ut)
          },
          "&:last-of-type": {
            [`>.MuiPickersArrowSwitcher-root >.${qt.edgeEnd}`]: Oe({}, Ut)
          },
          "&:not(:first-of-type):not(:last-of-type)": {
            ">.MuiPickersArrowSwitcher-root": {
              [`.${qt.edgeEnd}`]: Oe({}, Ut),
              [`.${qt.edgeStart}`]: Oe({}, Ut)
            }
          },
          ">.MuiPickersArrowSwitcher-root": {
            padding: _.space[6],
            paddingTop: _.space[4],
            paddingBottom: _.space[2],
            [`>.${yn.root}`]: Oe({}, pt.typography.h4)
          },
          [`>.${qe.root}`]: {
            padding: `0 ${_.space[6]}`,
            [`>.${Ve.root}`]: {
              minWidth: "280px",
              padding: `${_.space[2]} 0`,
              minHeight: "266px"
            }
          },
          [`.${qe.monthContainer}`]: {
            top: _.space[2],
            gap: _.space[0.5],
            display: "flex",
            flexDirection: "column"
          },
          [`.${qe.weekContainer}`]: {
            margin: 0
          }
        }
      }
    },
    MuiDateRangePickerToolbar: {
      styleOverrides: {
        root: {
          padding: `${_.space[4]} ${_.space[6]}`,
          gap: _.space[1]
        },
        container: {
          [`.${yn.root}`]: Oe({}, pt.typography.h2)
        }
      }
    },
    MuiDateRangePickerDay: {
      styleOverrides: {
        root: ({ ownerState: t }) => Oe({
          padding: _.space.px
        }, t.isHiddenDayFiller ? {} : {
          [`&:first-of-type .${de.rangeIntervalDayPreview}`]: {
            borderLeftColor: `${_.color.text.secondary}`
          },
          [`&:last-of-type .${de.rangeIntervalDayPreview}`]: {
            borderRightColor: `${_.color.text.secondary}`
          },
          [`&:not(.${kn.dayDragging}) .${de.dayOutsideRangeInterval}`]: {
            "@media (pointer: fine)": {
              "&:hover": {
                border: `${_.space.px} solid ${_.color.primary.shade.soft}`
              }
            }
          }
        }),
        rangeIntervalPreview: ({
          ownerState: t
        }) => {
          const n = t.isPreviewing && !t.isHiddenDayFiller, o = t.isStartOfPreviewing || t.isFirstVisibleCell, r = t.isEndOfPreviewing || t.isLastVisibleCell;
          return Oe({
            border: `${_.space.px} solid transparent`
          }, n ? {
            border: `${_.space.px} dashed ${_.color.text.secondary}`,
            borderLeftColor: o ? `${_.color.text.secondary}` : "transparent",
            borderRightColor: r ? `${_.color.text.secondary}` : "transparent"
          } : {});
        },
        rangeIntervalDayHighlight: {
          backgroundColor: `${_.color.primary.shade.muted}`,
          [`&.${de.hiddenDayFiller}`]: {
            backgroundColor: "transparent"
          }
        },
        // NOTE: Revert this change once MUI fixes https://github.com/mui/mui-x/issues/11622 issue
        rangeIntervalDayHighlightStart: {
          backgroundColor: `${_.color.primary.shade.muted}`,
          [`&.${de.hiddenDayFiller}`]: {
            backgroundColor: "transparent"
          }
        },
        day: {
          "&:hover": {
            background: `${_.color.primary.shade.subtle}`
          },
          "&.Mui-selected": {
            "&:hover": {
              background: `${_.color.primary.main}`
            }
          },
          "&:not(.Mui-selected)": {
            [`&.${Ue.today}`]: {
              border: `${_.space.px} solid ${_.color.text.secondary}`
            }
          }
        }
      }
    }
  }
};
export {
  Vc as DatePicker,
  Fc as DateRangePicker,
  At as TDSLocalizationProvider,
  Ec as datePickerOptions
};
