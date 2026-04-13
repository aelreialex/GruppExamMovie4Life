import './button.css'

const Button = ({text, type, onClick}) => {

    const homePath = "M240 6.1c9.1-8.2 22.9-8.2 32 0l232 208c9.9 8.8 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-8-7.2 0 205.3c0 35.3-28.7 64-64 64l-288 0c-35.3 0-64-28.7-64-64l0-205.3-8 7.2c-9.9 8.8-25 8-33.9-1.8s-8-25 1.8-33.9L240 6.1zm16 50.1L96 199.7 96 448c0 8.8 7.2 16 16 16l48 0 0-104c0-39.8 32.2-72 72-72l48 0c39.8 0 72 32.2 72 72l0 104 48 0c8.8 0 16-7.2 16-16l0-248.3-160-143.4zM208 464l96 0 0-104c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24l0 104z"
    const homeClassName = "homeIcon";
    
    const watchPath = "M0 64C0 28.7 28.7 0 64 0L320 0c35.3 0 64 28.7 64 64l0 417.1c0 25.6-28.5 40.8-49.8 26.6L192 412.8 49.8 507.7C28.5 521.9 0 506.6 0 481.1L0 64zM64 48c-8.8 0-16 7.2-16 16l0 387.2 117.4-78.2c16.1-10.7 37.1-10.7 53.2 0L336 451.2 336 64c0-8.8-7.2-16-16-16L64 48z";
    const watchClassName = "watchIcon";

    console.log(text);

    return (
          <button
    			onClick={onClick}
    			type={type}
    			className={`button`}
    		>
                <svg className={text === 'Home' ? homeClassName : text ==='Watchlist' ? watchClassName : ''} 
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" >
                <path d={text === 'Home' ? homePath : text === 'Watchlist' ? watchPath : ''}/>
                </svg>
    			{text}
    		</button>
    )
}

export default Button
