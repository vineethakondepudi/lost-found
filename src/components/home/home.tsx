
import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Carousel } from 'primereact/carousel'; // Import Carousel component
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Add the theme CSS
import 'primereact/resources/primereact.min.css'; // Add PrimeReact CSS
import 'primeicons/primeicons.css'; // Add PrimeIcons CSS
import './home.scss';

const Home: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  // Carousel images
  const images = [
    "https://www.shutterstock.com/image-photo/sand-timerhour-glass-feather-quill-260nw-240558520.jpg",
    "https://www.rebag.com/thevault/wp-content/uploads/2021/10/5-Entry-Level-Luxury-Accessories-Hero.jpg",
    "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg",
    "https://uncommongifts.in/cdn/shop/files/TribefacePrintedWomen_sOfficeBag_8d951812-bc08-4e82-8e0a-310bf5e9bbff_510x@2x.jpg?v=1702898334",
  ];

  // Carousel item template
  const imageTemplate = (item: string) => {
    return (
      <div>
        <img src={item} alt="carousel" style={{ width: '100%', borderRadius: '8px' }} />
      </div>
    );
  };

  const options = [
    { label: 'Miracle Software Systems', value: "Miracle Software Systems" },
    { label: 'Americold', value: "Americold" },
    { label: 'Sherwin Willams', value: "Sherwin Willams" },
    { label: 'Homo Depot', value: "Homo Depot" },
  ];

  return (
    <div className="home-container">


      {/* Carousel at the top */}
      <Carousel value={images} itemTemplate={imageTemplate} numVisible={1} circular={true} autoplayInterval={3000} />

      <div className="dropdown-container">
        <label htmlFor="dropdown">Select Organization: </label>
        <Dropdown
          id="dropdown"
          value={selectedOption}
          options={options}
          onChange={(e) => setSelectedOption(e.value)}
          placeholder="Select an organization"
        />
        {selectedOption && <p>You selected organization : {selectedOption}</p>}
      </div>
    </div>
  );
};

export default Home;


