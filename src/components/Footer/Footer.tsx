import { BiLogoGithub, BiLogoLinkedinSquare } from "react-icons/bi";
import { Link, LinksContainer, StyledFooter } from "./Footer.styled";

function Footer() {
  return (
    <StyledFooter>
      <div>Desarrollado por Cristofer Rodríguez</div>
      <LinksContainer>
        <Link href="https://github.com/crisrdz" target="_blank">
          <BiLogoGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/cristofer-rodriguez-a49275254/" target="_blank">
          <BiLogoLinkedinSquare />
        </Link>
      </LinksContainer>
    </StyledFooter>
  );
}

export default Footer;
