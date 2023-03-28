import SiteHeader from "@/components/SiteHeader";
import TopBar from "@/components/TopBar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        gridTemplateAreas: `'menu topBar'
      'menu content'`,
      }}
      className="grid grid-cols-menu grid-rows-menu"
    >
      <TopBar />
      <SiteHeader />
      <main
        style={{ gridArea: "content" }}
        className="bg-blue-50 p-8 rounded-tl-3xl"
      >
        {children}
      </main>
    </div>
  );
}
