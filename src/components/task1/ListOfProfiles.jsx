import React from 'react'
import data from '../task1/data.json'
import Profile from './Profile'

const ListOfProfiles = () => {
  return (
    <div>
        {data.map((item,index)=>
            (
                <Profile key={index} 
                    username={item.username}
                    tag={item.tag}
                    location={item.location}
                    avatar={item.avatar}
                    stats={item.stats}
                />
            )
        )}
    </div>
  )
}

export default ListOfProfiles