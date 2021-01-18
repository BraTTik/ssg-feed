import React, {FunctionComponent} from 'react'
import {GetServerSideProps, GetStaticProps} from 'next'
import { useRouter } from 'next/router'
import { Post as PostType, Comment } from '../../shared/types'
import {fetchComments, fetchPost} from '../../api/summary'
import { staticPaths as paths } from '../../shared/staticPaths'
import {Loader} from '../../components/Loader/'
import { PostBody } from '../../components/Post/PostBody'
import {Comments} from '../../components/Comments/Comments'
import {CommentForm} from '../../components/CommentForm'

interface PostProps{
    post: PostType
    comments: Comment[]
}

const Post: FunctionComponent<PostProps> = ({post, comments}) => {
    const router = useRouter()
    if(router.isFallback) return <Loader />

    return (
        <>
            <PostBody post={post} />
            <Comments comments={comments} post={post}/>
            <CommentForm postId={post.id} />
        </>
    )
}

export default Post

export const getServerSideProps: GetServerSideProps<PostProps> = async ({params}) => {
    if(typeof params.id !== 'string') throw new TypeError('unexpected id')
    const post = await fetchPost(params.id)
    const comments = await fetchComments(params.id)
    return { props: { post, comments } }
}
