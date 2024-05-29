import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profileCard}>
      <div className={css.profileInfo}>
        <img className={css.profileImage} src={image} alt="User avatar" />
        <p className={css.profileInfoName}>{name}</p>
        <p className={css.profileInfoText}>@{tag}</p>
        <p className={css.profileInfoText}>{location}</p>
      </div>

      <ul className={css.profileStatsList}>
        <li className={css.profileStatsItem}>
          <span>Followers</span>
          <span className={css.statsVolumeText}>{followers}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Views</span>
          <span className={css.statsVolumeText}>{views}</span>
        </li>
        <li className={css.profileStatsItem}>
          <span>Likes</span>
          <span className={css.statsVolumeText}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
