import trollFaceIcon from '../../assets/imgs/troll-face.svg';
import './styles.css';

export function Logo() {
    return (
        <a className='logo' href='/'>
            <img src={trollFaceIcon} alt='Logo' />
            <span>Meme Generator</span>
        </a>
    )
}