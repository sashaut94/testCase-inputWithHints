import {Dispatch} from 'redux'
import {searchAction, searchActionTypes} from '../../types/searchTypes'
import axios from 'axios'

export const setSearchValue = (value: string) => {
    return (dispatch: Dispatch<searchAction>) => {
        dispatch({type: searchActionTypes.SET_SEARCH_VALUE, payload: value})
    }
}

export const setFocus = (state: boolean) => {
    return (dispatch: Dispatch<searchAction>) => {
        dispatch({type: searchActionTypes.SET_FOCUS_STATE, payload: state})
    }
}

export const fetchContacts = () => {
    return async (dispatch: Dispatch<searchAction>) => {
        dispatch({type: searchActionTypes.FETCH_CONTACTS})
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(() => {
                dispatch({type: searchActionTypes.FETCH_CONTACTS_SUCCESS, payload: response.data})
            }, 750)
        } catch (e) {
            dispatch({type: searchActionTypes.FETCH_CONTACTS_ERROR, payload: 'Не удалось загрузить контакты'})
        }
    }
}