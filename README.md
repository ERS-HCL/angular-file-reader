# StopWatch

Light weight file reader angular component without external libraries/dependencies.

![alt text](img/stopwatch.png)

## Demo

Checkout the demo on StackBlitz - https://split-lap-stopwatch.stackblitz.io/ 

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
    TimerComponent
  ]
`

### Add selector in HTML
```
<app-file-reader></app-file-reader>
```
### Dependencies
None


### timer.component.ts
``` typescript
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

```

### timer.component.html
``` typescript
<div class="file-container">
  <button class="file-button" (click)="openProject()">Open File</button>
  <input type="file" id="my_file" (change)="fileSelection($event)" class="file_exp_opener">
  <br>
</div>
{{tempFileData }}
```

### timer.component.scss
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
