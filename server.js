const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.json({
		slackUsername: "@Chiso",
		backend: true,
		age: 19,
		bio: "I am a ambition and passionate software developer. I thrive on challenges and constantly set goals for myself and I'm always looking for an opportunity to do better and achieve greatness",
	});
});

app.listen(8000);
