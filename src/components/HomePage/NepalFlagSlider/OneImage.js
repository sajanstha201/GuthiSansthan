export const OneImage=({img,name})=>{
    return(
        <>
        <div className="flex justify-center items-center bg-cover relative bg-center h-12 lg:h-24 rounded-lg overflow-hidden aspect-video" style={{backgroundImage:`url(${img})`}}>
            <div className="bg-zinc-800/40 absolute top-0  h-full w-full"></div>
            <h1 className="text-base font-medium z-10 lg:text-xl tracking-tighter leading-none">{name}</h1>
        </div>
        </>
    )
}