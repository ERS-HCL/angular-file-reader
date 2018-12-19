import { Component } from '@angular/core';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.scss']
})
export class FileReaderComponent {
  file: any;
  tempFileData: any;
  openProject() {
    document.getElementById('my_file').click();
  }
  fileSelection(event) {
    this.file = event.target.files[0];
    console.log(this.file.name);
    console.log();
    if (this.file.name.split('.').pop() == 'txt' ||
      this.file.name.split('.').pop() == 'docx' ||
      this.file.name.split('.').pop() == 'doc') {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.tempFileData = fileReader.result;
        console.log('Project Data from file', JSON.parse(this.tempFileData));
        // alert("Success");
      }
      fileReader.readAsBinaryString(this.file);
    }
    else {
      alert("Please choose a txt or doc file.");
    }
  }
}
