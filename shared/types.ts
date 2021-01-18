export type UriString = string
export type UniqueString = string
export type EntityId = number | UniqueString
export type Category = 'Science' | 'Technology' | 'Arts'
export type DateIsoString = string

export interface Post {
    id: EntityId
    title: string
    lead: string
    content: string
    category: Category
    date: DateIsoString
    source: UriString
    image: UriString
}

export type Person = string
export type RelativeTime = string

export interface Comment{
    id: number
    author: Person
    content: string
    time: RelativeTime
    post: EntityId
}