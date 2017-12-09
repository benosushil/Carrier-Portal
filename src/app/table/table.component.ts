import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    public tableData1: TableData;
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'DriverID', 'Name', 'Status', 'Phone', 'CurrentLocation'],
            dataRows: [
                ['1', 'Sandeep', 'Available', '9876543210', 'Austin, TX'],
                ['2', 'Raghu', 'Available', '9876543210-Waas', 'New york, NY'],
                ['3', 'Benedict', 'Available', '9876543210', 'Chennai ,TN'],
                ['4', 'Anand', 'Available, South', '9876543210', 'Mumbai , MH'],
                ['5', 'Sushil', 'ON Road', '9876543210', 'Banglaore, KA'],
                ['6', 'Abhishek', 'Not available', '9876543210', 'Kochi ,KL']
            ]
        };
     
    }
}
