import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {WidgetService} from '../services/widget.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  widgetDatas: any = [];
  widgetDatas1: any = [];
  widgets: any = [];
  filterwidgets: any = [];

  constructor(private  activeModel: NgbActiveModal, private widgetservice: WidgetService) {
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    let widgetArray: any;
    this.widgets = this.widgetservice.getwidgets();
    let data: any = {};
    let num: number;
    data = JSON.parse(localStorage.getItem('widgetData'));
    this.widgetDatas.push(data);
    this.widgetDatas1 = this.widgetDatas[0];
    let widgetsData: any;
    this.widgetDatas1.forEach((value, index) => {
      this.widgets = this.widgets.filter(_value => {
        if (_value.widgetkey === value.widgetkey) {
          return false;
        } else {
          return true;
        }
      });
    });
  }

  closeModel() {
    this.activeModel.dismiss();
  }

  pushData(i) {
    this.widgetDatas1.push(i);
    this.widgetDatas1.forEach((value, index) => {
      this.widgets = this.widgets.filter(_value => {
        if (_value.widgetkey === value.widgetkey) {
          return false;
        } else {
          return true;
        }
      });
    });
  }

  sliceWidget(data) {
    // console.log('data',data);
    this.widgets.push(data);
    this.widgets.forEach((value, index) => {
      this.widgetDatas1 = this.widgetDatas1.filter(_value => {
        if (_value.widgetkey === value.widgetkey) {
          return false;
        } else {
          return true;
        }
      });
    });
  }


  saveData() {
    localStorage.setItem('widgetData', JSON.stringify(this.widgetDatas1));
    this.widgetservice.getTotalData(this.widgetDatas1);
    this.activeModel.dismiss();
  }
}
