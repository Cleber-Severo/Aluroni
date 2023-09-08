import React from 'react'
import { CgSearch } from 'react-icons/cg'
import styles from './Buscador.module.scss'

interface BuscadorProps {
    busca: string
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: BuscadorProps) {
  return (
    <div className={styles.buscador}>
        <input 
            type="text"
            value={busca}
            onChange={e => setBusca(e.target.value)}
        />

        <CgSearch size={20} color='#4C4D5E' />
    </div>
  )
}
