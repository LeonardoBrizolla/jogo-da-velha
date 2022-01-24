import './styles.css';

import { InputGame } from '../InputGame';
import { LabelGame } from '../LabelGame';

export const InputCheckbox = ({
  id = '',
  value = '',
  content = '',
  onClick,
}) => (
  <>
    <InputGame id={id} value={value} type="checkbox" />
    <LabelGame htmlFor={id} content={content} onClick={onClick} />
  </>
);
