import styled, { ThemeConsumer } from 'styled-components';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';

import WidgetTextarea from '.';

const Wrapper = styled.div`
  text-align: center;
  margin: 1rem;
`;

export default stories => stories
  .add('dynamic story', () => (
    <ThemeConsumer>
      { theme => (
        <WidgetTextarea
          name={text('name', 'storybook')}
          onChange={action('changed')}
          value={text('value', 'Hello Textarea')}
          variant={select('variant', Object.keys(theme.components?.widgetCheckbox || {}), 'main')}
        />
      )}
    </ThemeConsumer>
  ))

  .add('variants', () => (
    <ThemeConsumer>
      { theme => Object.keys(theme.components?.widgetCheckbox || {}).map(variant => (
        <Wrapper key={variant}>
          <WidgetTextarea
            name="storybook"
            onChange={() => undefined}
            value={variant}
            variant={variant}
          />
        </Wrapper>
      ))}
    </ThemeConsumer>
  ));
