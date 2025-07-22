import React, { useRef, useState } from "react";

interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties['height'];
  containerWidth?: React.CSSProperties['width'];
  imageHeight?: React.CSSProperties['height'];
  imageWidth?: React.CSSProperties['width'];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

const TiltedCard: React.FC<TiltedCardProps> = ({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const [tooltipX, setTooltipX] = useState(0);
  const [tooltipY, setTooltipY] = useState(0);
  const [tooltipOpacity, setTooltipOpacity] = useState(0);
  const [captionRotate, setCaptionRotate] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    setRotateX(rotationX);
    setRotateY(rotationY);
    setTooltipX(e.clientX - rect.left);
    setTooltipY(e.clientY - rect.top);

    // Caption rotation based on mouse movement
    setCaptionRotate(-offsetY * 0.1);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    setScale(scaleOnHover);
    setTooltipOpacity(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setScale(1);
    setRotateX(0);
    setRotateY(0);
    setTooltipOpacity(0);
    setCaptionRotate(0);
  };

  return (
    <>
      <figure
        className="tilted-card-container"
        style={{
          height: containerHeight,
          width: containerWidth,
          perspective: '800px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          userSelect: 'none',
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showMobileWarning && (
          <div 
            className="d-block d-sm-none position-absolute top-0 text-center"
            style={{
              padding: '0.5rem',
              background: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '8px',
              marginBottom: '1rem',
            }}
          >
            <small className="text-muted">This effect is optimized for desktop</small>
          </div>
        )}

        <div
          ref={cardRef}
          className="tilted-card-inner"
          style={{
            width: imageWidth,
            height: imageHeight,
            transformStyle: 'preserve-3d',
            transition: isHovered ? 'none' : 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: `
              rotateX(${rotateX}deg) 
              rotateY(${rotateY}deg) 
              scale(${scale})
            `,
            position: 'relative',
            willChange: 'transform',
            backfaceVisibility: 'hidden',
          }}
        >
          <img
            src={imageSrc}
            alt={altText}
            className="tilted-card-image"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: imageWidth,
              height: imageHeight,
              objectFit: 'cover',
              borderRadius: '15px',
              willChange: 'transform',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.2)',
              transition: 'box-shadow 0.3s ease',
            }}
          />

          {displayOverlayContent && overlayContent && (
            <div
              className="tilted-card-overlay-content"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 2,
                transform: 'translateZ(30px)',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1rem',
                borderRadius: '15px',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.3s ease',
                background: `linear-gradient(
                  to top,
                  rgba(0, 0, 0, 0.8) 0%,
                  rgba(0, 0, 0, 0.4) 50%,
                  transparent 100%
                )`,
                willChange: 'transform',
                backfaceVisibility: 'hidden',
                transformStyle: 'preserve-3d',
              }}
            >
              {overlayContent}
            </div>
          )}
        </div>

        {showTooltip && captionText && (
          <figcaption
            className="tilted-card-tooltip d-none d-sm-block"
            style={{
              position: 'absolute',
              left: `${tooltipX}px`,
              top: `${tooltipY}px`,
              backgroundColor: 'white',
              padding: '4px 10px',
              borderRadius: '4px',
              fontSize: '10px',
              color: '#2d2d2d',
              opacity: tooltipOpacity,
              zIndex: 3,
              pointerEvents: 'none',
              transition: 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: `rotate(${captionRotate}deg)`,
              transformOrigin: 'center',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            }}
          >
            {captionText}
          </figcaption>
        )}
      </figure>

      {/* Global CSS for mobile responsiveness */}
      <style>{`
        @media (max-width: 768px) {
          .tilted-card-container {
            perspective: none !important;
          }
          
          .tilted-card-inner {
            transform: none !important;
            transition: none !important;
          }
          
          .tilted-card-overlay-content {
            opacity: 1 !important;
          }
        }
      `}</style>
    </>
  );
};

export default TiltedCard;
