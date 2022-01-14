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
    <dd className="social">
      <IconSocial
        action="https://github.com/leonardobrizolla"
        src={GithubSVG}
        alt="Logo da Github"
      />
      <IconSocial
        action="https://www.linkedin.com/in/leonardo-brizolla/"
        src={LinkedInSVG}
        alt="Logo da LinkedIn"
      />
      <IconSocial
        action="https://twitter.com/leobrizolla55"
        src={TwitterSVG}
        alt="Logo da Twitter"
      />
      <IconSocial
        action="https://www.facebook.com/leonardo.brizolla.10"
        src={FacebookSVG}
        alt="Logo da Facebook"
      />
      <IconSocial
        action="https://www.instagram.com/leobrizolla55/"
        src={InstagramSVG}
        alt="Logo da Instagram"
      />
    </dd>
  </dl>
);
