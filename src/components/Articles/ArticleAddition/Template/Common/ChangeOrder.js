import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
function moveKey(obj, key, direction) {
    const arr = Object.entries(obj);
    const index = arr.findIndex(([k]) => k === key);
  
    if (index !== -1) {
      if (direction === 'up' && index > 0) {
        [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
      } else if (direction === 'down' && index < arr.length - 1) {
        [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
      }
    }
  
    return Object.fromEntries(arr);
  }
export const ChangeOrder=({name,data,setData})=>{
    return(
        <>
        <div className="flex flex-col ml-1 items-center justify-center">
            <FontAwesomeIcon icon={faCaretUp} size="2x" onClick={()=>{setData(moveKey({...data},name,'up'))}}/>
            <FontAwesomeIcon icon={faCaretDown} size="2x" onClick={()=>{setData(moveKey({...data},name,'down'))}}/>
        </div>
        </>
    )
}