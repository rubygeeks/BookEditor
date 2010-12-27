var menu = Titanium.UI.createMenu();
var file = Titanium.UI.createMenuItem("File");
file.addItem("Quit");
menu.appendItem(file);
Titanium.UI.setMenu(menu);

function cleartextarea()
{
document.getElementById('styled').value='';
document.getElementById('styled').focus('styled');
document.getElementById('preview').innerHTML='';

}