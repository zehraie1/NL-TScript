function getData() {
   return "Zehra";
}
let dataName = getData(); // calling the function and storing the return value in a variable
console.log("dataName: " + dataName); // printing the return value stored in the variable

//browser console
function launchBrowser(browserName) {
let browser = browserName.toLowerCase(); // converting the input to lowercase for case-insensitive comparison
    switch (browser) {
        case "chrome":
            return "Launching Chrome browser";
        case "firefox":
            return "Launching Firefox browser";
        case "safari":
            return "Launching Safari browser";
        default:
            return "Browser not supported";
    }
}

console.log(launchBrowser("chrome"));
console.log( " hey " + launchBrowser("firefox"));