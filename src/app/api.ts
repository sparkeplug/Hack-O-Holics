const API_URL = "http://ffab2ee2.ngrok.io/api";
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
      "Content-Type": "application/json"
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
