interface NavlinkProps {
  label: string;
  href: string;
  active?: boolean;
  onClick?: () => void;
}

const Navlink = ({ label, href, active, onClick }: NavlinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`hover:text-color-text-primary cursor-pointer lg:text-fontsize-small ${
        active ? "text-color-text-accent" : "text-color-text-muted"
      }`}
    >
      {label}
    </a>
  );
};

export default Navlink;
