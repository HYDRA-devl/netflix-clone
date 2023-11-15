import backg from "./background.jpeg"
import Header from "./Header";


const LoginPage= ()=>{

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the alpha channel (0.5 for 50% opacity)
        // zIndex: 0, // Place it behind other elements
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
      };
     
      
   const backgstyle={
    width: '100vw', // Resize the logo to match the header width
    height: '100vh', // Set a max width to prevent it from getting too large
    objectFit: 'cover',
    zIndex: '-1',
    position:'absolute',
  
};
 const mystyle={
    borderColor:'white',
    borderBottom: '1px solid #ccc',
    backgroundColor: 'rgba(16, 16, 17, 0.5)', // Transparent background
    width: '20rem',
    height: '3rem', // Adjust the height to your preference
    margin: '0',
    padding: '0', // Reset padding
    boxSizing: 'border-box', // Include border in total width/height
    verticalAlign: 'middle', // Align vertically within the flex container
    borderRadius:'4px',
    color:'white',
  }


  const textStyle = {
    color: 'white',
    fontSize: '2rem',
    textAlign: 'center',
   
    
    
  };



      return (
        <div style={overlayStyle}>
          <Header showButton={false} />
         <img src={backg} style={backgstyle} alt="Your Logo" />
         <div style={{height:'85%',width:'35%',backgroundColor:'rgba(0, 0, 0, 0.8)',borderRadius:'1rem',  display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',flexDirection:"column"}}>

         <h2 style={textStyle}>S'identifier</h2>
    <form style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',flexDirection:"column",gap:'1rem'}}>
        
           
            <input style={mystyle} type="email" id="email" name="email" placeholder="Enter your email" required/>
       
           
            <input style={mystyle} type="password" id="password" name="password" placeholder="Enter your password" required/>
        
        <button style={{backgroundColor:'#E50914',height:'3rem',width:'20rem',color:'white',fontWeight:'bold',border:'none',
borderRadius:'0.18rem',cursor:'pointer',marginTop:'2rem'}} type="submit">Submit</button>
    </form>
         </div>
        
        
        </div>
      );    





};
export default LoginPage;