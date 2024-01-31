# bpmn-js-sequential-adhoc-subprocesses

This [bpmn-js](https://github.com/bpmn-io/bpmn-js) extension sets the `ordering` attribute of newly created adhoc subprocesses to `"Sequential"`.


## Use Extension

Extend your BPMN modeler with the module:

```javascript
import BpmnModeler from 'bpmn-js/lib/Modeler';

import SequentialAdHocSubProcessModule from 'bpmn-js-sequential-adhoc-subprocesses';

const modeler = new BpmnModeler({
  additionalModules: [
    SequentialAdHocSubProcessModule
  ]
});
```

## License

MIT licensed

Copyright (C) 2024 Asvin Goel
