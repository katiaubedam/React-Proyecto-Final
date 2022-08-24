function cleanText(str) {
    let text = str
    text.replaceAll("<strong>", "")
    text.replaceAll("<em>", "")
    text.replaceAll("</strong>", "")
    text.replaceAll("</em>", "")

    return text
}

function convertURL(str) {
    let newString = str.toLowerCase()
    newString = newString.replaceAll(" ", "-")

    let specialChars = "!@#$^&%*()+=[]{}|:<>?,.'";
    for (let i = 0; i < specialChars.length; i++) {
        newString = newString.replaceAll(specialChars[i], "")
    }

    newString = newString.replaceAll("--", "-")
    newString = newString.replaceAll("á", "a")
    newString = newString.replaceAll("é", "e")
    newString = newString.replaceAll("í", "i")
    newString = newString.replaceAll("ó", "o")
    newString = newString.replaceAll("ú", "u")
    newString = newString.replaceAll("ü", "u")

    return newString
}

export { cleanText, convertURL }