# Starting the Project

To start the project in a development environment, type the following command:

```sh
npm run dev
```

To build the project

```sh
vite build
```

To change the paths of assets if needed :

- path json file containing all the data of coachs/professors
    ```sh
    src/App.tsx - change the url of fetch
    ```

- path photos of categories/themes in the carousel in section1
    
    ```sh
     src/Section1.tsx - change the value of the variable “categoryImagePath”
    ```
    
- path photos of coachs/professors
    
    ```sh
    it’s in the json file, in the property “imagePath”
    ```
    
- path icons and all for website, such as carousel arrows..
    
    ```sh
    src/style/mainRules.scss
    ```