interface Geo {
    lat: string
    lng: string
}

interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

interface Company {
    name: string
    catchPhrase: string
    bs: string
}

export interface Contact {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

export interface InitialStateProps {
    contacts: Contact[]
    loading: boolean
    error: null | string
    searchValue: string
    focus: boolean
}

export enum searchActionTypes {
    FETCH_CONTACTS = 'FETCH_CONTACTS',
    FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS',
    FETCH_CONTACTS_ERROR = 'FETCH_CONTACTS_ERROR',
    SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
    SET_FOCUS_STATE = 'SET_FOCUS_STATE'
}

export type searchAction = fetchContactsAction |
    fetchContactsSuccessAction |
    fetchContactsErrorAction |
    setSearchValueAction |
    setFocusStateAction

interface fetchContactsAction {
    type: searchActionTypes.FETCH_CONTACTS
}

interface fetchContactsSuccessAction {
    type: searchActionTypes.FETCH_CONTACTS_SUCCESS,
    payload: Contact[]
}

interface setFocusStateAction {
    type: searchActionTypes.SET_FOCUS_STATE,
    payload: boolean
}

interface fetchContactsErrorAction {
    type: searchActionTypes.FETCH_CONTACTS_ERROR,
    payload: string
}

interface setSearchValueAction {
    type: searchActionTypes.SET_SEARCH_VALUE,
    payload: string
}
