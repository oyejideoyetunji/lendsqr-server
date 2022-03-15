const cors = require("cors");
const path = require("path");
const express = require("express");
const usersRouter = require("./routes.users");
const app = express();


const port = process.env.PORT || 8000;

app.use(cors())
app.use(express.static("build"))

app.use("/api/users", usersRouter);
app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, "build/index.html"));
});

app.listen(port, () => {
    console.log('Server is up!');
});
