export default function Sidebar({children}){
    return(
        <aside className="bg-rose-200 w-1/4 flex flex-col justify-around items-center">
          {children}
        </aside>
    )
}