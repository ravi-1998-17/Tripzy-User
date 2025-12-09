import axios from "axios";

const API_KEY = "AIzaSyCpTMhsXf_LZVVE48VGCKqsSRGEAOA7fo4";
const DB_URL = "https://tripzy-de9a4-default-rtdb.firebaseio.com";

export async function signUp(email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    const res = await axios.post(url, { email, password, returnSecureToken: true });
    return res.data;
}

export async function signIn(email, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
    const res = await axios.post(url, { email, password, returnSecureToken: true });
    return res.data;
}

//Product (Public Read)
export async function fetchProducts() {
    const res = await axios.get(`${DB_URL}/products.json`)
    return res.data;
}

export async function createProduct(product, idToken) {
    const res = await axios.post(`${DB_URL}/products.json?auth=${idToken}`, product);
    return res.data;
}

export async function updateProduct(productId, patch, idToken) {
    const res = await axios.patch(`${DB_URL}/products/${productId}.json?auth=${idToken}`, patch)
    return res.data;
}

export async function deleteProduct(productId, idToken) {
    const res = await axios.delete(`${DB_URL}/products/${productId}.json?auth=${idToken}`);
    return res.data;
}

//Orders
export async function createOrder(order, idToken) {
    const res = await axios.post(`${DB_URL}/orders.json?auth=${idToken}`, order);
    return res.data;
}