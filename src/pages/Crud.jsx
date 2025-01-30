import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, removeUser } from "../store/userSlice";
import { toast } from "react-toastify";

function Crud() {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    function validate() {
        if (name === "") {
            toast.info("name is not valid!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return false;
        }
        if (lastname === "") {
            toast.info("lastname is not valid!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return false;
        }
        if (email === "") {
            toast.info("email is not valid!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return false;
        }
        if (!email.includes("@")) {
            toast.info("email should include @ !", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return false;
        }
        if (age === "") {
            toast.info("age is not valid!", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return false;
        }
        return true;
    }
    function handleAddUser() {
        const isValid = validate();
        if (!isValid) {
            return;
        }
        const data = {
            name,
            lastname,
            email,
            age,
            id: Date.now(),
        };
        dispatch(add(data));
    }
    function handleDel(id) {
        dispatch(removeUser(id));
    }
    return (
        <div>
            <div className="container">
                <div className="card w-[600px] mx-auto rounded-lg bg-blue-300 p-2 flex flex-col gap-3 pb-7 mb-10">
                    <h1 className="text-center text-[35px] font-bold">ADDER</h1>
                    <input
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        className="p-2 border-[2px] border-white outline-none focus:border-blue-500 rounded-lg text-[18px] font-medium"
                        type="text"
                        placeholder="enter the name"
                    />
                    <input
                        value={lastname}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                        className="p-2 border-[2px] border-white outline-none focus:border-blue-500 rounded-lg text-[18px] font-medium"
                        type="text"
                        placeholder="enter the lastname"
                    />
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        className="p-2 border-[2px] border-white outline-none focus:border-blue-500 rounded-lg text-[18px] font-medium"
                        type="email"
                        placeholder="enter the email"
                    />
                    <input
                        value={age}
                        onChange={(e) => {
                            setAge(e.target.value);
                        }}
                        className="p-2 border-[2px] border-white outline-none focus:border-blue-500 rounded-lg text-[18px] font-medium"
                        type="number"
                        placeholder="enter the age"
                    />
                    <div className="text-center">
                        <button
                            onClick={handleAddUser}
                            className="w-[230px] p-2 bg-white rounded-lg font-bold text-[20px] cursor-pointer active:scale-90 transition-all"
                        >
                            ADD a USER
                        </button>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    {users.length > 0 ? (
                        users.map((value, index) => {
                            return (
                                <div
                                    className="flex justify-between items-center bg-blue-300 p-3 rounded-lg"
                                    key={value.id}
                                >
                                    <h1>Name: {value.name}</h1>
                                    <h1>lastName: {value.lastname}</h1>
                                    <h1>email: {value.email}</h1>
                                    <h1>age: {value.age}years</h1>
                                    <div
                                        className="px-2 border-[1px] border-black rounded-full cursor-pointer active:bg-red-500 bg-white"
                                        onClick={() => {
                                            handleDel(value.id);
                                        }}
                                    >
                                        X
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <h1 className="text-center">No Users</h1>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Crud;
