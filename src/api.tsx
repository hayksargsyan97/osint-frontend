const API_URL = "http://localhost:8080/api/scans";

export const startScan = async (domain: string) => {
    const response = await fetch(`${API_URL}?domain=${domain}`, { method: "POST" });
    return response.json();
};

export const fetchScans = async () => {
    const response = await fetch(API_URL);
    return response.json();
};
  