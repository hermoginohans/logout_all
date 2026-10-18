const button = document.getElementById("logout");
const status = document.getElementById("status");

button.addEventListener("click", async () => {
  if (!confirm("Sign out of ALL websites? Cookies and site data will be cleared.")) return;
  button.disabled = true;
  try {
    await chrome.browsingData.remove(
      { since: 0 },
      {
        cookies: true,
        localStorage: true,
        indexedDB: true,
        cacheStorage: true,
        serviceWorkers: true,
      }
    );
    status.textContent = "Done. You are logged out everywhere.";
  } catch (e) {
    status.textContent = "Error: " + e.message;
  } finally {
    button.disabled = false;
  }
});
