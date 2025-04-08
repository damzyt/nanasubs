import { ReactNode } from "react";

type PanelBlockFooterProps = {
    children: ReactNode;
};

const PanelBlockFooter = ({ children }: PanelBlockFooterProps) => {
    return (
        <footer className="flex">
            {children}
        </footer>
    );
}

export default PanelBlockFooter;