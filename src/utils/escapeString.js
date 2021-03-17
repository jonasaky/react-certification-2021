const escapeString = txt => new DOMParser().parseFromString(txt, 'text/html').body.innerText;

export { escapeString };