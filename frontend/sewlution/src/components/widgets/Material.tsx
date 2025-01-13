import { IMaterial } from "../../models/IMaterial";

interface IMaterialProps {
    material: IMaterial;
}

export const Material = (props: IMaterialProps) => {
    return <>{props.material.material}</>;
};
