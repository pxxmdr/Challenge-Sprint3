import { HeaderContainer, NavList, PageTitleDiv } from "./Header.style";

interface HeaderProps {
  navItems?: { title: string; link: string; target?: string }[];
  pageTitle?: string;
}

export const Header = ({ navItems, pageTitle }: HeaderProps) => {
  return (
    <div style={{marginBottom: "79px"}}>
      <HeaderContainer>
        <img src="/HeaderLogoPorto.png" alt="Logo Azul Porto" />
        {navItems && (
          <nav>
            <NavList>
              {navItems.map((item) => (
                <li>
                  <a href={item.link} target={item.target}>
                    {item.title}
                  </a>
                </li>
              ))}
            </NavList>
          </nav>
        )}
      </HeaderContainer>

      {pageTitle && (
        <PageTitleDiv>
          <h2>{pageTitle}</h2>
        </PageTitleDiv>
      )}
    </div>
  );
};
