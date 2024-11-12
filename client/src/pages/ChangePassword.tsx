import { useState } from "react";
import { ToastContainer } from "react-toastify";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

import Ballot from '@assets/img/ballot-box.png';
import Button from "@components/Button";
import Input from "@components/Input";
import { ToastError, ToastWarning } from "@components/Toast";

export const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [oldPasswordVisible, setOldPasswordVisible] = useState(false);
  const [newPasswordVisible, setNewPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handlePassowrdVisibility = (type: string) => {
    if (type === "old") {
      setOldPasswordVisible(!oldPasswordVisible);
    } else if (type === "new") {
      setNewPasswordVisible(!newPasswordVisible);
    } else if (type === "confirm") {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!oldPassword || !newPassword || !confirmPassword) {
      return ToastWarning({ message: "Please fill all the fields." , duration: 1500});
    }

    if (newPassword !== confirmPassword) {
      return ToastError({ message: "New password does not match with confirm password." , duration: 1500});
    }
  };

  return (
    <div className="min-h-dvh text-neutral-100 profile-background">
      <div className="h-dvh flex justify-center items-center">
        <div className="w-11/12 md:max-w-md px-6 md:px-8 py-6 md:py-8 bg-dark-card shadow-inner shadow-neutral-800 rounded-lg md:rounded-xl">
          <a href="/" className="flex flex-col items-center gap-2">
            <img className='w-14 h-14 mr-2' src={Ballot} alt="Logo" />
            <h3 className="text-xl md:text-2xl font-bold text-center mb-2 md:mb-4">Pemira FSM UNDIP</h3>
          </a>

          <form onSubmit={handleSubmit}>
            <div className="flex w-full flex-col gap-3">
              <Input
                id="oldPassword"
                name="oldPassword"
                label="Old Password"
                value={oldPassword}
                type={oldPasswordVisible ? "text" : "password"}
                placeholder="********"
                icon={
                  oldPasswordVisible ? (
                    <EyeSlashIcon className="size-6" />
                  ) : (
                    <EyeIcon className="size-6"/>
                  )
                }
                onChange={(e) => setOldPassword(e.target.value)}
                onClickIcon={() => handlePassowrdVisibility("old")}
              />
              
              <Input
                id="newPassword"
                name="newPassword"
                label="New Password"
                value={newPassword}
                type={newPasswordVisible ? "text" : "password"}
                placeholder="********"
                icon={
                  newPasswordVisible ? (
                    <EyeSlashIcon className="size-6" />
                  ) : (
                    <EyeIcon className="size-6"/>
                  )
                }
                onChange={(e) => setNewPassword(e.target.value)}
                onClickIcon={() => handlePassowrdVisibility("new")}
              />

              <Input
                id="confirmPassword"
                name="confirmPassword"
                label="Confirm Password"
                value={confirmPassword}
                type={confirmPasswordVisible ? "text" : "password"}
                placeholder="********"
                icon={
                  confirmPasswordVisible ? (
                    <EyeSlashIcon className="size-6" />
                  ) : (
                    <EyeIcon className="size-6"/>
                  )
                }
                onChange={(e) => setConfirmPassword(e.target.value)}
                onClickIcon={() => handlePassowrdVisibility("confirm")}
              />
            </div>

            <div className="flex justify-center mt-4 md:mt-6">
              <Button type="submit" label="Change Password" customClass="px-6 py-2" />
            </div>
          </form>
          <ToastContainer  
            theme="dark"
          />
        </div>
      </div>
    </div>
  );
};