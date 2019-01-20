import { Query } from '@entity/duck-query';
import { WidgetBoolean, WidgetDate, WidgetInput, WidgetList, WidgetSelect, WidgetTextarea } from '@entity/widget';
import { UIButton, UILabel, UIProgressCircle } from '@gnowth/ui';
import { Redirect } from 'react-router-dom';

import settings from 'settings';
import store from 'store';

export default {
  settings,
  store,
  component_button: UIButton,
  component_label: UILabel,
  component_processing: UIProgressCircle,
  component_processingDidFail: () => 'Unable to load data. Try to refresh the page',
  component_query: Query,
  component_recordCount: ({ value }) => `${value} Record(s) Found`,
  component_recordCountNone: () => 'No Records Found',
  component_redirect: Redirect,
  widget_boolean: WidgetBoolean,
  widget_char: WidgetInput,
  widget_date: WidgetDate,
  widget_entity: WidgetSelect,
  widget_enum: WidgetSelect,
  widget_list: WidgetList,
  widget_text: WidgetTextarea,
};