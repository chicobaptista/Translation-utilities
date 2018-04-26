/**
 *Creates an empty FileTracker ready to be populated by different APIs
 *
 */
function createFileTracker() {
  var FileTracker= SpreadsheetApp.create('FileTracker');
  var ss = SpreadsheetApp.getActiveSheet();
  var sheet = FileTracker.getSheets()[0];
  Logger.log('Created Sheet');
  var ProjectManager= 'Francisco Baptista';
  var fileList= [['Cert1', 'Pack1'],['Cert2', 'Pack1'],['Cert3','Pack2'],['Cert4','Pack2'],['Cert5','Pack3']];
  sheet.appendRow(['', '', 'Status', 'Milestones:  30%, 60%, 100%', '', '', '', '', '', 'Project Manager', ProjectManager])
  sheet.appendRow(['File Name', 'Package', 'Pre-processing', 'Draft', 'Revision', 'Post-formatting', 'Uploaded', 'Checked by PM', 'Sent to Client', 'Translator', 'Total word count', 'Payable WordCount', 'Status', 'Color code', 'Obs', 'Translators', 'Wordcount']);
  sheet.appendRow(['', '', '', '', '', '', '', '', '', '', '', '', '', 'Not started']);
  sheet.appendRow(['', '', '', '', '', '', '', '', '', '', '', '', '', 'In progress', 'Percentage']);
  sheet.appendRow(['', '', '', '', '', '', '', '', '', '', '', '', '', 'Ready', 'Date']);
  Logger.log('Created headings')
  
  var range=sheet.getRange('A3:B'+String(fileList.length+2));
  Logger.log(range)
  range.setValues(fileList);
}
