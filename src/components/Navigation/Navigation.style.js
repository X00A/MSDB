import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerNavigation = styled.div`
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  opacity: 1;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%auto;
  z-index: 999;
`;

export const HeaderGroup = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 10px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: ${(props) => (props.active ? "bolder" : "lighter")};
  padding: 10px;
  border-radius: 5px;
  color: white;
  margin-left: 10px;
`;

export const StyledAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -47px;
  padding-bottom: 8px;
`;
