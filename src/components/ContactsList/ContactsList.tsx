import React, {useEffect} from 'react'
import classes from './ContactsList.module.scss'
import {Loader} from '../Loader/Loader'
import {useActions} from '../../hooks/useActions'
import {usedTypedSelector} from '../../hooks/useTypedSelector'
import {ContactItem} from '../ContactItem/ContactItem'

export const ContactsList: React.FC = () => {
    const {loading, contacts, searchValue} = usedTypedSelector(state => state.search)
    const {fetchContacts} = useActions()

    useEffect(() => {
        fetchContacts()
    }, [])

    const lowerCaseValue = searchValue.toLowerCase()
    const filtered = contacts.filter(contact => contact.username.toLowerCase().includes(lowerCaseValue)
        || contact.name.toLowerCase().includes(lowerCaseValue))

    return <div className={classes.wrapper}>
        {
            loading
                ? <Loader/>
                : filtered.length === 0
                ? <p className={classes.noContacts}>Ничего не найдено</p>
                : <ul className={classes.list}>
                    {
                        filtered.map(contact => (
                            <ContactItem
                                key={contact.id}
                                name={contact.name}
                                username={contact.username}
                                id={contact.id}
                            />
                        ))}
                </ul>
        }
    </div>
}
