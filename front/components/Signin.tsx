import Select from "@/components/Select";
import { ProfessionList, SportList } from "@/constants";
import { selectUser } from "@/redux/user/user.selectors";
import { ProfessionCategory, User } from "@/types";
import { arrayToSelect } from "@/utils/display";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useState,
} from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

type Props = {};

const Signin = (props: Props) => {
  const user = useSelector(selectUser);

  const [userForm, setUserForm] = useState<User>({
    email: "",
    age: 0,
    profession: "Sans emploi",
    children: 0,
    sport: "Inactif",
    role: null,
  });
  const [password, setPassword] = useState<string>("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(userForm);
      throw new Error("Test");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        value={userForm.email}
        onChange={(event: ChangeEvent) =>
          setUserForm((prevState) => ({
            ...prevState,
            email: (event.target as HTMLInputElement).value,
          }))
        }
      />
      <input
        type="password"
        onChange={(event: ChangeEvent) =>
          setPassword((event.target as HTMLInputElement).value)
        }
      />
      <input
        type="number"
        required
        // value={userForm.age}
        placeholder="Age"
        min={0}
        max={122}
        onInput={(event: FormEvent) => {
          const newAge = parseFloat((event.target as any).value);
          setUserForm((prevState) => ({
            ...prevState,
            age: newAge,
          }));
        }}
      />
      <Select
        name="profession"
        onChange={(value: string) =>
          setUserForm((prevState) => ({
            ...prevState,
            profession: value as ProfessionCategory,
          }))
        }
        options={arrayToSelect(ProfessionList)}
        placeholder="Profession"
      />
      <input
        required
        type="number"
        // value={userForm.age}
        placeholder="Enfants"
        min={0}
        max={6}
        onInput={(event: FormEvent) => {
          const newChildren = parseFloat((event.target as any).value);
          setUserForm((prevState) => ({
            ...prevState,
            children: newChildren,
          }));
        }}
      />
      <div className="flex gap-2">
        {SportList.map((sport) => (
          <div
            className={
              userForm.sport === sport ? "border-red-200 border" : "border-none"
            }
            key={sport}
            onClick={() =>
              setUserForm((prevState) => ({
                ...prevState,
                sport: sport,
              }))
            }
          >
            {sport}
          </div>
        ))}
      </div>

      <button type="submit"> log</button>
    </form>
  );
};

export default Signin;
