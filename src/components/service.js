import {toast, Toaster} from "react-hot-toast";

export const user = JSON.parse(localStorage.getItem("user"));

export function username() {
    if (localStorage.getItem("user")) {
        return JSON.parse(localStorage.getItem("user")).username;
    }
    return "Anonymous";
}

export function logout() {
    localStorage.clear();
    window.location.reload();
}

export function loader() {
    return (
        <div className={"loader"}></div>
    )
}

export function toaster(status,message) {
    if (status === 200 || status === 201){
        toast.success(message);
    } else {
        toast.error(message);
    }
}