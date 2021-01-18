import React from 'react'
import Head from 'next/head'
import { Feed } from '../components/Feed'
import {Category, Post} from "../shared/types";
import {fetchCategories, fetchPosts} from "../api/summary";

interface FrontProps{
    posts: Post[],
    categories: Category[]
}

export default function Front({posts, categories}: FrontProps){
    return (
        <>
            <Head>
                <title>What's Next?!</title>
            </Head>
            <main>
                <Feed posts={posts} categories={categories}/>
            </main>
        </>
    )
}

export async function getStaticProps(){
    const posts = await fetchPosts()
    const categories = await fetchCategories()
    return { props: { posts, categories } }
}