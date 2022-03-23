const express = require("express");
const multer = require("multer");
const upload = multer({dest: "files/"});
const cors = require("cors");
const app = express();

app.use(cors({origin: ["*", "https://www.freecodecamp.org"]}));
app.set("/public", process.cwd() + "/views");

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.post("/api/fileanalyse", upload.any(), (req, res) => {
    if (!req.files || !req.files[0]) return res.json({});
    return res.json({
        name: req.files[0].originalname,
        type: req.files[0].mimetype,
        size: req.files[0].size
    })
})

app.listen(3080, () => console.log(`Now listening to port RTX 3080`));