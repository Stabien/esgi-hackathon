import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { LayoutAdmin } from "@/components/LayoutAdmin";
import ArrowIcon from "@/components/Icons/ArrowIcon";
import ChevronIcon from "@/components/Icons/ChevronIcon";
import LayoutUser from "@/components/LayoutUser";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectUser } from "@/redux/user/user.selectors";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const user = useSelector(selectUser);
  useEffect(() => {
    switch (user.role) {
      case "Logged":
        router.push("/admin");
        break;
      case "Admin":
        router.push("/admin");
        break;

      default:
        router.push("/login");
        break;
    }
  }, [user]);

  return <LayoutUser> </LayoutUser>;
}
