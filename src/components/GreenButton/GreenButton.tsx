import { click } from "@testing-library/user-event/dist/click";
import React from "react";
import "./GreenButton.scss";
interface GreenButtonProps {
  text: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type: "button" | "submit";
  disabled: boolean;
}
export const GreenButton: React.FC<GreenButtonProps> = (props) => {
  return (
    <button
      className="green-btn"
      type={props.type}
      onClick={(e) => props.handleClick(e)}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};
