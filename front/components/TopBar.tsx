import { selectUser } from "@/redux/user/user.selectors";
import React from "react";
import { useSelector } from "react-redux";

type Props = {};

const TopBar = (props: Props) => {
  const user = useSelector(selectUser);
  return (
    <div
      style={{ gridArea: "topBar" }}
      className="flex pl-8 py-4 gap-4 top-0 left-0 bg-white sticky items-center"
    >
      <div className="w-10 h-10 rounded-full bg-red-500"></div>
      <span className="font-bold  text-neutral-500">
        {user.firstname + " " + user.lastname}
      </span>
      {user.role === "Admin" && (
        <span className="font-light text-blue-250">{user.role}</span>
      )}
    </div>
  );
};

export default TopBar;
