import express from "express";
import { getRoutes } from "./routes/index.js";

function startServer() {
	const app = express();
	const port = process.env.PORT;
	app.listen(port ?? 3001, () => {
		console.log(`Server listening on port ${port}`);
	});

	app.use("/api/v1", getRoutes());
	app.use(errorMiddleware);
}

function errorMiddleware(error, req, res, next) {
	if (res.hasHeader) {
		next(error);
	} else {
		res.status(500);
		res.json({
			message: error.message,
		});
	}
}

export { startServer };
