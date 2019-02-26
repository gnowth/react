import _isFunction from 'lodash/isFunction';
import _mapKeys from 'lodash/mapKeys';
import React from 'react';

import useContextInput from './use-context-input';

const getDisplayName = ComposedComponent => ComposedComponent.displayName
  || ComposedComponent.name
  || 'Component';

export default (configs = {}) => (ComposedComponent) => {
  function withInput(props) {
    const configurations = _isFunction(configs) ? configs(props) : configs;
    const propsInput = useContextInput(configurations); // eslint-disable-line react-hooks/rules-of-hooks

    return (
      <ComposedComponent
        {..._mapKeys(propsInput, key => configurations.mapProps?.[key] || key)}
        {...props}
      />
    );
  }

  withInput.displayName = `withInput(${getDisplayName(ComposedComponent)})`;

  return withInput;
};
