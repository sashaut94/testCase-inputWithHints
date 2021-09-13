import React, {useEffect, useState} from 'react'
import classes from './ContactItem.module.scss'
import axios from 'axios'
import {useActions} from '../../hooks/useActions'

interface contactItemProps {
    name: string
    username: string
    id: number
}

type imagePath = null | string

export const ContactItem: React.FC<contactItemProps> = ({name, username, id}) => {

    const [imagePath, setImagePath] = useState<imagePath>(null)

    useEffect(() => {
        const fetchImage = async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
            setImagePath(response.data.thumbnailUrl)
        }
        fetchImage()
    }, [id])

    const {setSearchValue, setFocus} = useActions()

    const fillSearch = () => {
        setSearchValue(name)
        setFocus(false)
    }

    return (
        <li
            className={classes.ContactItem}
            tabIndex={0}
            onClick={fillSearch}
            onKeyDown={((e: React.KeyboardEvent) => {
                if (e.key === 'Enter') fillSearch()
            })}
        >
            <p className={classes.imgWrapper}>
                {
                    imagePath && <img
                      width={40}
                      height={40}
                      className={classes.img}
                      src={imagePath}
                      alt={name}
                    />
                }
            </p>
            <p className={classes.info}>
                {name}
                <span className={classes.username}>
                    @{username.toLowerCase()}
                </span>
            </p>
        </li>
    )
}
