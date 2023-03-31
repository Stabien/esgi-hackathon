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
import CardIcon from "@/components/Icons/CardIcon";
import { Content } from "@/types/content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const user = useSelector(selectUser);

  const contents: Content[] = [
    {
      uuid: "1",
      type: "article",
      title: "Titre de l'article",
      thumbnail:
        "https://previews.123rf.com/images/cunaplus/cunaplus1611/cunaplus161100296/66207275-senior-man-falling-down-on-the-stairs-at-the-home.jpg",
      banner: "https://example.com/banner.jpg",
      tags: [],
      creationDate: "2022-01-01T00:00:00Z",
      text: "Contenu de l'article",
    },
    {
      uuid: "2",
      type: "video",
      title: "Titre de la vidéo",
      thumbnail:
        "https://previews.123rf.com/images/cunaplus/cunaplus1611/cunaplus161100296/66207275-senior-man-falling-down-on-the-stairs-at-the-home.jpg",
      banner: "https://example.com/banner.jpg",
      tags: [],
      creationDate: "2022-02-01T00:00:00Z",
      url: "https://example.com/video.mp4",
      description: "Description de la vidéo",
    },
    {
      uuid: "3",
      type: "podcast",
      title: "Titre du podcast",
      thumbnail:
        "https://previews.123rf.com/images/cunaplus/cunaplus1611/cunaplus161100296/66207275-senior-man-falling-down-on-the-stairs-at-the-home.jpg",
      banner: "https://example.com/banner.jpg",
      tags: [],
      creationDate: "2022-03-01T00:00:00Z",
      url: "https://example.com/podcast.mp3",
      description: "Description du podcast",
    },
  ];

  useEffect(() => {
    if (user.role === null) {
      router.push("/login");
    }
    // switch (user.role) {
    //   // case "Logged":
    //   //   router.push("/admin");
    //   //   break;
    //   // case "Admin":
    //   //   router.push("/admin");
    //   //   break;
    //   case null:
    //     router.push("/login");
    //     break;

    //   default:
    //     // router.push("/login");
    //     break;
    // }
  }, []);

  return (
    <LayoutUser>
      <main className="flex flex-col px-16 py-8 gap-8">
        <section className="flex flex-col gap-8">
          <p className="text-neutral-500 text-xl font-bold">
            Bonjour {user.firstname}
          </p>
          <div className="flex justify-center">
            <CardIcon />
          </div>
        </section>
        <section className="flex flex-col gap-8">
          <p className="text-neutral-500 text-xl font-bold">
            Dépenses de santé
          </p>
          <div className="flex gap-4 justify-center">
            <article className="shadow flex flex-col max-w-56 gap-4 items-center rounded-lg p-4">
              <div className="w-20 h-20 bg-yellow-100 rounded-full"></div>
              <div className="text-neutral-500 text-xl font-bold">
                Demander un remboursement
              </div>
              <p className="text-neutral-300">
                Simuler le reste à charge pour mes futurs soins.
              </p>
            </article>

            <article className="shadow flex flex-col max-w-56 gap-4 items-center rounded-lg p-4">
              <div className="w-20 h-20 bg-blue-100 rounded-full"></div>
              <div className="text-neutral-500 text-xl font-bold">
                Estimer un remboursement{" "}
              </div>
              <p className="text-neutral-300">
                Simuler le reste à charge pour mes futurs soins.
              </p>
            </article>
          </div>
        </section>
        <section className="flex flex-col gap-8">
          <p className="text-neutral-500 text-xl font-bold">Médias</p>
          <div className="flex justify-center  items-center">
            <div className="grid grid-cols-2  w-full grid-rows-2 gap-4">
              {contents.map((content) => (
                <div
                  key={content.uuid}
                  className="w-full  flex flex-col text-neutral-500 gap-2"
                >
                  <img
                    src={content.thumbnail}
                    alt=""
                    className="object-cover object-center h-56 rounded-lg shadow-lg w-full"
                  />
                  <span className="text-ls font-thin">{content.type} </span>
                  <span className="font-bold">{content.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </LayoutUser>
  );
}
