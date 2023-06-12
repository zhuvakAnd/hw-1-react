import React from 'react'
import style from './DataBlock.module.css'
import PropTypes from 'prop-types'

const DataBlock = ({name,value}) => {
  return (
    <div className={style.dataBlock}>
        <span>{name}</span>
        <span>{value}</span>
    </div>
  )
}

DataBlock.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default DataBlock