import DuckRest from '@entity/duck-namespace-drf';
import { Fields } from '@entity/core';

import EntityAction from 'apps/activity/entities/Action';
import EntityActivity from 'apps/activity/entities/Activity';

class Observation extends EntityActivity {
  static fields = Object.assign({}, EntityActivity.fields, {
    follow_up_actions: new Fields.EntityField({
      entity: EntityAction,
      many: true,
    }),
  })

  static actionActionsAdd(record) {
    return record.update('follow_up_actions', actions => actions.push(
      EntityAction.dataToRecord({
        order: actions.size,
      }),
    ));
  }

  static getPaths(configs = {}) {
    return {
      apiBase: `/${configs.settings?.NAMESPACE}-observation/v1/observation/`,
      urlBase: '/observation/',
    };
  }
}

Observation.duck = new DuckRest({ app: 'Observation', entity: Observation });

export default Observation;
