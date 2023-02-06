import { GetStaticPropsContext } from "next";
import TestDiscResult from "../../components/test-disc/test-disc-result";

const FavoriteNumber = (props: { result: string }) => {
  const { result } = props;

  return (
    <div>
      <TestDiscResult result={result} />
    </div>
  );
};

export default FavoriteNumber;

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
