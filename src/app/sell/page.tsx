import Header from "../components/Header";
import ItemButtons from "../components/ItemButtons";
import CategoryButtons from "../components/CategoryButtons";

export default function Page() {
  return (
    <>
      <Header title={"ランキング"} />
      <CategoryButtons categories={[]}></CategoryButtons>
      <ItemButtons items={[]} />
    </>
  );
}
