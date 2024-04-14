import './styles.css';

export function Input({ name, label, ...rest }) {
    return (
        <div className='input-wrapper'>
            <label className='input-label' htmlFor={name}>{label}</label>
            <input className='input-field' id={name} name={name} {...rest} />
        </div>
    )
}