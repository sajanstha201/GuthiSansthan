import { BranchArticles } from "./BranchComponents/BranchArticles"
import { BranchFestival } from "./BranchComponents/BranchFestival"
import { BranchHeader } from "./BranchComponents/BranchHeader"
import { BranchNotice } from "./BranchComponents/BranchNotice"

export const EachBranchInfo=()=>{
    return(
        <div className="flex flex-col items-center gap-3">
            <BranchHeader/>
            <BranchArticles/>
            <BranchNotice/>
            <BranchFestival/>
        </div>
    )
}