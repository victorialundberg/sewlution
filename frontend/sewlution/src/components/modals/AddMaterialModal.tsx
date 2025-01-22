import { useRef, useEffect, FormEvent, useState, ChangeEvent } from "react";
import { IMaterial } from "../../models/IMaterial";
import { createMaterial } from "../../services/materials/createMaterialService";

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
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const response = await createMaterial(material);
        console.log(response.data.success);

        if (response.data.success) {
            props.onAdded();
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
    };

    return (
        <>
            <dialog ref={dialogRef} className="newProjectModal">
                <form onSubmit={handleSubmit}>
                    <p>Add Material</p>
                    <label htmlFor="material"></label>
                    <input
                        type="text"
                        id="material"
                        name="material"
                        value={material.material}
                        onChange={handleChange}
                    />
                    <label htmlFor="quantity"></label>
                    <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={material.quantity}
                        onChange={handleChange}
                    />
                    <label htmlFor="unit"></label>
                    <input
                        type="text"
                        id="unit"
                        name="unit"
                        value={material.unit}
                        onChange={handleChange}
                    />
                    <label htmlFor="price"></label>
                    <input
                        type="text"
                        id="price"
                        name="unit_price"
                        value={material.unit_price}
                        onChange={handleChange}
                    />
                    <button onClick={handleClose}>Cancel</button>
                    <button>Add to table</button>
                </form>
            </dialog>
        </>
    );
};
