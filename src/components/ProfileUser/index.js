import AvatarProfile from '../../img/avatar-profile.jpeg';

import { AvatarProvider } from '../../objects/AvatarProfile';

export const ProfileUser = () => (
  <dl className="profile-user">
    <dd>
      <AvatarProvider
        src={AvatarProfile}
        alt="Avatar profile Leonardo Brizolla"
      />
    </dd>
    <dt>Leonardo Brizolla</dt>
    <dd>Desenvolvedor Web</dd>
  </dl>
);
