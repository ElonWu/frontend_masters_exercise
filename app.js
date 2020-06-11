const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	console.log("request comkin in");
	res.send("hello from google cloud.");
})

app.listen(port, () => console.log(`server on port ${port}`));

