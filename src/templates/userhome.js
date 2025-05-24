import React, { useState } from 'react';
import '../App.css'; 
import '../css/card.css';
import { FaHotel, FaUtensils, FaSpa, FaSwimmer, FaBirthdayCake, FaDumbbell, FaChevronDown } from 'react-icons/fa';

export default function UserHome() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Category');

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setDropdownVisible(false); // Close the dropdown after selection
  };
  return (
    <div>
         <div className="big-image">
        <img src="https://images8.alphacoders.com/456/456965.jpg"/>
        </div>
      <div className="data-info">
          <h1 className="h1">Explore</h1>
          <p className="p">Your amazing city</p>
          <p className="p">Never stop Exploring the world.</p>
      </div>
       {/* search container */}
       <div className="search-container">
      <input type="text" placeholder="Search by Keywords..." className="search-input" />
      <input type="text" placeholder="Location" className="location-input" />
      <div className="search-dropdown" onClick={toggleDropdown}>
        <span className="search-dropdown-label">{selectedCategory}</span>
        <FaChevronDown className="search-dropdown-arrow-icon" />
        {dropdownVisible && (
          <ul className="search-dropdown-menu">
            <li onClick={() => handleCategorySelect('Category')}>Category</li>
            <li onClick={() => handleCategorySelect('Hotels')}>Hotels</li>
            <li onClick={() => handleCategorySelect('Cafes')}>Cafes</li>
            <li onClick={() => handleCategorySelect('Nightlife')}>Nightlife</li>
            <li onClick={() => handleCategorySelect('Restaurants')}>Restaurants</li>
          </ul>
        )}
      </div>
      <button className="search-button">Search</button>
    </div>
    <br/>
      <section className="home-about-area">
        <div className="container-fluid">
            <div className="row align-items-center justify-content-end">
                <div className="col-lg-6 col-md-12 home-about-left">
                    <h1>
                        Planning Your Journey? <br />
                        Let Us Help You <br />
                        Travel with Ease
                    </h1>
                    <p>
                        Traveling can be stressful, but we're here to make it easier. From booking to boarding, we provide support and information to ensure your journey is smooth and enjoyable. Contact us for personalized travel assistance and exclusive offers tailored to your needs.
                    </p>
                    <a href="#" className="primary-btn text-uppercase">Learn More...</a>
                </div>
                <div className="col-lg-6 col-md-12 home-about-right no-padding">
                    <img className="img-fluid" src="https://imgs.search.brave.com/VxOOMKlFIq92Uy5gknNvp_VeMaeJM3ZKLG_M85Ui8tg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/NTkxNjAzMS9waG90/by90aGUtd2F5LXRv/LXRoZS1wbGFuZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/alRhbHYwRGRHWmE3/NkU2cXJTakgtMnJt/VHAyTk5IdmRnU2JR/QkVEM3BQOD0" alt="About Image" />
                </div>
            </div>
        </div>
    </section>
    <br/><br/>
    <div class="grid-item" id="projects">
      <h2>
  <span style={{ color: 'black', fontSize: '2.5rem', fontFamily: 'Arial, sans-serif, bold' }}>Let's </span>
  <span style={{ color: 'grey', fontSize: '2.5rem', fontFamily: 'Georgia, serif' }}>travel the world</span>
</h2>

  <br/>
  <div class="carousel-container">
    <section>
      <ul>
        <div class="carousel-content">

          <div class="carousel-item"><img src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?cs=srgb&dl=pexels-vince-2265876.jpg&fm=jpg" alt="Proyecto 1"/></div>
          <div class="carousel-item"><img src="https://images.pexels.com/photos/29171297/pexels-photo-29171297.jpeg?cs=srgb&dl=pexels-bruno-ngarukiye-515195000-29171297.jpg&fm=jpg" alt="Proyecto 2"/></div>
          <div class="carousel-item"><img src="https://c4.wallpaperflare.com/wallpaper/631/683/713/nature-bridge-sky-city-wallpaper-preview.jpg" alt="Proyecto 3"/></div>
          <div class="carousel-item"><img src="https://images.wallpaperscraft.com/image/single/girl_travel_camping_166108_300x188.jpg" alt="Proyecto 4"/></div>
          <div class="carousel-item"><img src="https://c4.wallpaperflare.com/wallpaper/268/205/96/nature-water-turquoise-sky-wallpaper-preview.jpg" alt="Proyecto 5"/></div>
          <div class="carousel-item"><img src="https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,q_auto,w_1024/v1/guides/article_cover/t3bip9rzxau6hh4kz5hb" alt="Proyecto 6"/></div>
          <div class="carousel-item"><img src="https://wallpapercave.com/wp/wp9388475.jpg" alt="Proyecto 2"/></div>
          <div class="carousel-item"><img src="https://media.gettyimages.com/id/1457945028/video/woman-hiking-in-norwegian-mountains.jpg?s=640x640&k=20&c=XJUe7K25kaDcyEZSOzE8N3XiRIOQh9-_fHJM7OqZWgw=" alt="Proyecto 1"/></div>
          <div class="carousel-item"><img src="https://i.ytimg.com/vi/S4lAXT9YTlQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC57yO7dejbV85Lr-AZQkss_t7GQQ" alt="Proyecto 2"/></div>
          <div class="carousel-item"><img src="https://images.wallpaperscraft.com/image/single/mountains_landscape_nature_158606_3840x2160.jpg" alt="Proyecto 3"/></div>
          <div class="carousel-item"><img src="https://c4.wallpaperflare.com/wallpaper/173/658/439/nature-travel-sea-sky-wallpaper-preview.jpg" alt="Proyecto 4"/></div>
          <div class="carousel-item"><img src="https://wallpapercave.com/wp/7faWo5M.jpg" alt="Proyecto 5"/></div>
          <div class="carousel-item"><img src="https://media.gettyimages.com/id/1471847063/video/giraffes-walking-in-a-row-below-dramatic-sunrise-sky-on-nature-reserve.jpg?s=640x640&k=20&c=NhjPlITImjGNuBM3RVPjW2XLeWG-Rk4DnzX-I6bChIM=" alt="Proyecto 6"/></div>
          <div class="carousel-item"><img src="https://img.freepik.com/premium-photo/sunset-kenya-landscape-savanna_670382-29646.jpg" alt="Proyecto 2"/></div>
          <div class="carousel-item"><img src="https://wallpapershome.com/images/pages/pic_h/560.jpg" alt="Proyecto 1"/></div>
          <div class="carousel-item"><img src="https://images8.alphacoders.com/877/thumb-1920-877095.jpg" alt="Proyecto 2"/></div>
          <div class="carousel-item"><img src="https://c4.wallpaperflare.com/wallpaper/522/659/792/african-savanna-wallpaper-preview.jpg" alt="Proyecto 3"/></div>
          <div class="carousel-item"><img src="https://media.gettyimages.com/id/1480714349/video/nature-relax-and-friends-watching-a-sunset-while-talking-chilling-and-bonding-together-on.jpg?s=640x640&k=20&c=f5evCWdGOUegP-WtJQurYWr7P7ZandNRCKchaiwY6x0=" alt="Proyecto 4"/></div>
          <div class="carousel-item"><img src="https://images.unsplash.com/photo-1723141899624-2485fb6b7ad9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyb3BpY2FsJTIwc3Vuc2V0fGVufDB8fDB8fHww" alt="Proyecto 5"/></div>
          <div class="carousel-item"><img src="https://media.gettyimages.com/id/1414412623/video/aerial-of-beautiful-south-africa-with-models-blyde-river-canyon-mpumalanga-stock-video-4k.jpg?s=640x640&k=20&c=Bb1fTKRVWn75FTmwEg1YL4WmeB1VUusR0MMvUZBPnS4=" alt="Proyecto 6"/></div>
          <div class="carousel-item"><img src="https://media.istockphoto.com/id/1408174631/photo/african-parents-with-little-kids-bonding-and-strolling-by-ocean-little-children-enjoying-the.jpg?s=612x612&w=0&k=20&c=psu4lxqLUSMxJ_k_FTwpMaLRokA-ZNHJy7hJOB9dFqs=" alt="Proyecto 2"/></div>
        </div>
      </ul>
    </section>
  </div>
</div>
    <br/><br/><br/><br/><br/>
    <div className="blog-container">
            <div className="text-center">
                <h2>Our <span>Blog</span></h2>
                <p>It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
            </div>
            </div>
            <br/><br/><br/><br/><br/>
    <div className="container">
       <div className="card">
           <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="First Image"/>
           <div className="card-body">
               <h2 className="card-title">Title One</h2>
               <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minus voluptas magnam veritatis error quis dolorum ab placeat quasi doloremque.</p>
               <a href="#" className="btn">Explore</a>
           </div>
       </div>


       <div className="card">
        <img src="https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="First Image"/>
        <div className="card-body">
            <h2 className="card-title">Title Two</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minus voluptas magnam veritatis error quis dolorum ab placeat quasi doloremque.</p>
            <a href="#" className="btn">Explore</a>
        </div>
    </div>


    <div className="card">
        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80" alt="First Image"/>
        <div className="card-body">
            <h2 className="card-title">Title Three</h2>
            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo minus voluptas magnam veritatis error quis dolorum ab placeat quasi doloremque.</p>
            <a href="#" className="btn">Explore</a>
        </div>
    </div>
   </div>
   <section class="about">
    <div class="about-img">
        <img src="https://i.pinimg.com/736x/57/d9/12/57d912449af2ec54bb79f46780854abb.jpg"/>
    </div>
    <div class="about-text">
        <small>ABOUT OUR COMPANY</small>
        <h2>We are Go Trip Ravels Support Company</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud</p>

        <label><input type="checkbox" checked/>Lorem ipsum dolor sit amet</label>
        <label><input type="checkbox" checked/>consectetur adipisicing elit</label>
        <label><input type="checkbox" checked/>Architecto atque consequuntur</label>
        <label><input type="checkbox" checked/>cupiditate doloremque ducimus</label>
        <a href="#">ABOUT US</a>
    </div>
</section>
<div className="services-container">
      <div className="services-header">
        <h1 className="services-subtitle">OUR SERVICES</h1> {/* H1 tag for "OUR SERVICES" */}
        <h2 className="services-title">
          Explore Our <span className="highlight">SERVICES</span>
        </h2>
      </div>

      <div className="services-grid">
        <div className="service-box">
          <div className="service-icon"><FaHotel /></div>
          <h3 className="service-name">Rooms & Appartment</h3>
          <p className="service-description">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
          </p>
        </div>

        <div className="service-box">
          <div className="service-icon"><FaUtensils /></div>
          <h3 className="service-name">Food & Restaurant</h3>
          <p className="service-description">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
          </p>
        </div>

        <div className="service-box">
          <div className="service-icon"><FaSpa /></div>
          <h3 className="service-name">Spa & Fitness</h3>
          <p className="service-description">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
          </p>
        </div>

        <div className="service-box">
          <div className="service-icon"><FaSwimmer /></div>
          <h3 className="service-name">Sports & Gaming</h3>
          <p className="service-description">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
          </p>
        </div>

        <div className="service-box">
          <div className="service-icon"><FaBirthdayCake /></div>
          <h3 className="service-name">Event & Party</h3>
          <p className="service-description">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
          </p>
        </div>

        <div className="service-box">
          <div className="service-icon"><FaDumbbell /></div>
          <h3 className="service-name">GYM & Yoga</h3>
          <p className="service-description">
            Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.
          </p>
        </div>
      </div>
    </div>

    </div>
  )
}
