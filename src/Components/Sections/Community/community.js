import React, { useState } from 'react';
import { FaFlag } from 'react-icons/fa'; // Import the report icon
import './community.css';
import g1 from '../../Images/g1.png';
import g2 from '../../Images/g2.png';
import g3 from '../../Images/g3.png';
import g4 from '../../Images/g4.png';
import g5 from '../../Images/g5.png';
import g6 from '../../Images/g6.png';

function Community() {
  const sampleData = [
    { groupName: "Blue Team", members: 1200, logoid: g1 },
    { groupName: "Tech Wizards", members: 800, logoid: g2 },
    { groupName: "Sunset Hikers", members: 1500, logoid: g3 },
    { groupName: "Coffee Lovers", members: 950, logoid: g4 },
    { groupName: "Book Club", members: 1700, logoid: g5},
    { groupName: "Fitness Freaks", members: 1100, logoid: g6},
    { groupName: "Music Makers", members: 1300, logoid: g1},
    { groupName: "Movie Buffs", members: 600, logoid: g2},
    { groupName: "Artists Alley", members: 1400, logoid: g3 },
    { groupName: "Gaming Gurus", members: 900, logoid: g4 },
    { groupName: "Foodies Union", members: 1800, logoid: g5 },
    { groupName: "Pet Lovers", members: 1000, logoid: g6 },
    { groupName: "Travel Tribe", members: 2000, logoid: g1 },
    { groupName: "Photography Club", members: 700, logoid: g2 },
    { groupName: "Nature Explorers", members: 1600, logoid: g3 },
  ];
  const [isReported, setIsReported] = useState(sampleData.map(() => false));
  const [isJoined, setIsJoined] = useState(sampleData.map(() => false));

  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reason, setReason] = useState('');
  const [otherReason, setOtherReason] = useState('');

  const handleReportClick = (index) => {
    // Toggle the report state for the clicked dataset
    setIsReported(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
    setIsModalOpen(true); // Open the modal
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle the submission of the report form
    setIsModalOpen(false);
    // Reset form fields
    setReason('');
    setOtherReason('');
  };

  const handleJoinClick = (index) => {
    // Toggle the join state for the clicked dataset
    setIsJoined(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  // Split sampleData into chunks of three
  const chunks = sampleData.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = []; // start a new chunk
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  return (
    <div className='fixposition3'>
      <div className="coverr"></div>
      <div style={{ marginLeft: "7.2%" }}>
        <p className="heading3">Explore Communities and Join</p>
      </div>
      {chunks.map((chunk, chunkIndex) => (
        <div key={chunkIndex} className="secten2">
          {chunk.map((data, dataIndex) => (
            <div key={dataIndex} className="cmframe">
              <img src={data.logoid}  alt="Logo" style={{ width: '160px', height: '160px', borderRadius: '90px' }} />
              <h4 className="grname">{data.groupName}</h4>
              <p className="grmembers"><span>{data.members}</span> Members</p>
              <div className="buttonss">
                <button className={`bbtn3 ${isJoined[chunkIndex * 3 + dataIndex] ? 'joined' : ''}`} onClick={() => handleJoinClick(chunkIndex * 3 + dataIndex)}>
                  {isJoined[chunkIndex * 3 + dataIndex] ? 'Joined' : 'Join Group'}
                </button>
                <button className={`reportButton ${isReported[chunkIndex * 3 + dataIndex] ? 'reported' : ''}`} onClick={() => handleReportClick(chunkIndex * 3 + dataIndex)}>
                  <FaFlag className={`reportIcon ${isReported[chunkIndex * 3 + dataIndex] ? 'reported' : ''}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
      {isReported && isModalOpen && (
        <div className="modalOverlay">
          <div className="modalContent">
            <span className="closeButton" onClick={handleModalClose}>&times;</span>
            <h2>Report Community</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <input type="radio" id="inappropriate" value="Inappropriate Content" checked={reason === 'Inappropriate Content'} onChange={() => setReason('Inappropriate Content')} />
                <label htmlFor="inappropriate">Inappropriate Content</label>
              </div>
              <div>
                <input type="radio" id="bullying" value="Bullying" checked={reason === 'Bullying'} onChange={() => setReason('Bullying')} />
                <label htmlFor="bullying">Bullying</label>
              </div>
              <div>
                <input type="radio" id="spam" value="Spam" checked={reason === 'Spam'} onChange={() => setReason('Spam')} />
                <label htmlFor="spam">Spam</label>
              </div>
              <div>
                <input type="radio" id="other" value="Other" checked={reason === 'Other'} onChange={() => setReason('Other')} />
                <label htmlFor="other">Other</label>
                {reason === 'Other' && <input type="text" value={otherReason} onChange={(e) => setOtherReason(e.target.value)} />}
              </div>
              <button className='bbtn3' type="submit">Report</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Community;