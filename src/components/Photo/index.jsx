import './styles.css';

export function Photo({ src, alt }) {
    return (
        <img
            className='photo'
            src={src}
            alt={alt ? alt : ''}
        />
    )
}