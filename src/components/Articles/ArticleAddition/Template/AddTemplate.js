import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './TemplateMain.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function getCurrentDateTimeString() {
    const now = new Date();
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return now.toLocaleString('en-US', options);
  }
export const AddTemplate=({name,data,setData})=>{
    const addTemplate=(templateName)=>{
        setData(prevData=>({...prevData,[name+'-section'+getCurrentDateTimeString()]:{
            'templateName':templateName,
            'text':{'nepali':'','english':'','newari':'','mithila':''}
        }}))
    }
    return(
        <div className="flex w-full flex-col">
            <div className={`flex flex-row w-full justify-center px-5 flex-wrap gap-2 items-center`}>
                <div className="add-template-div" onClick={()=>addTemplate('template1')}>
                    <FontAwesomeIcon icon={faPlus} size='2x'/>
                    Template1
                </div>
                {/* <div className="add-template-div" onClick={()=>addTemplate('template2')}>
                    <FontAwesomeIcon icon={faPlus} size='2x'/>
                    Template2
                </div>
                <div className="add-template-div" onClick={()=>addTemplate('template3')}>
                    <FontAwesomeIcon icon={faPlus} size='2x'/>
                    Template3
                </div>
                <div className="add-template-div" onClick={()=>addTemplate('template4')}>
                    <FontAwesomeIcon icon={faPlus} size='2x'/>
                    Template4
                </div> */}
            </div>
        </div>
    )
}