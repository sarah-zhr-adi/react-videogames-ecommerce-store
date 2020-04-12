import styled from 'styled-components';

export const ButtonContainer = styled.button `
  font-size: 1.2rem;
  background: var(--mainOrange); 
  color: white;
  border-radius: 50px;
  padding: 0.2rem 1rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.2s ease-in-out;
  border: none;
  &:hover {
    background: ${props => (props.cart ? "#b53126" : "var(--lightOrange)")};
  }
  &:focus {
    outline: none;
  }
`