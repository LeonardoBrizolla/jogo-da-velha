export const IconSocial = ({ action = '', src = '', alt = '' }) => (
  <a href={action} target="_blank" rel="noreferrer">
    <img className="icon-social" src={src} alt={alt} />
  </a>
);
