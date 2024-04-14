import './styles.css';

export function Form({ children, onSubmit }) {
    return (
        <form className='form' onSubmit={onSubmit}>
            {children}
        </form>
    )
}