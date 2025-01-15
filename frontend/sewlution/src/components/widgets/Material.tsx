import { IMaterial } from "../../models/IMaterial";

interface IMaterialProps {
    material: IMaterial;
}

export const Material = (props: IMaterialProps) => {
    return (
        <>
            <td> {props.material.material}</td>
            <td>{props.material.quantity}</td>
            <td>{props.material.unit}</td>
            <td>{props.material.unit_price} SEK</td>
            <td>{props.material.quantity * props.material.unit_price} SEK</td>
        </>
    );
};
