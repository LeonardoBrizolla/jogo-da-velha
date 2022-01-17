import "./styles.css";

import { InputGame } from "../InputGame";
import { LabelGame } from "../LabelGame";

const handleClick = () => console.log("Vamo que vamo!");

export const InputCheckbox = ({ id = "", value = "", content = "" }) => (
  <>
    <InputGame id={id} value={value} type="checkbox" />
    <LabelGame onClick={handleClick} htmlFor={id} content={content} />
  </>
);
