import React, {FunctionComponent} from 'react'
import { Comment as CommentType } from '../../shared/types'
import {Author, Body, Container, Meta } from './style'

interface CommentProps{
    comment: CommentType
}

export const Comment: FunctionComponent<CommentProps> = ({comment}) => {
    return (
        <Container>
            <Author>{comment.author}</Author>
            <Body>{comment.content}</Body>
            <Meta>{comment.time}</Meta>
        </Container>
    )
}