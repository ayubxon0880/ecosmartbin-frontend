export const API = "https://ecosmarbin-backend.onrender.com/api/v1";
// export const API = "http://localhost:8000/api/v1";

export const token = {
    'Authorization': `Bearer ${localStorage.getItem("token")}`
}