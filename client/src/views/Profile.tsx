import Nav from "../components/Nav";
import avatar from "../assets/img/stylish-boy.png";

const user = {
  name: "Satria Reza Ramadhan",
  nim: "24060120130052",
  major: "Informatika",
  classOf: 2021,
  status: "Voted"
}

const Profile = () => {
  return (
    <div className="min-h-dvh text-neutral-100">
      <Nav active="profile" />
      <div className="relative w-full h-36 bg-gradient-to-br from-[#00b4db] to-[#0083b0] rounded-b-lg">
        <img className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-24 h-24 object-cover  bg-gradient-to-br ring-[6px] ring-black from-[#30cfd0] to-[#330867] rounded-full" src={avatar} alt="User Avatar" />
      </div>
      <div className="mt-20 text-center">
        <p className="mb-1 text-2xl font-semibold">{user.name}</p>
        <p className="text-neutral-300">{user.nim}</p>
        <p className="">{user.major} - {user.classOf}</p>
      </div>
      <div className="mt-10 flex flex-col items-center gap-2">
        <h6 className="font-semibold text-lg">Status</h6>
        <div className="w-fit px-6 py-1 bg-cyan-600 text-base font-medium opacity-90 rounded-full">{user.status}</div>
      </div>
      <div className="flex justify-center mt-20">
        <a href="/logout"
          className="select-none rounded-lg bg-red-600 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          <span><i className="fa-solid fa-arrow-right-from-bracket mr-2"></i></span>Logout
        </a>
      </div>
    </div>
  );
}

export default Profile;