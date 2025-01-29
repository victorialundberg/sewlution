import { IIconProps } from "../../models/IIconProps";
import { colors } from "../colors";

export const CloseIcon = (props: IIconProps) => {
    return (
        <svg
            role="img"
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke={props.color || colors.grey}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    );
};
