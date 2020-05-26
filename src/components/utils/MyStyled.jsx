import styled from "styled-components";

export const CartButton = styled.button`
  background: transparent;
  color: whitesmoke;
  border-radius: 50%;
  border: transparent;
  transition: all 0.5s ease-in-out;
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: none;
  }
`;

export const MySpan = styled.span`
  margin-left: 5px;
  font-size: 13px;
`;

export const ButtonContainer = styled.button`
  text-capitalize: capitalize;
  font-size: 1.4rem;
  background: transparent;
  border: 0.05rem solid #009ffd;
  color: ${(props) => (props.cart ? "#ffa400" : "#009ffd")};
  border-radius: 0.5rem;
  border-color: ${(props) => (props.cart ? "#ffa400" : "#009ffd")};
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${(props) => (props.cart ? "#ffa400" : "#009ffd")};
    color: #2a2a72;
  }
  &:focus {
    outline: none;
  }
`;
