import React from 'react';
import EmailForm from './emailform';
import './MyComponent.css';
const DarkOverlay = () => {
  // const overlayStyle = {
  //   position: 'absolute',
  //   top: 0,
  //   left: 0,
  //   width: '100%',
  //   height: '100%',
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha channel (0.5 for 50% opacity)
  //   zIndex: 0, // Place it behind other elements
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
    
  // };



  
  const textStyle = {
    color: 'white',
    fontSize: '1.5rem',
    textAlign: 'center',
    paddingRight:'2rem',
    paddingLeft:'2rem',
    marginTop:'0rem',
    width:'100vw',
    
  };

const myp={
  fontSize:'27px',


}


  return (
    <div className='overlaystyle'>
      <div style={textStyle}>
        <h2 className='textpStyle' style={{fontWeight:'900',width:'100%'}}>Films et séries en illimité, et bien plus </h2>
        <p className='mypq' >Où que vous soyez. Annulez à tout moment. </p>
        <p className='mypq' >Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement. </p>
        <EmailForm/>
      </div>
    </div>
  );
};
export default DarkOverlay;


