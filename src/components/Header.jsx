import { BriefcaseIcon } from "@heroicons/react/24/solid";

export function Header() {
  return (
    <header className="sticky top-0 m-1 flex h-24 rounded-xl bg-slate-500/50 p-0 backdrop-blur">
      <div className="flex w-full items-center justify-between ">
        <BriefcaseIcon className=" m-4 h-1/2" />
        <h1>CV Application</h1>
        <button className="m-4 h-10 w-20 rounded-lg bg-purple-500 hover:bg-purple-700">
          Btn
        </button>
      </div>
    </header>
  );
}
