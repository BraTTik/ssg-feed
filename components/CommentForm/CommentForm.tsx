import React, {FormEvent, FunctionComponent, useState} from 'react'
import {EntityId} from '../../shared/types'
import { Form } from './style'
import { submitComment } from '../../api/summary'

interface CommentFormProps{
    postId: EntityId
}

export const CommentForm: FunctionComponent<CommentFormProps> = ({postId}) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')
    const [name, setName] = useState<string>('')

    async function submit(e: FormEvent<HTMLFormElement>){
        e.preventDefault()

        setLoading(true)
        const { status } = await submitComment(postId, name, value)
        setLoading(false)

        if(status === 201){
            location.hash = "comments"
            location.reload()
        }
    }

    return (
        <Form onSubmit={submit}>
            <h3>Your comment</h3>
            <input
                type='text'
                name='name'
                value={name}
                placeholder='Your name'
                onChange={e => setName(e.target.value)}
                required
            />
            <textarea
                name='comment'
                placeholder='What do you think?'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {loading ? <span>Submiting...</span> : <button>Submit</button>}
        </Form>
    )
}