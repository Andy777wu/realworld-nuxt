import { request } from '@/plugins/request.js'

export const getTags = ()=>{
    return request({
        url: '/api/tags',
        method: 'GET'
    })
}
