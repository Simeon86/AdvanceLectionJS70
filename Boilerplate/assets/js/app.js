import FileUtils from "./FileUtils.js";


let fileInput = document.querySelector('#myFile');

fileInput.addEventListener('change', function(event) {
    let file = event.target.files[0];
    let reader = new FileReader();

    reader.readAsText(file)

    reader.onload = function() {
        let { result } = reader;
        let fileUtils = new FileUtils(result);

        fileUtils.dataToArray(',\r\n');

        let namesContainer = document.querySelector('#namesContainer');
        fileUtils.showNames(namesContainer);

        fileUtils.dataToRoutes();

        let routesContainer = document.querySelector('#routesContainer');
        fileUtils.showRoutes(routesContainer);

        console.log(fileUtils)
    }

    reader.onerror = function() {
        console.log(reader.error);
    }
})

let a = {
    base: {
        path: '/',
        key: 'home',
        textToShow: 'Home'
    },
    about: {
        path: '/about-us',
        key: 'aboutUs',
        textToShow: 'About Us'
    },
    products: {
        path: '/products',
        key: 'products',
        textToShow: 'Products'
    },
}

console.log(JSON.stringify(a))