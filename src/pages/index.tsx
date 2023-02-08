import Head from "next/head";
import HompageIntro from "@/components/homepage/homepage-intro";
import HomepageSelectTests from "@/components/homepage/homepage-select-test";

export default function Home() {
  return (
    <>
      <Head>
        <title>P&D - Homepage</title>
        <meta
          name="description"
          content="p&d can match your dog with personality what you have. Just answer some questions and find dogs who fit-well into you. Do Free Personality test and find your dogs"
        />
      </Head>
     
      <main>
        <HompageIntro />
        <HomepageSelectTests />
      </main>
    </>
  );
}
