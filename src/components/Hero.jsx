import React from 'react'
import './Hero.css'
import Mlsheduel from './Mlsheduel'
const Hero = () => {
  return (
    <>
      <div className="ai-landing-page">
            <div className="ai-container">
                <div className="content">
                  <div className="ai-image">
                    </div>

                    <div className="ai-info">
                        <h1 className="headline">Natural Language Processing</h1>
                        <p className="subtext">
                        Natural Language Processing (NLP) enables computers to understand and interpret human language. It combines linguistics and machine learning to analyze text and speech. NLP powers chatbots, translation, and sentiment analysis tools.
                        </p>

                      

                        <button className="cta-button">Get in Touch</button>
                        <span className='price'>Rs.599</span>
                    </div>
                </div>
            </div>

        </div>
        <Mlsheduel/>
    </>
  )
}

export default Hero