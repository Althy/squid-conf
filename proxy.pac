
function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*.x.com"))
    {
        return "PROXY http://x.x.x.x:x";
    }
    return "DIRECT";
