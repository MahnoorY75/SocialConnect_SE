import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IoIosArrowForward } from "react-icons/io";
import './post.css';

function Post() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      })
  }, []);

  // Function to chunk the array
  const chunkArray = (myArray, chunk_size) => {
    let results = [];
    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }
    return results;
  };

  // Chunking the blogs array into groups of 2
  const blogChunks = chunkArray([...blogs], 2); // Copy blogs array to prevent mutation

  return (
    <div className='fixpositionblog'>
      <div className="topbarpic2"></div>
      <h2 className='txtsurv2'>Latest Blogs!!</h2>
      {blogChunks.map((chunk, index) => (
        <div key={index} className="blogs">
          {chunk.map(blog => (
            <div key={blog.id} className="blog">
              <div className="blogimage" style={{ backgroundImage: `url(${blog.image})` }}>
              </div>
              <div className="blogtext">
               
                <a href={blog.link} target="_blank" rel="noopener noreferrer" className='bloglink'>
                <p className="btext">{blog.description}</p> 
                </a>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Post;
