import TestDiscTesting from "@/components/test-disc/test-disc-testing";
import TestDiscIntro from "../../components/test-disc/test-disc-intro";
import Head from "next/head";
const TestDiscPage = () => {
  return (
    <div>
      <Head>
        <title>P&D - DISC Test Testing</title>
        <meta
          name="description"
          content="disc test is one of the most famous personality test.
        The DISC test, invented by Morton Marston, who guessed the lie
          detector, is a test that monitors four extensions: Dominace,
          Influence, Conscientiousness, and Steadiness."
        />
      </Head>
      <TestDiscIntro />
      <TestDiscTesting />
    </div>
  );
};

export default TestDiscPage;
