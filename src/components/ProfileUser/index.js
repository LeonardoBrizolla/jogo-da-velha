import './styles.css';
import AvatarProfile from '../../img/avatar-profile.jpeg';

import { AvatarProvider } from '../../objects/AvatarProfile';

export const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProvider
        src={AvatarProfile}
        alt="Avatar profile Leonardo Brizolla"
      />
    </dd>
    <dt className="title">Leonardo Brizolla</dt>
    <dd className="description">Desenvolvedor Web</dd>
  </dl>
);
