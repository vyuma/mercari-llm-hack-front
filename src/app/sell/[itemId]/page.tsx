export default function TitleDetail({
  params: { itemId },
}: {
  params: { itemId: string };
}) {
  return (
    <div>
      <h1>Item Detail</h1>
      <p>itemId: {itemId}</p>
    </div>
  );
}
