// FAQ.js
import React, { useState } from 'react';

const FAQ = () => {
    const [is1Open, set1IsOpen] = useState(false);
    const [is2Open, set2IsOpen] = useState(false);
    const [is3Open, set3IsOpen] = useState(false);
    const [is4Open, set4IsOpen] = useState(false);
    const [is5Open, set5IsOpen] = useState(false);
    const [is6Open, set6IsOpen] = useState(false);

    return (
      <>
        <h1 style={{fontWeight:'bold',color:'white',fontSize:'45px'}}>Foire aux questions</h1>
        <button style={{width:'50rem',height:'5rem',backgroundColor:'#2d2d2d',border:'none',marginBottom:'1rem',fontSize:'21px',fontWeight:'bold',color:'white',display:'flex',justifyContent:'space-between',alignItems:'center'}} onClick={() => set1IsOpen(!is1Open)}>Netflix, qu'est-ce que c'est ? <span>+</span></button>
        {is1Open && <div style={{backgroundColor:'#2d2d2d',width:'50rem',height:'auto',textAlign:'start',marginBottom:'1rem'}}>
            
            <p style={{marginLeft:'1rem',fontSize:'20px',color:'white',fontWeight:'bold'}}>Netflix est un service de streaming qui propose une vaste sélection de séries, films, animes, documentaires et autres programmes primés sur des milliers d'appareils connectés à Internet.
            
Regardez tout ce que vous voulez, quand vous voulez, sans publicité et à un tarif mensuel très attractif. Découvrez de nouveaux films et séries chaque semaine, il y en a pour tous les goûts !</p>
            </div>}

            <button style={{width:'50rem',height:'5rem',backgroundColor:'#2d2d2d',border:'none',marginBottom:'1rem',fontSize:'21px',fontWeight:'bold',color:'white',display:'flex',justifyContent:'space-between',alignItems:'center'}} onClick={() => set2IsOpen(!is2Open)}>Combien coûte Netflix ? <span>+</span></button>
        {is2Open && <div style={{backgroundColor:'#2d2d2d',width:'50rem',height:'auto',textAlign:'start',marginBottom:'1rem'}}>
            
            <p style={{marginLeft:'1rem',fontSize:'20px',color:'white',fontWeight:'bold'}}>Regardez Netflix sur votre smartphone, tablette, Smart TV, ordinateur ou appareil de streaming, le tout pour un tarif mensuel fixe. Les offres vont de 35 MAD à 95 MAD par mois. Pas de contrat ni de frais supplémentaires.</p>
            </div>}    
      
      
            <button style={{width:'50rem',height:'5rem',backgroundColor:'#2d2d2d',border:'none',marginBottom:'1rem',fontSize:'21px',fontWeight:'bold',color:'white',display:'flex',justifyContent:'space-between',alignItems:'center'}} onClick={() => set3IsOpen(!is3Open)}>Où puis-je regarder Netflix ? <span>+</span></button>
        {is3Open && <div style={{backgroundColor:'#2d2d2d',width:'50rem',height:'auto',textAlign:'start',marginBottom:'1rem'}}>
            
            <p style={{marginLeft:'1rem',fontSize:'20px',color:'white',fontWeight:'bold'}}>Netflix, c'est où vous voulez, quand vous voulez. Connectez-vous à votre compte pour regarder Netflix en ligne sur netflix.com depuis votre ordinateur ou tout appareil connecté à Internet avec l'application Netflix, comme les Smart TV, smartphones, tablettes, lecteurs de streaming et consoles de jeu.

Vous pouvez aussi télécharger vos séries préférées avec l'application iOS, Android ou Windows 10. Téléchargez des titres pour les regarder sur votre appareil mobile, même sans connexion Internet. Emportez Netflix partout avec vous.</p>
            </div>}
      
      
      
      
            <button style={{width:'50rem',height:'5rem',backgroundColor:'#2d2d2d',border:'none',marginBottom:'1rem',fontSize:'21px',fontWeight:'bold',color:'white',display:'flex',justifyContent:'space-between',alignItems:'center'}} onClick={() => set4IsOpen(!is4Open)}>Comment puis-je annuler mon offre ? <span>+</span></button>
        {is4Open && <div style={{backgroundColor:'#2d2d2d',width:'50rem',height:'auto',textAlign:'start',marginBottom:'1rem'}}>
            
            <p style={{marginLeft:'1rem',fontSize:'20px',color:'white',fontWeight:'bold'}}>Netflix offre une grande souplesse. Pas de contrat compliqué. Sans engagement. Deux clics suffisent pour annuler votre compte en ligne. Pas de frais d'annulation : ouvrez ou fermez votre compte à tout moment.</p>
            </div>}
      
      
      
      
            <button style={{width:'50rem',height:'5rem',backgroundColor:'#2d2d2d',border:'none',marginBottom:'1rem',fontSize:'21px',fontWeight:'bold',color:'white',display:'flex',justifyContent:'space-between',alignItems:'center'}} onClick={() => set5IsOpen(!is5Open)}>Que puis-je regarder sur Netflix ? <span>+</span></button>
        {is5Open && <div style={{backgroundColor:'#2d2d2d',width:'50rem',height:'auto',textAlign:'start',marginBottom:'1rem'}}>
            
            <p style={{marginLeft:'1rem',fontSize:'20px',color:'white',fontWeight:'bold'}}>Netflix propose un vaste catalogue comprenant notamment des longs-métrages, des documentaires, des séries, des animes et des programmes originaux Netflix primés. Regardez Netflix à volonté, quand vous le voulez.</p>
            </div>}
      
      
      
            <button style={{width:'50rem',height:'5rem',backgroundColor:'#2d2d2d',border:'none',marginBottom:'1rem',fontSize:'21px',fontWeight:'bold',color:'white',display:'flex',justifyContent:'space-between',alignItems:'center'}} onClick={() => set6IsOpen(!is6Open)}>Est-ce que Netflix est adapté aux enfants ? <span>+</span></button>
        {is6Open && <div style={{backgroundColor:'#2d2d2d',width:'50rem',height:'auto',textAlign:'start',marginBottom:'1rem'}}>
            
            <p style={{marginLeft:'1rem',fontSize:'20px',color:'white',fontWeight:'bold'}}>Netflix Jeunesse est inclus dans votre abonnement et offre un meilleur contrôle aux parents, ainsi qu'un espace dédié aux enfants, avec des films et des séries destinés à toute la famille.

Les profils Jeunesse comportent des fonctionnalités de contrôle parental avec code PIN permettant de modifier la catégorie d'âge des contenus que vos enfants peuvent regarder et de bloquer des titres spécifiques.</p>
            </div>}
      
      
      
      
      
      
      
      
      </>
    );
};

export default FAQ;
