import React, { FunctionComponent } from 'react'
import { Grid, Title, MoreLink } from './style'
import { Post } from '../Post'
import { Post as PostType } from '../../shared/types'
import Link from 'next/link'

interface SectionProps{
    title: string,
    posts: PostType[],
    isCompact?: boolean
}

export const Section: FunctionComponent<SectionProps> = ( {
    title,
    posts ,
    isCompact= false
}) => {
    return (
        <section>
            <Title>{title}</Title>
            <Grid>
                {posts.map(post => (
                    <Post
                        key={post.id}
                        post={post}
                    />
                ))}
            </Grid>
            {isCompact && (
                <Link href={`/category/${title}`}>
                    <MoreLink>More</MoreLink>
                </Link>
            )}
        </section>
    )
}