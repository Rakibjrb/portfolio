import moment from "moment";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#484848] text-base-content rounded">
      <aside>
        <p className="text-xl">
          Copyright © {moment().format("YYYY")} - All right reserved by
          rakibul-dev
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
