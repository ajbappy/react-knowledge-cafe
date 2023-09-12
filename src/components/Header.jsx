import profileImage from "../assets/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center py-10">
      <h1 className="text-3xl md:text-5xl font-bold">Knowledge Cafe</h1>
      <img src={profileImage} alt="" />
    </div>
  );
};

export default Header;
