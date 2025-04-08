 import { PanelBlock, PanelBlockHeader, PanelBlockHeading, PanelBlockContent, PanelBlockFooter } from "@/components/panel";

const Dashboard = () => {
    return (
        <section className="grid grid-cols-4 gap-2 w-full">
            <PanelBlock>
                <PanelBlockHeader>
                    <PanelBlockHeading string="Anime" />
                </PanelBlockHeader>
                <PanelBlockContent>
                    <p className="text-xl font-bold">309</p>
                </PanelBlockContent>
                <PanelBlockFooter>
                    <p className="text-xs text-gray-500">Łączna liczba anime</p>
                </PanelBlockFooter>
            </PanelBlock>
            <PanelBlock>
                <PanelBlockHeader>
                    <PanelBlockHeading string="Odcinki" />
                </PanelBlockHeader>
                <PanelBlockContent>
                    <p className="text-xl font-bold">2709</p>
                </PanelBlockContent>
                <PanelBlockFooter>
                    <p className="text-xs text-gray-500">Łączna liczba odcinków</p>
                </PanelBlockFooter>
            </PanelBlock>
            <PanelBlock>
                <PanelBlockHeader>
                    <PanelBlockHeading string="Użytkownicy" />
                </PanelBlockHeader>
                <PanelBlockContent>
                    <p className="text-xl font-bold">4721</p>
                </PanelBlockContent>
                <PanelBlockFooter>
                    <p className="text-xs text-gray-500">Łączna liczba użytkowników</p>
                </PanelBlockFooter>
            </PanelBlock>
            <PanelBlock>
                <PanelBlockHeader>
                    <PanelBlockHeading string="Komentarze" />
                </PanelBlockHeader>
                <PanelBlockContent>
                    <p className="text-xl font-bold">589</p>
                </PanelBlockContent>
                <PanelBlockFooter>
                    <p className="text-xs text-gray-500">Łączna liczba komentarzy</p>
                </PanelBlockFooter>
            </PanelBlock>
        </section>
    );
};

export default Dashboard;