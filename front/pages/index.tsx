import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Layout } from "@/components/Layout";
import HomeIcon from "@/components/Icons/HomeIcon";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="">
          <p className="">
            Get started by editing&nbsp;
            <code className="">pages/index.tsx</code>
          </p>
          <div>
            neutral
            <p className="bg-neutral-50">neutral 50</p>
            <p className="bg-neutral-100">neutral 100</p>
            <p className="bg-neutral-150">neutral 150</p>
            <p className="bg-neutral-200">neutral 200</p>
            <p className="bg-neutral-250">neutral 250</p>
            <p className="bg-neutral-300">neutral 300</p>
            <p className="bg-neutral-350">neutral 350</p>
            <p className="bg-neutral-400 text-white">neutral 400</p>
          </div>
          <div>
            blue
            <p className="bg-blue-50">blue 50</p>
            <p className="bg-blue-100">blue 100</p>
            <p className="bg-blue-150">blue 150</p>
            <p className="bg-blue-200">blue 200</p>
            <p className="bg-blue-250">blue 250</p>
            <p className="bg-blue-300">blue 300</p>
            <p className="bg-blue-350">blue 350</p>
          </div>
          <div>
            green
            <p className="bg-green-50">green 50</p>
            <p className="bg-green-100">green 100</p>
            <p className="bg-green-150">green 150</p>
            <p className="bg-green-200">green 200</p>
            <p className="bg-green-250">green 250</p>
            <p className="bg-green-300">green 300</p>
            <p className="bg-green-350">green 350</p>
          </div>
          <div>
            yellow
            <p className="bg-yellow-50">yellow 50</p>
            <p className="bg-yellow-100">yellow 100</p>
            <p className="bg-yellow-150">yellow 150</p>
            <p className="bg-yellow-200">yellow 200</p>
            <p className="bg-yellow-250">yellow 250</p>
            <p className="bg-yellow-300">yellow 300</p>
            <p className="bg-yellow-350">yellow 350</p>
          </div>
          <div>
            red
            <p className="bg-red-50">red 50</p>
            <p className="bg-red-100">red 100</p>
            <p className="bg-red-150">red 150</p>
            <p className="bg-red-200">red 200</p>
            <p className="bg-red-250">red 250</p>
            <p className="bg-red-300">red 300</p>
            <p className="bg-red-350">red 350</p>
          </div>
          <div>
            pink
            <p className="bg-pink-50">pink 50</p>
            <p className="bg-pink-100">pink 100</p>
            <p className="bg-pink-150">pink 150</p>
            <p className="bg-pink-200">pink 200</p>
            <p className="bg-pink-250">pink 250</p>
            <p className="bg-pink-300">pink 300</p>
            <p className="bg-pink-350">pink 350</p>
          </div>
          <div>
            purple
            <p className="bg-purple-50">purple 50</p>
            <p className="bg-purple-100">purple 100</p>
            <p className="bg-purple-150">purple 150</p>
            <p className="bg-purple-200">purple 200</p>
            <p className="bg-purple-250">purple 250</p>
            <p className="bg-purple-300">purple 300</p>
            <p className="bg-purple-350">purple 350</p>
          </div>

          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className=""
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="">
          <Image
            className=""
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className="">
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className="">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className="text-red-700 font-bold ">
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
    </Layout>
  );
}
