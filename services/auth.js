const API_URL = "https://siano-68ab8a611f1c.herokuapp.com";

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

export function getAllScores (token)
{
  
  return fetch(`${API_URL}/api/auth-consumer/score-company`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
    
  })
};

export function updateScore (body,token,idCompany,idScore)
{
   return fetch(`${API_URL}/api/auth-consumer/company/${idCompany}/score/${idScore}`, {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(body),
      })
};

export function modifyAccount(body,token)
{
  return fetch(`${API_URL}/api/auth-consumer/`, {
       method: "PUT",
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`
       },
       body: JSON.stringify(body),
     })
};

export function deleteAccount(token)
{
  return fetch(`${API_URL}/api/auth-consumer/`, {
       method: "DELETE",
       headers: {
         Accept: "application/json",
         "Content-Type": "application/json",
         Authorization: `Bearer ${token}`
       },
     })
};

export function getNotification ()
{
   return fetch(`${API_URL}/api/notification/0`, {
        method: "GET"
      })
};