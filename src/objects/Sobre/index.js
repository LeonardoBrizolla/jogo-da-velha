import './style.css';

const Sobre = ({ content = '' }) => {
  return (
    <a href="#to-do" className="action">
      {content}
    </a>
  );
};

export default Sobre;
