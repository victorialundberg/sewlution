import { IIconProps } from "../../models/IIconProps";
import { colors } from "../colors";

export const MenuIcon = (props: IIconProps) => {
    return (
        <>
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
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu"
            >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
        </>
    );
};
