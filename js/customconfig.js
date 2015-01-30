/*
Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.on( 'dialogDefinition', function( ev )
  {
    var dialogName = ev.data.name;
    var dialogDefinition = ev.data.definition;

    // Check if the definition is from the dialog we're
    // interested on (the "Image" dialog).
    if ( dialogName == 'image' )
    {
      var infoTab = dialogDefinition.getContents( 'info' );

      // Add some html to the "info" tab.
      infoTab.add(
        {
          type : 'html',
          html : '<div id="altHelp">Alt and title text should be added/edited using the add media button</br>in the wysiwyg toolbar.</div>'
        },
        'txtAlt'
        );

      // Disable the alt text field.
      dialogDefinition.onLoad = function()
      {
        var altField = this.getContentElement( 'info', 'txtAlt' );
        altField.disable();
        var titleField = this.getContentElement( 'advanced', 'txtGenTitle' );
        titleField.disable();
      };

    }

  });
