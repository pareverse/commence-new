import axios from 'axios'

const http = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_URL}/api`,
	headers: {
		'Content-type': 'application/json'
	}
})

const create = async (path, data) => {
	await http.post(path, data)
}

const get = async (path, id) => {
	return await http.get(path, id).then((res) => res.data)
}

const getAll = async (path) => {
	return await http.get(path).then((res) => res.data)
}

const update = async (path, data) => {
	await http.patch(path, data)
}

const remove = async (path, id) => {
	await http.delete(path, id)
}

const api = {
	create,
	get,
	getAll,
	update,
	remove
}

export default api
