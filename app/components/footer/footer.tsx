import { JSX } from "react";

export default function Footer(): JSX.Element {
  return (
    <section id="footer">
      {/* Decorative particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="particle" />
      ))}
      
      <div className="footer-block">
        <div className="footer-description footer-block-content">
          <span>Решим вашу задачу или научим вас решать</span>
        </div>
        <div className="footer-logotype footer-block-content"></div>
        <div className="footer-contacts footer-block-content">
          <a href="https://www.youtube.com/@SoftByteStudio" target="_blank" rel="noopener noreferrer">
            <span>YouTube-канал</span>
          </a>
          <a href="https://t.me/+vn6d9rXnOMczN2Ni" target="_blank" rel="noopener noreferrer">
            <span>Телеграм-канал</span>
          </a>
        </div>
      </div>
    </section>
  )
}