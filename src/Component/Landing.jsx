import React from 'react'
import Header from './Header'
import './Global.css';
import SocialImage from "../social-image.svg";
import Section4_img from "../section4_left.svg"
import SocialImage_mobile from "../Socialmedia-mobile.jpeg"
function Landing() {
  return (
    <>
      <div>
        <Header />
        <section className="L-AppContainer">
          <div className="L-main-page">
            <div className="L-home-left">
              <div className="L-hero-text">
                <span className="L-gold-text">Live chat</span> software
              </div>
              <div className="L-sub-text">
                Take customer engagement
                <br></br>
                to the next level with LiveAgent
              </div>
              <div className="L-features mt-8 flex">
                <ul className="flex L-ticks">
                  <li className="L-li-item">✓ No setup fee</li>
                  <li className="L-li-item">✓ Customer service 24/7 </li>
                  <li className="L-li-item">✓ No credit card required </li>
                  <li className="L-li-item">✓ Cancel any time</li>
                </ul>
              </div>
              <div className="flex L-hero-buttons">
                <button className="L-get-started">
                  Get Started | 14 days free
                </button>
                <a className="L-button-in-action flex">
                  <strong className="L-watch-video">Watch Video</strong>
                </a>
              </div>
              <div className="L-website-users">
                <div className="L-used-by">Used by</div>
                <div className="L-clients flex">
                  <div className="mt-5">
                    <img loading="lazy" width="98" height="25" className="L-greyscale" alt="Forbes logo" urlslab-id="2"  src="https://www.liveagent.com/wp/urlslab-download/778d463c930f4e1dd9c389f0662ff032/4899da03f0a71e6443c8e7051abde6bc-logo-clients-forbes.svg"/>
                  </div>
                  <div className="mt-5 ml-5">
                    <img width="125" height="23" className="L-greyscale" alt="airbus logo" loading="lazy" urlslab-id="3"  src="https://www.liveagent.com/wp/urlslab-download/40d45fd9c595c49645f4ba3872c651e5/4899da03f0a71e6443c8e7051abde6bc-logo-clients-airbus.svg"/>
                  </div>
                  <div className="mt-5 ml-5">
                    <img width="136" height="22" className="L-greyscale" alt="Nascar logo" loading="lazy" urlslab-id="4"  src="https://www.liveagent.com/wp/urlslab-download/ddf00a019a130eb88522d5355f2012a5/4899da03f0a71e6443c8e7051abde6bc-logo-clients-nascar.svg"/>                  </div>
                </div>
              </div>
            </div>
            <div className="L-home-right">
                <div className='absolute L-positioning '>
                    <div className='flex float-left mb-10'>
                          <div className='profile'>
                            <img src="https://www.liveagent.com/app/themes/liveagent/assets/images/chat_john.png" className='profile-image'/>
                          </div> 
                          <div className='L-message'>
                            Hello, I’m John, how may I help you?
                          </div>
                    </div>
                    <div className='flex float-left mb-10'>
                          <div className='flex-grow'>

                          </div>
                          <div className='reply-blue'>
                            <div className='L-message-reply'>
                              Hello, I’m John, how may I help you?
                            </div>
                            <div className='L-message-reply-tic'>
                              <img src="https://www.liveagent.com/app/themes/liveagent/assets/images/chat_read.svg"/>
                            </div>
                          </div>
                    </div>
                    <div className='flex float-left mb-10'>
                          <div className='profile'>
                            <img src="https://www.liveagent.com/app/themes/liveagent/assets/images/chat_john.png" className='profile-image'/>
                          </div> 
                          <div className='L-message'>
                          No problem, please provide me with your order ID.
                          </div>
                    </div>
                </div>
                <img src="https://www.liveagent.com/app/themes/liveagent/assets/images/heroHeadline_badges.svg" className='L-awards'/>
            </div>
          </div>
        </section>
        <section className='L-section2'>
            <div className='L-connect-coustomer'>
                <div className='L-connect-hero-text'>
                    
                        Connect with your 
                            <br/>
                        customers on all channels
                    
                </div>
                <div className='L-review'>
                    <p>
                        Discover 130+ <a href="https://www.liveagent.com/ticketing-software/" >ticketing</a> features and 200+ integrations with the tools you love.
                    </p>
                </div>
                <div className='L-social-media-app'>
                    <img src={SocialImage} className='social-media-image'/>
                    <img src={SocialImage_mobile} className="social-media-image-mobile" />
                </div>
                <div className='many-more flex'>
                  <div className='flex-grow'>
                  </div>
                  and many more...
                  <span ><img alt="and many more"  loading="lazy" src="https://www.liveagent.com/wp/urlslab-download/efaafa5e7bc3f5ab86879c597d3df4c3/4899da03f0a71e6443c8e7051abde6bc-glasses.svg"/></span>                
                </div>
                <div className='L-getstarted-btn'>
                    <button className='L-freetrial-btn'>
                      Get started | 14 days free
                    </button>
                </div>
            </div>
        </section>
        <section className='L-section3'>
          <div className='chat-widget'>
            <div className='L-chat-widget-content'>
              <div className='L-chat-widget-content-left'>
                <div className='L-chat-widget-content-top-space'>
                <div className='L-chat-widget-text'>
                    <p>Chat Widget</p>
                </div>
                <div className='L-hero-text-section3'>
                  The world’s best-rated <br/> chat widget
                </div>
                <div className='L-paragraph-section3'>
                Increase engagement and make buying easy with our stylish <br></br> <span className='L-highlighted-text'>live chat widget</span>. Provide personalized real-time support and invite your customers to chat based on the time they’ve spent on your site, location, and visited pages.                
                </div>
                <div className='L-bullet-points-section3'>
                  <ul>
                    <li className='flex L-list-section3'>
                      <img src="https://www.liveagent.com/app/themes/liveagent/assets/images/icon-post-check.svg" className='L-tic'/>
                      Incoming message sneak peek</li>
                    <li className='flex L-list-section3'>
                      <img src="https://www.liveagent.com/app/themes/liveagent/assets/images/icon-post-check.svg" className='L-tic'/>
                      Built-in CRM
                    </li>
                    <li className='flex L-list-section3'>
                      <img src="https://www.liveagent.com/app/themes/liveagent/assets/images/icon-post-check.svg" className='L-tic'/>
                      Automatic chat routing
                    </li>
                  </ul>
                </div>
                </div>
              </div>
              <div className='L-chat-widget-content-right'>
                <div className='L-right-image'>
                  <img src="https://www.liveagent.com/wp/urlslab-download/baed614814f0ebb6b2dc324de8df8586/4899da03f0a71e6443c8e7051abde6bc-Chatelements.svg"/>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className='L-section4'>
            <div className="L-section4-content ">
              <div className='mr-14 L-section4-content-left'>
                <img  src={Section4_img}/>
              </div>
              <div className='L-section4-content-right'>
                <div className='mt-20'>
                  <div className='L-call-center'>
                    Call center
                  </div>
                  <div className='L-section4-hero-text'>
                      Cloud phone support for modern businesses
                  </div>
                  <div className='L-section4-paragraph'>
                  Improve your customer’s satisfaction by decreasing hold times with our cloud-based call center software. Enjoy more flexibility, more significant savings, and higher efficiency with callbacks, IVR, ACD, and video calls.
                  </div>
                  <div className='L-section4-bullet-points'>
                    <ul>
                        <li>

                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
    </>
  )
}
export default Landing
