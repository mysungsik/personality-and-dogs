import { GetStaticPropsContext } from "next";
import TestDiscResult from "../../components/test-disc/test-disc-result";
import Head from "next/head";
const DISCTestResult = (props: { result: string }) => {
  const { result } = props;

  return (
    <div>
      <Head>
        <title>P&D - DISC Test Result</title>
        <meta name="description" content="DISC test result" />
      </Head>
      <TestDiscResult result={result} />
    </div>
  );
};

export default DISCTestResult;

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  const result = params!.result?.toString();

  return {
    props: { result },
    revalidate: 1000,
  };
};

export async function getStaticPaths() {
  const total = [
    "di",
    "ds",
    "dc",
    "id",
    "is",
    "ic",
    "sd",
    "si",
    "sc",
    "cd",
    "ci",
    "cs",
  ];
  return {
    paths: total.map((item) => ({ params: { result: item.toString() } })),
    fallback: true,
  };
}
