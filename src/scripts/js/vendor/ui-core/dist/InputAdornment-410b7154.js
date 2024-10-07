var be = Object.defineProperty, ge = Object.defineProperties;
var ve = Object.getOwnPropertyDescriptors;
var oe = Object.getOwnPropertySymbols;
var ye = Object.prototype.hasOwnProperty, xe = Object.prototype.propertyIsEnumerable;
var te = (e, t, s) => t in e ? be(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s, se = (e, t) => {
  for (var s in t || (t = {}))
    ye.call(t, s) && te(e, s, t[s]);
  if (oe)
    for (var s of oe(t))
      xe.call(t, s) && te(e, s, t[s]);
  return e;
}, ne = (e, t) => ge(e, ve(t));
import * as p from "react";
import { forwardRef as he } from "react";
import { u as Ce, dB as De, a6 as ie, m as N, h as $, n as g, av as Se, $ as Ie, a as M, _ as i, B as re, o as w, r as Pe, d as A, aa as Ne, j as u, f as b, P as o, g as W, dz as $e, a5 as Y, O as Q, l as le, v as ke, dv as ae, D as Te, w as Me, F as Ae, dm as Oe } from "./theme-59e10499.js";
function Le(e, t, s, n, a) {
  const [r, d] = p.useState(() => a && s ? s(e).matches : n ? n(e).matches : t);
  return ie(() => {
    let c = !0;
    if (!s)
      return;
    const l = s(e), f = () => {
      c && d(l.matches);
    };
    return f(), l.addListener(f), () => {
      c = !1, l.removeListener(f);
    };
  }, [e, s]), r;
}
const ce = p["useSyncExternalStore"];
function je(e, t, s, n, a) {
  const r = p.useCallback(() => t, [t]), d = p.useMemo(() => {
    if (a && s)
      return () => s(e).matches;
    if (n !== null) {
      const {
        matches: m
      } = n(e);
      return () => m;
    }
    return r;
  }, [r, e, n, a, s]), [c, l] = p.useMemo(() => {
    if (s === null)
      return [r, () => () => {
      }];
    const m = s(e);
    return [() => m.matches, (h) => (m.addListener(h), () => {
      m.removeListener(h);
    })];
  }, [r, s, e]);
  return ce(l, c, d);
}
function Co(e, t = {}) {
  const s = Ce(), n = typeof window != "undefined" && typeof window.matchMedia != "undefined", {
    defaultMatches: a = !1,
    matchMedia: r = n ? window.matchMedia : null,
    ssrMatchMedia: d = null,
    noSsr: c = !1
  } = De({
    name: "MuiUseMediaQuery",
    props: t,
    theme: s
  });
  process.env.NODE_ENV !== "production" && typeof e == "function" && s === null && console.error(["MUI: The `query` argument provided is invalid.", "You are providing a function without a theme in the context.", "One of the parent elements needs to use a ThemeProvider."].join(`
`));
  let l = typeof e == "function" ? e(s) : e;
  l = l.replace(/^@media( ?)/m, "");
  const m = (ce !== void 0 ? je : Le)(l, a, r, d, c);
  return process.env.NODE_ENV !== "production" && p.useDebugValue({
    query: l,
    match: m
  }), m;
}
function Re(e) {
  return $("MuiDialog", e);
}
const we = N("MuiDialog", ["root", "scrollPaper", "scrollBody", "container", "paper", "paperScrollPaper", "paperScrollBody", "paperWidthFalse", "paperWidthXs", "paperWidthSm", "paperWidthMd", "paperWidthLg", "paperWidthXl", "paperFullWidth", "paperFullScreen"]), q = we, de = /* @__PURE__ */ p.createContext({});
process.env.NODE_ENV !== "production" && (de.displayName = "DialogContext");
const We = de, Be = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"], Ee = g(Se, {
  name: "MuiDialog",
  slot: "Backdrop",
  overrides: (e, t) => t.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
}), Ue = (e) => {
  const {
    classes: t,
    scroll: s,
    maxWidth: n,
    fullWidth: a,
    fullScreen: r
  } = e, d = {
    root: ["root"],
    container: ["container", `scroll${M(s)}`],
    paper: ["paper", `paperScroll${M(s)}`, `paperWidth${M(String(n))}`, a && "paperFullWidth", r && "paperFullScreen"]
  };
  return W(d, Re, t);
}, Ve = g(Ie, {
  name: "MuiDialog",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({
  "@media print": {
    // Use !important to override the Modal inline-style.
    position: "absolute !important"
  }
}), _e = g("div", {
  name: "MuiDialog",
  slot: "Container",
  overridesResolver: (e, t) => {
    const {
      ownerState: s
    } = e;
    return [t.container, t[`scroll${M(s.scroll)}`]];
  }
})(({
  ownerState: e
}) => i({
  height: "100%",
  "@media print": {
    height: "auto"
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, e.scroll === "paper" && {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}, e.scroll === "body" && {
  overflowY: "auto",
  overflowX: "hidden",
  textAlign: "center",
  "&::after": {
    content: '""',
    display: "inline-block",
    verticalAlign: "middle",
    height: "100%",
    width: "0"
  }
})), Fe = g(re, {
  name: "MuiDialog",
  slot: "Paper",
  overridesResolver: (e, t) => {
    const {
      ownerState: s
    } = e;
    return [t.paper, t[`scrollPaper${M(s.scroll)}`], t[`paperWidth${M(String(s.maxWidth))}`], s.fullWidth && t.paperFullWidth, s.fullScreen && t.paperFullScreen];
  }
})(({
  theme: e,
  ownerState: t
}) => i({
  margin: 32,
  position: "relative",
  overflowY: "auto",
  // Fix IE11 issue, to remove at some point.
  "@media print": {
    overflowY: "visible",
    boxShadow: "none"
  }
}, t.scroll === "paper" && {
  display: "flex",
  flexDirection: "column",
  maxHeight: "calc(100% - 64px)"
}, t.scroll === "body" && {
  display: "inline-block",
  verticalAlign: "middle",
  textAlign: "left"
  // 'initial' doesn't work on IE11
}, !t.maxWidth && {
  maxWidth: "calc(100% - 64px)"
}, t.maxWidth === "xs" && {
  maxWidth: e.breakpoints.unit === "px" ? Math.max(e.breakpoints.values.xs, 444) : `max(${e.breakpoints.values.xs}${e.breakpoints.unit}, 444px)`,
  [`&.${q.paperScrollBody}`]: {
    [e.breakpoints.down(Math.max(e.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.maxWidth && t.maxWidth !== "xs" && {
  maxWidth: `${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`,
  [`&.${q.paperScrollBody}`]: {
    [e.breakpoints.down(e.breakpoints.values[t.maxWidth] + 32 * 2)]: {
      maxWidth: "calc(100% - 64px)"
    }
  }
}, t.fullWidth && {
  width: "calc(100% - 64px)"
}, t.fullScreen && {
  margin: 0,
  width: "100%",
  maxWidth: "100%",
  height: "100%",
  maxHeight: "none",
  borderRadius: 0,
  [`&.${q.paperScrollBody}`]: {
    margin: 0,
    maxWidth: "100%"
  }
})), pe = /* @__PURE__ */ p.forwardRef(function(t, s) {
  const n = w({
    props: t,
    name: "MuiDialog"
  }), a = Pe(), r = {
    enter: a.transitions.duration.enteringScreen,
    exit: a.transitions.duration.leavingScreen
  }, {
    "aria-describedby": d,
    "aria-labelledby": c,
    BackdropComponent: l,
    BackdropProps: f,
    children: m,
    className: h,
    disableEscapeKeyDown: O = !1,
    fullScreen: z = !1,
    fullWidth: B = !1,
    maxWidth: E = "sm",
    onBackdropClick: k,
    onClose: L,
    open: U,
    PaperComponent: K = re,
    PaperProps: j = {},
    scroll: H = "paper",
    TransitionComponent: X = $e,
    transitionDuration: V = r,
    TransitionProps: J
  } = n, Z = A(n, Be), C = i({}, n, {
    disableEscapeKeyDown: O,
    fullScreen: z,
    fullWidth: B,
    maxWidth: E,
    scroll: H
  }), D = Ue(C), S = p.useRef(), v = (x) => {
    S.current = x.target === x.currentTarget;
  }, _ = (x) => {
    S.current && (S.current = null, k && k(x), L && L(x, "backdropClick"));
  }, y = Ne(c), F = p.useMemo(() => ({
    titleId: y
  }), [y]);
  return /* @__PURE__ */ u.jsx(Ve, i({
    className: b(D.root, h),
    closeAfterTransition: !0,
    components: {
      Backdrop: Ee
    },
    componentsProps: {
      backdrop: i({
        transitionDuration: V,
        as: l
      }, f)
    },
    disableEscapeKeyDown: O,
    onClose: L,
    open: U,
    ref: s,
    onClick: _,
    ownerState: C
  }, Z, {
    children: /* @__PURE__ */ u.jsx(X, i({
      appear: !0,
      in: U,
      timeout: V,
      role: "presentation"
    }, J, {
      children: /* @__PURE__ */ u.jsx(_e, {
        className: b(D.container),
        onMouseDown: v,
        ownerState: C,
        children: /* @__PURE__ */ u.jsx(Fe, i({
          as: K,
          elevation: 24,
          role: "dialog",
          "aria-describedby": d,
          "aria-labelledby": y
        }, j, {
          className: b(D.paper, j.className),
          ownerState: C,
          children: /* @__PURE__ */ u.jsx(We.Provider, {
            value: F,
            children: m
          })
        }))
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (pe.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The id(s) of the element(s) that describe the dialog.
   */
  "aria-describedby": o.string,
  /**
   * The id(s) of the element(s) that label the dialog.
   */
  "aria-labelledby": o.string,
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: o.elementType,
  /**
   * @ignore
   */
  BackdropProps: o.object,
  /**
   * Dialog children, usually the included sub-components.
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
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: o.bool,
  /**
   * If `true`, the dialog is full-screen.
   * @default false
   */
  fullScreen: o.bool,
  /**
   * If `true`, the dialog stretches to `maxWidth`.
   *
   * Notice that the dialog width grow is limited by the default margin.
   * @default false
   */
  fullWidth: o.bool,
  /**
   * Determine the max-width of the dialog.
   * The dialog width grows with the size of the screen.
   * Set to `false` to disable `maxWidth`.
   * @default 'sm'
   */
  maxWidth: o.oneOfType([o.oneOf(["xs", "sm", "md", "lg", "xl", !1]), o.string]),
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: o.func,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: o.func,
  /**
   * If `true`, the component is shown.
   */
  open: o.bool.isRequired,
  /**
   * The component used to render the body of the dialog.
   * @default Paper
   */
  PaperComponent: o.elementType,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   * @default {}
   */
  PaperProps: o.object,
  /**
   * Determine the container for scrolling the dialog.
   * @default 'paper'
   */
  scroll: o.oneOf(["body", "paper"]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: o.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  transitionDuration: o.oneOfType([o.number, o.shape({
    appear: o.number,
    enter: o.number,
    exit: o.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](https://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: o.object
});
const Do = pe;
function Ge(e) {
  return $("MuiDialogActions", e);
}
N("MuiDialogActions", ["root", "spacing"]);
const Qe = ["className", "disableSpacing"], Ye = (e) => {
  const {
    classes: t,
    disableSpacing: s
  } = e;
  return W({
    root: ["root", !s && "spacing"]
  }, Ge, t);
}, ze = g("div", {
  name: "MuiDialogActions",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: s
    } = e;
    return [t.root, !s.disableSpacing && t.spacing];
  }
})(({
  ownerState: e
}) => i({
  display: "flex",
  alignItems: "center",
  padding: 8,
  justifyContent: "flex-end",
  flex: "0 0 auto"
}, !e.disableSpacing && {
  "& > :not(style) ~ :not(style)": {
    marginLeft: 8
  }
})), ue = /* @__PURE__ */ p.forwardRef(function(t, s) {
  const n = w({
    props: t,
    name: "MuiDialogActions"
  }), {
    className: a,
    disableSpacing: r = !1
  } = n, d = A(n, Qe), c = i({}, n, {
    disableSpacing: r
  }), l = Ye(c);
  return /* @__PURE__ */ u.jsx(ze, i({
    className: b(l.root, a),
    ownerState: c,
    ref: s
  }, d));
});
process.env.NODE_ENV !== "production" && (ue.propTypes = {
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
   * If `true`, the actions do not have additional margin.
   * @default false
   */
  disableSpacing: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const So = ue;
function Ke(e) {
  return $("MuiDialogContent", e);
}
const He = N("MuiDialogContent", ["root", "dividers"]), Io = He;
function Po(e) {
  return $("MuiDialogTitle", e);
}
const Xe = N("MuiDialogTitle", ["root"]), Je = Xe, Ze = ["className", "dividers"], qe = (e) => {
  const {
    classes: t,
    dividers: s
  } = e;
  return W({
    root: ["root", s && "dividers"]
  }, Ke, t);
}, eo = g("div", {
  name: "MuiDialogContent",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: s
    } = e;
    return [t.root, s.dividers && t.dividers];
  }
})(({
  theme: e,
  ownerState: t
}) => i({
  flex: "1 1 auto",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch",
  overflowY: "auto",
  padding: "20px 24px"
}, t.dividers ? {
  padding: "16px 24px",
  borderTop: `1px solid ${(e.vars || e).palette.divider}`,
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`
} : {
  [`.${Je.root} + &`]: {
    paddingTop: 0
  }
})), me = /* @__PURE__ */ p.forwardRef(function(t, s) {
  const n = w({
    props: t,
    name: "MuiDialogContent"
  }), {
    className: a,
    dividers: r = !1
  } = n, d = A(n, Ze), c = i({}, n, {
    dividers: r
  }), l = qe(c);
  return /* @__PURE__ */ u.jsx(eo, i({
    className: b(l.root, a),
    ownerState: c,
    ref: s
  }, d));
});
process.env.NODE_ENV !== "production" && (me.propTypes = {
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
   * Display the top and bottom dividers.
   * @default false
   */
  dividers: o.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const No = me;
function oo(e) {
  return $("MuiListItem", e);
}
const to = N("MuiListItem", ["root", "container", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "padding", "button", "secondaryAction", "selected"]), T = to;
function $o(e) {
  return $("MuiListItemButton", e);
}
const so = N("MuiListItemButton", ["root", "focusVisible", "dense", "alignItemsFlexStart", "disabled", "divider", "gutters", "selected"]), no = so;
function ao(e) {
  return $("MuiListItemSecondaryAction", e);
}
N("MuiListItemSecondaryAction", ["root", "disableGutters"]);
const io = ["className"], ro = (e) => {
  const {
    disableGutters: t,
    classes: s
  } = e;
  return W({
    root: ["root", t && "disableGutters"]
  }, ao, s);
}, lo = g("div", {
  name: "MuiListItemSecondaryAction",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: s
    } = e;
    return [t.root, s.disableGutters && t.disableGutters];
  }
})(({
  ownerState: e
}) => i({
  position: "absolute",
  right: 16,
  top: "50%",
  transform: "translateY(-50%)"
}, e.disableGutters && {
  right: 0
})), ee = /* @__PURE__ */ p.forwardRef(function(t, s) {
  const n = w({
    props: t,
    name: "MuiListItemSecondaryAction"
  }), {
    className: a
  } = n, r = A(n, io), d = p.useContext(Y), c = i({}, n, {
    disableGutters: d.disableGutters
  }), l = ro(c);
  return /* @__PURE__ */ u.jsx(lo, i({
    className: b(l.root, a),
    ownerState: c,
    ref: s
  }, r));
});
process.env.NODE_ENV !== "production" && (ee.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component, normally an `IconButton` or selection control.
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
ee.muiName = "ListItemSecondaryAction";
const co = ee, po = ["className"], uo = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"], mo = (e, t) => {
  const {
    ownerState: s
  } = e;
  return [t.root, s.dense && t.dense, s.alignItems === "flex-start" && t.alignItemsFlexStart, s.divider && t.divider, !s.disableGutters && t.gutters, !s.disablePadding && t.padding, s.button && t.button, s.hasSecondaryAction && t.secondaryAction];
}, fo = (e) => {
  const {
    alignItems: t,
    button: s,
    classes: n,
    dense: a,
    disabled: r,
    disableGutters: d,
    disablePadding: c,
    divider: l,
    hasSecondaryAction: f,
    selected: m
  } = e;
  return W({
    root: ["root", a && "dense", !d && "gutters", !c && "padding", l && "divider", r && "disabled", s && "button", t === "flex-start" && "alignItemsFlexStart", f && "secondaryAction", m && "selected"],
    container: ["container"]
  }, oo, n);
}, bo = g("div", {
  name: "MuiListItem",
  slot: "Root",
  overridesResolver: mo
})(({
  theme: e,
  ownerState: t
}) => i({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  position: "relative",
  textDecoration: "none",
  width: "100%",
  boxSizing: "border-box",
  textAlign: "left"
}, !t.disablePadding && i({
  paddingTop: 8,
  paddingBottom: 8
}, t.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !t.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!t.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!t.secondaryAction && {
  [`& > .${no.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${T.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`&.${T.selected}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Q(e.palette.primary.main, e.palette.action.selectedOpacity),
    [`&.${T.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : Q(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  },
  [`&.${T.disabled}`]: {
    opacity: (e.vars || e).palette.action.disabledOpacity
  }
}, t.alignItems === "flex-start" && {
  alignItems: "flex-start"
}, t.divider && {
  borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
  backgroundClip: "padding-box"
}, t.button && {
  transition: e.transitions.create("background-color", {
    duration: e.transitions.duration.shortest
  }),
  "&:hover": {
    textDecoration: "none",
    backgroundColor: (e.vars || e).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  },
  [`&.${T.selected}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : Q(e.palette.primary.main, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})` : Q(e.palette.primary.main, e.palette.action.selectedOpacity)
    }
  }
}, t.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
})), go = g("li", {
  name: "MuiListItem",
  slot: "Container",
  overridesResolver: (e, t) => t.container
})({
  position: "relative"
}), fe = /* @__PURE__ */ p.forwardRef(function(t, s) {
  const n = w({
    props: t,
    name: "MuiListItem"
  }), {
    alignItems: a = "center",
    autoFocus: r = !1,
    button: d = !1,
    children: c,
    className: l,
    component: f,
    components: m = {},
    componentsProps: h = {},
    ContainerComponent: O = "li",
    ContainerProps: {
      className: z
    } = {},
    dense: B = !1,
    disabled: E = !1,
    disableGutters: k = !1,
    disablePadding: L = !1,
    divider: U = !1,
    focusVisibleClassName: K,
    secondaryAction: j,
    selected: H = !1,
    slotProps: X = {},
    slots: V = {}
  } = n, J = A(n.ContainerProps, po), Z = A(n, uo), C = p.useContext(Y), D = p.useMemo(() => ({
    dense: B || C.dense || !1,
    alignItems: a,
    disableGutters: k
  }), [a, C.dense, B, k]), S = p.useRef(null);
  ie(() => {
    r && (S.current ? S.current.focus() : process.env.NODE_ENV !== "production" && console.error("MUI: Unable to set focus to a ListItem whose component has not been rendered."));
  }, [r]);
  const v = p.Children.toArray(c), _ = v.length && le(v[v.length - 1], ["ListItemSecondaryAction"]), y = i({}, n, {
    alignItems: a,
    autoFocus: r,
    button: d,
    dense: D.dense,
    disabled: E,
    disableGutters: k,
    disablePadding: L,
    divider: U,
    hasSecondaryAction: _,
    selected: H
  }), F = fo(y), x = ke(S, s), G = V.root || m.Root || bo, R = X.root || h.root || {}, I = i({
    className: b(F.root, R.className, l),
    disabled: E
  }, Z);
  let P = f || "li";
  return d && (I.component = f || "div", I.focusVisibleClassName = b(T.focusVisible, K), P = Ae), _ ? (P = !I.component && !f ? "div" : P, O === "li" && (P === "li" ? P = "div" : I.component === "li" && (I.component = "div")), /* @__PURE__ */ u.jsx(Y.Provider, {
    value: D,
    children: /* @__PURE__ */ u.jsxs(go, i({
      as: O,
      className: b(F.container, z),
      ref: x,
      ownerState: y
    }, J, {
      children: [/* @__PURE__ */ u.jsx(G, i({}, R, !ae(G) && {
        as: P,
        ownerState: i({}, y, R.ownerState)
      }, I, {
        children: v
      })), v.pop()]
    }))
  })) : /* @__PURE__ */ u.jsx(Y.Provider, {
    value: D,
    children: /* @__PURE__ */ u.jsxs(G, i({}, R, {
      as: P,
      ref: x
    }, !ae(G) && {
      ownerState: i({}, y, R.ownerState)
    }, I, {
      children: [v, j && /* @__PURE__ */ u.jsx(co, {
        children: j
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (fe.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │    To update them, edit the d.ts file and run `pnpm proptypes`.     │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Defines the `align-items` style property.
   * @default 'center'
   */
  alignItems: o.oneOf(["center", "flex-start"]),
  /**
   * If `true`, the list item is focused during the first mount.
   * Focus will also be triggered if the value changes from false to true.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  autoFocus: o.bool,
  /**
   * If `true`, the list item is a button (using `ButtonBase`). Props intended
   * for `ButtonBase` can then be applied to `ListItem`.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  button: o.bool,
  /**
   * The content of the component if a `ListItemSecondaryAction` is used it must
   * be the last child.
   */
  children: Te(o.node, (e) => {
    const t = p.Children.toArray(e.children);
    let s = -1;
    for (let n = t.length - 1; n >= 0; n -= 1) {
      const a = t[n];
      if (le(a, ["ListItemSecondaryAction"])) {
        s = n;
        break;
      }
    }
    return s !== -1 && s !== t.length - 1 ? new Error("MUI: You used an element after ListItemSecondaryAction. For ListItem to detect that it has a secondary action you must pass it as the last child to ListItem.") : null;
  }),
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
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: o.shape({
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
    root: o.object
  }),
  /**
   * The container component used when a `ListItemSecondaryAction` is the last child.
   * @default 'li'
   * @deprecated
   */
  ContainerComponent: Me,
  /**
   * Props applied to the container component if used.
   * @default {}
   * @deprecated
   */
  ContainerProps: o.object,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used.
   * The prop defaults to the value inherited from the parent List component.
   * @default false
   */
  dense: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  disabled: o.bool,
  /**
   * If `true`, the left and right padding is removed.
   * @default false
   */
  disableGutters: o.bool,
  /**
   * If `true`, all padding is removed.
   * @default false
   */
  disablePadding: o.bool,
  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   * @default false
   */
  divider: o.bool,
  /**
   * @ignore
   */
  focusVisibleClassName: o.string,
  /**
   * The element to display at the end of ListItem.
   */
  secondaryAction: o.node,
  /**
   * Use to apply selected styling.
   * @default false
   * @deprecated checkout [ListItemButton](/material-ui/api/list-item-button/) instead
   */
  selected: o.bool,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: o.shape({
    root: o.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: o.shape({
    root: o.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object])
});
const ko = fe, vo = "div", To = he(
  (e, t) => /* @__PURE__ */ u.jsx(Oe, ne(se({}, e), { ref: t, component: vo }))
);
export {
  We as D,
  To as I,
  ko as L,
  Do as M,
  $o as a,
  q as b,
  So as c,
  Io as d,
  No as e,
  co as f,
  Po as g,
  T as h,
  no as l,
  Co as u
};
