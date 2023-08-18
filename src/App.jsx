import { useState } from 'react'
import CibSvg from '/Icons/CIB.svg'
import CallSvg from '/Icons/Call.svg'
import WorldSvg from '/Icons/World.svg'
import ExchangeSvg from '/Icons/Exchange.svg'
import LockedSvg from '/Icons/Locked.svg'
import SearchSvg from '/Icons/Search.svg'
import MenuSvg from '/Icons/Menu.svg'
import CloseSvg from '/Icons/Close.svg'
import MapSvg from '/Icons/Map.svg'
import LoanSvg from '/Icons/Loan.svg'
import CardSvg from '/Icons/Card.svg'
import LeftSlide from '/Icons/LeftSlide.svg'
import RightSlide from '/Icons/RightSlide.svg'

import HeroImg01 from '/Imgs/HeroImg01.png'
import LcImg01 from '/Imgs/LcImg01.png'
import LcImg02 from '/Imgs/LcImg02.png'
import LcImg03 from '/Imgs/LcImg03.png'

import Frame00 from '/Imgs/Frame.svg'
import Frame01 from '/Imgs/Frame-1.svg'
import Frame02 from '/Imgs/Frame-2.svg'
import Frame03 from '/Icons/Frame.svg'
import Frame04 from '/Icons/Frame-1.svg'
import Frame05 from '/Icons/Frame-2.svg'

import Vector00 from '/Icons/Vector.svg'
import Vector01 from '/Icons/Vector-1.svg'
import Vector02 from '/Icons/Vector-2.svg'

import FB from '/Icons/FB.svg'
import IN from '/Icons/IN.svg'
import IG from '/Icons/IG.svg'
import PYS from '/Icons/PYS.svg'
import IOS from '/Icons/IOS.svg'

import './scss//App.scss'

