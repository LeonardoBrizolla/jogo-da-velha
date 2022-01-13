import './style.css';
import { Checkbox } from '../Checkbox';

export const Label = ({ content }) => (
  <label className="label">
    <Checkbox />
    {content}
  </label>
);
