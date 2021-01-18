import React, {FunctionComponent} from 'react'
import {Comment as CommentType, Post} from '../../shared/types'
import { Comment } from '../Comment'
import { Container, List, Item } from './style'

interface CommentsProps{
    comments: CommentType[]
    post: Post
}

export const Comments: FunctionComponent<CommentsProps> = ({comments, post}) => {
    return (
        <Container id='comments'>
            <h3>Comments</h3>
            <List>
                {comments.map( comment => (
                    <Item key={comment.id}>
                        <Comment comment={comment}/>
                    </Item>
                ))}
            </List>
        </Container>
    )
}