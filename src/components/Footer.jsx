import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <div className="logo">Movies App</div>
      <p>&copy;{new Date().getFullYear()}, Movies, Inc. All rights reserved.</p>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: var(--secondary-color);
  height: 18vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .logo {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem 0;
  }
`;

export default Footer;
