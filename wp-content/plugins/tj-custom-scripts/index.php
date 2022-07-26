<?php
/*
  Plugin Name: TJ Custom WordPress Scripts
  Description: This plugin will manage enqueue_script logic for custom JS that relies on @wordpress/scripts. 
  Version: 0.1
  Author: TJ Chaplain
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class tjWPScripts {
  function __construct() {
    add_action('wp_enqueue_scripts', array($this, 'scriptAssets'));
  }

  function scriptAssets() {

    if (is_page('about-us')) {
      $scriptTimeStamp = filemtime(plugin_dir_path(__FILE__) . 'build/index.js');
      wp_enqueue_script( 'tj-custom-scripts', plugin_dir_url(__FILE__) . 'build/index.js', array(), $scriptTimeStamp, true );
    }
  }
}

$tjWPScripts = new tjWPScripts();