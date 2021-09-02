import express from "express";
import {getHelloRoutes} from './hello.js';

function getRoutes() {
	const router = express.Router();

	router.use("/hello", getHelloRoutes());
	return router;
}

export { getRoutes };
