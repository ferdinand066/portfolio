function isLight(color: string) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 155;
}

// function showFormattedDate(date: string) {
//     return new Date(date).toLocaleDateString("en-EN", {
//         weekday: "long",
//         year: "numeric",
//         month: "long",
//         day: "numeric"
//     });
// }

export { isLight }