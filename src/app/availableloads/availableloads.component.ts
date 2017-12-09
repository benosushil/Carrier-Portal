import { Component, OnInit } from '@angular/core';

declare interface AvailableLoadData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
    selector: 'availableloads-cmp',
    moduleId: module.id,
    templateUrl: 'availableloads.component.html'
})

export class AvailableLoadsComponent implements OnInit{
    public availableloadTable: AvailableLoadData;
    ngOnInit(){
        this.availableloadTable = {
            headerRow: [ 'LoadId', 'Orgin', 'Destination', 'EquiqmentCategory', 'AvailableDriver'],
            dataRows: [
                ['11111', 'New York, NY', 'Austin, TX', 'Van'],
                ['22222', 'Austin, TX', 'Houston, TX', 'Flat Bed'],
                ['33333', 'Houston, TX', 'New York, NY', 'Refer'],
                ['44444', 'Austin, TX', 'New York, NY', 'Van'],
                ['55555', 'Austin, TX', 'Houston, TX', 'Van' ]
            ]
        };
    }
}
