import "./styles.css";

import { InputGame } from "../InputGame";
import { Label } from "../Label";

export const InputCheckbox = ({ id = "", value = "", content = "" }) => (
  <>
    <InputGame id={id} value={value} type="checkbox" />
    <Label htmlFor={id} content={content} />
  </>
);
