import styled, { css } from 'styled-components';
import theme from 'common/theme';

export const inspectorTheme = {
  BASE_FONT_FAMILY: 'Menlo, monospace',
  BASE_FONT_SIZE: '14px',
  BASE_LINE_HEIGHT: '18px',

  BASE_BACKGROUND_COLOR: 'rgba(0, 0, 0, 0)',
  BASE_COLOR: 'rgb(213, 213, 213)',

  OBJECT_NAME_COLOR: theme.secondary(),
  OBJECT_VALUE_NULL_COLOR: 'rgb(127, 127, 127)',
  OBJECT_VALUE_UNDEFINED_COLOR: 'rgb(127, 127, 127)',
  OBJECT_VALUE_REGEXP_COLOR: '#fac863',
  OBJECT_VALUE_STRING_COLOR: '#fac863',
  OBJECT_VALUE_SYMBOL_COLOR: '#fac863',
  OBJECT_VALUE_NUMBER_COLOR: 'hsl(252, 100%, 75%)',
  OBJECT_VALUE_BOOLEAN_COLOR: 'hsl(252, 100%, 75%)',
  OBJECT_VALUE_FUNCTION_KEYWORD_COLOR: 'rgb(242, 85, 217)',

  HTML_TAG_COLOR: 'rgb(93, 176, 215)',
  HTML_TAGNAME_COLOR: 'rgb(93, 176, 215)',
  HTML_TAGNAME_TEXT_TRANSFORM: 'lowercase',
  HTML_ATTRIBUTE_NAME_COLOR: 'rgb(155, 187, 220)',
  HTML_ATTRIBUTE_VALUE_COLOR: 'rgb(242, 151, 102)',
  HTML_COMMENT_COLOR: 'rgb(137, 137, 137)',
  HTML_DOCTYPE_COLOR: 'rgb(192, 192, 192)',

  ARROW_COLOR: 'rgb(145, 145, 145)',
  ARROW_MARGIN_RIGHT: 3,
  ARROW_FONT_SIZE: 12,

  TREENODE_FONT_FAMILY: 'Menlo, monospace',
  TREENODE_FONT_SIZE: '13px',
  TREENODE_LINE_HEIGHT: '16px',
  TREENODE_PADDING_LEFT: 12,

  TABLE_BORDER_COLOR: 'rgb(85, 85, 85)',
  TABLE_TH_BACKGROUND_COLOR: 'rgb(44, 44, 44)',
  TABLE_TH_HOVER_COLOR: 'rgb(48, 48, 48)',
  TABLE_SORT_ICON_COLOR: 'black',
  TABLE_DATA_BACKGROUND_IMAGE:
    'linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 50%, rgba(51, 139, 255, 0.0980392) 50%, rgba(51, 139, 255, 0.0980392))',
  TABLE_DATA_BACKGROUND_SIZE: '128px 32px',
};

function getTypeStyles(type: 'log' | 'info' | 'warn' | 'error') {
  switch (type) {
    case 'warn':
      return css`
        background-color: #332a00;
        color: #f5d396;
        border: 1px solid #665500;
      `;
    case 'error':
      return css`
        background-color: #280000;
        color: #fe7f7f;
        border: 1px solid #5b0000;
      `;
    default:
      return '';
  }
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  font-size: 13px;
  line-height: 16px;
  word-break: break-word;
  ${props => getTypeStyles(props.logType)};
`;

export const InnerItem = styled.div`
  display: inline-block;
  padding: 0.4rem 0;
  padding-right: 1.5rem;
  vertical-align: top;
`;
