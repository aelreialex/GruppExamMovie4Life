import SearchBar from '../../components/SearchBar/SearchBar'
import Button from '../../components/Button/Button'
import { useNavigate } from "react-router-dom"
import './header.css'

const Header = () => {
    const navigate = useNavigate();

    const gotoHome = (e) => {
    e.preventDefault();
    navigate('/', {replace: true});
    }

    const gotoWatchlist = (e) => {
        e.preventDefault();
        navigate('/watchlist', {replace: true});
    }

    return (
        <header className="header">
            <span className='logo-container'>
                <h1 className='logo1'>Movie</h1>
                <h1 className='logo2'>4Life</h1>
            </span>
			<SearchBar />
            <span className='button-container'>
                <Button text="Home" type="submit" onClick={gotoHome}/>
                <Button text="Watchlist" type="submit" onClick={gotoWatchlist}/>
            </span>
	    </header>
    )
}

export default Header