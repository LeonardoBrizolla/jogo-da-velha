import './styles.css';
import AvatarProfileJPEG from '../../img/avatar-profile.jpeg';

import { AvatarProfile } from '../../objects/AvatarProfile';

export const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile
        src={AvatarProfileJPEG}
        alt="Avatar profile Leonardo Brizolla"
      />
    </dd>
    <dt className="title">Leonardo Brizolla</dt>
    <dd className="description">Desenvolvedor Web</dd>
  </dl>
);
