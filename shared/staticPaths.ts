import {Category, EntityId} from './types'

const staticPostsList: EntityId[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const staticCategoryList: Category[] = ['Science', 'Arts', 'Technology']

export const staticPaths = staticPostsList.map( id => ({ params: { id: String(id) } }))
export const staticCategoryPaths = staticCategoryList.map( category => ({ params: { id: category } }) )