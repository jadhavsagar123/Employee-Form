import axios from 'axios';
const usersUrl = 'http://localhost:5000';

export const getEmployee = async (id) => {
    id = id || '';
    return await axios.get(`${usersUrl}/${id}`);
}

export const addEmployee = async (user) => {
    return await axios.post(`${usersUrl}/add`, user);
}

export const deleteEmployee = async (id) => {
    return await axios.delete(`${usersUrl}/${id}`);
}

export const editEmployee = async (id, user) => {
    return await axios.put(`${usersUrl}/${id}`, user)
}

export const login = async (input) => {
    return await axios.post(`${usersUrl}/auth/login`,input)
}

export const signup = async (input) => {
    return await axios.post(`${usersUrl}/auth/signup`,input)
}