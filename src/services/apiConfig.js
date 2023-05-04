let apiUrl;


const apiUrls = {
  production: "https://makeup.herokuapp.com/makeup",
  development: "https://makeup.herokuapp.com/makeup",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

export default apiUrl;
