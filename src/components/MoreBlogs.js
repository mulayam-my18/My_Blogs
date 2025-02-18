import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEye, FaClock} from 'react-icons/fa';

const carouselData = [
  {
    image: "https://bootcamp.lejhro.com/images/blogs/b-2/customer.webp",
    title: "Navigating the Digital Landscape: Unveiling the Vitality of Digital",
    date: "21th July, 2024",
    views: "190k views",
    readTime: "10 min Read",
  },
  {
    image: "https://bootcamp.lejhro.com/images/blogs/b-16/b-16-a_breaking-barriers-how-low-code-platforms-empower-non-technical-innovators.webp",
    title: "Beyond Limits: Empowering Visionaries with Low-Code Platforms",
    date: "21th July, 2024",
    views: "190k views",
    readTime: "10 min Read",
  },
  {
    image: "https://bootcamp.lejhro.com/images/blogs/b-8/b-8-a_implementing-data-mesh-architecture-in-azure-a-comprehensive-guide - Copy.webp",
    title: "Mastering Data Mesh: Implementing Architecture in Azure",
    date: "21th July, 2024",
    views: "190k views",
    readTime: "10 min Read",
  },
  {
    image: "https://bootcamp.lejhro.com/images/blogs/b-21/b-21-a_voice-search-optimization- a-growing-trend-in-seo.webp",
    title: "Unlocking the Future: Mastering Voice Search Optimization in SEO",
    date: "21th July, 2024",
    views: "190k views",
    readTime: "10 min Read",
  },
  {
    image: "https://bootcamp.lejhro.com/images/blogs/b-4/analysis.webp",
    title: "Charting the Cources: Exploring Trends and Techniques in the Evolution of...",
    date: "21th July, 2024",
    views: "190k views",
    readTime: "10 min Read",
  },
  {
    image: "https://bootcamp.lejhro.com/images/blogs/b-18/b-18-a_a-comprehensive-guide-on-disk-scheduling-in-ios-2024.webp",
    title: "Redefining iOS Efficiency: The Effect of Disk Scheduling",
    date: "21th July, 2024",
    views: "190k views",
    readTime: "10 min Read",
  },
];

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 900 }, items: 3 },
  tablet: { breakpoint: { max: 900, min: 700 }, items: 2 },
  mobile: { breakpoint: { max: 700, min: 0 }, items: 1 },
};

const MoreBlogs = () => {
  return (
    <div className="container my-4">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={false}
        keyBoardControl={true}
        showDots={false}
        arrows
      >
        {carouselData.map((item, index) => (
          <div key={index} className="card mx-2 shadow-sm">
            <img src={item.image} className="card-img-top carousel-card" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="text-muted small">Updated on {item.date}</p>
              <div className="d-flex justify-content-between">
                <span><FaEye className="me-1" />{item.views}</span>
                <span><FaClock className="me-1" />{item.readTime}</span>
              </div>
              <button className="btn btn-outline-danger mt-3">Read More</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MoreBlogs;

