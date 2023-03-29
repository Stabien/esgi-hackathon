import ArrowIcon from "@/components/Icons/ArrowIcon";
import Select from "@/components/Select";
import { ProfessionList, SportList } from "@/constants";
import { auth } from "@/constants/db";
import { updateUser } from "@/redux/user/user.actions";
import { selectUser } from "@/redux/user/user.selectors";
import { registerUser, RegistrationType } from "@/services";
import { JoinFirebase } from "@/services/db";
import { ProfessionCategory, User } from "@/types";
import { arrayToSelect } from "@/utils/display";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

type Props = {};

const Signin = (props: Props) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const childrenList = [1, 2, 3, 4, 5];
  const [isDisplaySelectJob, setIsDisplaySelectJob] = useState<boolean>(false);
  const [isDisplayChildren, setIsDisplayChildren] = useState<boolean>(false);
  const [isDisplaySport, setIsDisplaySport] = useState<boolean>(false);
  const [statusInscription, setStatusInscription] = useState<number>(0);

  const [userForm, setUserForm] = useState<User>({
    uid: "",
    firstname: "",
    lastname: "",
    email: "",
    dateOfBirth: 0,
    profession: "Sans emploi",
    children: 0,
    sport: "Inactif",
    role: null,
  });
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        throw new Error("Vos mots de passes ne correspondent oas  ");
      }
      const bodyRegister: RegistrationType = {
        email: userForm.email,
        password: password,
        confirmPassword: confirmPassword,
        firstname: userForm.firstname,
        dateOfBirth: userForm.dateOfBirth,
        lastname: userForm.lastname,
        profession: userForm.profession,
        children: userForm.children,
        role: "Logged",
        sport: userForm.sport,
      };
      const result = await JoinFirebase(bodyRegister);
      console.log(result);
      // dispatch(updateUser);
      // registerUser(bodyRegister);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="font-source text-neutral-500 flex flex-col pt-8  gap-4 items-center"
    >
      <button
        type="button"
        onClick={() => {
          console.log(auth.currentUser);
        }}
      >
        log user
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(user);
        }}
      >
        log Redux User
      </button>
      <h1 className="font-prompt mx-auto text-3xl font-bold text-neutral-500">
        Mon inscription
      </h1>
      <span className="text-center mx-8 text-neutral-300">
        Complétez ce formulaire afin de retrouver un contenu personnalisé.
      </span>
      <div className="flex gap-4">
        {Array(4)
          .fill("")
          .map((div, i) => (
            <div
              key={i}
              className={`${
                i <= statusInscription ? "bg-red-200" : "   "
              } border-red-200 border w-12 h-2  rounded-full`}
            ></div>
          ))}
      </div>
      <section className=" w-5/6 mt-8 mb-12">
        {statusInscription === 0 && (
          <article className="flex flex-col gap-8">
            <div>
              <p className="text-neutral-500 mb-4 font-semibold">
                Avez vous un emploi?
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`${
                    isDisplaySelectJob ? "bg-pink-50" : ""
                  } w-full shadow  p-4 rounded-lg`}
                  onClick={() => {
                    setIsDisplaySelectJob(true);
                  }}
                >
                  oui
                </button>
                <button
                  type="button"
                  className={`${
                    !isDisplaySelectJob ? "bg-pink-50" : ""
                  } w-full shadow  p-4 rounded-lg`}
                  onClick={() => {
                    setIsDisplaySelectJob(false);
                    setUserForm((prevState) => ({
                      ...prevState,
                      profession: "Sans emploi",
                    }));
                  }}
                >
                  non
                </button>
              </div>
            </div>
            {isDisplaySelectJob && (
              <div>
                <p className="text-neutral-500 mb-4 font-semibold">
                  Quelle profession?
                </p>
                <Select
                  value={userForm.profession}
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
              </div>
            )}
          </article>
        )}
        {statusInscription === 1 && (
          <article className="flex flex-col gap-8">
            <div>
              <p className="text-neutral-500 mb-4 font-semibold">
                Avez vous des enfants{" "}
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`${
                    isDisplayChildren ? "bg-pink-50" : ""
                  } w-full shadow  p-4 rounded-lg`}
                  onClick={() => {
                    setIsDisplayChildren(true);
                  }}
                >
                  oui
                </button>
                <button
                  type="button"
                  className={`${
                    !isDisplayChildren ? "bg-pink-50" : ""
                  } w-full shadow  p-4 rounded-lg`}
                  onClick={() => {
                    setIsDisplayChildren(false);
                    setUserForm((prevState) => ({
                      ...prevState,
                      children: 0,
                    }));
                  }}
                >
                  non
                </button>
              </div>
            </div>
            {isDisplayChildren && (
              <div>
                <p className="text-neutral-500 mb-4 font-semibold">
                  Si oui combien?
                </p>
                <div className="flex justify-between gap-4 ">
                  {childrenList.map((children, i) => (
                    <button
                      key={children}
                      type="button"
                      className={`${
                        userForm.children === children ? "bg-pink-50" : ""
                      } w-full py-4 rounded border border-pink-50 shadow  font-bold`}
                      onClick={() =>
                        setUserForm((prevState) => ({
                          ...prevState,
                          children: children,
                        }))
                      }
                    >
                      {children} {i === childrenList.length - 1 && "+"}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </article>
        )}
        {statusInscription === 2 && (
          <article className="flex flex-col gap-8">
            <div>
              <p className="text-neutral-500 mb-4 font-semibold">
                Faite vous du sport ?{" "}
              </p>
              <div className="flex gap-4">
                <button
                  type="button"
                  className={`${
                    isDisplaySport ? "bg-pink-50" : ""
                  } w-full shadow  p-4 rounded-lg`}
                  onClick={() => {
                    setIsDisplaySport(true);
                  }}
                >
                  oui
                </button>
                <button
                  type="button"
                  className={`${
                    !isDisplaySport ? "bg-pink-50" : ""
                  } w-full shadow  p-4 rounded-lg`}
                  onClick={() => {
                    setIsDisplaySport(false);
                    setUserForm((prevState) => ({
                      ...prevState,
                      sport: "Inactif",
                    }));
                  }}
                >
                  non
                </button>
              </div>
            </div>
            {isDisplaySport && (
              <div>
                <p className="text-neutral-500 mb-4 font-semibold">
                  Si oui, à quelle fréquence?{" "}
                </p>
                <div className="grid grid-cols-3 gap-4 ">
                  {SportList.filter((s) => s !== "Inactif").map((sport) => (
                    <button
                      type="button"
                      className={`${
                        userForm.sport === sport ? "bg-pink-50" : ""
                      } border border-pink-50 py-4 px-2 rounded`}
                      onClick={() =>
                        setUserForm((prevState) => ({
                          ...prevState,
                          sport: sport,
                        }))
                      }
                      key={sport}
                    >
                      {sport}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </article>
        )}
        {statusInscription === 3 && (
          <article className="flex flex-col gap-4">
            <label className="text-neutral-300">Prénom</label>
            <input
              required
              type="text"
              className="border border-neutral-150 px-4 py-2 rounded"
              placeholder="Prenom"
              name="firstname"
              value={userForm.firstname}
              onChange={(event: ChangeEvent) =>
                setUserForm((prevState) => ({
                  ...prevState,
                  firstname: (event.target as HTMLInputElement).value,
                }))
              }
            />
            <label className="text-neutral-300">Nom</label>

            <input
              required
              type="text"
              placeholder="Nom"
              className="border border-neutral-150 px-4 py-2 rounded"
              name="lastname"
              value={userForm.lastname}
              onChange={(event: ChangeEvent) =>
                setUserForm((prevState) => ({
                  ...prevState,
                  lastname: (event.target as HTMLInputElement).value,
                }))
              }
            />
            <label className="text-neutral-300">Date de naissance</label>

            <input
              type="date"
              name=""
              id=""
              required
              className="border border-neutral-150 px-4 py-2 rounded"
              onChange={(e) => {
                const newDate = new Date(e.target.value).getTime() / 1000;
                setUserForm((prevState) => ({
                  ...prevState,
                  dateOfBirth: newDate,
                }));
              }}
            />
            <label className="text-neutral-300">Email</label>
            <input
              required
              type="email"
              name="email"
              className="border border-neutral-150 px-4 py-2 rounded"
              placeholder="Email"
              value={userForm.email}
              onChange={(event: ChangeEvent) =>
                setUserForm((prevState) => ({
                  ...prevState,
                  email: (event.target as HTMLInputElement).value,
                }))
              }
            />
            <label className="text-neutral-300">Password</label>
            <input
              type="password"
              required
              placeholder="Password"
              className="border border-neutral-150 px-4 py-2 rounded"
              onChange={(event: ChangeEvent) =>
                setPassword((event.target as HTMLInputElement).value)
              }
            />
            <label className="text-neutral-300">Confirm password</label>
            <input
              type="password"
              required
              placeholder="Confirm Password"
              className="border border-neutral-150 px-4 py-2 rounded"
              onChange={(event: ChangeEvent) =>
                setConfirmPassword((event.target as HTMLInputElement).value)
              }
            />
          </article>
        )}
      </section>
      <div
        style={{ gridTemplateAreas: `'prev next'` }}
        className="fixed left-0 bottom-4 px-4 grid-cols-2 grid w-full"
      >
        {statusInscription > 0 && (
          <div
            style={{ gridArea: "prev" }}
            className=" w-fit cursor-pointer"
            onClick={() => setStatusInscription((prevState) => prevState - 1)}
          >
            <ArrowIcon size="30" />
          </div>
        )}
        {statusInscription < 3 && (
          <div
            style={{ gridArea: "next" }}
            className=" ml-auto w-fit cursor-pointer"
            onClick={() => setStatusInscription((prevState) => prevState + 1)}
          >
            <ArrowIcon rotation={180} size="30" />
          </div>
        )}
        {statusInscription === 3 && (
          <button
            type="submit"
            className="px-5 py-2 rounded text-neutral-350 border border-yellow-200 bg-yellow-150"
          >
            {" "}
            S'inscrire
          </button>
        )}
      </div>
    </form>
  );
};

export default Signin;
