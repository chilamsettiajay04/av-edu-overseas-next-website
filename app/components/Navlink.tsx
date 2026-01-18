interface NavLinkProps {
  label: string;
  href?: string;
  active?: boolean;
}

const Navlink: React.FC<NavLinkProps> = ({
  label,
  href = "#",
  active = false,
}) => {
  return (
    <li
      className={`
        relative cursor-pointer transition-all duration-200 text-fontsize-small
        hover:text-color-text-primary hover:scale-105
        ${active ? "text-color-text-primary" : "text-color-text-muted"}
      `}
    >
      <a href={href}>{label}</a>
    </li>
  );
};

export default Navlink;
