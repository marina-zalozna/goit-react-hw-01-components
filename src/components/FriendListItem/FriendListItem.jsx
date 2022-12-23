import React from "react";
import PropTypes from "prop-types";
import css from "./FriendListItem.module.css";

export const FriendListItem = ({ id, isOnline, avatar, name }) => {
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
      <img className={css.avatar} src={avatar} alt="Unpm " width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
