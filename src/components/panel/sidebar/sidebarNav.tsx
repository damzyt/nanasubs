import { ReactNode } from "react";

type SidebarNavProps = {
    children: ReactNode;
};

const SidebarNav = ({ children }: SidebarNavProps) => {
    return (
        <nav className="p-2">
            {children}
        </nav>
    );
}

export default SidebarNav;