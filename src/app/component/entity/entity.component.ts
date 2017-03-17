import {Component} from '@angular/core';
import {EntityService} from "../../entity/entity-service/entity.service";
import {Entity} from "../../entity/entity/entity";

@Component({
  moduleId: module.id,
  selector: 'entity-form',
  templateUrl: 'entity.component.html'
})
export class EntityComponent {
  model: Entity;

  constructor(private entityService: EntityService) {
    // this.model = new Entity(null, '', '', '');

    this.entityService.getSingleEntity('')
      .subscribe((entity: Entity) => {
        this.model = entity;
      })
  }
}
