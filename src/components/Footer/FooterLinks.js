/* eslint-disable react/prop-types */
import './FooterLinks.css';

const FooterLinks = ({ title, links = [] }) => {
   const renderLinks = () =>
      links.map(({ name, link, type = 'link', external = false }, index) => (
         <li key={`${index}-${name}`}>
            {type === 'link' && !external && (
               <a
                  href={link}
                  className="text-footer-links color-secondary-dark"
               >
                  {name}
               </a>
            )}
            {type === 'link' && external && (
               <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-footer-links color-secondary-dark"
               >
                  {name}
               </a>
            )}
            {type === 'phone' && (
               <a
                  href={`tel:${link}`}
                  className="text-footer-links color-secondary-dark"
               >
                  {name}
               </a>
            )}
            {type === 'email' && (
               <a
                  href={`mailto:${link}`}
                  className="text-footer-links color-secondary-dark"
               >
                  {name}
               </a>
            )}
            {type === 'text' && (
               <p className="text-footer-links color-secondary-dark">{name}</p>
            )}
         </li>
      ));
   return (
      <div className="footer-links-container">
         <h3 className="color-primary-green text-footer-link-head">{title}</h3>
         <ul className="no-list-style">{renderLinks()}</ul>
      </div>
   );
};

export default FooterLinks;
