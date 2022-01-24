export const HashtagHistoryWrapper = ({
  children,
  isActiveHistory = false,
}) => (
  <div className={`hashtagHistory-wrapper ${isActiveHistory ? '-active' : ''}`}>
    {children}
  </div>
);
