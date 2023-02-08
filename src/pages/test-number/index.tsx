import TestNumberIntro from "../../components/test-number/test-number-intro";
import TestNumberTesting from "../../components/test-number/test-number-testing";
import Head from "next/head";
const TestNumberPage = () => {
  return (
    <div>
      <Head>
        <title>P&D - Number Test Testing</title>
        <meta
          name="description"
          content="number test is most simple test, to find out your personality."
        />
      </Head>
      <TestNumberIntro />
      <TestNumberTesting />
    </div>
  );
};

export default TestNumberPage;
