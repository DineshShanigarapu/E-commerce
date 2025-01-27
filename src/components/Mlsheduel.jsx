import React from "react";
import './Mlsheduel.css'
import Hero from "./Hero";

const Mlsheduel = () => {
  const workshopSchedule = [
    {
      id: 1,
      day: "Day - 1",
      topics: [
        "Introduction to Natural Language Processing",
        "Text Processing",
        "Feature Extraction",
        "Modeling",
        "Text Processing",
        "Raw Text",
	"Noise Entity Removal",
	"Word Normalization",
	"Standardizaton of Text",
	"Feature Extraction",
	"Bag of Words",
	"Cunt Vectorizer",
	"TF-IDF",
	"Modeling",
	"Topic Modeling",
	"Machine Learning Algorithms",

      ],
    },
    {
      id: 2,
      day: "Day - 2",
      topics: [
        "Text Processing",
        "Sentence Tokenization",
            "Removing Punctuation Marks",
            "StopWords",
            "Stemming",
            "Lemmatization"
    
      ],
    },
    {
      id: 3,
      day: "Day - 3",
      topics: [	"Topics(Working on Datasets)",
        "Bag of Words",
        "Count Vectorizer",
	"TF-IDF"
],
    },
    {
      id: 4,
      day: "Day - 4",
      topics: ["Project 1", 
	"Email Spam Classification using NLP"],
    },
    {
      id: 5,
      day: "Day - 5",
      topics: ["Project 2", "Movie Recommendation using NLP"],
    },
  ];

  return (
   
    <div className="workshop-schedule-ml-w">
      <h2 className="schedule-title-ml-w">WORKSHOP Agenda</h2>
      <div className="schedule-container-ml-w">
        {workshopSchedule.map((day, index) => (
          <div className="schedule-card-ml-w" key={index}>
            <div className="schedule-header-ml-w">
              <span className="date-icon-ml-w">📅</span>
              <div className="date-info-ml-w">
                <p className="schedule-date-ml-w">{day.day}</p>
                <p className="schedule-time-ml-w">{day.time}</p>
              </div>
            </div>
            <h3 className="schedule-day-title-ml-w">{day.title}</h3>
            <ul className="schedule-topics-ml-w">
              {day.topics.map((topic, idx) => (
                <li
                  key={idx}
                  className="topic-item-ml-w"
                  style={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <span
                    style={{ marginRight: "0.5rem" }}
                    className="icon-wrapper-ml-w"
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/13906/13906750.png"
                      alt="#"
                      width="20px"
                      className="topic-icon-ml-w"
                    />
                  </span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default Mlsheduel;