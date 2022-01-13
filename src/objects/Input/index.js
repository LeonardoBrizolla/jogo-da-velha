import { Label } from '../Label';

export const Input = ({ id, value, content }) => (
  <>
    <input id={id} type="checkbox" value={value} className="input" />
    <Label htmlFor={id} content={content} />
  </>
);
