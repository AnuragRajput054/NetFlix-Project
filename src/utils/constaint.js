export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const User_LOGO =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";

export const BG_URL =
  "https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer" + process.env.REACT_APP_TMDB_KEY,
  },
};

export const SUPPORTED_LANGUAGE = [
  { identifier: "en", name: "English" },
  { identifier: "Hindi", name: "हिन्दी" },
  { identifier: "Spanish", name: "Spanish" },
  { identifier: "Punjabi", name: "Punjabi" },
  { identifier: "Chinese", name: "Chinese" },
];

export const GIMINI_API_KEY = process.env.REACT_APP_GIMINI_API_KEY;

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
