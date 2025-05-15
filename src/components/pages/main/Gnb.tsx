import Image from "next/image";
import SearchForm from "./SearchForm";
import { StringRecord } from "@/types/common";

interface GnbProps {
  searchParams: StringRecord;
  setSearchParams: (params: StringRecord) => void;
}

export default function Gnb({ searchParams, setSearchParams }: GnbProps) {
  return (
    <nav className="sticky top-0 left-0 right-0 z-10 flex items-center justify-between w-full py-3 bg-white shadow-md">
      <div className="m-auto w-[1200px] flex items-center justify-between">
        <Image
          src="/assets/images/logo.png"
          width={123}
          height={23}
          alt="logo"
          priority
        />
        <SearchForm
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
    </nav>
  );
}
