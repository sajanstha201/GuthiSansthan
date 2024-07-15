export const InstanceService=({image,topic,link})=>{
    return(
        <div className="relative overflow-hidden w-[300px] h-[200px]">
            <div className="absolute emerge no-underline w-full h-full">
                <a href={link} className="no-underline w-full h-full">
                    <img src={image} className="" />
                    <div>topic</div>
                </a>
            </div>
        </div>


    )
}