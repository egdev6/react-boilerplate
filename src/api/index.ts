import axios from "axios";
import { API_URL } from "@constants/index";

const http = axios.create({
	baseURL: API_URL,
	headers: {
		Accept: "application/json",
		"Content-Type": "application/json",
	},
});

export default http;
