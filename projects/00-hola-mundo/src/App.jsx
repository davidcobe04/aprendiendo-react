import './App.css'
export function App () {
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar' alt="El avatar de davidcobe04" src="https://avatars.githubusercontent.com/u/172441724?s=48&v=4" />
                <div className='tw-followCard-info'>
                    <strong>David Cotrina</strong>
                    <span className='tw-followCard-username'>@davidcobe04</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}