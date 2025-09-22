import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'
export function App () {
    return (
        <section className='App'> 
        { /* Es igual a poner <React.Fragment> <React.Fragment /> pero poniendo <> </> se hace más limpio y legible*/ }
            <TwitterFollowCard userName="davidcobe04" name="David Cotrina" isFollowing />
            <TwitterFollowCard userName="midudev" name="Miguel Ángel Durán" />
            <TwitterFollowCard userName="pheralb" name="Pablo Hernández" isFollowing />
            <TwitterFollowCard userName="elonmusk" name="Elon Musk" />
            <TwitterFollowCard userName="vxnder" name="VanderHart" isFollowing />
        </section>
    )
}