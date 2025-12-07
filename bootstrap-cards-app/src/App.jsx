import React from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const card1Image = "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
  const card2Image = "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"

  return (
    <div className="app-container">
      <h1 className="text-center my-4">Card Components Example</h1>
      
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3 className="text-center mb-3">Card 1 (с div вместо img)</h3>
            <Card
              title="Card title"
              text="Some quick example text to build on the card title and make up the bulk of the card's content."
              buttonText="Go somewhere"
              customImage={
                <div className="image-placeholder">
                  Image cap
                </div>
              }
            />
          </div>

          <div className="col-md-6 mb-4">
            <h3 className="text-center mb-3">Card 2 (без изображения)</h3>
            <Card
              title="Special title treatment"
              text="With supporting text below as a natural lead-in to additional content."
              buttonText="Go somewhere"
            />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <h3 className="text-center mb-4">Дополнительные примеры</h3>
            <div className="row">
              <div className="col-md-4 mb-4">
                <Card
                  imageUrl={card2Image}
                  title="Beautiful Sunset"
                  text="Enjoy this beautiful sunset view from the mountains."
                  buttonText="View details"
                  buttonLink="#sunset"
                />
              </div>
              
              <div className="col-md-4 mb-4">
                <Card
                  title="Custom Image Card"
                  text="This card uses a custom div instead of an image."
                  buttonText="Learn more"
                  customImage={
                    <div className="image-placeholder" style={{ backgroundColor: '#0d6efd' }}>
                      Custom Banner
                    </div>
                  }
                />
              </div>

              <div className="col-md-4 mb-4">
                <Card
                  imageUrl="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
                  title="Mountain Adventure"
                  text="Explore the majestic mountains and enjoy the fresh air."
                  buttonText="Book now"
                  buttonLink="#booking"
                  buttonVariant="success"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
