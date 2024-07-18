import Nav from "../components/Nav";

const user = {
  name: "Satria Reza Ramadhan",
  nim: "24060120130052",
  major: "Informatika",
  classOf: 2021,
}

const Profile = () => {
  return (
    <div className="min-h-dvh text-neutral-100">
      <Nav active="profile" />
      <div className="w-full h-36 bg-gradient-to-br from-[#00b4db] to-[#0083b0] rounded-b-lg"></div>
      <div>
        <p className="text-center text-2xl font-semibold">{user.name}</p>
      </div>
    </div>
  );
}

export default Profile;