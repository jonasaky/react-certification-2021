import styled from 'styled-components';

export const NavBar = styled.div`
    background-color: #5a458d;
    color: white;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
`;

export const SearchField = styled.input`
    margin: 20px;
    height: 32px;
    width: 200px;
    background-color: #baa7e7;
    color: white;
`;

export const LoginButton = styled.button`
    position: absolute;
    margin: 20px 0;
    height: 32px;
    left: 95%;
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  /* height: 26px; */
  &:checked + ${CheckBoxLabel} {
    background: #baa7e7;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
