const API_URL = "https://83d30fa3.ngrok.io/api";
const ENDPOINTS = {
  "bulk-upload": {
    endpoint: `${API_URL}/bulk_upload`,
    method: "post",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Response-Type": "arraybuffer"
    }
  },
  predict: {
    endpoint: `${API_URL}/predict`,
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data"
    }
  },
  visualization: {
    endpoint: `${API_URL}/visualization`,
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }
};

export default ENDPOINTS;
