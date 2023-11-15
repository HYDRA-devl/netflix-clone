import backg from './background.jpeg';
import DarkOverlay from './mydarkoverlay'; 
import DivComp from './divcomp';
import mobileImage from './mobile.jpeg'; 
import childrenimg from './children.png'
import mytv from './tv.png'
import FAQ from './FAQ';
import EmailForm from './emailform'
import Header from './Header';





const MYbackgroundimage= () =>{


   const backgstyle={
    backgroundImage: `url(${backg})`, // Use backticks and ${} for interpolation
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    minHeight: '100vh',
    zIndex: '-1',
   };

   const containerStyle = {
    width: '100%',
    height: '100vh',
    position: 'absolute',
    overflowX: 'hidden',
   
  };








    return(
      
      <div style={containerStyle}>
        <div className='backgquery' style={backgstyle}>
        <Header showButton={true} />
        <DarkOverlay />
        
        </div>
        <DivComp
       image={"left"}
       text1={"Regardez Netflix sur votre TV"}
       text2={"Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteur Blu-ray et bien plus. ."}
       imgSrc={mytv}// Provide the image URL here
       videosrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
       />
       
       
       
       
       
        <DivComp
        imgSrc={mobileImage}// Provide the image URL here
        text1={"Téléchargez vos séries pour les regarder hors connexion"}
        text2={" Enregistrez vos programmes préférés et ayez toujours quelque chose à regarder ."}
        image={"right"}
         />
       
       <DivComp
       image={"left"}
       text1={"Regardez Netflix sur votre TV"}
       text2={"Regardez Netflix sur votre Smart TV, PlayStation, Xbox, Chromecast, Apple TV, lecteur Blu-ray et bien plus. ."}
       imgSrc={mytv}// Provide the image URL here
       videosrc="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
       />

       
       
       
       
       
        <DivComp
        imgSrc={childrenimg}// Provide the image URL here
        text1={"Créez des profils pour les enfants"}
        text2={" Les enfants découvrent de nouvelles aventures et retrouvent leurs personnages préférés dans un espace bien à eux, déjà inclus dans votre abonnement ."}
        image={"right"}
        />
        <div style={{width:'100vw', height:'50rem', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
         <FAQ/>
         <p style={{color:'white',fontSize:'22px',paddingLeft:'15rem',paddingRight:'15rem',textAlign:'center'}}>Prêt à regarder Netflix ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.</p>
         <EmailForm/>
        </div>
       



      </div>
      
    )



}
export default MYbackgroundimage;