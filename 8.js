var kWeakestRows = function (m, k) {
    return m.map((r, i) => [i, r.reduce((a, b) => a + b, 0)])
        .sort((a, b) => (a[1] - b[1]) * 1000 + a[0] - b[0])
        .slice(0, k).map(r => r[0]);
};