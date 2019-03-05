import _isFunction from 'lodash/fp/isFunction';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PropTypesEntity from '@gnowth/prop-types-entity';
import PropTypesImmutable from 'react-immutable-proptypes';
import React from 'react';

import { Provider } from './base';

const TableRoot = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

function Table(props) {
  const CustomHeaderRowComponent = props.customHeaderRowComponent;
  const HeaderComponent = props.headerComponent;
  const HeaderWrapperComponent = props.headerWrapperComponent;
  const HeaderRowComponent = props.headerRowComponent;
  const RowComponent = props.rowComponent;

  return (
    <TableRoot className={props.className}>
      <colgroup>
        { React.Children.map(props.children, child => (
          <col width={child.props.width} />
        ))}
      </colgroup>

      <thead>
        { !CustomHeaderRowComponent && (
          <HeaderRowComponent>
            { React.Children.map(props.children, child => !child.props.hidden && (
              <HeaderComponent {...props.headerComponentProps}>
                {HeaderWrapperComponent && (
                  <HeaderWrapperComponent>
                    {child.props.label}
                  </HeaderWrapperComponent>
                )}

                { !HeaderWrapperComponent && child.props.label }
              </HeaderComponent>
            ))}
          </HeaderRowComponent>
        )}

        { CustomHeaderRowComponent && (
          <CustomHeaderRowComponent {...props.customHeaderRowComponentProps} />
        )}
      </thead>

      <tbody>
        { props.value.map(record => (
          <RowComponent
            key={props.field.entity.getId(record)}
            {...(
              _isFunction(props.rowComponentProps)
                ? props.rowComponentProps({
                  name: props.name,
                  value: record,
                  field: props.field,
                })
                : props.rowComponentProps
            )}
          >
            <Provider
              value={{
                name: props.name,
                value: record,
                field: props.field,
              }}
            >
              {props.children}
            </Provider>
          </RowComponent>
        ))}
      </tbody>
    </TableRoot>
  );
}

Table.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  value: PropTypesImmutable.list.isRequired,
  field: PropTypesEntity.entityField.isRequired,
  customHeaderRowComponentProps: PropTypes.shape({}),
  customHeaderRowComponent: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.func.isRequired,
  ]),
  headerRowComponentProps: PropTypes.shape({}),
  headerRowComponent: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.func.isRequired,
  ]),
  headerComponentProps: PropTypes.shape({}),
  headerComponent: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.func.isRequired,
  ]),
  headerWrapperComponent: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.func.isRequired,
  ]),
  rowComponentProps: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.func,
  ]),
  rowComponent: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.func.isRequired,
  ]),
};

Table.defaultProps = {
  headerComponentProps: {},
  headerComponent: 'th',
  headerRowComponentProps: {},
  headerRowComponent: 'tr',
  headerWrapperComponent: undefined,
  rowComponent: 'tr',
  rowComponentProps: {},
  customHeaderRowComponent: undefined,
  customHeaderRowComponentProps: {},
};

export default Table;
