import {Component, OnInit, AfterViewInit, Input} from '@angular/core';
import {Widget} from '../shared/widgets';
import {WidgetService} from '../services/widget.service';
// import {FilterArrayPipe} from '../pipe/name.pipe';

declare var tableau: any;

@Component({
  selector: 'app-widgetview',
  templateUrl: './widgetview.component.html',
  styleUrls: ['./widgetview.component.css'],
  // pipes: [FilterArrayPipe]

})
export class WidgetviewComponent implements OnInit, AfterViewInit {
  widgets: Widget[];
  viz: any;
  @Input() data: any;
  @Input() title: any;


  public showdata(value){
    this.widgets = value;
  }
  constructor(private widgetservice: WidgetService) {
  }

  ngOnInit() {
    this.widgets = this.data;
  }

  ngAfterViewInit() {
    this.createViz();
  }

  createViz() {
    var placeholderDiv = document.getElementById(this.widgets[1].container);
    var url = this.widgets[1].url;
    var options = {
      width: '100%',
      height: '100%',
      hideTabs: true,
      hideToolbar: true,
      onFirstInteractive: function () {

      }
    };
    this.viz = new tableau.Viz(placeholderDiv, url, options);
  }

}
