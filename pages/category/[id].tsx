import React, {FunctionComponent} from 'react'
import { useRouter } from 'next/router'
import { Section } from '../../components/Section'
import {Post} from '../../shared/types'
import {Loader} from '../../components/Loader'
import {GetStaticProps} from 'next'
import {fetchCategoryPosts} from '../../api/summary'
import { staticCategoryPaths as paths} from '../../shared/staticPaths'

interface CategoryProps{
    posts: Post[]
}

const Category: FunctionComponent<CategoryProps> = ({posts}) => {
    const router = useRouter()
    if(router.isFallback) return  <Loader />
    return <Section posts={posts} title={String(router.query.id)}/>
}

export default Category

export const getStaticProps: GetStaticProps<CategoryProps> = async ({params}) => {
    if(typeof params.id !== 'string') throw new TypeError('unexpected id')
    const posts = await fetchCategoryPosts(params.id)

    return { props: { posts }}
}

export async function getStaticPaths(){
    return { paths, fallback: true }
}