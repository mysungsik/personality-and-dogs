import AllDogsRandom from "@/components/all-dogs/all-dogs-random";
import AllDogsIntro from "../../components/all-dogs/all-dogs-intro";
import Head from "next/head";

const AllDogsRandomImages = () => {
  return (
    <div>
      <Head>
        <title>P&D - Find All dogs</title>
        <meta name="description" content="find all dogs images from dog ceo api" />
      </Head>
      <AllDogsIntro />
      <AllDogsRandom />
    </div>
  );
};

export default AllDogsRandomImages;
