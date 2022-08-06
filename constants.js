export const SECTION_TYPE = {
    TEXT_BLOCK : "TEXT_BLOCK",
    IMAGE : "IMAGE_BLOCK",
}

export const config ={
    API_ENDPOINT : process.env.NEXT_PUBLIC_APP_API_ENDPOINT|| "https://api-nickscorp-app.herokuapp.com"
    //API_ENDPOINT : "/api"
}

export const THEME = {
    DARK : "dark-theme",
    LIGHT : "light-theme"
}

export const categories = [
    {
        id: 1,
        color : "red",
        name : "Cars",
        description : "Elit incididunt quis minim adipisicing ea culpa dolore consectetur.",
        img : "cars.webp",
        width: 3000,
        height : 3000,
    },
    {
        id: 2,
        color : "green",
        name : "Jewelry",
        description : "Elit incididunt quis minim adipisicing ea culpa dolore consectetur.",
        img : "jewelry.webp",
        width: 2000,
        height : 2000,
    },
    {
        id: 3,
        color : "orange",
        name : "Houses",
        description : "Elit incididunt quis minim adipisicing ea culpa dolore consectetur.",
        img : "houses.webp",
        width: 1065,
        height : 1065,
    }
]