import styled from 'styled-components';

export const NavBar = styled.div`
    background-color: #5a458d;
    color: white;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 4rem; */
    display: flex;
    flex-direction: row;
    align-items: center;
    /* align-content: center; */
    justify-content: center;
    padding: 20px;
    flex-wrap: nowrap;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: unset;
      align-items: flex-start;
    }
`;

export const SearchFieldWrapper = styled.div`
  /* something */
`;

export const SearchField = styled.input`
    /* margin: 20px; */
    height: 32px;
    width: 400px;
    background-color: #baa7e7;
    color: white;
    font-size: 16px;
    border-radius: 8px;
    border: 0;
    padding-left: 10px;
    margin-left: 10px;
    /* margin-left: 40%; */
    /* margin-right: 50%; */
    @media (max-width: 768px) {
      width: 144px;
    }
`;

export const RightDiv = styled.div`
  position: absolute;
  left: 85%;
  /* margin-left: auto; */
  @media (max-width: 768px) {
    left: 50%;
  }
`;

export const LoginButton = styled.button`
    /* position: absolute; */
    /* margin: 20px; */
    height: 32px;
    width: 32px;
    /* left: 90%; */
    /* margin-left: auto; */
    /* position: relative;
    display: inline-block; */
    border-radius: 18px;
    :hover {
      background-color: purple;
    }
    :focus {
      outline: 0;
    }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
  /* left: 80%; */
  margin-right: 20px;
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
