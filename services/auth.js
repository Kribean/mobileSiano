const API_URL = "http://localhost:8000";

export function createAccount (body)
{
   return fetch(`${API_URL}/api/auth-consumer/signup-consumer`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
};

export function logToAccount (body)
{
   return fetch(`${API_URL}/api/auth-consumer/login-consumer`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
};

export function getAllEvents ()
{
  
  return fetch(`${API_URL}/api/event`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
    
  })
};

export function getTenUpgradeCompanies ()
{
   return fetch(`${API_URL}/api/auth-company/best-one`, {
        method: "GET"
      })
};

export function getAllCompanies (endpoint)
{
   return fetch(`${API_URL}/api/auth-consumer/all-companies${endpoint}`, {
        method: "GET",
      })
};