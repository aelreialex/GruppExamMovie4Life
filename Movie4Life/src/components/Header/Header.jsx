import SearchBar from '../../components/SearchBar/SearchBar'
import Button from '../../components/Button/Button'
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import './header.css'

const Header = () => {
    const navigate = useNavigate();
    const urlString = useLocation();

    console.log(urlString.pathname);

    const gotoHome = (e) => {
    e.preventDefault();
    navigate('/', {replace: true});
    }

    const gotoWatchlist = (e) => {
        e.preventDefault();
        navigate('/watchlist', {replace: true});
    }

    const handleHome = () => {
        navigate('/', {replace: true});
    }

    return (
        <header className="header">
            <span onClick={handleHome} className='logo-container'>
                <h1 className='logo1'>Movie</h1>
                <h1 className='logo2'>4Life</h1>
            </span>
			<SearchBar />
            <span className='button-container'>
                {
                    urlString.pathname === '/' || urlString.pathname === null 
                    ? <>
                    <Button text="Home" type="submit" onClick={gotoHome} active={"button--active"}/>
                    <Button text="Watchlist" type="submit" onClick={gotoWatchlist} active={null}/>
                    </>
                    : urlString.pathname === '/watchlist'
                    ? <>
                    <Button text="Home" type="submit" onClick={gotoHome} active={null}/>
                    <Button text="Watchlist" type="submit" onClick={gotoWatchlist} active={"button--active"}/>
                    </>
                    : <>
                    <Button text="Home" type="submit" onClick={gotoHome} active={null}/>
                    <Button text="Watchlist" type="submit" onClick={gotoWatchlist} active={null}/>
                    </>
                }
            </span>
	    </header>
    )
}

export default Header