# Quick Sample - Child Theme and JS Integration

## Set Up Basic Child Theme

For details on setting up a child theme in WordPress, [see their official developer guide](https://developer.wordpress.org/themes/advanced-topics/child-themes/).

First, create folder for child theme inside the wp-content/themes directory (e.g. neve-child, as a child theme for the neve theme). For example, see the following directory in this repo:

```wp-sample-with-child-theme/wp-content/themes/neve-child/```

Create a stylesheet file called ```style.css``` inside ```wp-content/themes/neve-child/``` and make sure it contains the necessary WP child theme header info (at least “Theme Name” and “Template”). See this style.css file as an example:

```wp-sample-with-child-theme/wp-content/themes/neve-child/style.css```

Create a functions.php file to enqueue your stylesheet (and add other custom functions later). See this functions.php file as an example:

```wp-sample-with-child-theme/wp-content/themes/neve-child/functions.php```

Add an image called ```screenshot.png``` to your child theme's directory. This image will represent your child theme in WordPress admin.

Activate your child theme from the ```Appearance > Themes > Add New``` menu in WordPress admin.

## Override a Parent Theme Template

Copy one of the parent theme's php templates to your child theme directory in order to override that parent theme template. The idea in copying is that you're starting from its "out of the box" state, and you'll modify it from there. Your copy will take precedence over the version in the parent theme. To see an example of this in action, checkout the following template:

```wp-sample-with-child-theme/wp-content/themes/neve-child/page-about-us.php```

The template ```page-about-us.php``` is a copy of the parent theme's ```page.php``` file. It was renamed so that it will only be invoked when WordPress receives a request for a ```page``` with a slug of ```about-us```. In this way, we ensure our customizations only appear for that one page. 

Check out the [WordPress template hierarchy documentation](https://developer.wordpress.org/themes/basics/template-hierarchy/) to learn about all the possible templates and their naming conventions.

## Set Up Basic Plugin for Integrating Custom JavaScript

Check out the small custom plugin located at:

```wp-sample-with-child-theme/wp-content/plugins/tj-custom-scripts/```

This plugin accomplishes a couple things. It uses ```@wordpress/scripts``` to watch and build our custom JavaScript file(s) (see ```package.json``` in the root of the plugin folder, where these build scripts are defined). 

This setup is not absolutely necessary for handling a single JS file, but comes in handy when combining multiple JS files or working with a framework like React. In addition, this plugin (see ```index.php``` in the root of the plugin folder) will enqueue our built JavaScript so it is available where needed on the frontend.

To make use of this plugin:
1. copy the entire folder to your ```/wp-content/plugins/``` directory.
2. open a terminal window in the custom plugin directory (where that ```package.json``` file lives) and run ```npm install``` 
- this will install ```@wordpress/scripts``` 
- you must have node installed before the above command will work
- you only need to run the ```npm install``` command when you initially set this up, not every time you need to work on your custom JavaScript
3. in the same terminal window, in the same custom plugin directory, run ```npm start```

With the ```start``` script running, you'll be able to edit your source file(s) and your built file(s) will be auto-generated every time you save. 

IMPORTANT: the JavaScript file you should edit is in the /src/ directory:

```/plugins/tj-custom-scripts/src/index.js``` 

Also, be sure that you run the start script (step 3 above) before you begin editing your custom script. Otherwise, you might be surprised to not see your changes reflected on the frontend.

Check out the [WordPress @wordpress/scripts documentation](https://developer.wordpress.org/block-editor/reference-guides/packages/packages-scripts/) for more information about how this works. 

## Sending Data to Your Frontend JavaScript

Check out how we make use of the WordPress function ```wp_add_inline_script()``` to send data to the frontend as a JavaScript variable. You can see this in our custom page template here:

```wp-sample-with-child-theme/wp-content/themes/neve-child/page-about-us.php```

When passing data to the frontend in this manner, it can be helpful to drop it into a ```console.log()``` so you can see the shape of the data and know how to reference pieces of it.