import http from "http";
import fs from "fs/promises";

const PORT = 3000;

function getBody(req) {
    return new Promise((res, rej) => {
        let body = [];
        req.on("data", chunk => {
            body.push(chunk);
        });

        req.on("end", () => {
            try {
                const json = JSON.parse(Buffer.concat(body).toString());
                res(json);
            } catch (error) {
                rej(error);
            }
        });
        req.on("error", err => rej(err));
    });
}

const server = http.createServer(async (req, res) => {
    try {
        if (req.method === "GET" && req.url === "/riddles") {
            const data = await fs.readFile("db/riddles.txt", "utf8");
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        } else if (req.method === "POST" && req.url === "/riddles/addRiddle") {
            const newRiddle = await getBody(req);

            const fileContent = await fs.readFile("db/riddles.txt", "utf8");
            const riddles = JSON.parse(fileContent);

            newRiddle.id = riddles.length + 1;  
            riddles.push(newRiddle);

            await fs.writeFile("db/riddles.txt", JSON.stringify(riddles));

            res.writeHead(201, { "Content-Type": "text/plain" });
            res.end("Riddle saved");
        } else {
            res.writeHead(404);
            res.end("Not found");
        }
    } catch (error) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        console.error(error);
    }
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
