"use client";

import SignInModal from "@/components/SignInModal";
import { StyledHeader } from "./styled";

const Header = () => {
  return (
    <StyledHeader>
      <p>Header</p>
      <SignInModal />
    </StyledHeader>
  );
};

export default Header;
