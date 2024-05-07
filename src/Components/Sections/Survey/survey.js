import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
import './survey.css';
import sur1 from '../../Images/sur1.png';
import sur2 from '../../Images/sur2.png';
import sur3 from '../../Images/sur3.png';
import sur4 from '../../Images/sur4.png';

const dataset = [
  { name: 'Music Grow', imgid: sur1 },
  { name: 'Women in Tech', imgid: sur2 },
  { name: 'Brain Health', imgid: sur3 },
  { name: 'Life of Musician', imgid: sur4 }
];

function Survey() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentSurvey, setCurrentSurvey] = useState({});

  const openModal = (survey) => {
    setCurrentSurvey(survey);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process submission here
    closeModal();
  };

  return (
    <div className='fixpositions'>
      <div className="topbarpic"></div>
      <h2 className='txtsurv'>Today's Surveys are Here!</h2>
      <div className="secten3">
        {dataset.map((survey, index) => (
          <div className="surveyframe" key={index} onClick={() => openModal(survey)}>
            <img src={survey.imgid} alt="Survey Logo" style={{ width: '130px', height: '130px', borderRadius: '90px' }} />
            <div style={{ display: 'flex', gap: '20px', marginTop: '12px' }}>
              <p className="surname">{survey.name}</p>
              <IoIosArrowForward className='iconkey' />
            </div>
          </div>
        ))}
      </div>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>{currentSurvey.name}</h2>
            <form onSubmit={handleSubmit}>
              <label>
                How often do you engage with this topic?
                <div style={{display: 'flex' , gap: '90px'}}>
                  <p>Daily</p>
                  <input className='radionbtn' type="radio" name="frequency" value="weekly" />
                </div>
                <div style={{display: 'flex' , gap: '75px'}}>
                  <p>Weekly</p>
                  <input className='radionbtn' type="radio" name="frequency" value="weekly" />
                </div>
                <div style={{display: 'flex' , gap: '68px'}}>
                  <p>Monthly</p>
                  <input className='radionbtn' type="radio" name="frequency" value="weekly" />
                </div>

                
                
              </label>
              <label>
                Your rating:
                <input className='mybox' type="number" name="rating" min="1" max="5" />
              </label>
              <label>
                Comments:
                <textarea className='mybox' name="comments"></textarea>
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={closeModal}>Cancel</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Survey;
