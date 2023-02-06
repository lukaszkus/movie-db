import Link from "next/link";
import Image from "next/image";
import SearchInput from "@/components/SearchInput";

type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => {
  return (
    <div className="sticky flex top-0 z-40 w-full h-24 bg-zinc-900">
      <div className="flex justify-between w-full h-full max-w-7xl m-auto px-4">
        <Link href="/">
          <div className="flex items-center h-full cursor-pointer">
            <div className="invisible md:visible">
              <Image
                width="150"
                height="25"
                src="/movie_db_logo.svg"
                alt="Movie_DB logo"
              />
            </div>
            <div className="absolute md:invisible">
              <Image
                width="80"
                height="25"
                src="/movie_db_logo_sm.svg"
                alt="Movie_DB logo small"
              />
            </div>
          </div>
        </Link>
        {setQuery ? (
          <div className="relative flex items-center">
            <SearchInput setQuery={setQuery} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Header;
