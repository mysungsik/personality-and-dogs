import AllDogsIntro from "../../components/all-dogs/all-dogs-intro";
import AllDogsContents from "../../components/all-dogs/all-dogs-content";
import Head from "next/head";

const AllDogs = () => {
  return (
    <div>
      <Head>
        <title>P&D - Find All dogs</title>
        <meta name="description" content="find all dogs from dog ceo api" />
      </Head>
      <AllDogsIntro />
      <AllDogsContents />
    </div>
  );
};

export default AllDogs;
