import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fileContent: any;
  readContents(fileContent: Event){
    this.fileContent = fileContent;
    console.log('Project Data from file', this.fileContent);
    //in case of JSON data we can simply use JSON.parse to get the data for project
    // console.log('Project Data from file', JSON.parse(this.fileContent));
  }
}

