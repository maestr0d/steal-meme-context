function saveImage(src) {

    var element = document.createElement('a');
    element.setAttribute('href', src);
    element.setAttribute('download', src);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

}

browser.runtime.onMessage.addListener(request => {
    saveImage(request.url);
});