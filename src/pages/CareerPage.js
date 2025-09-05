import React from 'react';
import { Link } from 'react-router-dom';
import './CareerPage.css';

const CareerPage = () => {
  return (
    <div className="career-page">
      <div className="career-container">
        {/* 页面标题 - 居中 */}
        <div className="career-header">
          <h1 className="career-title">Careers at TechFocus</h1>
          <div className="career-title-line"></div>
        </div>


        {/* 第一个卡片 - Our People, Our Strength */}
        <div className="career-people-section">
          <h2 className="section-title">Our People, Our Strength</h2>
          <div className="section-line"></div>
          
          <div className="career-people-content">
            <div className="career-people-left">
              <p className="career-people-text">
                At TechFocus, we believe that our people are the foundation of everything we do.
              </p>
              <p className="career-people-text">
                Our team comprises highly skilled professionals—75% of whom hold advanced degrees, including master's degrees in computer science and PhDs in disciplines such as mechanical engineering. Beyond academic achievement, we maintain a strong emphasis on cybersecurity, with many of our team members holding industry-recognized certifications in this critical field. Additionally, half of our team specializes in cloud computing, enabling us to deliver scalable, secure, and efficient solutions tailored to today's evolving IT environments.
              </p>
              <p className="career-people-text">
                From seasoned engineers and data scientists to agile project managers and responsive account teams, every member of TechFocus contributes unique strengths that drive innovation and deliver measurable results.
              </p>
              <p className="career-people-text">
                We are proud to foster a culture grounded in integrity, inclusion, and continuous learning. Our diverse backgrounds and shared purpose empower us to solve complex challenges, exceed expectations, and grow together—one solution at a time.
              </p>
              <p className="career-people-text">
                We don't just build solutions. We build people, trust, and lasting impact.
              </p>
            </div>
            <div className="career-people-right">
              <img 
                src="/images/dd4.2.jpg" 
                alt="Our People"
                className="career-people-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder career-people-placeholder" style={{display: 'none'}}>
                <span>Our People Image</span>
              </div>
            </div>
          </div>
        </div>

        {/* 第二个卡片 - Benefits – Built for Builders */}
        <div className="career-benefits-section">
          <h2 className="section-title">Benefits – Built for Builders</h2>
          <div className="section-line"></div>
          
          <div className="career-benefits-content">
            <div className="career-benefits-left">
              <img 
                src="/images/a2.jpeg" 
                alt="Benefits"
                className="career-benefits-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder career-benefits-placeholder" style={{display: 'none'}}>
                <span>Benefits Image</span>
              </div>
            </div>
            <div className="career-benefits-right">
              <p className="career-benefits-text">
                At TechFocus, we believe the best companies are built by people who feel valued, empowered, and trusted. As a fast-growing, founder-led business, we offer more than just a job—we offer the opportunity to help shape something meaningful from the ground up.
              </p>
              <p className="career-benefits-text">
                As part of our commitment to supporting those who build with us, our current and planned benefits include:
              </p>
              <ul className="career-benefits-list">
                <li>Generous paid time off and flexible remote work options</li>
                <li>A 401(k) retirement savings plan with employer contributions</li>
                <li>A collaborative, high-impact team culture with low hierarchy</li>
                <li>Direct access to leadership and fast-track growth opportunities</li>
                <li>Planned medical and health coverage for full-time employees</li>
              </ul>
              <p className="career-benefits-text">
                As we grow, so will your benefits. We're actively building a thoughtful, competitive package to support your health, well-being, and long-term career goals.
              </p>
              <p className="career-benefits-text">
                If you thrive in a high-trust, high-growth environment—and want to build something that truly matters—TechFocus is where your work will have real impact.
              </p>
              
              <div className="browse-openings">
                <Link to="/jobs" className="browse-button">Browse Openings</Link>
              </div>
            </div>
          </div>
        </div>

        {/* 第三个卡片 - Social and Environmental Responsibility */}
        <div className="career-responsibility-section">
          <h2 className="section-title">Social and Environmental Responsibility</h2>
          <div className="section-line"></div>
          
          <div className="career-responsibility-content">
            <div className="career-responsibility-left">
              <p className="career-responsibility-text">
                At TechFocus, we believe that building a great company means acting with responsibility and integrity.
              </p>
              <p className="career-responsibility-text">
                As an SBA 8(a) and Woman-Owned Small Business, we are committed to supporting diversity in government contracting, working with inclusive partners, and creating opportunities for underrepresented groups in tech.
              </p>
              <p className="career-responsibility-text">
                We also care about our environmental impact. While we are still growing, we take thoughtful steps to reduce waste, use energy-efficient tools, and make responsible purchasing decisions.
              </p>
              <p className="career-responsibility-text">
                We're proud to build a business that reflects both innovation and accountability.
              </p>
            </div>
            <div className="career-responsibility-right">
              <img 
                src="/images/eagle.jpeg" 
                alt="Social and Environmental Responsibility"
                className="career-responsibility-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="image-placeholder career-responsibility-placeholder" style={{display: 'none'}}>
                <span>Social and Environmental Responsibility Image</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials 部分 */}
        <div className="testimonials-section">
          <h2 className="section-title">Testimonials</h2>
          <div className="section-line"></div>
          
          <div className="testimonials-content">
            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                What sets TechFocus apart is the clarity of purpose and the trust placed in its engineers. As a Principal Engineer, I'm empowered to drive solutions from concept to execution, with the full support of leadership and collaboration across functions. It's rare to find an environment where technical rigor, innovation, and personal growth are equally valued—and here, that balance is real. TechFocus brings together a diverse team working toward a shared goal, and I'm proud to be part of it.
              </p>
              <div className="testimonial-author">
                <div className="author-name">Hong W.</div>
                <div className="author-title">Principal Engineer</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                I'm proud to be part of the TechFocus team, where professionalism, integrity, and high standards define the culture. Everyone here is driven to deliver excellent results, and leadership sets a clear and inspiring example. Even as one individual in a growing company, I've always felt that my voice matters and my contributions are truly valued.
              </p>
              <div className="testimonial-author">
                <div className="author-name">Jeff L.</div>
                <div className="author-title">Senior Data Scientist</div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-quote">"</div>
              <p className="testimonial-text">
                TechFocus fosters a genuinely inclusive culture where diversity is valued and every voice matters. From day one, I've felt welcomed and respected. What sets TechFocus apart is how seriously the company listens to employee feedback and its ongoing commitment to improving—not just for clients, but for the team as well.
              </p>
              <div className="testimonial-author">
                <div className="author-name">Christina H.</div>
                <div className="author-title">Proposal Writer/Coordinator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerPage; 
 



