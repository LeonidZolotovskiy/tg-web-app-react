import React from 'react'
import { useTelegramm } from '../../hooks/useTelegramm'
import Button from '../Button'

export default function Header() {
    const {user, onClose } = useTelegramm()
  return (
    <div className={'header'}>
        <Button onClick={onClose}>Close</Button>
        <span className={'username'}>
            {user?.username}
        </span>
    </div>
  )
}
