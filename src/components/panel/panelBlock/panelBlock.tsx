import { ReactNode } from "react";

type PanelBlockProps = {
    children: ReactNode;
};

const PanelBlock = ({ children }: PanelBlockProps) => {

    return (
        <div className="flex flex-col w-100 h-auto p-4 bg-white border-gray-200 border-2 rounded gap-2">
            {children}
        </div>
    );

}

export default PanelBlock;