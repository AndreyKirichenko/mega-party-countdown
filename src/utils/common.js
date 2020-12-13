export const getRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

export const getRandomCoord = (max = 8) => Math.floor(Math.random() * max - max / 2);

export const getTextShadow = () => `${getRandomCoord()}px ${getRandomCoord()}px 0 ${getRandomColor()}66`;
