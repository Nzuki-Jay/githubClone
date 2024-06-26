import './Menu.scss';
import {Link} from 'react-router-dom';

const Menu = ({openMenu}) => {

    return <>
        <div style={{ display: openMenu ? 'block' : 'none' }} className="menu">
            <div className="wrapper">
                <p>Signed in as Nzuki Code.</p>

                <span>Set Status</span>

                <hr></hr>

                <div className="settings">
                    <Link to='/profile'>
                        <span className='links'>Your profile</span>
                    </Link>
                    <Link className='links' to='/profile'>
                        <span>Your repositories</span>
                    </Link>                 
                    <p>Your codespace</p>
                    <p>Your organizations</p>
                    <p>Your projects</p>
                    <p>Your stars</p>
                    <p>Your gists</p>
                </div>

                <hr></hr>

                <div className="genSetting">
                    <p>Upgrade</p>
                    <p>Feature Overview</p>
                    <p>Help</p>
                    <p>Settings</p>
                </div>

                <hr></hr>

                <a href="/" className="signout">Sign Out</a>

            </div>

        </div>
    
    </>
}

export default Menu