import { ReactNode } from "react";

type SidebarProps = {
    isSidebarCollapsed: boolean;
    children: ReactNode;
};

const Sidebar = ({ isSidebarCollapsed, children }: SidebarProps) => {

    return (
        <aside className={`transition-all duration-300 ${isSidebarCollapsed ? 'w-16' : 'w-64'} border-r-2 border-gray-200 h-screen overflow-hidden`}>
            {children}
        </aside>
    );

}

export default Sidebar;