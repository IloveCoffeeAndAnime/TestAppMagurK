export function getImgTitle(imgInfo) {
    return imgInfo.description ? imgInfo.description : imgInfo.alt_description;
};