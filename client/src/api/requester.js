const host = "http://localhost:3030";

async function request(uri, options) {
	try {
		const response = await fetch(host + uri, options);
		if (response.ok !== true) {
			const error = await response.json();
			throw new Error(error.message);
		}
		return response.json();
	} catch (error) {
		alert(error.message);
		throw error;
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
	return await request(url, createOptions());
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
