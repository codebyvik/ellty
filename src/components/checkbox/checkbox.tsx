import { Check } from "lucide-react";
import "./checkbox-style.css";

type Props = {
  onCheckboxToggle: () => void;
  isChecked?: boolean;
  isHovered?: boolean;
};

const Checkbox = ({ onCheckboxToggle, isChecked, isHovered }: Props) => {
  return (
    <div
      className={`checkbox-container`}
      onClick={(e) => {
        e.stopPropagation();
        onCheckboxToggle();
      }}
      role="checkbox"
      tabIndex={0}
      aria-checked={isChecked}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          onCheckboxToggle();
        }
      }}
    >
      <div className={`checkbox ${isChecked ? "checked" : ""}`}>
        {isChecked || isHovered ? <Check size={20} /> : null}
      </div>
    </div>
  );
};

export default Checkbox;
