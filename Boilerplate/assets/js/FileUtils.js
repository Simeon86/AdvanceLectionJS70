class FileUtils {

    names = [];

    paths = {};

    constructor(data){
        this.data = data;
    }

    // Simeon,\r\nCaloyan,\r\nValeria,\r\nMaria,\r\nAleks,\r\nIvancho,\r\nPetyr\r\n\r\n'

    dataToArray(separator) {
       this.names = this.data.split(separator).map(item => item.trim())
    }

    showNames(container) {
        this.names.forEach(name => {
            let liItem = document.createElement('li');
            liItem.textContent = name;
            container.append(liItem);
        })
    }

    dataToRoutes() {
        try {
            this.paths = JSON.parse(this.data);
        } catch(event) {
            console.log('Hello')
        }
    }

    // routes = {
    //     about: {path: '/about-us', key: 'aboutUs', textToShow: 'About Us'},
    //     base: {path: '/', key: 'home', textToShow: 'Home'},
    //     products: {path: '/products', key: 'products', textToShow: 'Products'}
    // }

    showRoutes(container){
        Object.keys(this.paths).forEach(route => {
            let anchorItem = document.createElement('a');
            // anchorItem.href = this.paths[route].path; долният ред прави същото.
            anchorItem.setAttribute('href', this.paths[route].path);
            anchorItem.setAttribute('data-key', this.paths[route].key);
            anchorItem.textContent = this.paths[route].textToShow;

            container.append(anchorItem)
        })
    }
}

export default FileUtils
