const host = "http://localhost:3030";

async function request(uri, options) {
	try {
		const response = await fetch(host + uri, options);
		if (response.ok !== true) {
			const error = await response.json();
			return error;
		}
		return response.json();
	} catch (error) {
		return error;
	}
}

function createOptions(method = "GET", data) {
	const options = {
		method,
		headers: {},
	};

	if (data) {
		options.headers["Content-Type"] = "application/json";
		options.body = JSON.stringify(data);
	}

	return options;
}

export async function get(url) {
	return await request(url, createOptions("GET"));
}

export async function post(url, data) {
	return await request(url, createOptions("POST", data));
}

export async function del(url) {
	return await request(url, createOptions("DELETE"));
}

export async function put(url, data) {
	return await request(url, createOptions("PUT", data));
}
