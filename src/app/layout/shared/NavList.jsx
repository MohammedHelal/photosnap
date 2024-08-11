import Link from "next/link";
export default function NavList({ listClasses, footer }) {
  return (
    <>
      <ul className={`list-none py-[10px] ${listClasses}`}>
        {footer && (
          <Link href="/">
            <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500 ">
              <h4 className="my-0">home</h4>
            </li>
          </Link>
        )}
        <Link href="/stories">
          <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500 ">
            <h4 className="my-0">stories</h4>
          </li>
        </Link>
        <Link href="/features">
          <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500">
            <h4 className="my-0">features</h4>
          </li>
        </Link>
        <Link href="/pricing">
          <li className="text-center py-[10px] px-[15px] uppercase cursor-pointer hover:text-slate-500">
            <h4 className="my-0">pricing</h4>
          </li>
        </Link>
      </ul>
    </>
  );
}
