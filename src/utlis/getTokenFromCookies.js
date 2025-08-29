// utils/getTokenFromCookies.js
export function getTokenFromCookies() {
  const match = document.cookie.match(new RegExp("(^| )token=([^;]+)"));
  return match ? match[2] : null;
}
