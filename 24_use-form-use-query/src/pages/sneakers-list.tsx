import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ISneakerRes, fetchSneakerList } from "../apis/sneaker-service";
import { SneakersCard } from "../components/sneaker-card";
import { AppError, classNames, errorHandler } from "../libs/tools";
import { SearchInput } from "../components/search-input";

export const SneakersPage = () => {
  const [page, setPage] = useState<number>(1);
  const [search, setSearch] = useState<string>("");
  const [sneakerList, setSneakerList] = useState<ISneakerRes[]>([]);
  const query = useQuery({
    queryKey: ["sneakers", page, search],
    queryFn: () => fetchSneakerList(page, search),
  });

  const lastPageLoaded = useMemo(() => {
    return page + 1 > (query.data?.totalPages || 1);
  }, [page, query.data?.totalPages]);

  useEffect(() => {
    if (!query.isError) return;
    errorHandler(query.error as AppError);
  }, [query.isError, query.error]);

  const handlePageClick = () => {
    if (lastPageLoaded) return;
    setSneakerList([...(query.data?.data || [])]);
    setPage(page + 1);
  };

  const onSubmit = (data: { search: string }) => {
    setSearch(data.search);
  };

  return (
    <div className="container mx-auto pb-32 pt-16 px-4 space-y-8">
      <SearchInput onSubmit={onSubmit} />
      <div
        className={classNames(
          "grid gap-8",
          "2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1"
        )}
      >
        {sneakerList?.map((el) => (
          <SneakersCard {...el} />
        ))}
        {query.data?.data?.map((el) => (
          <SneakersCard {...el} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-600 rounded-xl px-5 py-2 text-white font-semibold capitalize disabled:bg-blue-300"
          onClick={handlePageClick}
          disabled={lastPageLoaded}
        >
          load more
        </button>
      </div>
    </div>
  );
};
