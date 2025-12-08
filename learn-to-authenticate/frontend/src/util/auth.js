import { redirect } from "react-router-dom";

export function getTokenDuration() {
  const storeExpDate = localStorage.getItem("expiration");
  const expDate = new Date(storeExpDate);
  const now = new Date();
  const duration = expDate.getTime() - now.getTime();

  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  const tokenDuration = getTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function tokenLoader() {
  const token = getAuthToken();
  return token;
}

export function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }
}
