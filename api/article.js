import { request } from '@/plugins/request.js'

export const getArticles = (params)=>{
    return request({
        url: '/api/articles',
        method: 'GET',
        params
    })
}

export const getFeedArticles = (params)=>{
    return request({
        url: '/api/articles/feed',
        method: 'GET',
        params
    })
}

export const favorite = (slug)=>{
    return request({
        url: `/api/articles/${slug}/favorite`,
        method: 'POST'
    })
}

export const unFavorite  = (slug)=>{
    return request({
        url: `/api/articles/${slug}/favorite`,
        method: 'DELETE'
    })
}
// GET /api/articles/:slug
export const getArticle  = (slug)=>{
    return request({
        url: `/api/articles/${slug}`,
        method: 'GET'
    })
}
// POST /api/articles
export const createArticle  = (data)=>{
    return request({
        url: '/api/articles',
        method: 'POST',
        data
    })
}
// PUT /api/articles/:slug
export const updateArticle  = (slug)=>{
    return request({
        url: `/api/articles/${slug}`,
        method: 'PUT'
    })
}
// DELETE /api/articles/:slug
export const deleteArticle  = (slug)=>{
    return request({
        url: `/api/articles/${slug}`,
        method: 'DELETE'
    })
}
// POST /api/articles/:slug/comments
export const addComment  = (data, slug)=>{
    return request({
        url: `/api/articles/${slug}/comments`,
        method: 'POST',
        data
    })
}
// GET /api/articles/:slug/comments
export const getComments  = (slug)=>{
    return request({
        url: `/api/articles/${slug}/comments`,
        method: 'GET'
    })
}
// DELETE /api/articles/:slug/comments/:ids
export const deleteComments  = (slug, ids)=>{
    return request({
        url: `/api/articles/${slug}/comments/${ids}`,
        method: 'DELETE'
    })
}

// Follow user POST /api/profiles/:username/follow
export const getFollow  = (username)=>{
    return request({
        url: `/api/profiles/${username}/follow`,
        method: 'POST'
    })
}
// Unfollow user DELETE /api/profiles/:username/follow
export const deleteFollow  = (username)=>{
    return request({
        url: `/api/profiles/${username}/follow`,
        method: 'DELETE'
    })
}
