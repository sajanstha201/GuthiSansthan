export function displayMoreDescription(image,topic,description){
    const templeImage=document.getElementById('more-description-img')
    document.getElementById('more-description-div').style.top=0;
    templeImage.src=image
    templeImage.alt=topic
    document.getElementById('more-description').innerHTML=description
    document.getElementById('more-description-heading').innerHTML=topic
}
export default {displayMoreDescription}
export {MoreDescriptionDiv} from './MoreDescriptionDiv'