function App() {

  const [menu, setMenu] = useState(false);
  return (
    <div className="App">
      <>
        <div className="BetaNav">
          <span><img src={WorldSvg} />English</span>
          <span>USD 1 <img src={ExchangeSvg} /> EGP 36.95</span>
          <span>Responsible Banking</span>
          <span><img src={MapSvg} />Branch & ATM Finder</span>
          <span><img src={CallSvg} />Contact Us</span>
        </div>
        <nav className="Nav">
          <span className="CibLogo">
            <img src={CibSvg} />
          </span>
          <ul className="Menu">
            <li>About Us</li>
            <li>Investor Relations</li>
            <li>Responsible Banking</li>
            <li>Newsroom</li>
            <li>Learning Center</li>
            <li>Careers</li>
          </ul>
          <div className="BtnsWrap DoupleBtn">
            <button className="SearchBtn">
              <img src={SearchSvg} alt="Search" />
            </button>
            <button className="LoginBtn">
              Log In
              <img src={LockedSvg} alt="Search" />
            </button>
            <button className="MenuBtn" onClick={() => setMenu(!menu)}>
              {!menu ?
                <img className="MenuImg" src={MenuSvg} alt="Menu" /> :
                <img className="CloseImg" src={CloseSvg} alt="Close" />
              }
            </button>
          </div>
        </nav>
        {menu ?
          <div className="SideMenu">
            <ul className="Menu">
              <li>About Us</li>
              <li>Investor Relations</li>
              <li>Responsible Banking</li>
              <li>Newsroom</li>
              <li>Learning Center</li>
              <li>Careers</li>
            </ul>
            <div className="BetaMenu">
              <span><img src={WorldSvg} />English</span>
              <span>USD 1 <img src={ExchangeSvg} /> EGP 36.95</span>
              <span>Responsible Banking</span>
              <span><img src={MapSvg} />Branch & ATM Finder</span>
              <span><img src={CallSvg} />Contact Us</span>
            </div>
          </div> : null
        }
      </>
      <section className="HeroSection">
        <span className="HeroImg">
          <img src={HeroImg01} alt="" />
        </span>
        <div className="InsetWrap">
          <div className="TextWrap">
            <span className='SubTitle'>
              CIB - Commercial International Bank Egypt</span>
            <span className='Header01'>
              “Delivering value to our clients, our <br /> community and our shareholders”</span>
          </div>
          <div className="BlocksWrap">

            <div className="Item">
              <span className="Title">Personal Banking</span>
              <span className="Content">Banking is about more than just products with CIB, it’s an experince</span>
            </div>
            <div className="Item">
              <span className="Title">Business Banking</span>
              <span className="Content">Your vision and our expertise will grow your business</span>
            </div>
            <div className="Item">
              <span className="Title">Institutional Banking</span>
              <span className="Content">Join the ranks of the biggest companies and institutions</span>
            </div>
            <div className="Item">
              <span className="Title">CIB Private</span>
              <span className="Content">Your gateway to an exclusive world, carefully tailored for you</span>
            </div>

          </div>
        </div>
      </section>
      <div className="SectionsNavMenu">
        <ul className="Wraper">
          <li>Apply Online</li>
          <li>News</li>
          <li>Blog Articles</li>
          <li>CIB International</li>
          <li>Sustainable Finance</li>
          <li>Awards</li>
        </ul>
      </div>
      <section className="AoSection">
        <div className="Wraper">
          <div className="TextWrap">
            <span className="SubTitle">You don’t need to get out</span>
            <span className="Title">Apply online now for cards and <br /> loans with ease!</span>
          </div>
          <span className="CtaBtns">
            <button>
              <img src={LoanSvg} alt="" />
              Apply for a loan
            </button>
            <button>
              <img src={CardSvg} alt="" />
              Apply for a card
            </button>
          </span>
        </div>
      </section>
      <section className="LcSection">

        <div className="Wraper">
          <div className="SideWrap">
            <div className="TextWrap">
              <span className="SubTitle">Leaning Center</span>
              <span className="Title">Learn more about <br /> banking and your <br /> finances</span>
            </div>
            <span className="CtaBtn">
              <button>View More</button>
            </span>
          </div>
          <div className="BlocksWrap">
            <div className="Item">
              <span className="ImgWrap">
                <img src={LcImg01} />
              </span>
              <div className="TextWrap">
                <span className="title">Buying and making a home</span>
                <span className="content">Buying a home can be an emotional process, but it’s important to approach it logically</span>
              </div>
              <span className="ItemCta">Learn More</span>
            </div>
            <div className="Item">
              <span className="ImgWrap">
                <img src={LcImg02} />
              </span>
              <div className="TextWrap">
                <span className="title">Traveling on a budget</span>
                <span className="content">So for all of you travelers, take a vacation without spending a fortune with these helpful tips and tricks:</span>
              </div>
              <span className="ItemCta">Learn More</span>
            </div>
            <div className="Item">
              <span className="ImgWrap">
                <img src={LcImg03} />
              </span>
              <div className="TextWrap">
                <span className="title">University life tips</span>
                <span className="content">The impact of a good education can be transformative.</span>
              </div>
              <span className="ItemCta">Learn More</span>
            </div>
          </div>
        </div>
        <div className="SectionSlideBtns">
          <button>
            <img src={LeftSlide} />
          </button><button>
            <img src={RightSlide} />
          </button>
        </div>

      </section>
      <section className="NeSection">

        <div className="Wraper">
          <div className="LableWrap">
            <span className="Header">
              News
            </span>
            <span className="CtaBtn">
              <button>View All News</button>
            </span>
          </div>
          <div className="BlocksWrap">

            <div className="Item">
              <span className="dateLable">08/07/2023</span>
              <span className="title">Press Release concerning CIB obtaining Long term loans from IFC</span>
              <span className="content">CIB would like to announce that the Bank secured $250 million in long term loans from the International Finance Corporation (IFC) to support its capital and fund green projects.</span>
            </div>
            <div className="Item">
              <span className="dateLable">06/02/2023</span>
              <span className="title">CIB Included in 2023 Bloomberg Gender-Equality Index (GEI) for Fifth Consecutive Year</span>
              <span className="content">CIB has secured its place in the index with its commitment to applying the principles of diversity, equality and inclusion within the workplace.</span>
            </div>
            <div className="Item">
              <span className="dateLable">29/01/2023</span>
              <span className="title">CIB fully acquires Mayfair CIB</span>
              <span className="content">CIB is pleased to announce that the Central Bank of Egypt (CBE) and the Central Bank of Kenya (CBK) have granted the Bank their consent to acquire the remaining 49% of Mayfair CIB to become a fully owned subsidiary of the Bank, for a total transaction...</span>
            </div>

          </div>

        </div>
        <div className="SectionSlideBtns">
          <button>
            <img src={LeftSlide} />
          </button><button>
            <img src={RightSlide} />
          </button>
        </div>

      </section>
      <section className="SfSection">
        <div className="Wraper">
          <div className="TextWrap">
            <span className="SubTitle">Sustainability  Finance</span>
            <span className="Title">Sustainability is an integral <br /> part of the way we work</span>
          </div>
          <div className="ImgsWraper">
            <span className="ImgWrap">
              <img src={Frame00} alt="" />
            </span>
            <span className="ImgWrap">
              <img src={Frame01} alt="" />
            </span><span className="ImgWrap">
              <img src={Frame02} alt="" />
            </span>
          </div>
          <span className="CtaBtn">
            <button>
              Learn More
            </button>
          </span>
        </div>
      </section>
      <section className="AwSection">
        <div className="Wraper">
          <div className="TextWrap">
            <span className="SubTitle">Awards</span>
            <span className="Title">CIB's integrity and quality are <br /> recognized internationally</span>
          </div>
          <div className="ItemsWraper">
            <span className="ItemWrap">
              <img src={Frame03} alt="" />
              <div className="TextWrap">
                <span className="title">Best Private Bank <br /> in Egypt</span>
                <span className="content">Euromoney - 2023</span>
              </div>
            </span>
            <span className="ItemWrap">
              <img src={Frame04} alt="" />
              <div className="TextWrap">
                <span className="title">Best Mergers & Acquisitions <br /> Deal in MENA</span>
                <span className="content">Global Finance - 2023</span>
              </div>
            </span>
            <span className="ItemWrap">
              <img src={Frame05} alt="" />
              <div className="TextWrap">
                <span className="title">Best Bank in Egypt</span>
                <span className="content">EMEA Finance - 2023</span>
              </div>
            </span>
          </div>
          <span className="CtaBtn">
            <button>
              Learn More
            </button>
          </span>
        </div>
      </section>
      <section className="LmCtaSection">
        <div className="CtaWrap">
          <div className="TextWrap">
            <span className="Sub">CIB on an international scale</span>
            <span className="Header">Learn more about CIB's <br /> presence outside of Egypt</span>
          </div>
          <span className="CtaBtn">
            <button>Learn More</button>
          </span>
        </div>
      </section>
      <section className="WcSection">
        <div className="Wraper">
          <div className="TextWrap">
            <span className="SubTitle">We Care</span>
            <span className="Title">Our dedicated team is committed <br /> to meeting your needs</span>
          </div>
          <div className="ItemsWraper">
            <span className="ItemWrap">
              <img src={Vector00} alt="" />
              <div className="TextWrap">
                <span className="title">Online</span>
                <span className="content">Chat with 'Zaki' our digital assistant to guide you through our products and services, or reach out on social media.</span>
              </div>
            </span>
            <span className="ItemWrap">
              <img src={Vector01} alt="" />
              <div className="TextWrap">
                <span className="title">On The Phone</span>
                <span className="content">For support, including emergencies such as cards closure or immediate critical feedback.</span>
              </div>
            </span>
            <span className="ItemWrap">
              <img src={Vector02} alt="" />
              <div className="TextWrap">
                <span className="title">In Branch</span>
                <span className="content">Our trained team of tellers and relationship managers are here to help you get the service you need.</span>
              </div>
            </span>
          </div>
        </div>
      </section>
      <footer>

        <span className="Logo">
          <img src={CibSvg} alt="" />
        </span>
        <ul>
          <li>About Us</li>
          <li>Investor Relations</li>
          <li>Responsible Banking</li>
          <li>Newsroom</li>
          <li>Learning Center</li>
          <li>Careers</li>
        </ul>
        <ul>
          <li>Apply Online</li>
          <li>News</li>
          <li>Blog Articles</li>
          <li>CIB International</li>
          <li>Sustainable Finance</li>
          <li>Awards</li>
        </ul>
        <ul>
          <li>Careers</li>
          <li>Why CIB</li>
          <li>System Status</li>
        </ul>
        <div className="BetaRows">
          <span className="row">
            <img src={FB} alt="" />
            <img src={IG} alt="" />
            <img src={IN} alt="" />
          </span>
          <span className="row">
            <img src={PYS} alt="" />
            <img src={IOS} alt="" />
          </span>
        </div>
      </footer>
      <div className="BetaFooter">
        <span>Copyright © 2023 Commercial International Bank</span>
        <ul>
          <li>CBE Approvals</li>
          <li>Cookie Policy</li>
          <li>Privacy Policy</li>
          <li>User Agreements</li>
        </ul>
      </div>
    </div>
  )
}

export default App
/**



Apply Online
About Us
Careers
News
Investor Relations
Why CIB
Blog Articles
Responsible Banking
System Status
CIB International
Newsroom
Sustainable Finance
Learning Center
Awards
Careers



 */