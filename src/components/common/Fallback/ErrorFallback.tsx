"use client";

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export default function ErrorFallback({
  resetErrorBoundary,
}: ErrorFallbackProps) {
  const handleResetErrorBoundary = (): void => {
    resetErrorBoundary();
  };

  return (
    <div className="m-auto flex h-full items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl-bold text-red-500">오류가 발생했습니다 😢</h1>
        <p className="text-2lg-medium text-custom-black/60">
          잠시 후 다시 시도해주세요.
        </p>
        <button
          onClick={handleResetErrorBoundary}
          className="rounded-full w-[95px] h-8 text-white text-center bg-blue-500 hover:bg-blue-600"
          type="button"
        >
          새로고침
        </button>
      </div>
    </div>
  );
}
