import { Label } from '../Label';

export const Input = ({ id = '', value = '', content = '', type = 'text' }) => (
  <>
    <input id={id} type={type} value={value} className="input" />
    <Label htmlFor={id} content={content} />
  </>
);
