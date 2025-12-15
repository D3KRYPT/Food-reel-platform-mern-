import React, { useEffect, useRef, useState } from 'react'
import '../../styles/reels.css'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';


const Home = () => {
  const [videos, setVideos] = useState([])
  const videoRefs = useRef(new Map())
  const containerRef = useRef(null)

  // IntersectionObserver to auto-play video in view and pause others
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            el.play?.().catch(() => {})
          } else {
            el.pause?.()
          }
        })
      },
      { threshold: [0.25, 0.5, 0.6, 0.75, 1] }
    )

    videoRefs.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [videos])

  // Fetch food items and replace demo data when available
 useEffect(() => {
  axios
    .get('http://localhost:3000/api/food', { withCredentials: true })
    .then((response) => {
      setVideos(response.data.food);
    })
    .catch(err => console.error(err));
}, []);

  const setVideoRef = (id) => (el) => {
    if (!el) {
      videoRefs.current.delete(id)
      return
    }
    videoRefs.current.set(id, el)
  }

  return (
    <div ref={containerRef} className="reels-container">
      <div className="reels-feed" role="list">
        {videos.map((item) => (
          <section key={item._id} className="reel" role="listitem">
            <video
              ref={setVideoRef(item._id)}
              className="reel-video"
              src={item.video}
              muted
              playsInline
              loop
              preload="metadata"
            />

            <div className="reel-overlay">
              <div className="reel-overlay-gradient" />
              <div className="reel-content">
                <p className="reel-description" title = {item.description}>{item.description}</p>
                <Link className="reel-btn" to={ "/food-partner/" + item.foodPartner} aria-label="Visit Store">Visit Store</Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Home
