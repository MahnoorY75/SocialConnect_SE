import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaEye, FaThumbsUp, FaComment, FaUsers } from 'react-icons/fa'; 
import './dash.css';
import axios from 'axios';
import user1 from '../../Images/user1.png';
import user2 from '../../Images/user2.png';
import user3 from '../../Images/user3.png';
import cm1 from '../../Images/cm1.png'
import cm2 from '../../Images/cm2.png'
import cm3 from '../../Images/cm3.png'
import cm4 from '../../Images/cm4.png'

function Dash() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/friends')
      .then(response => {
        setFriends(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
  }, []);


  const SampleCommunityData = [
    { name: 'Tech Club' },
    { name: 'Art Society' },
    { name: 'Book Club' },
    { name: 'Music Group' },
    { name: 'Film Club' },
    { name: 'Coding Team' },
    { name: 'Gaming Group' },
    { name: 'Writing Circle' },
    { name: 'Dance Crew' },
    { name: 'Science Club' }
  ];

  // Function to get the user image dynamically
  const getUserImage = (index) => {
    const images = [user1, user2, user3];
    return images[index % images.length];
  };

  // Function to get the community image dynamically
  const getCmImage = (index) => {
    const images = [cm1, cm2, cm3, cm4];
    return images[index % images.length];
  };

  const [joined, setJoined] = useState(false);
  const [joinStatus, setJoinStatus] = useState(SampleCommunityData.map(() => false));

  const toggleJoin = (index) => {
    const updatedStatus = [...joinStatus];
    updatedStatus[index] = !updatedStatus[index];
    setJoinStatus(updatedStatus);
  };

  return (
    <div className='fixposition'>
      <div className='boxes'>
      <div className="dash-box1">

<div className="dash-sub dash-sub1">
  <p className="text text1">Month Visits <FaArrowRight className="arrow-right" /></p> 
  <h2 className='value'>1,30</h2>
  <FaEye className="icon" /> {/* Add icon after the h2 on the next line */}
</div>

<div className="dash-sub dash-sub2">
  <p className="text text2">Month Likes <FaArrowRight className="arrow-right" /></p>
  <h2 className='value'>15,00</h2>
  <FaThumbsUp className="icon" /> {/* Add icon after the h2 on the next line */}
</div>

<div className="dash-sub dash-sub3">
  <p className="text text3">Month Comments <FaArrowRight className="arrow-right" /></p> 
  <h2 className='value'>2,45</h2>
  <FaComment className="icon" /> {/* Add icon after the h2 on the next line */}
</div>

</div>
        <h3 className='communitytext' >Your Communities</h3>
        <div className="dash-box3">
<div className="scroll">
{SampleCommunityData.map((community, index) => (
  <div className="frame2">
  <img className='cmimg' src={getCmImage(index)} alt="Logo" style={{ width: '130px', height: '130px' }} />
  <p className="communitytxt">{community.name}</p>
  <button className={`btn-primary ${joinStatus[index] ? 'btn-join' : ''}`} onClick={() => toggleJoin(index)}>
                  {joinStatus[index] ? 'Join' : 'Leave'}
                </button>
  
  </div>

))}

</div>

</div>
      </div>
      <div className="dash-box2">
        <div>
          <h1 className='friendstext'>
            <FaUsers className="friends-icon" /> Your Friends
          </h1>
        </div>
        <div className='scrollable-content'>
          {friends.map((friend, index) => (
            <div className="friendlist" key={index}>
              <img className='userimg' src={getUserImage(index)} alt="Logo" style={{ width: '60px', height: '60px' }} />
              <div className="frame">
                <p className="name">{friend.name}</p>
                <p className="followers"><span>{friend.followers}</span> Followers</p>
              </div>
              <p className="number">{friend.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dash;
