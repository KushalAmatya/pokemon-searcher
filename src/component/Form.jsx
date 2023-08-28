import React from 'react'
import Label from './Label'

export default function Form({pokemon}) {
    // console.log(pokemon?.types)
  return (
    <>
        <div className='Pokemon'>
            <Label label={`Pokemon Name:`} className={'pokeinfo'}/>
            <Label label={`${pokemon?.name}`}/>
            <img src={pokemon?.sprites?.front_default} alt="hello" className='pokeimg'/>
            <Label label = {'Types'} className={'pokeinfo'}/>
            <ul>
            {pokemon?.types?.map(item=><li>{item?.type?.name}</li>)}
            </ul>
        </div>
    </>
  )
}
