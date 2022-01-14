import './styles.css';
import AvatarProfileJPEG from '../../img/avatar-profile.jpeg';
import GithubSVG from '../../img/github.svg';
import LinkedInSVG from '../../img/linkedin.svg';
import TwitterSVG from '../../img/twitter.svg';
import FacebookSVG from '../../img/facebook.svg';
import InstagramSVG from '../../img/instagram.svg';

import { AvatarProfile } from '../../objects/AvatarProfile';
import { IconSocial } from '../../objects/IconSocial';

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
    <dd>
      <IconSocial src={GithubSVG} alt="Logo da Github" />
      <IconSocial src={LinkedInSVG} alt="Logo da LinkedIn" />
      <IconSocial src={TwitterSVG} alt="Logo da Twitter" />
      <IconSocial src={FacebookSVG} alt="Logo da Facebook" />
      <IconSocial src={InstagramSVG} alt="Logo da Instagram" />
    </dd>
  </dl>
);
