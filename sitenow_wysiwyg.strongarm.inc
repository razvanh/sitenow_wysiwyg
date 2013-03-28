<?php
/**
 * @file
 * sitenow_wysiwyg.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function sitenow_wysiwyg_strongarm() {
  $export = array();

  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'ckeditor_link_file_link_method';
  $strongarm->value = 'download';
  $export['ckeditor_link_file_link_method'] = $strongarm;

  return $export;
}
