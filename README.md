# Webpack build process for Craft CMS
## Using Laravel Mix & Foundation

---
&nbsp;

### Step 1 - Install / Setup Craft CMS (like normal)
* **Install Craft CMS**
  * Run `composer create-project craftcms/craft <PROJECT_NAME>`
  

* **Setup Craft CMS**
  * Once composer has installed the project `cd <PROJECT_NAME>`
  * Create a new database in your local environment **before** running `./craft setup`
  * Run `./craft setup` and follow the prompts.
  
This step is a normal **Craft CMS** install / setup. For more detailed instructions or if your having problems, refer to there docs: 

<a href="https://docs.craftcms.com/v3" target="_blank">Craft CMS 3 Docs</a>

---

### Step 2 - Download this repo
* [**Download this Repo**](https://github.com/SpeakInCode/craftcms-webpack-foundation/archive/master.zip)
  * We're going to [**download the zip**](https://github.com/SpeakInCode/craftcms-webpack-foundation/archive/master.zip) of this repo rather than `clone` it because we're going to move it into the existing **Craft CMS** project folder we just created.
  * After downloading this repo extract it and move the folder's contents into the **Craft CMS** project that you just created. It will ask you if you want to override the existing `templates` directory, answer yes to this.
  
---

### Step 3 - Install dependencies
* From the root of your **Craft CMS** project, run `yarn` or if you don't have `yarn`, run `npm install`.
* Now to compile run either `yarn run watch` or `npm run watch`

---

### Step 4 - BrowserSync
* To have your code auto refresh in the browser on save, be sure to add `:3000` to your base URL when viewing the front-end of your site.

---

### Other Info

* `/templates` now contains a very basic `layouts/app.twig` and `index.twig` to start from.

* Your site's CSS/JS assets will be compiled to `/web/assets/dist/`

* Custom Javascript to be written in `/src/js/site.js`

* Custom SCSS to be written in `/src/scss/` use `main.scss` to import other `scss` files you create.

  


