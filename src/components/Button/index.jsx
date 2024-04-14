import { Photo } from '../Photo';
import './styles.css';

export function Button({ type, text, icon }) {
    let buttonType = '';

    if (type === 1) buttonType = 'button--primary';

    return (
        <button className={`button ${buttonType}`}>
            {text} {icon && <Photo src={icon} />}
        </button>
    )
}