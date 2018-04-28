import { Component, OnInit } from '@angular/core';
import { LogService } from '../../log.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
    public logs = [];
    public error: string;

    constructor(private _logService: LogService) {
    }

    ngOnInit() {
       this._logService.getLogs()
           .subscribe(
               data => this.logs = data,
               error => this.error = error
           );
    }

}
