import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-file-reader',
  templateUrl: './file-reader.component.html',
  styleUrls: ['./file-reader.component.scss']
})
export class FileReaderComponent {
  file: any;
  tempFileData: any;
  @Output() onFileRead:EventEmitter<any> = new EventEmitter();
  openProject() {
    document.getElementById('my_file').click();
  }
  fileSelection(event) {
    this.file = event.target.files[0];
    console.log(this.file.name);
    //we can change these validations of file type as per our requirement
    if (this.file.name.split('.').pop() == 'txt') {
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.tempFileData = fileReader.result;
        this.onFileRead.emit(this.tempFileData);
      }
      fileReader.readAsBinaryString(this.file);
    }
    else {
      alert("Please choose a .txt file.");
      this.tempFileData = '';
      this.onFileRead.emit(this.tempFileData);
    }
  }
}
