import styled from "styled-components";
import { colors } from "../colors";

export const TableWrapper = styled.div`
    background-color: ${colors.white};
    width: 90%;
    min-height: 150px;
    border-radius: 25px;
    margin: 1rem;
    padding-bottom: 3rem;
    > button {
        background-color: ${colors.brown};
        display: flex;
        margin: 1.5rem auto -1.5rem auto;
        color: ${colors.white};
    }
    @media (max-width: 800px) {
        margin: auto;
        width: 100%;
    }
`;

export const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

export const MaterialTable = styled(Table)`
    thead {
        :nth-child(1) {
            > th {
                font-size: 1.5rem;
            }
        }
        :nth-child(2) {
            > :first-child {
                padding-left: 2rem;
            }
            background-color: ${colors.brown};
            color: ${colors.white};
            text-align: left;
            height: 38px;
        }
    }
    tbody {
        td {
            font-size: 1.2rem;
        }
        tr {
            border-bottom: 1px solid #a8a8b0;
            > :first-child {
                padding-left: 2rem;
            }
            td {
                height: 38px;
                padding: 0;
            }
        }
    }
`;
