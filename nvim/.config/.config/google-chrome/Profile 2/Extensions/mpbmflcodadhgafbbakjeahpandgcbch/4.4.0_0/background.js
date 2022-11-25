/**
 * Returns an array of unique element strings that
 * include 'svg' somewhere in the string. Must be a single function
 * scope for v3 manifest security.
 */
function findSVGs() {
    /**
     * Background image urls must be determined in the DOM where
     * they are placed. This creates a new img with it set as the src.
     */
    const parseBgImageElements = () => {
        const results = [];
        const elements = Array.from(document.querySelectorAll('div'));
        elements.forEach((element) => {
            const style = window.getComputedStyle(element);
            const src = style.backgroundImage.slice(4, -1).replace(/"/g, '');
            if (src.includes('svg')) {
                const image = new Image();
                image.src = src;
                results.push(image.outerHTML);
            }
        });
        return results;
    };
    /**
     * Returns the outerhtml of a specified tag that includes
     * 'svg' or '<g ' in the string.
     */
    const getElementsByTag = (tag) => Array.from(document.querySelectorAll(tag))
        .map((element) => element.outerHTML)
        .filter((element) => element.includes('svg') || element.includes('<g '));
    return [
        ...new Set([
            ...parseBgImageElements(),
            ...getElementsByTag('svg'),
            ...getElementsByTag('symbol'),
            ...getElementsByTag('img'),
            ...getElementsByTag('g'),
        ]),
    ];
}

const executeScript = async (tabId, func) => (await chrome.scripting.executeScript({
    target: { tabId },
    func,
}))[0].result;
chrome.action.onClicked.addListener(async ({ url }) => {
    if (url === null || url === void 0 ? void 0 : url.includes('chrome://')) {
        chrome.tabs.create({ url: `./pages/index.html`, active: true }, () => {
            chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
                if (changeInfo.status === 'complete') {
                    chrome.tabs.sendMessage(tabId, {
                        data: [],
                        action: 'gobble',
                        url: 'Dashboard',
                    });
                    chrome.tabs.onUpdated.removeListener(listener);
                }
            });
        });
    }
    else {
        const { id } = (await chrome.tabs.query({ active: true, currentWindow: true }))[0];
        const data = await executeScript(id, findSVGs);
        const url = await executeScript(id, () => document.location.host);
        const location = await executeScript(id, () => document.location.origin);
        chrome.tabs.create({ url: `./pages/index.html`, active: true }, () => {
            chrome.tabs.onUpdated.addListener(function listener(tabId, changeInfo) {
                if (changeInfo.status === 'complete') {
                    chrome.tabs.sendMessage(tabId, {
                        data,
                        action: 'gobble',
                        location,
                        url,
                    });
                    chrome.tabs.onUpdated.removeListener(listener);
                }
            });
        });
    }
});
/**
 * Show the welcome screen on install
 */
chrome.runtime.onInstalled.addListener(async (details) => {
    if (details.reason === 'install') {
        await chrome.tabs.create({ url: 'pages/welcome.html' });
    }
});
/**
 * Switch to Dev icon if extension is loaded as unpacked
 */
chrome.runtime.onInstalled.addListener(() => {
    const isDevMode = !('update_url' in chrome.runtime.getManifest());
    if (isDevMode)
        chrome.action.setIcon({
            path: {
                '16': 'assets/development/16.png',
                '24': 'assets/development/24.png',
                '32': 'assets/development/32.png',
            },
        });
});
