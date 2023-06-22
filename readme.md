# Starting the Project

To start the project in a development environment, type the following command:

```sh
npm run dev
```

To build the project

```sh
vite build
```

---

**To change the paths of assets if needed :**

- path json file containing all the data of coachs/professors
    ```
    src/App.tsx - change the url of fetch
    ```

- path photos of categories/themes in the carousel in section1
    
    ```
     src/Section1.tsx - change the value of the variable “categoryImagePath”
    ```
    
- path photos of coachs/professors
    
    ```
    it’s in the json file, in the property “imagePath”
    ```
    
- path icons and all for website, such as carousel arrows..
    
    ```
    src/style/mainRules.scss - change the value of the $assetsPath variable
    ```

---

**Explanation about the style.**

- The style in this project is organised the same way as components. There is one style file relative to each components.

- All the style files are imported at the root of the application, in main.tsx, whith the file index.scss that includes a link to all the scss files

- Most of the css variables are set in the mainRules.scss file