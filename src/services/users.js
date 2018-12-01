import request from '../utils/request';
import { func } from 'C:/Users/ThinkPad/AppData/Local/Microsoft/TypeScript/3.1/node_modules/@types/prop-types';

export function queryUsers(){
    return request('/api/users')
}

export function fetch({page = 1}){
    return request(`/api/users?_page=${page}&_limit=5`)
}

export function create(values){
    return request('/api/users', {
        methods: 'POST',
        data: JSON.stringify(values)
    })
}

export function patch({id, values}){
    return request(`/api/users/${id}`,{
        methods: 'PATCH',
        data: JSON.stringify(values)
    })
}

export function remove({id}){
    return request(`/api/users/${id}`, {
        methods: 'DELETE'
    })
}