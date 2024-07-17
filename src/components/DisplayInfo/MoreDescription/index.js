export function displayMoreDescription(image,topic,description){
    const imageDiv=document.getElementById('more-description-img')
    document.getElementById('more-description-div').style.top=0;
    imageDiv.src=image
    imageDiv.alt=topic
    document.getElementById('more-description').innerHTML=description
    document.getElementById('more-description-heading').innerHTML=topic
}
export default {displayMoreDescription}
export {MoreDescriptionDiv} from './MoreDescriptionDiv'