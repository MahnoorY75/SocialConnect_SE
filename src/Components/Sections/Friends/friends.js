import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './friends.css';
import u1 from '../../Images/u1.png';
import u2 from '../../Images/u2.png';
import u3 from '../../Images/u3.png';
import u4 from '../../Images/u4.png';
import u5 from '../../Images/u5.png';
import u6 from '../../Images/u6.png';

function Friends() {
  const [friends, setFriends] = useState([]);

  // State to manage the button text for each friend
  const [buttonTexts, setButtonTexts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/users')
      .then(response => {
        setFriends(response.data);
        setButtonTexts(Array(response.data.length).fill('Add Friend'));
        
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  // Grouping the friend data into pairs
  const groupedFriendData = [];
  for (let i = 0; i < friends.length; i += 2) {
    groupedFriendData.push(friends.slice(i, i + 2));
  }

  const handleAddFriend = (index) => {
    const friendIndex = index * 2; // Calculate the correct index for the friend
    const newTexts = [...buttonTexts];
    newTexts[friendIndex] = 'Friend Added';
    setButtonTexts(newTexts);

    // // Send PUT request to update friend data
    // axios.put(`http://localhost:3001/api/friends/:${friendId}`, { name: newName, followers: newFollowers })
    //   .then(response => {
    //     console.log('Friend updated successfully:', response.data.friend);
    //   })
    //   .catch(error => {
    //     console.error('Error updating friend: ', error);
    //   });

  }

  const getUserImage = (index) => {
    const images = [u1, u2, u3 , u4, u5 , u6];
    return images[index % images.length];
  };

  return (
    <div className='fixposition2'>
      <div className="topdesc"></div>
      <div style={{ marginLeft: "7.2%" }}>
        <p className="heading2">Explore Profiles and Find Friends</p>
      </div>
      {groupedFriendData.map((pair, index) => (
        <div className="secten" key={index}>
          {pair.map((friend, friendIndex) => (
            <div className="framee" key={friendIndex}>
              <div className="f1">
                <img src={getUserImage(index)} alt="Logo" style={{ width: '100%', height: '100%' }} />
              </div>
              <div className="f2">
                <div className="info">
                  <p className="name2">{friend.name}</p>
                  <p className="number2"><span>{friend.followers}</span> Followers</p>
                  <div style={{ display: 'inline-block' }}>
                    <FaFacebookF className='picon' />  {/* Facebook Icon */}
                    <FaInstagram className='picon' />  {/* Instagram Icon */}
                    <FaTwitter className='picon' />     {/* Twitter Icon */}
                  </div>
                </div>
                <div className="buttons">
                  <button className='bbtn' onClick={() => handleAddFriend(index * 2 + friendIndex)}>{buttonTexts[index * 2 + friendIndex]}</button>
                  <button className='bbtn2'>Report</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Friends;
