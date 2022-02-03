import styled from "styled-components";

export const FormBuilderWrapper = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr 200px;
    grid-column-gap: 20px;

    .panel {
        box-sizing: border-box;
        box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.02);
        background-color: white;
        min-height: 500px;
    }
`;