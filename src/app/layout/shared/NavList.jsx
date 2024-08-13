import Link from "next/link";
export default function NavList({ listClasses, footer }) {
  return (
    <>
      <ul className={`list-none py-[10px] ${listClasses}`}>
        {footer && (
          <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500 ">
            <Link href="/">
              <h4 className="my-0">home</h4>
            </Link>
          </li>
        )}
        <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500 ">
          <Link href="/stories">
            <h4 className="my-0">stories</h4>
          </Link>
        </li>
        <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500">
          <Link href="/features">
            <h4 className="my-0">features</h4>
          </Link>
        </li>
        <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500">
          <Link href="/pricing">
            <h4 className="my-0">pricing</h4>
          </Link>
        </li>
      </ul>
    </>
  );
}
