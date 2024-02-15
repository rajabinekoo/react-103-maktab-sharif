import { faqs } from "@/utils/faqs";

export const dynamic = "force-dynamic";

const FaqItem = ({ params }: { params: { id: string } }) => {
  const item = faqs.find((el) => el.id === Number(params.id));

  if (!item) throw new Error("Not found");

  return (
    <div>
      <p>Q{item?.id}:</p>
      <p>{item?.text}</p>
    </div>
  );
};

export default FaqItem;
