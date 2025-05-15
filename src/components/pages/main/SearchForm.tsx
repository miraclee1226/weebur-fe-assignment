"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { InputSchema, InputType } from "@/schemas/Form.schema";
import { StringRecord } from "@/types/common";
import { zodResolver } from "@hookform/resolvers/zod";

interface SearchFormProps {
  searchParams: StringRecord;
  setSearchParams: (params: StringRecord) => void;
}

const SearchForm = ({ searchParams, setSearchParams }: SearchFormProps) => {
  const {
    register,
    setValue,
    watch,
    formState: { isSubmitting },
    handleSubmit,
  } = useForm<InputType>({
    defaultValues: {
      search: searchParams.search,
    },
    resolver: zodResolver(InputSchema),
  });

  const searchValue = watch("search");
  const isSearchEmpty = !searchValue || searchValue.trim().length === 0;

  const onSubmit = async (data: InputType): Promise<void> => {
    if (isSearchEmpty) return;

    const newParams = { ...searchParams, search: data.search.trim() };
    setSearchParams(newParams);

    await new Promise((resolve) => setTimeout(resolve, 300));
  };

  useEffect(() => {
    setValue("search", searchParams.search);
  }, [searchParams.search, setValue]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex px-4 py-2 items-center w-[1080px] h-16 bg-white rounded-full border-2 border-gray-200 m-auto my-5"
    >
      <label htmlFor="searchInput">
        <Image
          src="/assets/icons/search.svg"
          width={20}
          height={20}
          alt="검색 아이콘"
        />
      </label>
      <input
        {...register("search")}
        id="searchInput"
        type="text"
        placeholder="찾고 싶은 상품을 검색해보세요"
        className="w-full px-3 py-3 text-gray-700 focus:outline-none"
      />
      <button
        type="submit"
        disabled={isSearchEmpty || isSubmitting}
        className={`rounded-full w-[95px] h-full text-white text-center ${
          isSearchEmpty || isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isSubmitting ? "처리중..." : "검색"}
      </button>
    </form>
  );
};

export default SearchForm;
