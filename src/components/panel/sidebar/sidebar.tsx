import { ReactNode } from "react";

type SidebarProps = {
    children: ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {

    return (
        <aside className="w-64 border-r-2 border-gray-200 h-full">
            {children}
        </aside>
    );

}

export default Sidebar;