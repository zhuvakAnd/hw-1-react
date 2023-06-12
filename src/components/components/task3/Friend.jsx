import React from 'react'
import PropTypes from 'prop-types'
import style from './Friends.module.css'

const Friend = ({isOnline,img,name}) => {
    return (
        <div className={style.friend}>
          {isOnline ? <div className={style.isOnline}></div> : <div className={style.isOffline}></div>}
          <img src={img}  alt="Image not found"/>
          <h5>{name}</h5>
        </div>
      );
}

Friend.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Friend
