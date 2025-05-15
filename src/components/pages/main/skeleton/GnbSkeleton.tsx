export default function GnbSkeleton() {
  return (
    <nav className="sticky top-0 left-0 right-0 z-10 flex items-center justify-between w-full py-3 bg-white shadow-md">
      <div className="m-auto w-[1200px] flex items-center justify-between">
        <div className="w-[123px] h-[23px] bg-gray-200 rounded animate-pulse" />

        <div className="flex items-center">
          <div className="w-[240px] h-[38px] bg-gray-200 rounded-full animate-pulse" />
          <div className="ml-2 w-[38px] h-[38px] bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>
    </nav>
  );
}
