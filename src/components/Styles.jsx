import styled from 'styled-components';

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  margin-right: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0062cc;
  }
`;

export const AuthButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) => props.backgroundColor || '#007bff'};
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${(props) => props.hoverColor || '#0062cc'};
  }
`;