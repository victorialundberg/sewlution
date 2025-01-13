import { IMaterial } from "../../models/IMaterial";
import { Material } from "./Material";

interface ImaterialSProps {
    materials: IMaterial[];
}

export const Materials = (props: ImaterialSProps) => {
    return (
        <>
            {props.materials.map((material, i) => (
                <Material material={material} key={i} />
            ))}
        </>
    );
};
