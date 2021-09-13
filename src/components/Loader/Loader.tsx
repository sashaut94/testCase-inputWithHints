import React from 'react'
import classes from './Loader.module.scss'
import {ReactComponent as Circle} from './circle.svg'

export const Loader = () => {
    return (
        <p className={classes.Loader}>
            <Circle/>
        </p>
    )
}