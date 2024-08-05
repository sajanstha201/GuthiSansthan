export const LoaderBox=()=>{
    return(
        <div className='blur-box w-screen h-[100vh] fixed flex items-center justify-center bg-gray-400/80 z-50' id='blur-box' style={{display:'none'}}>
        <div className='loader-box' id='loader-box'></div>      
    </div>
    )
}
export function activate_loader(bool_value){
    document.getElementById('loader-box').style.display=bool_value?'flex':'none';
    document.getElementById('blur-box').style.display=bool_value?'flex':'none';
}