import React from 'react';
import './MyComponent.css';

const DivComp = ({ imgSrc, text1, text2,image,videosrc}) => {
    console.log(text1,text2)
 

  const imgStyle = {
    flex: '0 0 50%', // Image takes up 50% of the container
    marginRight: '20px',
    maxWidth: '45%',
    height: 'auto',
    overflow:'hidden'
  };

  const textStyle = {
    flex: '1', // Text takes up the remaining space
   

};

const text1Style = {
    flex: '1', // Text takes up the remaining space
    color:'white',
    fontSize:'40px',
    fontWeight:'bold',
    paddingRight:'10rem',
    
};
const text2Style = {
    flex: '1', // Text takes up the remaining space
    color:'white',
    fontSize:'25px',
    paddingRight:'10rem',


};





  return (
    <div style={{
        display: 'flex',
    alignItems: 'center',
    width: '100vw',
    padding: '20px',
    backgroundColor:'black',
    borderWidth:"4px",
    borderBlockColor:"grey",
    borderStyle:"solid",
    overflow:'hidden',
    }} className='divquery'>
        {
            image === "right" &&
            (
        <>
      

      <img src={imgSrc} alt="Image" style={imgStyle} />
      
      <div style={textStyle}>
        <p  style={text1Style}>{text1}</p>
        <p  style={text2Style}>{text2}</p>
      </div>
      </>
            )
}
        {
            image === "left" &&
            (
        <>
     
      <div style={textStyle}>
        <p  style={text1Style}>{text1}</p>
        <p  style={text2Style}>{text2}</p>
      </div>
      
      <img src={imgSrc} alt="Image" style={imgStyle} />
      <video style={{
        position:'absolute',
        right:'0',
        marginRight:"2.1rem",
        marginBottom:"1rem",
        transform: 'scale(0.8)',
        width:'40%',
        
        height:'auto',
         
       
      }}  autoPlay loop muted>
  <source src={videosrc} type="video/mp4" />
  Your browser does not support the video tag.
</video>

      </>
      
 
            )
}
    </div>
  );
};

export default DivComp;
