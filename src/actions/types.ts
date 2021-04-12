import { FetchTodosAction, ClearTodosAction, DeleteTodosAction } from './todos'

export enum ActionTypes {
    fetchTodos,
    clearTodos,
    deleteTodos
}

export type Action = FetchTodosAction | ClearTodosAction | DeleteTodosAction
