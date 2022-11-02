// Save Data to LocalStorage
export const saveDataToLocal = (key,valueToSave,defaultValue)=>{
    const data = valueToSave !== '' ? valueToSave : defaultValue 
    return localStorage.setItem(key,JSON.stringify(data))
}

// Get Data from LocalStorage
export const getDataFromLocal = (key,defaultValue) =>{
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : defaultValue
}