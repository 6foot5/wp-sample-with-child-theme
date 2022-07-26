<?php

add_action( 'wp_enqueue_scripts', 'my_theme_enqueue_styles' );
function my_theme_enqueue_styles() {
  $cssTimeStamp = filemtime(get_stylesheet_directory() . '/style.css');
  wp_enqueue_style( 'tj-style', get_stylesheet_uri(), array(), $cssTimeStamp );
}