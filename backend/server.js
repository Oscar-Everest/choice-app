import express from "express";
import data from "./data";

const app = express();

app.get("/api/contents/:userHandle", (req, res) => {
    const contentUserHandle = req.params.userHandle;
    const content = data.contents.find(x => x.userHandle === contentUserHandle);
    if(content)
    res.send(content);
    else
    res.status(404).status({msg: "Username Not Found."})
});

app.get("/api/contents", (req, res) => {
    res.send(data.contents);
})

app.listen(5000, () => {console.log("Server started at http://localhost:5000")});