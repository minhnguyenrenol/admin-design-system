/* UNERAAdminDS design system bundle. Built from every .jsx under components/ by tools/bundle.mjs. Needs React 18 UMD on the page. */
var React = window.React;
var __ds_tmp = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // g:react
  var require_react = __commonJS({
    "g:react"(exports, module) {
      module.exports = window.React;
    }
  });

  // <stdin>
  var stdin_exports = {};
  __export(stdin_exports, {
    Button: () => Button,
    Callout: () => Callout,
    Input: () => Input,
    MetricTile: () => MetricTile,
    Panel: () => Panel,
    ReasonCodeField: () => ReasonCodeField,
    Select: () => Select,
    StatusChip: () => StatusChip,
    Tabs: () => Tabs,
    Tag: () => Tag,
    toneFor: () => toneFor
  });

  // ../../x/adm/components/core/Button.jsx
  var import_react = __toESM(require_react());
  var CSS = `
.ua-btn{font-family:var(--font-body);font-size:var(--fs-sm);font-weight:var(--fw-semibold);height:var(--control-h);padding:0 12px;border-radius:var(--radius-sm);border:1px solid transparent;display:inline-flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;line-height:1;white-space:nowrap;transition:background var(--dur-fast) var(--ease),border-color var(--dur-fast) var(--ease)}
.ua-btn svg{width:14px;height:14px;flex-shrink:0}
.ua-btn:focus-visible{outline:2px solid var(--focus-on-light);outline-offset:2px}
.ua-btn[disabled]{opacity:.45;cursor:not-allowed}
.ua-btn--primary{background:var(--brand-deep-blue);color:#fff}
.ua-btn--primary:hover:not([disabled]){background:var(--brand-deep-blue-hover)}
.ua-btn--secondary{background:#fff;color:var(--text-primary);border-color:var(--line-strong)}
.ua-btn--secondary:hover:not([disabled]){background:var(--surface-hover);border-color:var(--brand-deep-blue)}
.ua-btn--ghost{background:transparent;color:var(--brand-deep-blue)}
.ua-btn--ghost:hover:not([disabled]){background:var(--surface-hover)}
.ua-btn--danger{background:var(--fin-down);color:#fff}
.ua-btn--danger:hover:not([disabled]){background:#934a60}
.ua-btn--danger-outline{background:#fff;color:var(--fin-down);border-color:var(--fin-down)}
.ua-btn--danger-outline:hover:not([disabled]){background:var(--fin-down-bg)}
.ua-btn--sm{height:var(--control-h-sm);padding:0 10px;font-size:var(--fs-xs)}
.ua-btn--lg{height:var(--control-h-lg);padding:0 16px;font-size:var(--fs-base)}
.ua-btn--loading{position:relative;color:transparent!important}
.ua-btn--loading::after{content:'';position:absolute;width:14px;height:14px;border-radius:50%;border:2px solid rgba(255,255,255,.4);border-top-color:#fff;animation:ua-spin .7s linear infinite}
.ua-btn--secondary.ua-btn--loading::after,.ua-btn--ghost.ua-btn--loading::after{border-color:rgba(23,61,71,.25);border-top-color:var(--brand-deep-blue)}
@keyframes ua-spin{to{transform:rotate(360deg)}}
`;
  if (typeof document !== "undefined" && !document.getElementById("ua-btn-css")) {
    const el = document.createElement("style");
    el.id = "ua-btn-css";
    el.textContent = CSS;
    document.head.appendChild(el);
  }
  function Button({ variant = "primary", size = "md", loading = false, icon, iconRight, children, className = "", ...rest }) {
    const cls = ["ua-btn", "ua-btn--" + variant, size !== "md" ? "ua-btn--" + size : "", loading ? "ua-btn--loading" : "", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ import_react.default.createElement("button", { className: cls, disabled: rest.disabled || loading, ...rest }, icon, children, iconRight);
  }

  // ../../x/adm/components/core/Callout.jsx
  var import_react2 = __toESM(require_react());
  var CSS2 = `
.ua-callout{font-family:var(--font-body);display:flex;gap:10px;align-items:flex-start;padding:10px 12px;border-radius:var(--radius-md);font-size:var(--fs-sm);line-height:1.45;border:none}
.ua-callout--info{background:var(--tone-info-bg);color:var(--tone-info-fg)}
.ua-callout--warning{background:var(--tone-pending-bg);color:#5e4510}
.ua-callout--danger{background:var(--tone-bad-bg);color:#7a3550}
.ua-callout--neutral{background:var(--n-100);color:var(--text-primary)}
.ua-callout__icon{width:16px;height:16px;flex-shrink:0;margin-top:1px}
.ua-callout__title{font-weight:var(--fw-semibold);margin-bottom:2px}
`;
  if (typeof document !== "undefined" && !document.getElementById("ua-callout-css")) {
    const el = document.createElement("style");
    el.id = "ua-callout-css";
    el.textContent = CSS2;
    document.head.appendChild(el);
  }
  var Icon = ({ tone }) => tone === "danger" || tone === "warning" ? /* @__PURE__ */ import_react2.default.createElement("svg", { className: "ua-callout__icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" }, /* @__PURE__ */ import_react2.default.createElement("path", { d: "M12 9v4m0 4h.01M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" })) : /* @__PURE__ */ import_react2.default.createElement("svg", { className: "ua-callout__icon", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2" }, /* @__PURE__ */ import_react2.default.createElement("circle", { cx: "12", cy: "12", r: "9" }), /* @__PURE__ */ import_react2.default.createElement("path", { d: "M12 8h.01M11 12h1v4h1" }));
  function Callout({ tone = "info", title, children, className = "", ...rest }) {
    return /* @__PURE__ */ import_react2.default.createElement("div", { role: tone === "danger" ? "alert" : "note", className: ["ua-callout", "ua-callout--" + tone, className].filter(Boolean).join(" "), ...rest }, /* @__PURE__ */ import_react2.default.createElement(Icon, { tone }), /* @__PURE__ */ import_react2.default.createElement("div", null, title && /* @__PURE__ */ import_react2.default.createElement("div", { className: "ua-callout__title" }, title), children));
  }

  // ../../x/adm/components/core/MetricTile.jsx
  var import_react3 = __toESM(require_react());
  var CSS3 = `
.ua-metric{font-family:var(--font-body);background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);padding:14px 16px;display:flex;flex-direction:column;gap:6px;min-width:0;text-align:left}
.ua-metric--button{cursor:pointer;transition:border-color var(--dur-fast) var(--ease),background var(--dur-fast) var(--ease)}
.ua-metric--button:hover{border-color:var(--brand-deep-blue);background:var(--surface-hover)}
.ua-metric--button:focus-visible{outline:2px solid var(--focus-on-light);outline-offset:2px}
.ua-metric__label{font-size:var(--fs-xs);font-weight:var(--fw-medium);color:var(--text-secondary);display:flex;justify-content:space-between;gap:8px}
.ua-metric__value{font-size:var(--fs-stat);font-weight:var(--fw-semibold);line-height:1.1;font-variant-numeric:tabular-nums;color:var(--text-primary);letter-spacing:-0.01em}
.ua-metric__meta{font-size:var(--fs-xs);color:var(--text-secondary);display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.ua-metric__delta{font-weight:var(--fw-semibold);font-variant-numeric:tabular-nums}
.ua-metric__delta--up{color:var(--fin-up)}.ua-metric__delta--down{color:var(--fin-down)}.ua-metric__delta--flat{color:var(--fin-neutral)}
.ua-metric--alert .ua-metric__value{color:var(--tone-bad-fg)}
`;
  if (typeof document !== "undefined" && !document.getElementById("ua-metric-css")) {
    const el = document.createElement("style");
    el.id = "ua-metric-css";
    el.textContent = CSS3;
    document.head.appendChild(el);
  }
  function MetricTile({ label, value, delta, deltaDirection = "flat", meta, alert = false, onClick, right, className = "", ...rest }) {
    const Comp = onClick ? "button" : "div";
    const cls = ["ua-metric", onClick ? "ua-metric--button" : "", alert ? "ua-metric--alert" : "", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ import_react3.default.createElement(Comp, { className: cls, onClick, type: onClick ? "button" : void 0, ...rest }, /* @__PURE__ */ import_react3.default.createElement("div", { className: "ua-metric__label" }, /* @__PURE__ */ import_react3.default.createElement("span", null, label), right), /* @__PURE__ */ import_react3.default.createElement("div", { className: "ua-metric__value" }, value), (delta || meta) && /* @__PURE__ */ import_react3.default.createElement("div", { className: "ua-metric__meta" }, delta && /* @__PURE__ */ import_react3.default.createElement("span", { className: "ua-metric__delta ua-metric__delta--" + deltaDirection }, delta), meta && /* @__PURE__ */ import_react3.default.createElement("span", null, meta)));
  }

  // ../../x/adm/components/core/Panel.jsx
  var import_react4 = __toESM(require_react());
  var CSS4 = `
.ua-panel{font-family:var(--font-body);background:var(--surface);border:1px solid var(--line);border-radius:var(--radius-lg);min-width:0}
.ua-panel__head{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:10px 14px;border-bottom:1px solid var(--line)}
.ua-panel__title{font-size:var(--fs-base);font-weight:var(--fw-semibold);color:var(--text-primary);display:flex;align-items:center;gap:8px}
.ua-panel__sub{font-size:var(--fs-xs);color:var(--text-secondary);font-weight:var(--fw-regular)}
.ua-panel__body{padding:14px}
.ua-panel__body--flush{padding:0}
.ua-panel__actions{display:flex;gap:8px;align-items:center}
`;
  if (typeof document !== "undefined" && !document.getElementById("ua-panel-css")) {
    const el = document.createElement("style");
    el.id = "ua-panel-css";
    el.textContent = CSS4;
    document.head.appendChild(el);
  }
  function Panel({ title, subtitle, actions, flush = false, children, className = "", ...rest }) {
    return /* @__PURE__ */ import_react4.default.createElement("section", { className: ["ua-panel", className].filter(Boolean).join(" "), ...rest }, (title || actions) && /* @__PURE__ */ import_react4.default.createElement("header", { className: "ua-panel__head" }, /* @__PURE__ */ import_react4.default.createElement("div", { className: "ua-panel__title" }, title, subtitle && /* @__PURE__ */ import_react4.default.createElement("span", { className: "ua-panel__sub" }, subtitle)), actions && /* @__PURE__ */ import_react4.default.createElement("div", { className: "ua-panel__actions" }, actions)), /* @__PURE__ */ import_react4.default.createElement("div", { className: "ua-panel__body" + (flush ? " ua-panel__body--flush" : "") }, children));
  }

  // ../../x/adm/components/core/StatusChip.jsx
  var import_react5 = __toESM(require_react());
  var CSS5 = `
.ua-chip{display:inline-flex;align-items:center;gap:6px;padding:2px 8px 2px 7px;border-radius:var(--radius-pill);font-family:var(--font-body);font-size:var(--fs-xs);font-weight:var(--fw-semibold);line-height:18px;white-space:nowrap;background:var(--tone-neutral-bg);color:var(--tone-neutral-fg)}
.ua-chip::before{content:'';width:6px;height:6px;border-radius:50%;background:currentColor;flex-shrink:0}
.ua-chip--ok{background:var(--tone-ok-bg);color:var(--tone-ok-fg)}
.ua-chip--pending{background:var(--tone-pending-bg);color:var(--tone-pending-fg)}
.ua-chip--info{background:var(--tone-info-bg);color:var(--tone-info-fg)}
.ua-chip--bad{background:var(--tone-bad-bg);color:var(--tone-bad-fg)}
.ua-chip--attention{background:var(--tone-attention-bg);color:var(--tone-attention-fg)}
.ua-chip--pulse::before{animation:ua-pulse 1.6s ease-in-out infinite}
@keyframes ua-pulse{0%,100%{opacity:.5}50%{opacity:1}}
`;
  if (typeof document !== "undefined" && !document.getElementById("ua-chip-css")) {
    const el = document.createElement("style");
    el.id = "ua-chip-css";
    el.textContent = CSS5;
    document.head.appendChild(el);
  }
  var MAP = {
    completed: "ok",
    active: "ok",
    approved: "ok",
    published: "ok",
    whitelisted: "ok",
    enabled: "ok",
    verified: "ok",
    operational: "ok",
    claimed: "ok",
    pending: "pending",
    "pending approval": "pending",
    "on hold": "pending",
    awaiting: "pending",
    requested: "pending",
    unclaimed: "pending",
    processing: "info",
    retrying: "info",
    draft: "info",
    queued: "info",
    scheduled: "info",
    failed: "bad",
    rejected: "bad",
    stuck: "bad",
    blacklisted: "bad",
    restricted: "bad",
    blocked: "bad",
    suspended: "bad",
    disabled: "bad",
    reversed: "bad",
    archived: "neutral",
    closed: "neutral",
    superseded: "neutral",
    unpublished: "neutral",
    "not available": "neutral",
    expired: "neutral",
    unwhitelisted: "neutral",
    "action required": "attention",
    delayed: "attention",
    "needs review": "attention"
  };
  function toneFor(label) {
    return MAP[String(label || "").toLowerCase()] || "neutral";
  }
  function StatusChip({ status, tone, pulse = false, className = "", ...rest }) {
    const t = tone || toneFor(status);
    return /* @__PURE__ */ import_react5.default.createElement("span", { className: ["ua-chip", "ua-chip--" + t, pulse ? "ua-chip--pulse" : "", className].filter(Boolean).join(" "), ...rest }, status);
  }

  // ../../x/adm/components/core/Tag.jsx
  var import_react6 = __toESM(require_react());
  var CSS6 = `
.ua-tag{display:inline-flex;align-items:center;gap:4px;font-family:var(--font-body);font-size:var(--fs-2xs);font-weight:var(--fw-semibold);padding:1px 7px;border-radius:5px;background:var(--n-100);color:#2e4a53;white-space:nowrap;line-height:18px}
.ua-tag--layer-huma{background:#e8f2ee;color:#1a5c4a}
.ua-tag--layer-stablecoin{background:#efe8d7;color:#6b5112}
.ua-tag button{border:none;background:none;padding:0;margin-left:2px;cursor:pointer;color:inherit;opacity:.6;line-height:1;font-size:12px}
.ua-tag button:hover{opacity:1}
`;
  if (typeof document !== "undefined" && !document.getElementById("ua-tag-css")) {
    const el = document.createElement("style");
    el.id = "ua-tag-css";
    el.textContent = CSS6;
    document.head.appendChild(el);
  }
  function Tag({ children, layer, onRemove, className = "", ...rest }) {
    const cls = ["ua-tag", layer ? "ua-tag--layer-" + layer : "", className].filter(Boolean).join(" ");
    return /* @__PURE__ */ import_react6.default.createElement("span", { className: cls, ...rest }, children, onRemove && /* @__PURE__ */ import_react6.default.createElement("button", { type: "button", "aria-label": "Remove " + children, onClick: onRemove }, "\xD7"));
  }

  // ../../x/adm/components/forms/Input.jsx
  var import_react7 = __toESM(require_react());
  var CSS7 = `
.ua-field{font-family:var(--font-body);display:flex;flex-direction:column;gap:5px;min-width:0}
.ua-field__label{font-size:var(--fs-xs);font-weight:var(--fw-semibold);color:var(--text-primary);display:flex;gap:4px}
.ua-field__req{color:var(--fin-down)}
.ua-field__hint{font-size:var(--fs-xs);color:var(--text-secondary)}
.ua-field__error{font-size:var(--fs-xs);color:var(--tone-bad-fg);font-weight:var(--fw-medium)}
.ua-input{font:inherit;font-size:var(--fs-base);height:var(--control-h);padding:0 10px;border-radius:var(--radius-md);border:1px solid var(--line-strong);background:#fff;color:var(--text-primary);width:100%;outline:none;transition:border-color var(--dur-fast) var(--ease),box-shadow var(--dur-fast) var(--ease)}
.ua-input:hover{border-color:var(--brand-deep-blue)}
.ua-input:focus{border-color:var(--brand-deep-blue);box-shadow:0 0 0 3px rgba(23,61,71,.15)}
.ua-input[aria-invalid="true"]{border-color:var(--tone-bad-fg)}
.ua-input[disabled]{background:var(--n-100);color:var(--text-secondary);cursor:not-allowed}
.ua-input--mono{font-family:var(--font-mono);font-size:var(--fs-sm)}
textarea.ua-input{height:auto;min-height:72px;padding:8px 10px;resize:vertical;line-height:1.4}
.ua-input-wrap{position:relative;display:flex;align-items:center}
.ua-input-wrap svg{position:absolute;left:10px;width:14px;height:14px;color:var(--text-tertiary);pointer-events:none}
.ua-input-wrap .ua-input{padding-left:30px}
.ua-input-wrap__suffix{position:absolute;right:10px;font-size:var(--fs-xs);color:var(--text-secondary)}
`;
  if (typeof document !== "undefined" && !document.getElementById("ua-input-css")) {
    const el = document.createElement("style");
    el.id = "ua-input-css";
    el.textContent = CSS7;
    document.head.appendChild(el);
  }
  function Input({ label, hint, error, required, multiline = false, mono = false, icon, suffix, id, className = "", ...rest }) {
    const uid = id || "ua-" + Math.random().toString(36).slice(2, 8);
    const cls = ["ua-input", mono ? "ua-input--mono" : ""].filter(Boolean).join(" ");
    const control = multiline ? /* @__PURE__ */ import_react7.default.createElement("textarea", { id: uid, className: cls, "aria-invalid": !!error, ...rest }) : /* @__PURE__ */ import_react7.default.createElement("input", { id: uid, className: cls, "aria-invalid": !!error, ...rest });
    return /* @__PURE__ */ import_react7.default.createElement("div", { className: ["ua-field", className].filter(Boolean).join(" ") }, label && /* @__PURE__ */ import_react7.default.createElement("label", { htmlFor: uid, className: "ua-field__label" }, label, required && /* @__PURE__ */ import_react7.default.createElement("span", { className: "ua-field__req", "aria-hidden": "true" }, "*")), icon || suffix ? /* @__PURE__ */ import_react7.default.createElement("div", { className: "ua-input-wrap" }, icon, control, suffix && /* @__PURE__ */ import_react7.default.createElement("span", { className: "ua-input-wrap__suffix" }, suffix)) : control, error ? /* @__PURE__ */ import_react7.default.createElement("div", { className: "ua-field__error", role: "alert" }, error) : hint ? /* @__PURE__ */ import_react7.default.createElement("div", { className: "ua-field__hint" }, hint) : null);
  }

  // ../../x/adm/components/forms/ReasonCodeField.jsx
  var import_react9 = __toESM(require_react());

  // ../../x/adm/components/forms/Select.jsx
  var import_react8 = __toESM(require_react());
  var CSS8 = `
.ua-select{font:inherit;font-size:var(--fs-base);height:var(--control-h);padding:0 30px 0 10px;border-radius:var(--radius-md);border:1px solid var(--line-strong);background:#fff url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%235b6b70' stroke-width='2.4'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E") no-repeat right 10px center;color:var(--text-primary);width:100%;appearance:none;-webkit-appearance:none;outline:none;cursor:pointer}
.ua-select:hover{border-color:var(--brand-deep-blue)}
.ua-select:focus{border-color:var(--brand-deep-blue);box-shadow:0 0 0 3px rgba(23,61,71,.15)}
.ua-select[aria-invalid="true"]{border-color:var(--tone-bad-fg)}
.ua-select[disabled]{background-color:var(--n-100);color:var(--text-secondary);cursor:not-allowed}
.ua-select--sm{height:var(--control-h-sm);font-size:var(--fs-sm);width:auto}
`;
  if (typeof document !== "undefined" && !document.getElementById("ua-select-css")) {
    const el = document.createElement("style");
    el.id = "ua-select-css";
    el.textContent = CSS8;
    document.head.appendChild(el);
  }
  function Select({ label, hint, error, required, options = [], placeholder, size = "md", id, className = "", ...rest }) {
    const uid = id || "ua-" + Math.random().toString(36).slice(2, 8);
    return /* @__PURE__ */ import_react8.default.createElement("div", { className: ["ua-field", className].filter(Boolean).join(" ") }, label && /* @__PURE__ */ import_react8.default.createElement("label", { htmlFor: uid, className: "ua-field__label" }, label, required && /* @__PURE__ */ import_react8.default.createElement("span", { className: "ua-field__req", "aria-hidden": "true" }, "*")), /* @__PURE__ */ import_react8.default.createElement("select", { id: uid, className: "ua-select" + (size === "sm" ? " ua-select--sm" : ""), "aria-invalid": !!error, ...rest }, placeholder && /* @__PURE__ */ import_react8.default.createElement("option", { value: "" }, placeholder), options.map((o) => typeof o === "string" ? /* @__PURE__ */ import_react8.default.createElement("option", { key: o, value: o }, o) : /* @__PURE__ */ import_react8.default.createElement("option", { key: o.value, value: o.value, disabled: o.disabled }, o.label))), error ? /* @__PURE__ */ import_react8.default.createElement("div", { className: "ua-field__error", role: "alert" }, error) : hint ? /* @__PURE__ */ import_react8.default.createElement("div", { className: "ua-field__hint" }, hint) : null);
  }

  // ../../x/adm/components/forms/ReasonCodeField.jsx
  function ReasonCodeField({ codes = [], reason = "", notes = "", onReasonChange, onNotesChange, reasonError, notesRequired = false, notesError }) {
    return /* @__PURE__ */ import_react9.default.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 12 } }, /* @__PURE__ */ import_react9.default.createElement(Select, { label: "Reason code", required: true, placeholder: "Select a reason", options: codes, value: reason, onChange: (e) => onReasonChange && onReasonChange(e.target.value), error: reasonError, hint: !reasonError ? "Recorded in the audit log with your actor ID." : void 0 }), /* @__PURE__ */ import_react9.default.createElement(Input, { label: "Notes", multiline: true, required: notesRequired, value: notes, onChange: (e) => onNotesChange && onNotesChange(e.target.value), error: notesError, placeholder: "Context for the reviewer: ticket, evidence, what you checked" }));
  }

  // ../../x/adm/components/forms/Tabs.jsx
  var import_react10 = __toESM(require_react());
  var CSS9 = `
.ua-tabs{font-family:var(--font-body);display:flex;gap:2px;border-bottom:1px solid var(--line);overflow-x:auto}
.ua-tab{font:inherit;font-size:var(--fs-sm);font-weight:var(--fw-medium);color:var(--text-secondary);background:none;border:none;border-bottom:2px solid transparent;padding:9px 12px;margin-bottom:-1px;cursor:pointer;white-space:nowrap;display:inline-flex;align-items:center;gap:6px}
.ua-tab:hover{color:var(--text-primary)}
.ua-tab[aria-selected="true"]{color:var(--brand-deep-blue);border-bottom-color:var(--brand-deep-blue);font-weight:var(--fw-semibold)}
.ua-tab:focus-visible{outline:2px solid var(--focus-on-light);outline-offset:-2px;border-radius:4px}
.ua-tab__count{font-size:var(--fs-2xs);font-weight:var(--fw-semibold);padding:0 6px;border-radius:980px;background:var(--n-100);color:var(--text-secondary);line-height:16px}
.ua-tab[aria-selected="true"] .ua-tab__count{background:var(--tone-info-bg);color:var(--brand-deep-blue)}
`;
  if (typeof document !== "undefined" && !document.getElementById("ua-tabs-css")) {
    const el = document.createElement("style");
    el.id = "ua-tabs-css";
    el.textContent = CSS9;
    document.head.appendChild(el);
  }
  function Tabs({ items = [], value, onChange, className = "", ...rest }) {
    return /* @__PURE__ */ import_react10.default.createElement("div", { role: "tablist", className: ["ua-tabs", className].filter(Boolean).join(" "), ...rest }, items.map((it) => /* @__PURE__ */ import_react10.default.createElement("button", { key: it.value, role: "tab", type: "button", "aria-selected": it.value === value, className: "ua-tab", onClick: () => onChange && onChange(it.value) }, it.label, it.count != null && /* @__PURE__ */ import_react10.default.createElement("span", { className: "ua-tab__count" }, it.count))));
  }
  return __toCommonJS(stdin_exports);
})();
window.UNERAAdminDS = Object.assign(window.UNERAAdminDS || {}, __ds_tmp); window.__DS__ = window.UNERAAdminDS;
