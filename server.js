// const express = require("express");
//  const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
//  const app = next({ dev, dir: "./src" }); // Tell Next.js to use the 'src' folder
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//     const server = express();

//     // Example API route
//     server.get("/api/hello", (req, res) => {
//         res.json({ message: "Hello from Express!" });
//     });

//     // Custom route
//     server.get("/custom", (req, res) => {
//         res.send("This is a custom Express route!");
//     });

//     // Let Next.js handle everything else
//     server.all("*", (req, res) => {
//         return handle(req, res);
//     });

//     const PORT = process.env.PORT || 3000;
//     server.listen(PORT, () => {
//         console.log(`🚀 Server running at http://localhost:${PORT}`);
//     });
// });

 const express = require('express')

 const app = express()

 const port = 3000;

 app.get('/',(req, res)=>{
    res.send('Welcome to this Home Page!!')
    console.log(req);
 });

 app.get('/about', (req, res)=>{
    res.send('Welcome to this Home Page!!')
 });




 app.listen(port, () => {
    console.log(`🚀 Server running on port ${port}`);
 })