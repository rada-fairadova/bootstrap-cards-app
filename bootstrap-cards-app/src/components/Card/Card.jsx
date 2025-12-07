import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({ 
  imageUrl, 
  title, 
  text, 
  buttonText = "Go somewhere", 
  buttonLink = "#",
  buttonVariant = "primary",
  cardClass = "",
  showImage = true,
  customImage
}) => {
  return (
    <div className={`card ${cardClass}`} style={{ width: '100%' }}>
      {showImage && (imageUrl || customImage) && (
        <div className="card-image-container">
          {customImage ? (
            customImage
          ) : imageUrl ? (
            <img 
              src={imageUrl} 
              className="card-img-top" 
              alt={title || "Card image"} 
            />
          ) : null}
        </div>
      )}
      
      <div className="card-body">
        {title && (
          <h5 className="card-title">
            {title}
          </h5>
        )}
        
        {text && (
          <p className="card-text">
            {text}
          </p>
        )}
        
        {buttonText && (
          <a 
            href={buttonLink} 
            className={`btn btn-${buttonVariant} card-button`}
          >
            {buttonText}
          </a>
        )}
      </div>
    </div>
  )
}

Card.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonVariant: PropTypes.oneOf([
    'primary', 'secondary', 'success', 'danger', 
    'warning', 'info', 'light', 'dark'
  ]),
  cardClass: PropTypes.string,
  showImage: PropTypes.bool,
  customImage: PropTypes.node
}

Card.defaultProps = {
  buttonText: "Go somewhere",
  buttonLink: "#",
  buttonVariant: "primary",
  cardClass: "",
  showImage: true
}

export default Card
