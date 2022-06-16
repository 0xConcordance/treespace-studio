export async function getAllData(tokenID) {
    try{
        const response = await fetch('/tokenFormatter/' + tokenID);
        return await response.json();
    } catch(error) {
        return [];
    }
    
}   