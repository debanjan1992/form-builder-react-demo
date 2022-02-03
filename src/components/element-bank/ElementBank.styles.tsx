import styled from "styled-components";

export const ElementBankWrapper = styled.div`
    .title {
        font-size: 12px;
        font-weight: bold;
        text-transform: capitalize;
        text-align: center;
        padding: 10px;
    }
    .container {
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
`;

export const FormElementWrapper = styled.div `
    border: 1px solid rgba(0,0,0,0.1);
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 0;
    font-size: 14px;
    cursor: pointer;
`;