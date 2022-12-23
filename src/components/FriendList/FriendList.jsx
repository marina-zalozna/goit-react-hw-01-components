import React from 'react';
import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
      <ul className={css.friend_list}>
        {friends.map(event => (
            <FriendListItem key={event.id} id={event.id} isOnline={event.isOnline} avatar={event.avatar} name={event.name}/>
        ))} 
    </ul>
    )
    
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
      }),
    ),
  };