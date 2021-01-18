import fetch from 'node-fetch'
import { config } from './config'
import {Post, Category, EntityId, Person} from '../shared/types'

export async function fetchPosts(): Promise<Post[]>{
    const response = await fetch(`${config.baseUrl}/posts`)
    return await response.json()
}

export async function fetchCategories(): Promise<Category[]>{
    const response = await fetch(`${config.baseUrl}/categories`)
    return await response.json()
}

export async function fetchPost(id: EntityId): Promise<Post>{
    const response = await fetch(`${config.baseUrl}/posts/${id}`)
    return await response.json()
}

export async function fetchCategoryPosts(id: EntityId): Promise<Post[]>{
    const response = await fetch(`${config.baseUrl}/categories/${id}`)
    return await response.json()
}

export async function fetchComments(id: EntityId): Promise<Comment[]>{
    const response = await fetch(`${config.baseUrl}/comments/${id}`)
    return response.json()
}

export async function submitComment(
    postId: EntityId,
    name: Person,
    comment: string
): Promise<Response>{
    return await fetch(`${config.baseUrl}/comments/${postId}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json;charset=utf-8'},
        body: JSON.stringify({name, comment})
    })
}