
export function showAlert(message, type) {
    const alertContainer = document.getElementById('alert-container');
    const alert = document.createElement('div');
    alert.className = `alert ${type} z-50`;
    alert.style.backgroundColor=type;
    alert.innerText = message;
    alertContainer.appendChild(alert);
    setTimeout(() => {
        alert.classList.add('hidden');
        setTimeout(() => {
            alert.remove();
        }, 500);
    }, 1000);
}
export {NewLoader} from './NewLoader'
export default {showAlert}
export {AlertBox} from './AlertBox'
export {LoaderBox} from './LoaderBox'