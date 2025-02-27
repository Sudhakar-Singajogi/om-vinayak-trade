import React, { useState } from "react";
import './FAQs.css';

function FAQs() {
    const [openFAQ, setOPENFAQ]= useState(0);

    const quests = [
        {
            question:'How can I start trading Forex?',
            answer:'Molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas Temporibus autem quibusdam et aut officiis debitis.'
        },
        {
            question:'How much money do I need to start?',
            answer:'Voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur commodo Nunc tempor amet massa diam mauris Risus sodales interdum.'
        },
        {
            question:'What is margin?',
            answer:'Laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem mattis commodo Nunc tempor amet massa diam mauris Risus sodales interdum.'
        },
        {
            question:'Can I lose more than I invest in Forex?',
            answer:'An option with nothing preventing it, so that what is most pleasing can be done comfortably. Now, time embraces the great mass, as does the smile of interwoven connections..'
        }
    ]

    const setActiveOne = (position) => {
        console.log('positon', position)
        setOPENFAQ(position)

    }
    
  return (
    <>
      <section className="faq-section sec-pad">
        <div className="auto-container">
          <div className="sec-title centred">
            <span className="sub-title">Faq’s</span>
            <h2>
              Find <span>Answers</span> to Common <br />
              Questions
            </h2>
          </div>
          <div className="inner-box">
            <ul className="accordion-box">
                {
                    quests.map((val, ind) => (
                        <li className="accordion block active-block">
                            <div className={`acc-btn ${ind === openFAQ ?'active':''}`}>
                            <div className="icon-box" onClick={(e) => setActiveOne(ind)}>
                                <i className="flaticon-plus" ></i>
                            </div>
                            <span>{ind+1}</span>
                            <h4>{val.question}</h4>
                            <p>
                               {val.answer.substring(0, 50)}......
                            </p>
                            </div>
                            <div className={`acc-content ${ind === openFAQ ?'current':''}`}>
                            <div className="text">
                                <p>
                                Molestiae consequatur, vel illum qui dolorem eum fugiat
                                quo voluptas Temporibus autem quibusdam et aut officiis
                                debitis.
                                </p>
                            </div>
                            </div>
                        </li>
                    ))

                }
            </ul>
          </div>
          
        </div>
      </section>
    </>
  );
}

export default FAQs;
