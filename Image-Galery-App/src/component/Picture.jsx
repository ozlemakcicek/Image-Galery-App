// import React from 'react';
import "../style.css";


const Picture = ({ data }) => {
  console.log( data);
  // console.log(data[0].photographer)

  return (
    <div className="pictures">
   
     {/* bu bir array ve array den veri alirken index belirtmeliyiz.ya index ile yazilir ya da map ile icinde dolasip key={id ya da index yazmaliyiz} */}
        {data.map((item, index) => ( 
            <div className="picture">
          <div key={index} className="imageContainer">
            <img src={item.src.large} />
          </div> 
          <div className="info">{item.photographer}</div>
      </div>   
        ))} 
      </div>
    
  );
};

export default Picture;
