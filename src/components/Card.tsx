import React from "react";
import "../styles/Slide.css";
interface CardProps {
    contents: any;
    className?: string;
    onClick?: () => void;
}

export function Card({ contents, className, onClick} : CardProps) {
    return (
        <div className={`slideCommon ${className}`} onClick={onClick}>
            {contents}
        </div>
    )
}

export const slidesData = [
    {
      key: "slide1",
      content: (
        <Card
          className="slide1-video"
          contents={
            <video
              src="/videos/MazeEscape.mp4"
              autoPlay
              loop
              muted
              onLoadedMetadata={(e) => {
                e.currentTarget.playbackRate = 1.25; 
              }}
              style={{ width: "100%", height: '100%', objectFit: "contain" }}
            />
          }
        />
      )
    },
    {
      key: "slide2",
      content: (
        <Card
          className="slide2-video"
          contents={
            <video
              src="/videos/Weather.mp4"
              autoPlay
              loop
              muted
              onLoadedMetadata={(e) => {
                e.currentTarget.playbackRate = 1.25; 
              }}
              style={{ width: "100%", height: '100%', objectFit: "contain" }}
            />
          }
        />
      )
    },
    {
      key: "slide3",
      content: <Card contents="Slide 3" className="slide3" />
    },
    {
      key: "slide4",
      content: <Card contents="Slide 4" className="slide4" />
    }
  ];