/* -------------------- service worker for our extension -------------------- */

// opens a new tab, with given url, and return the tabId.
const getTabId = async (url) => {
    let tab = await chrome.tabs.create({url});
    const tabId = tab.id;
    return tabId;
};

// handle user sign in
const handleSignIn = async () => {
    // open eLitmus homepage
    const tabId = await getTabId('https://www.elitmus.com/');

    // inject content.js and content.css
    await chrome.scripting.insertCSS({
        target: {tabId: tabId},
        files: ['content.css']
    });
    await chrome.scripting.executeScript({
        target: {tabId: tabId},
        files: ['content.js']
    });
};

// if admin link is clicked, admin page will be opened.
const handleAdmin = async () => {
    const tabId = await getTabId(chrome.runtime.getURL('./admin/index.html'));
};


// when extension is installed, add a listener for messages from content.js and popup.js.
chrome.runtime.onInstalled.addListener( async () => {
    
    console.log("Extension installed");

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if(request.message === 'user_signed_in') {
            chrome.storage.local.set({username: request.name});
            handleSignIn();
        }

        if(request.message === 'admin_link_clicked') {
            handleAdmin();
        }
    });

});