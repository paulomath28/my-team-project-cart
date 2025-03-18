(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
        n(e);
    new MutationObserver(e => {
        for (const r of e)
            if (r.type === "childList")
                for (const c of r.addedNodes)
                    c.tagName === "LINK" && c.rel === "modulepreload" && n(c)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function s(e) {
        const r = {};
        return e.integrity && (r.integrity = e.integrity),
        e.referrerPolicy && (r.referrerPolicy = e.referrerPolicy),
        e.crossOrigin === "use-credentials" ? r.credentials = "include" : e.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function n(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const r = s(e);
        fetch(e.href, r)
    }
}
)();
function i(o) {
    return JSON.parse(localStorage.getItem(o))
}
function a(o, t) {
    localStorage.setItem(o, JSON.stringify(t))
}
function l(o) {
    const t = window.location.search;
    return new URLSearchParams(t).get(o)
}
function u(o, t, s, n="afterBegin", e=!1) {
    const r = s.map(o);
    e && (t.innerHTML = ""),
    t.insertAdjacentHTML(n, r.join(""))
}
function f() {
    const o = i("so-cart") || []
      , t = document.getElementById("cart-count");
    t && (o.length === 0 ? t.style.display = "none" : (t.style.display = "block",
    t.textContent = o.length))
}
export {l as a, i as g, u as r, a as s, f as u};

