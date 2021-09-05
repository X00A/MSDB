import { Container, Image, Divider } from "semantic-ui-react";
import { Link, Switch, useLocation } from "react-router-dom";
import {
  ContainerNavigation,
  HeaderGroup,
  StyledLink,
  StyledAccount,
} from "./Navigation.style";

function Navigation() {
  const location = useLocation();
  return (
    <ContainerNavigation>
      <Container>
        <HeaderGroup>
          <Link to='/' active={location.pathname === "/"}>
            <Image
              src='https://i.ibb.co/n11ZjZ4/MSDB2-removebg-preview.png'
              width='120px'
              height='50px'
              to='/'
              active={location.pathname === "/"}
            />
          </Link>
          <div>
            <StyledLink to='/' active={location.pathname === "/"}>
              Home
            </StyledLink>
            <StyledLink to='/movies' active={location.pathname === "/movies"}>
              Movies
            </StyledLink>
            <StyledLink to='/series' active={location.pathname === "/series"}>
              Series
            </StyledLink>
            <StyledLink
              to='/products'
              active={location.pathname === "/products"}>
              Products
            </StyledLink>
          </div>
        </HeaderGroup>
        <StyledAccount>
          <StyledLink to='/sign-up' active={location.pathname === "/sign-up"}>
            Sign Up
          </StyledLink>
          <Divider vertical></Divider>
          <StyledLink to='/login' active={location.pathname === "/login"}>
            Log In
          </StyledLink>
        </StyledAccount>
      </Container>
    </ContainerNavigation>
  );
}

export default Navigation;
