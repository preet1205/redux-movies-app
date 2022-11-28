import styled from "styled-components";
import { Link } from "react-router-dom";
import Image from "../assets/user.png";

const Header = () => {
  return (
    <Wrapper className="screen-center">
      <div className="logo">
        <Link to="/">Movies App</Link>
      </div>
      <div className="user-image">
        <img src={Image} alt="user-pic" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background: var(--secondary-color);
  height: 15vh;
  padding: 0 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo a {
    text-decoration: none;
    color: var(--font-primary);
    font-size: 1.7rem;
    font-weight: 500;
  }
  .user-image,
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

export default Header;
