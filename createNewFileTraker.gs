function createFileTracker(projName, projectManager, fileList) {
 /**
  *Creates an empty FileTracker ready to be populated by different APIs
  */
  //declares all initial variables to create spreadsheet
  var projName = 'Teste'
  var fileTracker= SpreadsheetApp.create('FileTracker'+projName);
  var ss = SpreadsheetApp.getActiveSheet();
  var sheet = fileTracker.getSheets()[0];
  var projectManager= 'Francisco Baptista';
  //Creates an empty Filetracker template
  var fileList= [['File1','Batch1'], ['File2','Batch1']];
  sheet.appendRow(['', '', 'Status', 'Milestones:  30%, 60%, 100%', '', '', '', '', '', 'Project Manager', projectManager])
  sheet.appendRow(['File Name', 'Package', 'Pre-processing', 'Draft', 'Revision', 'Post-formatting', 'Uploaded', 'Checked by PM', 'Sent to Client', 'Translator', 'Total word count', 'Payable WordCount', 'Status', 'Color code', 'Obs', 'Translators', 'Wordcount']);
  sheet.appendRow(['', '', '', '', '', '', '', '', '', '', '', '', '', 'Not started']);
  sheet.appendRow(['', '', '', '', '', '', '', '', '', '', '', '', '', 'In progress', 'Percentage']);
  sheet.appendRow(['', '', '', '', '', '', '', '', '', '', '', '', '', 'Ready', 'Date']);
  //Format borders, colors, etc
  sheet.getRange('A:B').setBackground('light purple 2');
  sheet.getRange('C1:I2').setBackground('light cornflower blue 2');
  sheet.getRange('J1:L2').setBackground('light green 1');
  sheet.getRange('N3').setBackground('light red 1');
  sheet.getRange('N4').setBackground('light yellow 2');
  sheet.getRange('N5').setBackground('light green 2');
  //Populate with fileList
  var range=sheet.getRange('A3:B'+String(fileList.length+2));
  range.setValues(fileList);
  //Populate with notReady
  range=sheet.getRange('C3:I'+String(fileList.length+2));
  status=sheet.getRange('N3');
  status.copyTo(range);
}
