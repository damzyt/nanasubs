import { ReactNode } from "react";

type SidebarHeaderProps = {
    children: ReactNode;
};

const SidebarHeader = ({ children }: SidebarHeaderProps) => {
    return (
        <header className="flex flex-row items-center justify-center p-2 border-b-2 border-gray-200 h-[60px]">
            {children}
        </header>
    );
}

export default SidebarHeader;