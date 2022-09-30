import React from 'react';
import Banner from '../../components/banner/Banner';
import Item from '../../components/bannerItem/Item';
import about from '../../assets/about.jpg'
import menu from '../../assets/menu.jpg'
import locate from '../../assets/locate.jpg'
import foodone from '../../assets/food1.jpg'
import '../home/home.scss'


const Home = () => {
  return (
      <div className='all'>
        <Banner/>
        <section className='Wellcome'>
           <div className="title">
            <h1>Welcome</h1>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.</p>
           </div>
           <div className="items">
               <Item title="About Us" desc="Know more about us" photo={about}/>
               <Item  title="Menu" desc="Dedicated to delight you" photo={menu}/>
               <Item  title="Locate Uss" desc="Visit us today!" photo={locate}/>
           </div> 
           
        </section>
        <section className='section-image' >
           <div className="bg-image" style={{backgroundImage:`url("https://assets.website-files.com/60945cb2a70f293c1b86901f/6094b46092add3b68e44daca_john-fornander-25oy_6KE0lg-unsplash.jpg")`}}>

           </div>
        </section>
      </div>
    
  
    
     
  )
}

export default Home