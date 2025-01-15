import { IMaterial } from "../../models/IMaterial";
import {
    MaterialTable,
    TableWrapper,
} from "../../styles/styledComponents/Table";
import { Material } from "./Material";

interface ImaterialSProps {
    materials: IMaterial[];
}

export const Materials = (props: ImaterialSProps) => {
    return (
        <TableWrapper>
            <MaterialTable>
                <thead>
                    <tr>
                        <th colSpan={5}>Materials</th>
                    </tr>
                    <tr>
                        <th>Material</th>
                        <th>Amount</th>
                        <th>Unit</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {props.materials.map((material, i) => (
                            <Material material={material} key={i} />
                        ))}
                    </tr>
                </tbody>
            </MaterialTable>
        </TableWrapper>
    );
};
