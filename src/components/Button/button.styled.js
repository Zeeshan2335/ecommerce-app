import styled from "styled-components";

export const StyButton = styled.button`
  background-color: ${(props) =>
    props.variant === "outlined" ? "#fff" : "purple"};
  border: ${(props) =>
    props.variant === "outlined" ? "2px solid purple" : "2px solid purple"};
  border-radius: 0.5rem;
  color: ${(props) => (props.variant === "outlined" ? "purple" : "#ffffff")};
  padding: 10px 20px;
  margin: 1px;
  &:hover {
    background-color: ${(props) =>
      props.variant !== "outlined" ? "#fff" : "purple"};
    color: ${(props) => (props.variant !== "outlined" ? "purple" : "#ffffff")};
  }
`;
