import { useEffect, useState } from "react";
import { IMaterial } from "../../models/IMaterial";
import {
    MaterialTable,
    TableWrapper,
} from "../../styles/styledComponents/Table";
import { AddMaterialButton } from "../buttons/AddMaterialButton";
import { Material } from "./Material";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

interface IMaterialProps {
    materials: IMaterial[];
    showButtons: boolean;
    projectId: number;
}

export const Materials = (props: IMaterialProps) => {
    const [materials, setMaterials] = useState<IMaterial[]>(props.materials);
    const [changed, setChanged] = useState(false);
    const projectId = props.projectId;
    const isMobile = useMediaQuery({ maxWidth: 450 });
    const API_URL = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const getMaterials = async (projectId: number) => {
            try {
                const response = await axios.post<IMaterial[]>(
                    `${API_URL}/projects/read/material`,
                    { project_id: projectId }
                );
                setMaterials(response.data);
            } catch (error) {
                console.log("Error fetching materials", error);
            }
        };

        if (changed) {
            console.log("New material addded, fetching all materials");
            getMaterials(projectId);
            setChanged(false);
        }
    }, [changed, projectId, API_URL]);

    const handleSuccess = () => {
        setChanged(true);
    };

    return (
        <TableWrapper className="editMaterials">
            <MaterialTable>
                <thead>
                    {!isMobile ? (
                        <tr>
                            {props.showButtons ? (
                                <th colSpan={6}>Materials</th>
                            ) : (
                                <th colSpan={5}>Materials</th>
                            )}
                        </tr>
                    ) : (
                        <tr>
                            {props.showButtons ? (
                                <th colSpan={4}>Materials</th>
                            ) : (
                                <th colSpan={3}>Materials</th>
                            )}
                        </tr>
                    )}
                    <tr>
                        <th>Material</th>
                        <th>Amount</th>
                        <th>Unit</th>
                        {!isMobile && (
                            <>
                                <th>Price</th>
                                <th>Total</th>
                            </>
                        )}
                        {props.showButtons && <th>Delete</th>}
                    </tr>
                </thead>
                <tbody>
                    {materials.map((material, i) => (
                        <Material
                            showButton={props.showButtons}
                            material={material}
                            key={i}
                            onChange={handleSuccess}
                        />
                    ))}
                </tbody>
                <tfoot></tfoot>
            </MaterialTable>
            {props.showButtons && (
                <AddMaterialButton
                    projectId={projectId}
                    onSuccess={handleSuccess}
                />
            )}
        </TableWrapper>
    );
};
