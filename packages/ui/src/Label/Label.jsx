import PropTypes from 'prop-types';
import PropTypesImmutable from 'react-immutable-proptypes';
import PropTypesPlus from '@gnowth/prop-types-plus';
import React from 'react';
import { useDefaultStyle } from '@gnowth/style';

import UIError from '../Error';
import UITooltip from '../Tooltip';
import UITypeSet from '../TypeSet';

import defaultStyles, { Label, UILabelRoot } from './Label.styles';

const UILabel = (props) => {
  const styles = useDefaultStyle(defaultStyles, props.styles);

  return (
    <UILabelRoot className={props.className} css={props.css}>
      { (props.label || props.labelLocale) && (
        <UITypeSet
          component={Label}
          locale={props.labelLocale}
          variant="label"
          {...props.labelComponentProps}
        >
          { props.label }
        </UITypeSet>
      )}

      { (props.label || props.labelLocale) && props.errors && props.errors.size > 0 && (
        <UITooltip
          componentProps={{
            css: styles.icon,
            name: 'error',
            material: true,
          }}
          css={styles.tooltip}
        >
          { props.errors.map((error, index) => (
            <UIError key={index}>{ error }</UIError> // eslint-disable-line
          ))}
        </UITooltip>
      )}

      { props.children }
    </UILabelRoot>
  );
};

UILabel.propTypes = {
  children: PropTypes.node,
  css: PropTypesPlus.css,
  errors: PropTypesImmutable.list,
  label: PropTypes.string,
  labelComponentProps: PropTypes.shape({}),
  labelLocale: PropTypesPlus.locale,
  styles: PropTypes.exact({
    icon: PropTypesPlus.css,
    tooltip: PropTypesPlus.css,
  }),
};

UILabel.defaultProps = {
  children: undefined,
  css: undefined,
  errors: undefined,
  label: undefined,
  labelComponentProps: {},
  labelLocale: undefined,
  styles: undefined,
};

export default UILabel;
