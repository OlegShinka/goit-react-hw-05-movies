import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MainHeader } from './sharedlayout.styled';
const StyledLink = styled(NavLink)`
  color: black;
  margin-left: 35px;
  text-decoration: none;
  &.active {
    color: cadetblue;
  }
`;
const SharedLayuot = () => {
  return (
    <div>
      <MainHeader>
        <nav>
          <StyledLink to="/"> Home</StyledLink>
          <StyledLink to="/movies"> Movies</StyledLink>
        </nav>
      </MainHeader>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayuot;
