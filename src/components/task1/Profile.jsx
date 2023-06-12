import React from 'react'
import style from './Profile.module.css'
import PropTypes from 'prop-types';

const Profile = ({username,tag,location,avatar,stats:{followers,views,likes}}) => {
  return (
        <div className={style.profile}>
        <div className={style.description}>
        <img
            src={avatar}
            alt="User avatar"
            className={style.profilePicture}         
        />
        <p className={style.userName}>{username}</p>
        <p className={style.userTag}>@{tag}</p>
        <p className={style.userLocation}>{location}</p>
        </div>

        <ul className={style.stats}>
        <li className={style.statsItems}>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{followers}</span>
        </li>
        <li className={style.statsItems}>
            <span className={style.label}>Views</span>
            <span className={style.quantity}>{views}</span>
        </li>
        <li className={style.statsItems}>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}>{likes}</span>
        </li>
        </ul>
        </div>
  )
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};


export default Profile