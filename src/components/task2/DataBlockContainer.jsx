import React from 'react'
import PropTypes from 'prop-types'
import DataBlock from './DataBlock'
import style from './DataBlock.module.css'



const DataBlockContainer = ({data}) => {
  return (
    <div className={style.outerContainer}>
        <h3>{data.title}</h3>
        <div className={style.dataContainer}>
            {
                data.blocks.map((item,index)=>
                    <DataBlock key={index} name={item.name} value={item.value}/>
                )
            }
        </div>
    </div>
  )
}

DataBlockContainer.propTypes = {
  title: PropTypes.string,
  blocks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string
    })
  )
}

export default DataBlockContainer