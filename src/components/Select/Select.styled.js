import styled from "styled-components";

export const Select = styled.select`
  background-color: #fff;
  padding: 5px 17px 0px 0px;
  width: 200px;
  border: none;
  box-shadow: 1px 3px 8px 0px lightgray;
  border-radius: 4px;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 0px lightblue;
  }
`;

export const Option = styled.option`
  background-color: #fff;

`;
