import './styles.css';

import { Input } from '../Input';
import { Label } from '../Label';

export const Checkbox = ({ id = '', value = '', content = '' }) => (
  <>
    <Input id={id} value={value} type="checkbox" />
    <Label htmlFor={id} content={content} />
  </>
);
