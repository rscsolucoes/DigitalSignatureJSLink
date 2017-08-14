(function () {
   var signatureFieldContext = {};
   signatureFieldContext.OnPreRender = signatureFieldOnPreRender;
                  SPClientTemplates.TemplateManager.RegisterTemplateOverrides(signatureFieldContext);
})();
// This function provides the rendering logic
function signatureFieldOnPreRender(ctx) {
       var _signatureField = $('textarea[title="Signature"]');
       _signatureField.hide();
       var result =""
       result += '<div id="signature-field"></div>';
       result += '<div id="signature-toolbar">';
       result += '<input type="button" value="Clear" id="signature-button-clear"/>';
       result += '</div>';
       _signatureField.before(result)
   $('#signature-field').signature({guideline: true,syncField:_signatureField});
       $('#signature-button-clear').click(function() {
             $('#signature-field').signature('clear');
       });   
}