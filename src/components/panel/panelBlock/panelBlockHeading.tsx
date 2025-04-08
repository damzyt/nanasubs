
interface PanelBlockHeaderProps {
    string: string;
}

const PanelBlockHeader = ({ string }: PanelBlockHeaderProps) => {
    return (
        <h2 className="flex text-base text-gray-700 font-semibold">
            {string}
        </h2>
    );
}

export default PanelBlockHeader;