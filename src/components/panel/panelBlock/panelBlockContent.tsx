import { ReactNode } from "react";

type PanelBlockContentProps = {
    children: ReactNode;
};

const SidebarContent = ({ children }: PanelBlockContentProps) => {
    return (
        <main className="flex flex-wrap h-full relative">
            {children}
        </main>
    );
}

export default SidebarContent;