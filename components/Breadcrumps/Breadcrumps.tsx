import React, {FunctionComponent} from 'react'
import Link from 'next/link'
import {Post} from '../../shared/types'
import { Container } from './style'

interface BreadcrumpsProps{
    post: Post
}

export const Breadcrumps: FunctionComponent<BreadcrumpsProps> = ({post}) => {
    return (
        <Container>
            <Link href={'/'}>
                <a>Front</a>
            </Link>
            <span>{'->'}</span>
            <Link href={`/category/[id]`} as={`/category/${post.category}`}>
                <a>{post.category}</a>
            </Link>
        </Container>
    )
}