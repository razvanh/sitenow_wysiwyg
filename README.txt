SiteNow WYSIWYG
1. Introduction
2. Installation
3. Updating
4. Configuration

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

Updating
==================
The addition of new text filter or WYSIWYG profile options will generally
be added via an update hook in this module.

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
  admin/config/content/wysiwyg-override where you can turn off the disabling of
  the forms.

AHHHH THERE IS A TEXT FORMAT OPTION OR WYSIWYG SETTING THAT MY CLIENT NEEDS!!!
==================
Bring this up at a developer meeting and we can discuss if it would be useful
for inclusion in SiteNow WYSIWYG. If not, you can temporarily remove the
disabling on the forms and make the change you need on a per-site basis.
