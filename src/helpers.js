const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const limitText = (string, num) => {
    return string.substr(0,num);
}

export  {capitalizeFirstLetter, limitText};