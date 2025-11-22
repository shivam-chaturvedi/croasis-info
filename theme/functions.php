<?php
function load_vite_assets() {
    $theme_dir = get_stylesheet_directory_uri();

    // CSS
    wp_enqueue_style(
        'vite-style',
        $theme_dir . '/assets/index.css'
    );

    // JS
    wp_enqueue_script(
        'vite-script',
        $theme_dir . '/assets/index.js',
        array(),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'load_vite_assets');
