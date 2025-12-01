export async function fetchAvbPlaces() {
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch");
    }
    
    return resData.places;
}

export async function updateUserPlaces(places) {
    const res = await fetch('http://localhost:3000/user-places', {
        method: 'PUT', 
        body: JSON.stringify({places}),
        headers: {
            'Content-Type' : 'application/json'
        }
    });
    const resData = await res.json();
    
    if (!res.ok) {
        throw new Error("Failed to update");
    }
    
    return resData.message;
}

export async function fetchUserPlaces() {
    const response = await fetch("http://localhost:3000/user-places");
    const resData = await response.json();

    if (!response.ok) {
        throw new Error("Failed to fetch user places");
    }
    
    return resData.places;
}