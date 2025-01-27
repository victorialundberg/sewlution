import { IMaterial } from "../../models/IMaterial";
import { deleteMaterial } from "../../services/materials/deleteMaterialService";
import { TrashIcon } from "../../styles/icons/TrashIcon";
import { IconButton } from "../../styles/styledComponents/Buttons";
import { colors } from "../../styles/colors";

interface IMaterialProps {
    material: IMaterial;
    showButton: boolean;
    onChange: () => void;
}

export const Material = (props: IMaterialProps) => {
    return (
        <>
            <tr>
                <td> {props.material.material}</td>
                <td>{props.material.quantity}</td>
                <td>{props.material.unit}</td>
                <td>{props.material.unit_price} SEK</td>
                <td>
                    {props.material.quantity * props.material.unit_price} SEK
                </td>
                {props.showButton && (
                    <td>
                        <IconButton
                            onClick={async () => {
                                if (props.material.material_id !== undefined) {
                                    const response = await deleteMaterial(
                                        props.material.material_id
                                    );
                                    if (response.success) {
                                        props.onChange();
                                    }
                                }
                            }}
                        >
                            <TrashIcon color={colors.brown} />
                        </IconButton>
                    </td>
                )}
            </tr>
        </>
    );
};
