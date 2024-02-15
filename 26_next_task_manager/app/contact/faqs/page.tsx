// import type { Metadata } from "next";

import { faqs } from "@/utils/faqs";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Task Manager App | FAQS",
//   description: "Task Manager App",
// };

const FaqsPage: React.FC = () => {
  return (
    <div className="space-y-6 mt-10">
      <p>Faqs</p>
      <div className="space-y-6">
        {faqs.map((el, index) => (
          <div key={index}>
            <Link href={`/contact/faqs/${el.id}`}>
              <div>
                <p>Q{el.id}:</p>
                <p>{el.text}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqsPage;
