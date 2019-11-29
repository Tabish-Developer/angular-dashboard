import {Injectable} from '@angular/core';
import {Widget} from '../shared/widgets';

@Injectable({
  providedIn: 'root'
})
export class WidgetService {
  totalData: any;
  constructor() {
  }

  getwidgets(): Widget[] {
    return [
      {
        widgetApp: 'CBC',
        widgetkey: 100001,
        url: '#',
        detailurl: '#',
        container: 'container1',
        name: 'abc',
        sheetToFilter: 'Chart',
        category: 'Product',
      },
      {
        widgetApp: 'DISABLED',
        widgetkey: 100002,
        url: '#',
        detailurl: '#',
        container: 'container2',
        name: 'Branch ',
        sheetToFilter: 'weekly',
        category: 'others',
      },
      {
        widgetApp: 'BBC',
        widgetkey: 100003,
        url: '#',
        detailurl: '#',
        container: 'container2',
        name: 'Top  Profile ',
        sheetToFilter: 'sheet',
        category: 'Sales',
      },
      {
        widgetApp: 'ABC',
        widgetkey: 100004,
        url: '#',
        detailurl: '#',
        container: 'container4',
        name: 'Sales Risk',
        sheetToFilter: 'widgetsheet',
        category: 'Sales',
      },
      {
        widgetApp: 'MWFLSH',
        widgetkey: 100005,
        url: '#',
        detailurl: '#',
        container: 'container5',
        name: 'Product Management',
        sheetToFilter: 'sheet 25',
        category: 'Product',
      },
      {
        widgetApp: 'assa',
        widgetkey: 100006,
        url: '#',
        detailurl: '#',
        container: 'container6',
        name: 'Product Hype',
        sheetToFilter: 'sheet',
        category: 'Product',
      },
    ]
  }

  getTotalData(data) {
    this.totalData = data;
    return this.totalData;
  }

  passTotalData(){
    return this.totalData;
  }
}
