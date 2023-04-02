const http = require('http');

const server = http.createServer((req, res) => {
    const newURL = new URL(`https://${req.headers.host.replace("dothq.co", "dothq.org")}${req.url}`);

    newURL.searchParams.set("domain_migration", "1");

    res.statusCode = 302;
    res.setHeader("Location", newURL.href);
    res.end("");
});

server.listen(3000, () => {
    console.log(`Server running at http://127.0.0.1:3000/`);
});
