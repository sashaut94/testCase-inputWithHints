import React, {useRef} from 'react'
import classes from './Search.module.scss'
import {Input} from '../../components/Input/Input'
import {usedTypedSelector} from '../../hooks/useTypedSelector'
import {useActions} from '../../hooks/useActions'
import {CSSTransition} from 'react-transition-group'
import {ContactsList} from '../../components/ContactsList/ContactsList'

export const Search: React.FC = () => {
    const {focus} = usedTypedSelector(state => state.search)
    const ref = useRef(null)
    const {setFocus} = useActions()
    return (
        <div
            className={classes.Search}
            ref={ref}
            onFocus={() => setFocus(true)}
            onBlur={(e: React.FocusEvent<HTMLDivElement>) => {
                if (!e.relatedTarget) {
                    setFocus(false)
                }
            }}
        >
            <Input/>
            <CSSTransition
                timeout={1000}
                in={focus}
                mountOnEnter
                unmountOnExit
                classNames='dropdown'
            >
                <ContactsList/>
            </CSSTransition>
        </div>
    )
}