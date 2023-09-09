import React from 'react'
import cardapio from './itens.json'
import styles from './Itens.module.scss'
import Item from './Item'



export default function Itens() {
  return (
    <div className={styles.itens}>
        {cardapio.map(item => (
            <div key={item.id}>
                <Item key={item.id} {...item}/>
            </div>
        ))}
    </div>
  )
}
