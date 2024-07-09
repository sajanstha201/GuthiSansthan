export { ArticleDisplay } from './ArticleDisplay'
export {TemplesDisplayMain} from './TemplesDisplayMain'
const images=require.context('../../../media/TempleInformation')
export function displayTempleDescription(imageUrl,templeName,templeDesc){
    const templeImage=document.getElementById('temple-img')
    templeImage.src=images(`.${imageUrl}`)
    templeImage.alt=templeName
    document.getElementById('temple-description').innerHTML=templeDesc
}
export default {displayTempleDescription}