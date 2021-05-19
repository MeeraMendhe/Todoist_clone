import React from 'react'
import styled from "./FirstDiv.module.css"
import LastDiv from './LastDiv'
const FirstDiv = () => {
    return (
        <div>
            <div className={styled.div}>
                <div>
                    <h1>Organize it all with Todoist</h1>
                    <button>Get Started</button>
                </div>

            </div>
            <div className={styled.img}>
                <img src="https://todoist.com/_next/static/images/screenshot@2x_44c1cf78bc12457546d889573e04345a.webp" alt="" />
            </div>
            <div className={styled.div2}>
                <h1>Free up your mental space</h1>
                <p>Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are or what device you use).</p>
                <div className={styled.flex}>
                    <div>Browse Todoist’s features</div>
                    <div>See Todoist in action</div>
                </div>
            </div>
            <div className={styled.yellow}>
                <div>
                    <p>Google Play</p>
                    <div>★★★★★</div>
                    <h2>Editor’s Choice<br />
                        4.7 stars, 187K+ reviews</h2>
                </div>
                <div>
                    <p>App Store</p>
                    <div>★★★★★</div>
                    <h2>Editor’s Choice<br />
                        4.7 stars, 187K+ reviews</h2>
                </div>
                <div>
                    <p>The Verge</p>
                    <h2>9/10</h2>
                    <h2>“The best to-do list app<br />
                        right now”</h2>
                </div>
            </div>
            <LastDiv />
            <div className={styled.div3}>
                <div className={styled.div3msg}>
                    <h1>A task manager you <br/> can trust for life</h1>
                    <p>In the 14 years and 106 days that we’ve been building <br/>
                    Todoist, we’ve never considered selling out or becoming <br/>
                    acquired.
                     <br/>
                      Our team is committed to staying independent and <br/>
                      earning your trust for as long as you need our apps.</p>
                      <h5>Learn about our long-term mission</h5>
                      </div>
                <div className={styled.div3Img}></div>
            </div>
        </div>
    )
}

export default FirstDiv
