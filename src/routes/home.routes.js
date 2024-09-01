import { Hono } from "hono";
import { getHomes } from "../controllers/home.controllers";

const home = new Hono();

home.get("/", getHomes).get("/isAuth/userHomes", (c) => c.text("Welcome to home 🏡"));

export default home;
