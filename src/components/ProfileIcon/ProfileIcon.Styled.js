import styled from "styled-components";

export const StyledProfileIcon = styled.div`
  width: 230px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  position: absolute;
  bottom: 0;
  right: 0;

  img {
  flex: 1.5;
  height: 100%;
  background-color: black;
  border-radius: 50%;
  }
`

export const ProfileIconText = styled.div`
  flex: 3;
  margin: 0 0 10px 10px;

  font-size: 1rem;
  font-weight: 500;
`

export const DarkModeSwitch = styled.div`
  width: fit-content;
  margin-top: 2px;

  color: white;
  background-color: black;

  font-size: 0.75rem;

  border-radius: 5px;
  cursor: pointer;
`