'use client';
import { JSX, useEffect } from "react";

export default function Footer(): JSX.Element {
  useEffect(() => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach(particle => {
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 4 + 2;
      const duration = Math.random() * 25 + 15;
      const delay = Math.random() * 5;
      (particle as HTMLElement).style.left = `${x}%`;
      (particle as HTMLElement).style.top = `${y}%`;
      (particle as HTMLElement).style.width = `${size}px`;
      (particle as HTMLElement).style.height = `${size}px`;
      (particle as HTMLElement).style.animationDuration = `${duration}s`;
      (particle as HTMLElement).style.animationDelay = `${delay}s`;
    });
  }, []);
  return (
    <section id="footer">
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className="particle" />
      ))}
    
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-description">
            <div className="description-wrapper">
              <h3 className="description-title">Наша философия</h3>
              <p className="description-text">
                Решим вашу задачу или научим вас решать. Мы создаём не просто код, 
                а эффективные решения.
              </p>
            </div>
          </div>
          <div className="footer-center">
            <div className="logo-container">
              <div className="logo-circle">
                <div className="logo-inner">
                  <div className="logo-orbits">
                    <div className="orbit orbit-1"></div>
                    <div className="orbit orbit-2"></div>
                    <div className="orbit orbit-3"></div>
                  </div>
                  <span className="logo-text">SBS</span>
                </div>
              </div>
              <div className="logo-shine"></div>
            </div>
            <div className="company-name">
              <span className="company-text">SoftByte</span>
              <span className="company-subtext">Studio</span>
            </div>
          </div>
          <div className="footer-contacts">
            <div className="contacts-header">
              <h3 className="contacts-title">Присоединяйтесь</h3>
              <div className="contacts-line"></div>
            </div>
            <div className="contact-links">
              <a 
                href="https://www.youtube.com/@SoftByteStudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card youtube"
              >
                <div className="contact-icon">
                  <div className="icon-background"></div>
                  <span className="icon-symbol">▶</span>
                </div>
                <div className="contact-info">
                  <span className="contact-name">YouTube-канал</span>
                  <span className="contact-description">Обучающий контент</span>
                </div>
                <div className="contact-arrow">→</div>
              </a>
              <a 
                href="https://t.me/+vn6d9rXnOMczN2Ni" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-card telegram"
              >
                <div className="contact-icon">
                  <div className="icon-background"></div>
                  <span className="icon-symbol">✈</span>
                </div>
                <div className="contact-info">
                  <span className="contact-name">Телеграм-канал</span>
                  <span className="contact-description">Обучающие материалы</span>
                </div>
                <div className="contact-arrow">→</div>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="bottom-content">
            <div className="copyright">
              © {new Date().getFullYear()} SoftByte Studio. Все права защищены.
            </div>
            <div className="footer-tagline">
              Создаём технологии будущего
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}