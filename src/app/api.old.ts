const API_URL = "https://1a786ac2.ngrok.io/api";
const ENDPOINTS = {
  "bulk-upload": {
    endpoint: `${API_URL}/bulk_upload`,
    method: "post",
    header: {
      "Content-Type": "multipart/form-data",
      reportProgress: true
    }
  },
  predict: {
    endpoint: `${API_URL}/predict`,
    method: "post",
    header: {
      "Content-Type": "multipart/form-data"
    }
  },
  visualization: {
    endpoint: `${API_URL}/visualization`,
    method: "post",
    header: {
      "Content-Type": "multipart/form-data"
    }
  }
};

export default ENDPOINTS;
