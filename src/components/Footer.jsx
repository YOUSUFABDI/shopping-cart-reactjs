const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div className="footer">
      <p>Copyright © {currentDate}</p>
    </div>
  );
};
export default Footer;
