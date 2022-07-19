import axios from 'axios';

const instance = axios.create({
    baseURL: '',
    withCredentials: true,
})

export const API = {}

type ResponseType = {}