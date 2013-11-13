SiteNow WYSIWYG
1. Introduction
2. Installation
3. Upgrading
4. Configuration
5. AHHHH THERE IS A TEXT FORMAT OPTION OR WYSIWYG SETTING THAT MY CLIENT NEEDS!

Introduction
==================
The SiteNow WYSIWYG module provides default filtered and full html text format
settings as well as wysiwyg profile configuration.

It then allows certain parts of these forms or provides override forms for site-
specific configuration of the text format's pathologic and css class settings as
well as the ability to specify a css file to use within the WYSIWYG provided by
your theme.

Installation
==================
Enable the module as usual.

Upgrading
==================
The addition of new text format or WYSIWYG profile options will generally
require a features revert on your site. Now that Pathologic and WYSIWYG css
rules configuration are now configurable on a site-by-site basis, I hope that we
can get SiteNow WYSIWYG in a default state on all sites and we can handle
features reverts via drush during regularly schedule updates.

IMPORTANT NOTE (April 2013 update) - If you've been using SiteNow WYSIWYG pre
April SiteNow Updates (when the form disabling went into effect) it's possible
that you have some custom text format or WYSIWYG profile settings set that is
overriding this feature. It is important that you manually check to see if these
settings are necessary before reverting the feature.

Configuration
==================
The module provides the following configuration options:

1. Text formats
  a. Filtered HTML /admin/config/content/formats/filtered_html
      You may edit both WYSIWYG Filter > Rules for Class Names and Pathologic >
      All base paths for this site settings.
  b. Full HTML /admin/config/content/formats/full_html
      You may edit the Pathologic > All base paths for this site settings.
2. WYSIWYG Profiles
  Both the Full HTML and Filtered HTML WYSIWYG Profile forms are fully disabled
  from editing. However, there is a WYSIWYG Profiles override form located at
  admin/config/content/wysiwyg-override where you can specify any css provided
  by your theme to be used in the WYSIWYG to have a better What You See Is What
  You Get editing experience.

  In the future, this overrides form may be used to
  allow us to export certain default settings and append custom site-specific
  settings to these form values.

AHHHH THERE IS A TEXT FORMAT OPTION OR WYSIWYG SETTING THAT MY CLIENT NEEDS!!!
==================
Bring this up at a developer meeting and we can discuss if it would be useful
for inclusion in SiteNow WYSIWYG. If not, you can always do what this module is
doing and use hook_filter_default_formats_alter() or
hook_wysiwyg_editor_settings_alter()in a custom site-specific module to
programmatically make the change you need.
