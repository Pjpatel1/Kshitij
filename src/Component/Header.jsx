import Down from "../Down_dd.js"
import Profile from "../icon-login"
import usflag from "../united-states-of-america-svgrepo-com.svg"
import DD_Down from "../down.svg"
import Burger_menu from "../hamburger.svg"
function Header ()
{
    return(
        <>
            <div className="L-Header w-full  color-white">
                <div className="flex L-Wrapper">
                    <div className="L-header-logo">
                      <a>
                        <img src="https://www.liveagent.com/app/themes/liveagent/assets/images/logo_liveagent.svg" alt="Brand Logo" className="L-logo"/>
                    </a>
                    </div>
                    <div className="flex-grow"> 
                    </div>
                    <div className="L-product flex"> 
                            <p className="mr-1">Product</p>
                            <Down className="L-dropdown-icon"/>
                    </div>
                    <div className="L-product flex"> 
                            <p className="mr-1">Resource</p>
                            <Down className="L-dropdown-icon"/>
                    </div>
                    <div className="L-product flex"> 
                            <p className="mr-1">Features</p>
                    </div>
                    <div className="L-product flex"> 
                            <p className="mr-1">Pricing</p>
                    </div>
                    <div className="L-header-buttons flex">
                        <button className="L-demo-button">
                            Demo
                        </button>
                        <button className="L-Trial-button">
                            Free Trial
                        </button>
                        
                    </div>
                    <button className="L_profile_icon">
                            <Profile/>
                    </button>
                        <div className="L_flag_logo">
                            <img src={usflag} alt="USFlag" className="L_language_flag uplift"/>
                        </div>
                        <div className=""><img src={DD_Down} className="L-down-image"/></div>
                        <img src={Burger_menu} className="header-hamburger"/>
                
                </div>
            </div>
        </>
    )
}
export default Header;