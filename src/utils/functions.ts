function isLight(color: string) {
    const hex = color.replace('#', '');
    const c_r = parseInt(hex.substr(0, 2), 16);
    const c_g = parseInt(hex.substr(2, 2), 16);
    const c_b = parseInt(hex.substr(4, 2), 16);
    const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
    return brightness > 155;
}

function showFormattedDate(date: string) {
    const newDate = new Date(date)
    newDate.setDate(newDate.getTime() + newDate.getTimezoneOffset() * 60 *1000 );
    console.log(newDate);
    return newDate;
    // .toLocaleDateString("en-EN", {
    //     weekday: "long",
    //     year: "numeric",
    //     month: "long",
    //     day: "numeric"
    // });
}

export { isLight, showFormattedDate }