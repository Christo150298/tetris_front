
export default async function apiFetch( url, method, body = null, authRequired = false){
    const headers = new Headers();
    headers.set('Content-Type', 'application/json');
    const full_route = process.env.REACT_APP_BACKEND_URL + url

    if (authRequired) {
      const token = localStorage.getItem('token'); 
      headers.set('Authorization', `Bearer ${token}`);
    }
  
    const data = {
      method,
      headers,
    };
  
    if (method !== 'GET' && body) {
        data.body = JSON.stringify(body);
    }
    
    
    const response = await fetch(full_route, data )
    .then( res => res.json() )
    .then( data => {
        if(data.message !== "ok") throw new Error(data.message)

        return data })
    .catch( err => err )

    return response
}