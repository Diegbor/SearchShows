import React from 'react'

const CardSerie = ({ show: { image, name, id, genres } }) => {
  return (
    <article className='card text-center bg-dark text-light bg-opacity-75'>
      <img
        className='card-img-top'
        src={image.medium ? image.medium : 'https://us.123rf.com/450wm/tkacchuk/tkacchuk2004/tkacchuk200400017/143745488-no-hay-icono-de-imagen-vector-de-l%C3%ADnea-editable-no-hay-imagen-no-hay-foto-disponible-o-no-hay-imagen.jpg?ver=6'}
        alt='imagen'
      />
      <div className='card-body'>
        <h5 className='card-title line-clamp'>{name}</h5>
      </div>
      {
        genres.length !== 0
          ? <p className='line-clamp'>Genres: {genres[0]} {genres[1]} {genres[2]}</p>
          : <p>Genres: None</p>
      }
    </article>
  )
}

export default CardSerie
