//user details from local storage
export const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

//access quesAnsList from localStorage
export const queAnsList = JSON.parse(localStorage.getItem('queAnsList'));

//access quesList from localStorage 
export const quesList = JSON.parse(localStorage.getItem('quesList'));
