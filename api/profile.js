import { request } from '@/plugins/request.js'
// GET /api/profiles/:username
export const getProfiles = (username)=>{
    return request({
        url: `/api/profiles/${username}`,
        method: 'GET'
    })
}

