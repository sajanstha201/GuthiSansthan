import BranchIntanceArticle from "./BranchIntanceArticle"
import bg from '../../../media/Article/pasupatibg.jpg'

export const BranchArticles=()=>{
    return(
        <div className="w-[80%]  bg-slate-300 rounded-lg">
             <BranchIntanceArticle img={bg} title={'Title'} desc={'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit debitis dicta, provident, similique laudantium reiciendis aut, iure distinctio in dolorem facere fugit sed atque incidunt ipsum fuga? Ullam, ducimus harum?'} />
             <BranchIntanceArticle img={bg} title={'Title'} desc={'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit debitis dicta, provident, similique laudantium reiciendis aut, iure distinctio in dolorem facere fugit sed atque incidunt ipsum fuga? Ullam, ducimus harum?'} />
             <BranchIntanceArticle img={bg} title={'Title'} desc={'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit debitis dicta, provident, similique laudantium reiciendis aut, iure distinctio in dolorem facere fugit sed atque incidunt ipsum fuga? Ullam, ducimus harum?'} />

          
        </div>
    )
}