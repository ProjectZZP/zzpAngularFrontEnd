import { Component } from '@angular/core';

import { Entity }    from './entity';

@Component({
  moduleId: module.id,
  selector: 'entity-form',
  templateUrl: 'entity.component.html'
})
export class EntityComponent {

  model = new Entity(null, '', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }
}
