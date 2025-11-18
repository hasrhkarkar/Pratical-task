import React from "react";
import "./Footer.scss";

// Import logo correctly from src folder
import headerLogo from "../../headerlogo.svg";

interface SocialLink {
  id: number;
  name: string;
  icon: string;
  url: string;
}

interface ContactItem {
  id: number;
  type: string;
  icon: string;
  value: string;
}

interface FooterData {
  logo: {
    image: string;
    alt: string;
  };
  description: string;
  contact: ContactItem[];
  social: SocialLink[];
  childImage: {
    image: string;
    alt: string;
  };
}

const Footer: React.FC = () => {
  const footerData: FooterData = {
    logo: {
      image: headerLogo, 
      alt: "Kindergarten Logo",
    },

    description:
      "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.",

    contact: [
      {
        id: 1,
        type: "phone",
        icon: "/images/call.svg",
        value: "1234567890",
      },
      {
        id: 2,
        type: "email",
        icon: "/images/email.svg",
        value: "abc@gmail.com",
      },
      {
        id: 3,
        type: "address",
        icon: "/images/location.svg",
        value: "Ahemdabad , Gujrat",
      },
    ],

    social: [
      {
        id: 1,
        name: "LinkedIn",
        icon: "/images/linkdin.svg",
        url: "https://linkedin.com",
      },
      {
        id: 2,
        name: "Facebook",
        icon: "/images/facbook.svg",
        url: "https://facebook.com",
      },
      {
        id: 3,
        name: "Instagram",
        icon: "/images/instagram.svg",
        url: "https://instagram.com",
      },
      {
        id: 4,
        name: "Twitter",
        icon: "/images/twitter.svg",
        url: "https://twitter.com",
      },
    ],

    childImage: {
      image: "/images/footermainimg.svg",
      alt: "Happy child with toys",
    },
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Left Section */}
        <div className="footer-left">

          {/* Logo */}
          <div className="footer-logo">
            <img src={footerData.logo.image} alt={footerData.logo.alt} />
          </div>

          {/* Description */}
          <p className="footer-description">{footerData.description}</p>

          {/* Social Links */}
          <div className="footer-social">
            {footerData.social.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={social.name}
              >
                <span className="social-icon">
                  <img src={social.icon} alt={social.name} />
                </span>
              </a>
            ))}
          </div>

        </div>

        {/* Contact Section */}
        <div className="footer-contact-section">
          <h3 className="footer-contact-heading">Contact</h3>

          <div className="footer-contact">
            {footerData.contact.map((item) => (
              <div key={item.id} className="contact-item">
                <span className="contact-icon">
                  <img src={item.icon} alt={item.type} />
                </span>
                <span className="contact-text">{item.value}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Right Side - Image */}
        <div className="footer-right">
          <img
            src={footerData.childImage.image}
            alt={footerData.childImage.alt}
            className="footer-child-image"
          />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
