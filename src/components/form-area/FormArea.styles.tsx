import styled from "styled-components";

export const FormAreaWrapper = styled.div`
  padding: 20px;
`;

export const FormElementStyle = styled.div<{ isSelected: boolean }>`
  padding: 10px;
  margin: 5px 0;
  ${(props) => props.isSelected ? "border: 1px dotted rgba(0, 0, 0, 0.2);" : "border: 1px dotted transparent;"}
  background-color: ${props => props.isSelected ? "#fcf6a5" : "#FFFFFF"};
  .content-wrapper {
    margin-top: 16px;
  }
  box-sizing: border-box;
`;
