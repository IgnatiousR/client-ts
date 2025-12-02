import logo from "../assets/images/logo.svg";
type LogoProps = {
  className?: string;
};
const Logo = ({ className = "" }: LogoProps) => {
  return <img src={logo} alt="jobsite" className={`logo ${className}`} />;
};

export default Logo;
