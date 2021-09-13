import React from 'react'
import classes from './Input.module.scss'
import {ReactComponent as Magnifier} from './magnifier.svg'
import {usedTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'

export const Input: React.FC = () => {
    const {searchValue} = usedTypedSelector(state => state.search)
    const {setSearchValue, fetchContacts} = useActions()
    return (
        <p className={classes.Input}>
            <Magnifier/>
            <input
                className={classes.input}
                type="text"
                value={searchValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setSearchValue(e.target.value)
                    fetchContacts()
                }}
            />
        </p>
    )
}