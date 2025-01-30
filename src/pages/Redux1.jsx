import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoDo, remove } from "../store/TodoSlicer";
import { toast } from "react-toastify";

function Redux1() {
    const [ish, setIsh] = useState("");
    const todo = useSelector((state) => state.todo.todo);
    const dispatch = useDispatch();

    function validate() {
        if (ish === "") {
            toast.info("todo is not valid!", {
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
    const add = () => {
        toast.success("ToDo added!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    const del = () => {
        toast.info("ToDo is deleted!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    };
    function handleAddToDo() {
        const isValid = validate();
        if (!isValid) {
            return;
        }
        const data = {
            id: Date.now(),
            value: ish,
        };
        dispatch(addtoDo(data));
        add();
        setIsh("");
    }
    function handleDel(id) {
        dispatch(remove(id));
        del();
    }
    return (
        <div>
            <div className="container ">
                <div className="cart w-[600px] mx-auto bg-blue-300 rounded-md p-3 pb-6">
                    <h1 className="text-[30px] text-white font-bold text-center mb-4">
                        Add a ToDo
                    </h1>
                    <input
                        value={ish}
                        onChange={(e) => {
                            setIsh(e.target.value);
                        }}
                        className="p-3 w-full rounded-lg border-[2px] border-white outline-none focus:border-blue-700 transition-all mb-4 text-[18px] font-bold"
                        type="text"
                        placeholder="todo"
                    />
                    <div className="text-center">
                        <button
                            onClick={handleAddToDo}
                            className="w-[130px] p-2 bg-white rounded-lg font-bold text-[20px] cursor-pointer active:scale-90 transition-all"
                        >
                            Add
                        </button>
                    </div>
                    <div className="mt-4 flex flex-col gap-2">
                        {todo.length > 0 ? (
                            todo.map((e, index) => {
                                return (
                                    <div
                                        className="flex justify-between items-center p-2 bg-white rounded-lg
                                    "
                                        key={e.id}
                                    >
                                        <li className="text-[18px] font-bold">
                                            {e.value}
                                        </li>
                                        <div
                                            className="px-2 border-[1px] border-black rounded-full cursor-pointer active:bg-red-500 bg-white"
                                            onClick={() => {
                                                handleDel(e.id);
                                            }}
                                        >
                                            X
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <li className="text-center font-bold">
                                No todos YET
                            </li>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Redux1;
