import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserCommandsService } from './commands.service'
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { IMAGE_HOST, createRequestOption } from '../../../request-util';

declare let SmoothScroll: any;
declare let jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class UserCommandsComponent implements OnInit {
  private image_url: string = IMAGE_HOST;
  loading: boolean = false;
  commands: any;
  formData: FormData;
  model: any = {};
  pager_infos: any;
  product: any = {};
  shoppingBasket: any;
  types: any = [];
  productSelected: any;
  editField: string;
  quantity_commanded: number;
  original_product: any;
  user: any;
  command_lines_commands: any;
  global_infos: any;
  // @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  constructor(private route: ActivatedRoute, private router: Router, private commandService: UserCommandsService) {
    this.commands = [];
    this.shoppingBasket = [];
    this.product = {};
    this.command_lines_commands =[];
    this.productSelected = {};
    this.original_product = {};
    this.types = ['Comprimés', 'Géllules', 'Sirop', 'Autres']
    this.pager_infos = [];
  }


  ngOnInit() {
    SmoothScroll();
    this.commandsList(1);
  }
  pageChanged(event) {
    console.log(event);
    // event.preventDefault();
    this.pager_infos.current_page = event;
    this.commandsList(event);
    // this.router.navigate([''], {queryParams: {page:event} })
  }
  commandsList(page: number) {
    this.loading = true;
    this.commandService.getCommands(page)
      .subscribe(
        (resp) => {
          this.pager_infos = resp.meta;
          this.commands = resp.data;
          this.pager_infos.current_page = page;
          this.loading = false;
        },
        (error) => {
          console.log(error);
          this.loading = false;
          return;
        }
      )
  }

  showCommandDetails(item){
    console.log(item);
    this.global_infos  = item;
    this.CommandLinesCommandsList(item.id);
    jQuery("#showCommandDetails").modal("show");
  }
 
  CommandLinesCommandsList(command_id) {
    this.commandService.getCommandLinesCommands (command_id)
      .subscribe(
        (resp) => {
          this.command_lines_commands = resp.data;
        },
        (error) => {
          console.log(error);
          return;
        }
      )
  }
 
  updateCommandState(val,obj){

    if(val == 0){
      obj.state = "Commanded";
      obj.active= val
      console.log(obj);
    }else{      
      obj.state = "Delivered";
      obj.active= val
      console.log(obj);
    }
    this.commandService.updateCommandStatus(obj)
    .subscribe(
      (resp) => {
        let obj = resp.data;
        this.user = obj;      },
      (error) => {
        console.log(error);
        return;
      })
  }
 

}
