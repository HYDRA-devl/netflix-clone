import logos from '../components/netflix logo.svg';
import { Link } from 'react-router-dom';




const Header= ({ showButton }) =>{

const headerStyle={
    background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    transition: 'background 0.3s',
    height:'3rem',
    display: 'flex', /* Enable flexbox layout */
    alignItems:' center',
    justifyContent:'space-around',
    position: 'absolute', // Fixed position to make it appear on top
    top: '0', // Position at the top of the viewport
    left: '0', // Position at the left of the viewport
    right: '0', // Position at the right of the viewport
    zIndex: '1', // Ensure it appears above the background

  };

   const logostyle={
    width: '100px', // Resize the logo to match the header width
    maxWidth: '400px', // Set a max width to prevent it from getting too large
    display: 'block', // To remove any extra spacing
     // Center the logo horizontally
    



   };

const buttonstyle={
backgroundColor:'#E50914',
height:'32px',
width:'103px',
color:'white',
fontWeight:'bold',
border:'none',
borderRadius:'0.18rem',
cursor:'pointer',
margin:'0',
textDecoration:'none',
paddingTop:'5px'



  };







    return(
    <header style={headerStyle} >
   <img src={logos} style={logostyle} alt="Your Logo" />
   { showButton && <Link to="/login"style={buttonstyle}>S'identifier</Link>}
   
    </header>
    )



}
export default Header;