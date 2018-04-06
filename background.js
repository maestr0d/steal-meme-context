browser.contextMenus.create({
    id: "save-image",
    title: "Steal meme",
    contexts: ["image"]
});
browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "save-image") {
        const safeUrl = escapeHTML(info.srcUrl);

        browser.tabs.sendMessage(
          tab.id,
          { url: safeUrl }
        ).catch(onError);

        function onError(e){ console.log(e); }
    }
});

// https://gist.github.com/Rob--W/ec23b9d6db9e56b7e4563f1544e0d546
function escapeHTML(str) {
    // Note: string cast using String; may throw if `str` is non-serializable, e.g. a Symbol.
    // Most often this is not the case though.
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        .replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
