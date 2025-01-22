import styled from "styled-components";

export const TableWrapper = styled.div`
    background-color: white;
    width: 579px;
    min-height: 150px;
    border-radius: 25px;
    padding-bottom: 85px;
    margin-bottom: 1rem;
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
            background-color: #5e4b45;
            color: white;
            text-align: left;
            height: 38px;
        }
    }
    tbody {
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
    tfoot {
        height: 85px;
    }
`;
