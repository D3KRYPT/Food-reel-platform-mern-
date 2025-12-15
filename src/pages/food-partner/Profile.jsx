import React, { useState, useEffect } from 'react'
import '../../styles/profile.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Profile = () => {
  
  const { id } = useParams()
  const [profile, setProfile] = useState(null)
  const [videos, setVideos] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/api/food-partner/${id}`, { withCredentials: true })
            .then(response => {
                setProfile(response.data.foodPartner)
                setVideos(response.data.foodPartner.foodItems)
            })
    }, [id])

  return (
    <main className="profile-page">
      <div className="profile-card">
        <div className="profile-top">
          <div className="profile-row">
            {/* <div className="profile-avatar-circle" style={{ backgroundImage: `url(${profile?.avatar})` }} /> */}
            <img className="profile-avatar-circle" src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="Profile Avatar" />
            
            <div className="profile-pills">
              <div className="profile-pill profile-business">{profile?.fullName}</div>
              <div className="profile-pill profile-address">{profile?.address}</div>
            </div>
          </div>

          <div className="profile-stats-row">
            <div className="stat-col">
              <div className="stat-label">total meals</div>
              <div className="stat-value">{profile?.totalMeals}</div>
            </div>
            <div className="stat-col">
              <div className="stat-label">customer serve</div>
              <div className="stat-value">{profile?.customersServed}</div>
            </div>
          </div>
        </div>

        <div className="profile-divider" />

        <section className="profile-grid-card">
          {videos.map((v) => (
            <div key={v.id} className="grid-tile">
              <video className="grid-video" src={v.video} muted playsInline />
              <div className="grid-label" aria-hidden>
                {/* optional label */}
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  )
}

export default Profile
