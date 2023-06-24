
// //access user from localStorage
// export const user = JSON.parse(localStorage.getItem('user'))

// //access qna from localStorage
// export const quesAndAns = JSON.parse(localStorage.getItem('qna'))

// //access quesList from localStorage 
// export const quesList = JSON.parse(localStorage.getItem('quesList'))


export const getItem = (key) => {
    return JSON.parse(localStorage.getItem(key));
}