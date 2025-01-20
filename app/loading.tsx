import Image from "next/image";

const Loading = () => {
  return (
    <div className="bg-green absolute inset-0 w-full grid place-items-center">
      <div className="space-y-4">
        <svg
          className="animate-spin h-10 w-10 text-white mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
        <Image
          src="/images/logo.png"
          className="text"
          width={220}
          height={70}
          alt="Fromaj - Artisan Cheese Boards"
          priority={true}
        />
      </div>
    </div>
  );
};

export default Loading;
