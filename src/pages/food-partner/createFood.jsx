import React, { useState, useRef } from 'react'
import '../../styles/createFood.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const CreateFood = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [videoFile, setVideoFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const inputRef = useRef(null)

  const navigate = useNavigate();

  function handleVideoChange(e) {
    const file = e.target.files?.[0]
    if (!file) return
    setVideoFile(file)
    const url = URL.createObjectURL(file)
    setPreview(url)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const formData = new FormData();

    formData.append('name', name);
    formData.append('description', description)
    formData.append("video", videoFile);

    const response = await axios.post("http://localhost:3000/api/food", formData, {
      withCredentials : true,
    })

  console.log(response.data);
  navigate("/")
  
  }

  return (
    <main className="create-food-page">
      <form className="create-food-card" onSubmit={handleSubmit}>
        <h2 className="cf-title">Add a Food Item</h2>

        <label className="cf-label" htmlFor="foodName">Name</label>
        <input
          id="foodName"
          className="cf-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter dish name"
          required
        />

        <label className="cf-label" htmlFor="foodDesc">Description</label>
        <textarea
          id="foodDesc"
          className="cf-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Short description (ingredients, notes)"
          rows={4}
        />

        <label className="cf-label" htmlFor="foodVideo">Video</label>
        <div className="cf-file-wrapper">
          <label className="cf-file-btn" htmlFor="foodVideo">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M4 7H20V17H4V7Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 11L14 13L10 15V11Z" fill="currentColor"/>
              <path d="M4 7L2 5V19L4 17" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Choose video</span>
          </label>

          <input
            ref={inputRef}
            id="foodVideo"
            className="cf-file"
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
          />

          <div className="cf-file-meta">
            {videoFile ? (
              <>
                <span className="cf-filename">{videoFile.name}</span>
                <button type="button" className="cf-clear" onClick={() => { setVideoFile(null); setPreview(null); if (inputRef.current) inputRef.current.value = '' }} aria-label="Clear video">✕</button>
              </>
            ) : (
              <span className="cf-filename muted">No file chosen</span>
            )}
          </div>
        </div>

        <div className="cf-preview">
          {preview ? (
            <video className="cf-preview-video" src={preview} controls muted playsInline />
          ) : (
            <div className="cf-placeholder">Video preview will appear here</div>
          )}
        </div>

        <div className="cf-actions">
          <button type="submit" className="cf-btn primary">Create</button>
          <button
            type="button"
            className="cf-btn secondary"
            onClick={() => {
              setName('')
              setDescription('')
              setVideoFile(null)
              setPreview(null)
              if (inputRef.current) inputRef.current.value = ''
            }}
          >
            Reset
          </button>
        </div>
      </form>
    </main>
  )
}

export default CreateFood
