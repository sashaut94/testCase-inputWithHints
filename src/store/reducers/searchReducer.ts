import {InitialStateProps, searchAction, searchActionTypes} from '../../types/searchTypes'

const initialState: InitialStateProps = {
    contacts: [],
    loading: false,
    error: null,
    searchValue: '',
    focus: false
}

export const searchReducer = (state = initialState, action: searchAction): InitialStateProps => {
    switch (action.type) {
        case searchActionTypes.SET_FOCUS_STATE:
            return {...state, focus: action.payload}
        case searchActionTypes.FETCH_CONTACTS:
            return {...state, loading: true}
        case searchActionTypes.FETCH_CONTACTS_SUCCESS:
            return {...state, loading: false, contacts: action.payload}
        case searchActionTypes.FETCH_CONTACTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case searchActionTypes.SET_SEARCH_VALUE:
            return {...state, searchValue: action.payload}
        default:
            return state
    }
}
