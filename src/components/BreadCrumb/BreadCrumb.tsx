import { BreadCrumbNav } from "./BreadCrumb.styled";

interface BreadCrumbProps {
  navigationItems: { path: string; name: string }[];
}

export const BreadCrumb = ({ navigationItems }: BreadCrumbProps) => {
  return (
    <BreadCrumbNav>
      {navigationItems.map((item, idx) => {
        return idx === 0 ? (
          <a href={item.path}>{item.name}</a>
        ) : (
          <>
            &nbsp;/ <a href={item.path}>{item.name}</a>
          </>
        );
      })}
    </BreadCrumbNav>
  );
};
