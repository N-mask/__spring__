import { l as g, ai as m, $ as t, u as f, x as d, y as x, E as h, aj as l, q as y, e as $, ak as C, P as w, n as S } from "./copilot-CDIH58Wx.js";
import { r as p } from "./state-CdguMiuS.js";
import { i } from "./icons-DHFxWkZw.js";
import { L as T } from "./lit-renderer-pwmpXJ8k.js";
import { B as k } from "./base-panel-BszkQant.js";
/**
 * @license
 * Copyright (c) 2017 - 2025 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */
class A extends T {
  /**
   * Adds the renderer callback to the select.
   */
  addRenderer() {
    this.element.renderer = (e, o) => {
      this.renderRenderer(e, o);
    };
  }
  /**
   * Runs the renderer callback on the select.
   */
  runRenderer() {
    this.element.requestContentUpdate();
  }
  /**
   * Removes the renderer callback from the select.
   */
  removeRenderer() {
    this.element.renderer = null;
  }
}
const P = g(A), u = window.Vaadin.copilot.tree;
if (!u)
  throw new Error("Tried to access copilot tree before it was initialized.");
var E = Object.defineProperty, I = Object.getOwnPropertyDescriptor, c = (a, e, o, s) => {
  for (var n = s > 1 ? void 0 : s ? I(e, o) : e, b = a.length - 1, v; b >= 0; b--)
    (v = a[b]) && (n = (s ? v(e, o, n) : v(n)) || n);
  return s && n && E(e, o, n), n;
};
let r = class extends k {
  constructor() {
    super(...arguments), this.selectedTab = 0, this.activationShortcutEnabled = t.isActivationShortcut(), this.aiUsage = t.isAIUsageAllowed(), this.aiProvider = t.getAIProvider(), this.hideCopilotRequestOngoing = !1, this.hideCopilotDialogVisible = !1, this.sizeItems = [
      { label: "Default", value: "default" },
      { label: "Compact", value: "compact" }
    ], this.themeItems = [
      { label: "System", value: "system" },
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" }
    ], this.toolbarExpandModeItems = [
      {
        label: "Proximity",
        value: "proximity",
        description: "The toolbar expands and becomes fully visible as the mouse pointer approaches it."
      },
      {
        label: "Click",
        value: "click",
        description: "The toolbar expands and becomes fully visible when Play mode is clicked."
      },
      {
        label: "Hover",
        value: "hover",
        description: "The toolbar expands and becomes fully visible when the mouse hovers over it."
      },
      {
        label: "Always expanded",
        value: "always",
        description: "The toolbar remains fully visible at all times and never collapses or becomes translucent."
      },
      {
        label: "Disabled",
        value: "never",
        description: "Only Play mode is visible. Changing Copilot mode is not available, and keyboard shortcuts are disabled."
      }
    ], this.aiUsageItems = [
      { label: "Ask each time", value: "ask" },
      { label: "Allow", value: "yes" },
      { label: "Deny", value: "no" }
    ], this.aiProviderItems = [
      { label: "Any region", value: "ANY" },
      { label: "EU only", value: "EU_ONLY" }
    ], this.toggleActivationShortcut = () => {
      this.activationShortcutEnabled = !this.activationShortcutEnabled, t.setActivationShortcut(this.activationShortcutEnabled);
    };
  }
  connectedCallback() {
    super.connectedCallback(), this.style.display = "block", this.classList.add("h-full");
  }
  updated(a) {
    super.updated(a);
    const e = this.querySelector('[part="general-tab-container"]'), o = this.querySelector("vaadin-tabs");
    e && o && (e.style.height = `calc(100% - ${o.getBoundingClientRect().height}px)`);
  }
  renderKbd(a) {
    const e = a.replace(/<kbd([^>]*)class="([^"]*)"/, '<kbd$1class="$2 font-sans ms-auto"').replace(/<kbd(?![^>]*class=)/, '<kbd class="font-sans ms-auto"');
    return f(e);
  }
  render() {
    return d`
      <vaadin-tabs>
        <vaadin-tab ?selected=${this.selectedTab === 0} @click=${() => this.selectedTab = 0}>General</vaadin-tab>
        <vaadin-tab ?selected=${this.selectedTab === 1} @click=${() => this.selectedTab = 1}>Shortcuts</vaadin-tab>
        <vaadin-tab ?selected=${this.selectedTab === 2} @click=${() => this.selectedTab = 2}>AI</vaadin-tab>
      </vaadin-tabs>
      ${this.selectedTab === 0 ? this.renderGeneralTab() : null}
      ${this.selectedTab === 1 ? this.renderShortcutsTab() : null} ${this.selectedTab === 2 ? this.renderAiTab() : null}
    `;
  }
  renderGeneralTab() {
    const a = t.getSelectedSize(), e = t.getSelectedTheme(), o = t.getToolbarExpandMode();
    return d`
      <div class="w-full flex flex-col justify-between" part="general-tab-container">
        <div class="border-dashed flex flex-col divide-y px-4 py-0.5">
          <div class="flex gap-2 items-start justify-between py-2">
            <label class="py-1.5" id="size">Size</label>
            <vaadin-select
              accessible-name-ref="size"
              class="flex-shrink-0"
              theme="auto-width no-border"
              .items="${this.sizeItems}"
              .value="${a}"
              @change="${(s) => {
      t.setSelectedSize(s.target.value);
    }}"></vaadin-select>
          </div>
          <div class="flex gap-2 items-start justify-between py-2">
            <label class="py-1.5" id="theme">Theme</label>
            <vaadin-select
              accessible-name-ref="theme"
              class="flex-shrink-0"
              theme="auto-width no-border"
              .items="${this.themeItems}"
              .value="${e}"
              @change="${(s) => {
      t.setSelectedTheme(
        s.target.value
      );
    }}"></vaadin-select>
          </div>
          <div class="flex gap-2 items-start justify-between py-2">
            <div class="flex flex-col py-1.5">
              <label id="toolbar-button-expand-mode">Toolbar behavior</label>
              <span class="text-secondary text-xs">How it appears & expands</span>
            </div>
            <vaadin-select
              accessible-name-ref="toolbar-expand-mode"
              class="flex-shrink-0"
              theme="auto-width no-border"
              .value="${o}"
              ${P(
      () => d`
                  <vaadin-list-box class="max-w-xs">
                    ${this.toolbarExpandModeItems.map(
        (s) => d`
                        <vaadin-item class="items-start" label="${s.label}" value="${s.value}">
                          <span class="flex flex-col gap-0.5">
                            <span>${s.label}</span>
                            <span class="text-secondary text-xs">${s.description}</span>
                          </span>
                        </vaadin-item>
                      `
      )}
                  </vaadin-list-box>
                `
    )}
              @change="${(s) => {
      const n = t.getToolbarExpandMode();
      t.setToolbarExpandMode(
        s.target.value
      ), x("toolbar-expand-mode-change", {
        selected: t.getToolbarExpandMode(),
        previous: n
      });
    }}"></vaadin-select>
          </div>
          <div class="flex gap-2 justify-between py-3.5">
            <div class="flex flex-col">
              <label id="reduce-motion-label">Reduce motion</label>
              <span id="reduce-motion-desc" class="text-secondary text-xs">Disables animations</span>
            </div>
            <button
              aria-checked="true"
              aria-labelledby="reduce-motion-label"
              aria-describedby="reduce-motion-desc"
              class="my-px"
              role="switch"
              type="button">
              <span></span>
            </button>
          </div>
          <div class="flex gap-2 justify-between py-3.5">
            <div class="flex flex-col">
              <label id="error-reports-label">Send error reports</label>
              <span id="error-reports-desc" class="text-secondary text-xs">Helps us improve the user experience</span>
            </div>
            <button
              aria-checked="true"
              aria-labelledby="error-reports-label"
              aria-describedby="error-reports-desc"
              class="my-px"
              role="switch"
              type="button">
              <span></span>
            </button>
          </div>
        </div>
        <div class="w-full px-4 py-0.5 mb-4" style="box-sizing: border-box">
          <div class="bg-gray-3 dark:bg-gray-6 flex flex-col rounded-md">
            <vaadin-button
              data-test-id="hide-copilot-btn"
              @click="${this.handleHideCopilotButtonClick}"
              class="border-0 h-auto justify-start py-2"
              theme="tertiary">
              <vaadin-icon slot="prefix" .svg="${i.close}"></vaadin-icon>
              <span class="flex flex-col items-start">
                <span>Hide Copilot until server restart</span>
              </span>
            </vaadin-button>
          </div>
        </div>
      </div>

      <vaadin-confirm-dialog
        id="hideCopilotDialog"
        header="Temporarily Hide Copilot"
        .confirmText=${this.hideCopilotRequestOngoing ? "Hiding…" : "Continue"}
        cancel-text="Cancel"
        cancel-button-visible
        confirm-theme="primary"
        .confirmDisabled=${this.hideCopilotRequestOngoing}
        .cancelDisabled=${this.hideCopilotRequestOngoing}
        .noCloseOnEsc=${this.hideCopilotRequestOngoing}
        .opened="${this.hideCopilotDialogVisible}"
        .noCloseOnOutsideClick=${this.hideCopilotRequestOngoing}
        @cancel=${() => {
      this.hideCopilotDialogVisible = !1;
    }}
        @confirm=${this.onDisableConfirm}>
        This will hide the Copilot until the server restarts. The page will reload to apply the change. Do you want to
        continue?
        ${this.hideCopilotRequestOngoing ? d`
              <div style="display:flex; align-items:center; gap:var(--lumo-space-s); margin-top:var(--lumo-space-m);">
                <vaadin-progress-indicator indeterminate></vaadin-progress-indicator>
                <span>Hiding…</span>
              </div>
            ` : null}
      </vaadin-confirm-dialog>
    `;
  }
  renderShortcutsTab() {
    const a = u.hasFlowComponents();
    return d`<div class="flex flex-col gap-4 pb-2 pt-4 px-4 ">
      <div class="flex justify-between">
        <div class="flex flex-col">
          <label id="enable-shortcuts-label">Enable keyboard shortcut</label>
          <span id="enable-shortcuts-desc" class="text-secondary text-xs"
            >Switch anytime to Play mode with ${this.renderKbd(l.toggleCopilot)}</span
          >
        </div>
        <button
          aria-checked="${this.activationShortcutEnabled}"
          aria-labelledby="enable-shortcuts-label"
          aria-describedby="enable-shortcuts-desc"
          class="my-px"
          role="switch"
          type="button"
          @click=${() => this.toggleActivationShortcut()}>
          <span></span>
        </button>
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="font-semibold my-0 text-sm">Global</h3>
        <ul class="border-dashed divide-y flex flex-col list-none m-0 p-0">
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.vaadin}"></vaadin-icon>
            <span>Switch Play Mode / Last Mode</span>
            ${this.renderKbd(l.toggleCopilot)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.undo}"></vaadin-icon>
            <span>Undo</span>
            ${this.renderKbd(l.undo)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.redo}"></vaadin-icon>
            <span>Redo</span>
            ${this.renderKbd(l.redo)}
          </li>
        </ul>
      </div>
      <div class="flex flex-col gap-1">
        <h3 class="font-semibold my-0 text-sm">Component Selection</h3>
        <ul class="border-dashed divide-y flex flex-col list-none m-0 p-0">
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.sparkles}"></vaadin-icon>
            <span>Open AI prompt</span>
            ${this.renderKbd(l.openAiPopover)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.code}"></vaadin-icon>
            <span>Go to source</span>
            ${this.renderKbd(l.goToSource)}
          </li>
          ${a ? d`<li class="flex gap-2 py-2">
                <vaadin-icon .svg="${i.code}"></vaadin-icon>
                <span>Go to attach source</span>
                ${this.renderKbd(l.goToAttachSource)}
              </li>` : h}
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.contentCopy}"></vaadin-icon>
            <span>Copy</span>
            ${this.renderKbd(l.copy)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.contentPaste}"></vaadin-icon>
            <span>Paste</span>
            ${this.renderKbd(l.paste)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.fileCopy}"></vaadin-icon>
            <span>Duplicate</span>
            ${this.renderKbd(l.duplicate)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.turnLeft}"></vaadin-icon>
            <span>Select parent</span>
            ${this.renderKbd(l.selectParent)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.north}"></vaadin-icon>
            <span>Select previous sibling</span>
            ${this.renderKbd(l.selectPreviousSibling)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.south}"></vaadin-icon>
            <span>Select first child / next sibling</span>
            ${this.renderKbd(l.selectNextSibling)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.delete}"></vaadin-icon>
            <span>Delete</span>
            ${this.renderKbd(l.delete)}
          </li>
          <li class="flex gap-2 py-2">
            <vaadin-icon .svg="${i.dashboardCustomize}"></vaadin-icon>
            <span>Add component</span>
            <kbd class="font-sans ms-auto">A – Z</kbd>
          </li>
        </ul>
      </div>
    </div>`;
  }
  renderAiTab() {
    const a = y.userInfo?.vaadiner;
    return d`<div class="border-dashed flex flex-col divide-y px-4 py-0.5">
      <div class="flex gap-2 items-start justify-between py-2">
        <div class="flex flex-col py-1.5">
          <label id="ai-usage">AI usage</label>
          <span class="text-secondary text-xs">All AI features are clearly labelled </span>
        </div>
        <vaadin-select
          accessible-name-ref="ai-usage"
          class="flex-shrink-0"
          theme="auto-width no-border"
          .items="${this.aiUsageItems}"
          .value="${this.aiUsage}"
          @value-changed="${(e) => {
      this.aiUsage = e.detail.value, t.setAIUsageAllowed(e.detail.value);
    }}"></vaadin-select>
      </div>
      ${a ? d`<div class="flex gap-2 items-start justify-between py-2">
            <label class="py-1.5" id="ai-provider">AI provider</label>
            <vaadin-select
              accessible-name-ref="ai-provider"
              class="flex-shrink-0"
              theme="auto-width no-border"
              .items="${this.aiProviderItems}"
              .value="${this.aiProvider}"
              @value-changed="${(e) => {
      this.aiProvider = e.detail.value, t.setAIProvider(e.detail.value);
    }}"></vaadin-select>
          </div>` : h}
    </div>`;
  }
  handleHideCopilotButtonClick() {
    this.hideCopilotDialogVisible = !0;
  }
  onDisableConfirm() {
    this.hideCopilotRequestOngoing = !0, $(`${w}hide-copilot`, {}, (a) => {
      C(a.data, {}) || (this.hideCopilotRequestOngoing = !1, window.location.reload());
    });
  }
};
c([
  p()
], r.prototype, "selectedTab", 2);
c([
  p()
], r.prototype, "activationShortcutEnabled", 2);
c([
  p()
], r.prototype, "aiUsage", 2);
c([
  p()
], r.prototype, "aiProvider", 2);
c([
  p()
], r.prototype, "hideCopilotRequestOngoing", 2);
c([
  p()
], r.prototype, "hideCopilotDialogVisible", 2);
r = c([
  S("copilot-settings-panel")
], r);
const D = {
  header: "Settings",
  tag: m.SETTINGS
}, R = {
  init(a) {
    a.addPanel(D);
  }
};
window.Vaadin.copilot.plugins.push(R);
export {
  r as CopilotSettingsPanel,
  D as panelConfig
};
