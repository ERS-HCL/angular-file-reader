# File Reader

Light weight file reader angular component without external libraries/dependencies.

![alt text](img/file-reader.png)

## Demo

Checkout the demo on StackBlitz - https://file-reader.stackblitz.io

## Features
```
1) Read contents of file from local system
2) Apply validations to read only specific file types. Example - '.txt' or any custom file extension
3) Directly parse JSON data from using file-reader
```

## Adding the component in your project

### Add Component in module
Import
`
import { FileReaderComponent } from './file-reader/file-reader.component';
`

Declaration
`
declarations: [
    FileReaderComponent
  ]
`

### Add selector in HTML
```
<file-reader (onFileRead)="readContents($event)"></file-reader>
```

### Selector Events
Event `onFileRead` will return the contents of the file selected by user.

### file-reader.component.ts
``` typescript
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'file-reader',
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
```

### file-reader.component.html
``` typescript
<div class="file-container">
  <button class="file-button" (click)="openProject()">Open File</button>
  <input type="file" id="my_file" (change)="fileSelection($event)" class="file_exp_opener">
  <br>
</div>
```

### file-reader.component.scss
``` typescript
.file-container{
    text-align: center;
  }
.file-button{
    outline: none;
    cursor: pointer;
    border: 1px solid #007bff;
    border-radius: 5px;
    background: #007bff;
    color: #fff;
    font-size: 15px;
    padding: 10px;
    margin: 5px 10px;
    min-width: 100px;
  }
.file-button:hover{
    background: #0069d9;
    border: 1px solid #0062cc;
  }
#my_file{
    display: none;
  }
```


## Author

animesh.rawat20@gmail.com
