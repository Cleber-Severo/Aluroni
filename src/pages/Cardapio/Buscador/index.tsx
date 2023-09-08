import React from 'react'
import styles from './Buscador.module.scss'

interface BuscadorProps {
    busca: string
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: BuscadorProps) {
  return (
    <div>Buscador</div>
  )
}
