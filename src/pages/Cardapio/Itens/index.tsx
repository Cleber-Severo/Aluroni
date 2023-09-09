import React, {useState, useEffect} from 'react'
import cardapio from './itens.json'
import styles from './Itens.module.scss'
import Item from './Item'

interface ItensProps {
  busca: string,
  filtro: number | null,
  ordenador: string
}

export default function Itens({busca, filtro, ordenador}: ItensProps) {
  const [lista, setLista] = useState(cardapio)


  function testaBusca(title:string) {
    const regex = new RegExp(busca, "i");
    return regex.test(title)
  }

  function testaFiltro(id: number) {
    if(filtro !== null) return filtro === id;
    return true
  }


  useEffect(() => {
    const novaLista = cardapio.filter( item => testaBusca(item.title) && testaFiltro(item.category.id))
    setLista(novaLista)
  }, [busca, filtro])

  return (
    <div className={styles.itens}>
        {lista.map(item => (
            <div key={item.id}>
                <Item key={item.id} {...item}/>
            </div>
        ))}
    </div>
  )
}
