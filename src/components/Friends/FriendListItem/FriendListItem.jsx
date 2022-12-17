import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      {isOnline ? (
        <span
          className={css.status}
          style={{ backgroundColor: '#4fae52' }}
        ></span>
      ) : (
        <span
          className={css.status}
          style={{ backgroundColor: '#ff5055' }}
        ></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="72" />
      <p className={css.name}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
