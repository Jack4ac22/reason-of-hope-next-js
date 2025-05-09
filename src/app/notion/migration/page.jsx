import { mapAllContributors, mapAllFallacies } from "@/utils/blog/notion-mapper";
import { Suspense, use } from "react";
export const revalidate = 10;

export default async function Migration() {
  const list = await mapAllFallacies();
  return (
    <div dir="ltr">
      <div className="flex flex-col gap-4 mt-4">
        <Suspense fallback={<div>Loading...</div>}>
          {list.map((item) => (
            <div key={item.id}>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p className="text-gray-700">{item.description}</p>
              <p className="text-gray-700">{item.video}</p>
            </div>
          ))}
        </Suspense>
      </div>
    </div>
  );
}