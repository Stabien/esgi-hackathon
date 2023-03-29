import SiteMenu from "@/components/SiteMenu";
import TopBar from "@/components/TopBar";
import { selectUser } from "@/redux/user/user.selectors";
import { useSelector } from "react-redux";

interface LayoutProps {
  children: React.ReactNode;
}

export function LayoutAdmin({ children }: LayoutProps) {
  const user = useSelector(selectUser);
  return (
    <div
      style={{
        gridTemplateAreas: `'menu topBar'
      'menu content'`,
      }}
      className="grid grid-cols-menu grid-rows-menu"
    >
      <TopBar />
      <SiteMenu />
      <main
        style={{ gridArea: "content" }}
        className="bg-blue-50 p-8 rounded-tl-3xl"
      >
        {user.role === "Admin" ? children : "No admin"}
      </main>
    </div>
  );
}
