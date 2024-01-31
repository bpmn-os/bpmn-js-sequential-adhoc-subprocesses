import inherits from 'inherits';

import { is } from 'bpmn-js/lib/util/ModelUtil';

import CommandInterceptor from 'diagram-js/lib/command/CommandInterceptor';

import BpmnModeler from 'bpmn-js/lib/Modeler';

function ifNewAdHocSubProcess(fn) {
  return function(event) {
    var context = event.context,
        element = context.shape;
    if ( event.command == 'shape.create'
      && is(element, 'bpmn:AdHocSubProcess')
    ) {
      fn(element);
    }
  };
}

/**
 * A handler setting ordering to 'Sequential' for new adhoc sub-processes
 */
export default function AdHocSubProcessUpdater(eventBus, modeling) {
  CommandInterceptor.call(this, eventBus);

  function setOrdering(element) {
    modeling.updateProperties(element, {
      ordering: 'Sequential'
    });
  }

  this.postExecute([
    'shape.create'
  ], ifNewAdHocSubProcess(setOrdering));
}

inherits(AdHocSubProcessUpdater, CommandInterceptor);

AdHocSubProcessUpdater.$inject = [ 'eventBus', 'modeling' ];
