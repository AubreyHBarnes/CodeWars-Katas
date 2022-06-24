function domainName(url) {
    //if http:// OR https:// are found, remove from string
    //if www. is found, remove from string
    //find first instance of . and remove everything after inclusive

    const procotolRegex = /https?:\/\//;
    const wwwRegex = /(www\.)/;
    var trimUrl = url;
    let noProtocol = '';
    let noDomain = '';

    if (trimUrl.includes('http')) {
        noProtocol = trimUrl.replace(procotolRegex, '');
        // console.log(noProtocol)
    }
    if (noProtocol.includes('www.')) {
        noProtocol = noProtocol.replace(wwwRegex, '');
        // console.log(noProtocol)
    }
    
//     const domainRegex = /\.(.*)/
//     noDomain = noProtocol.replace(domainRegex, '');
    noProtocol = noProtocol.replace(/\.(.*)/, '');
    console.log(noProtocol);
}