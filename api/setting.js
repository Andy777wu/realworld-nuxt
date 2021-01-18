import { request } from '@/plugins/request.js'
// PUT /api/user
export const updateSet = (data)=>{
    return request({
        url: `/api/user`,
        method: 'PUT',
        data
    })
}

