import React from 'react';
import Friend from './Friend';

const FriendList = ({ friends }) => {
  return (
    <div>
      {friends.map((friend,index) => (
        <div key={index}>
          <Friend isOnline={friend.isOnline} img={friend.img} name={friend.name} />
        </div>
      ))}
    </div>
  );
}

export default FriendList;