// src/App.jsx
import Navbar from './Navbar';
import Hero from './Hero';
import SearchBar from './SearchBar';
import FeaturedHackathons from './FeaturedHackathons';
import Footer from './Footer';
import ProfileCard from './ProfileCard';
import PhotoPage from './PhotoPage';

function DefaultPage() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      {/* <SearchBar /> */}
      <PhotoPage/>
      {/* <FeaturedHackathons /> */}
      <Footer/>
  
    </div>
  );
}

export default DefaultPage;