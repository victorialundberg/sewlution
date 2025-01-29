import { useRef, useEffect, FormEvent, useState, ChangeEvent } from "react";
import { IMaterial } from "../../models/IMaterial";
import { createMaterial } from "../../services/materials/createMaterialService";
import {
    ErrorMessage,
    Heading,
    InputField,
    MaterialDialog,
    ProjectLabel,
} from "../../styles/styledComponents/Items";
import { ActionButton } from "../../styles/styledComponents/Buttons";
import { colors } from "../../styles/colors";

interface IModalProps {
    showDialog: boolean;
    setDialogState: (data: boolean) => void;
    projectId: number;
    onAdded: () => void;
}

export const AddMaterialModal = (props: IModalProps) => {
    const [material, setMaterial] = useState<IMaterial>({
        material: "",
        quantity: 0,
        unit: "",
        unit_price: 0,
        project_id: props.projectId,
    });
    const [displayError, setDisplayError] = useState(false);
    const dialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (props.showDialog) {
            if (dialogRef.current) {
                dialogRef.current.showModal();
            }
            props.setDialogState(false);
        }
    }, [props.showDialog, props]);

    const handleClose = (e: FormEvent) => {
        e.preventDefault();
        if (dialogRef.current) {
            dialogRef.current.close();
        }
        props.onAdded();
        setMaterial({
            material: "",
            quantity: 0,
            unit: "",
            unit_price: 0,
            project_id: props.projectId,
        });
        setDisplayError(false);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (material.material.trim() === "") {
            setDisplayError(true);
            return;
        }
        const response = await createMaterial(material);
        console.log(response.data.success);

        if (response.data.success) {
            props.onAdded();
            setMaterial({
                material: "",
                quantity: 0,
                unit: "",
                unit_price: 0,
                project_id: props.projectId,
            });
        }

        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setMaterial((material) => ({
            ...material,
            [name]: value,
        }));
        setDisplayError(false);
    };

    return (
        <>
            <MaterialDialog ref={dialogRef}>
                <form onSubmit={handleSubmit} aria-labelledby="dialog-heading">
                    <Heading id="dialog-heading">Add Material</Heading>
                    <ProjectLabel htmlFor="material">Material</ProjectLabel>
                    <InputField
                        type="text"
                        id="material"
                        name="material"
                        value={material.material}
                        onChange={handleChange}
                        required
                        aria-required="true"
                    />
                    {displayError && (
                        <ErrorMessage role="alert">
                            Please provide a material
                        </ErrorMessage>
                    )}
                    <ProjectLabel htmlFor="quantity">Amount</ProjectLabel>
                    <InputField
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={material.quantity}
                        onChange={handleChange}
                    />
                    <ProjectLabel htmlFor="unit">Unit</ProjectLabel>
                    <InputField
                        type="text"
                        id="unit"
                        name="unit"
                        value={material.unit}
                        onChange={handleChange}
                    />
                    <ProjectLabel htmlFor="price">Price per unit</ProjectLabel>
                    <InputField
                        type="text"
                        id="price"
                        name="unit_price"
                        value={material.unit_price}
                        onChange={handleChange}
                    />
                    <ActionButton
                        type="button"
                        $backgroundColor={colors.grey}
                        onClick={handleClose}
                        aria-label="Close dialog"
                    >
                        Cancel
                    </ActionButton>
                    <ActionButton
                        type="submit"
                        $backgroundColor={colors.brown}
                        disabled={material.material.trim() === ""}
                        aria-disabled={material.material.trim() === ""}
                        aria-label="Add material to table"
                    >
                        Add to table
                    </ActionButton>
                </form>
            </MaterialDialog>
        </>
    );
};
