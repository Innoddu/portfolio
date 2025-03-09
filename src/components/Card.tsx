import React from "react";
import "../styles/Slide.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface CardProps {
  contents: any;
  className?: string;
  onClick?: () => void;
  // 오버레이에 들어갈 링크 정보를 props로 전달할 수 있습니다.
  linkGithub?: string;
  linkSite?: string;
}

export function Card({ contents, className, onClick, linkGithub, linkSite }: CardProps) {
  return (
    <div className={`slideCommon ${className}`} onClick={onClick}>
      {contents}
      <div className="card-overlay">
        <div className="proj-links">
          <a 
            href={linkGithub || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="overlay-link"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" color="white" />
          </a>
          <a 
            href={linkSite || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="overlay-link"
          >
            <img 
              src="/icons/new-window.png" 
              alt="Live Site" 
              style={{ width: '35px', height: '35px' }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export const slidesData = [
  {
    key: "slide1",
    content: (
      <Card
        className="slide-video"
        linkGithub="https://github.com/Innoddu/Maze-Escape"
        linkSite="none"
        contents={
          <video
            src="/videos/MazeEscape.mp4"
            autoPlay
            loop
            muted
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 1.25; 
            }}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
      />
    )
  },
  // 나머지 슬라이드에도 동일하게 linkGithub, linkSite 값을 추가
  {
    key: "slide2",
    content: (
      <Card
        className="slide-video"
        linkGithub="https://github.com/Innoddu/Weather-React"
        linkSite="https://weather-now-where.netlify.app"
        contents={
          <video
            src="/videos/Weather.mp4"
            autoPlay
            loop
            muted
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 1.25; 
            }}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
      />
    )
  },
  {
    key: "slide3",
    content: (
      <Card
        className="slide-video"
        linkGithub="https://github.com/Innoddu/TodoList_TypeScript"
        linkSite="https://create-your-todolist-75c62e8accfe.herokuapp.com/"
        contents={
          <video
            src="/videos/taskmanager.mp4"
            autoPlay
            loop
            muted
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 1.25; 
            }}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
      />
    )
  },
  {
    key: "slide4",
    content: (
      <Card
        className="slide-video"
        linkGithub="https://github.com/Innoddu/Application_Tracker"
        linkSite="none"
        contents={
          <video
            src="/videos/apptracker.mp4"
            autoPlay
            loop
            muted
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 1.75; 
            }}
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        }
      />
    )
  }
];
