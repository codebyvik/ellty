import { useState } from "react";
import Checkbox from "../checkbox/checkbox";
import "./list-item-style.css";
type Props = {
  title: string;
  onCheckboxClick: () => void;
  isChecked?: boolean;
};

const ListItem = ({ title, onCheckboxClick, isChecked }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="list-item"
      onClick={onCheckboxClick}
    >
      <p>{title}</p>
      <Checkbox onCheckboxToggle={onCheckboxClick} isChecked={isChecked} isHovered={isHovered} />
    </div>
  );
};

export default ListItem;
