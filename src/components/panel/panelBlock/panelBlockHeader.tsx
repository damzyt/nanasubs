import { ReactNode } from "react";

type PanelBlockHeaderProps = {
    children: ReactNode;
};

const PanelBlockHeader = ({ children }: PanelBlockHeaderProps) => {
    return (
        <header className="flex">
            {children}
        </header>
    );
}

export default PanelBlockHeader;