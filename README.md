# Logout Everywhere

A small Chrome extension that clears cookies and selected site storage to sign you out of websites in the current browser profile.

## Install locally

1. Download this repository and extract it, or clone it with Git.
2. Open `chrome://extensions` in Chrome.
3. Turn on **Developer mode**.
4. Click **Load unpacked** and select the folder containing `manifest.json`.
5. Open the extension from Chrome's extensions menu. Pin it for easier access if desired.

No build step, package installation, or configuration is required.

## Usage

1. Save any work in open websites.
2. Open **Logout Everywhere**.
3. Click **Log out of all accounts**.
4. Confirm the prompt and wait for the completion message.

**Clearing site data cannot be undone.** It can remove website preferences, offline data, and locally stored work as well as login sessions. Reload open tabs afterward to see their updated sign-in state.

## What it clears

The extension calls `chrome.browsingData.remove` with `since: 0` to clear all available data of these types:

- Cookies
- Local storage
- IndexedDB
- Cache Storage
- Service worker registrations

It requests the `browsingData` permission for this operation. The source contains no analytics, external dependencies, or network requests.

## Limitations

- Affects the current browser profile; it does not sign you out on other devices or revoke sessions on a website's servers.
- Sites using other authentication mechanisms may keep you signed in. The completion message indicates that the clearing operation finished, rather than verifying every website's session.
- Browser-protected data and browser policies may limit what can be cleared.
- Browsing history, saved passwords, bookmarks, and the regular browser HTTP cache are not selected for deletion.

## Project files

| File | Purpose |
| --- | --- |
| `manifest.json` | Manifest V3 metadata and permission declaration |
| `popup.html` | Popup interface |
| `popup.js` | Confirmation, site-data clearing, and status messages |

## Development

Edit the files directly, then click **Reload** for the extension on `chrome://extensions` and reopen the popup. To manually check it, use a separate browser profile with disposable site data and verify both canceling and confirming the prompt. There is no automated test suite.
