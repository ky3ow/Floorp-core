/* eslint-disable no-undef */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/* import-globals-from preferences.js */

var { workspacesPreferences } = ChromeUtils.importESModule(
  "resource:///modules/WorkspacesService.sys.mjs"
);


XPCOMUtils.defineLazyGetter(this, "L10n", () => {
  return new Localization(["branding/brand.ftl", "browser/floorp", ]);
});

Preferences.addAll([
  { id: workspacesPreferences.WORKSPACE_CLOSE_POPUP_AFTER_CLICK_PREF, type: "bool" },
  { id: workspacesPreferences.WORKSPACE_MANAGE_ON_BMS_PREF, type: "bool" },
  { id: workspacesPreferences.WORKSPACE_SHOW_WORKSPACE_NAME_PREF, type: "bool" },
])

const gWorkspacesPane = {
  _pane: null,
  init() {
    this._pane = document.getElementById("paneWorkspaces");
    document.getElementById("backtogeneral-workspaces").addEventListener("command", () => {
      gotoPref("general")
    });
  },  
};
