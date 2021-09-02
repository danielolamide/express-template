import express from "express";

function getHelloRoutes() {
	const router = express.Router();

	router.get("/world", helloworld);

	return router;
}

async function helloworld(req, res) {
	res.status(200);
	res.json({ message: "Hello World" });
}

export {getHelloRoutes};
