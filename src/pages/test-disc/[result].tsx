import { GetStaticPropsContext } from "next";
import TestNumberResult from "@/components/test-number/test-number-result";

const FavoriteNumber = (props: { result: string }) => {
  const { result } = props;

  return (
    <div>
      <TestNumberResult result={result} />
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
  const total = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return {
    paths: total.map((item) => ({ params: { result: item.toString() } })),
    fallback: true,
  };
}
