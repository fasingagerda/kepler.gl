import {css} from 'styled-components';
import {DIMENSIONS} from '../constants/default-settings';

export const transition = 'all .4s ease';
export const transitionFast = 'all .2s ease';
export const transitionSlow = 'all .8s ease';

export const boxShadow = '0 1px 2px 0 rgba(0,0,0,0.10)';
export const boxSizing = 'border-box';
export const borderRadius = '1px';
export const borderColor = '#3A414C';
export const borderColorLight = '#F1F1F1';

// TEXT
export const labelColor = '#6A7485';
export const labelHoverColor = '#C6C6C6';
export const labelColorLT = '#6A7485';

export const textColor = '#A0A7B4';
export const textColorLT = '#3A414C';
export const titleColorLT = '#29323C';

export const subtextColor = '#6A7485';
export const subtextColorLT = '#A0A7B4';
export const subtextColorActive = '#FFFFFF';

export const titleTextColor = '#FFFFFF';
export const textColorHl = '#D3D8E0';
export const activeColor = '#1FBAD6';
export const activeColorHover = '#108188';
export const errorColor = '#CA3B27';
export const errorBgColor = '#FEEFEB';
export const positiveColor = '#629A41';
export const positiveBgColor = '#F3F9ED';

// Button
export const primaryBtnBgd = '#0F9668';
export const primaryBtnActBgd = '#13B17B';
export const primaryBtnColor = '#FFFFFF';
export const primaryBtnActColor = '#FFFFFF';
export const primaryBtnBgdHover = '#13B17B';

export const secondaryBtnBgd = '#6A7485';
export const secondaryBtnActBgd = '#A0A7B4';
export const secondaryBtnColor = '#FFFFFF';
export const secondaryBtnActColor = '#FFFFFF';
export const secondaryBtnBgdHover = '#A0A7B4';

export const linkBtnBgd = 'transparent';
export const linkBtnActBgd = linkBtnBgd;
export const linkBtnColor = '#A0A7B4';
export const linkBtnActColor = '#3A414C';
export const linkBtnActBgdHover = linkBtnBgd;

// Input
export const inputBoxHeight = '34px';
export const inputPadding = '4px 10px';
export const inputFontSize = '11px';
export const inputFontWeight = 500;
export const inputBgd = '#29323C';
export const inputBgdHover = '#3A414C';
export const inputBgdActive = '#3A414C';
export const inputBorderColor = '#D3D8E0';
export const inputBorderHoverColor = '#3A414C';
export const inputBorderActiveColor = '#D3D8E0';
export const inputColor = '#A0A7B4';
export const inputBorderRadius = '1px';
export const inputPlaceholderColor = '#6A7485';
export const inputPlaceholderFontWeight = 400;

export const secondaryInputHeight = '28px';
export const secondaryInputBgd = '#262C35';
export const secondaryInputColo = '#A0A7B4';

export const switchWidth = 24;
export const switchHeight = 12;
export const switchTrackBgd = '#29323C';
export const switchTrackBgdActive = activeColor;
export const switchTrackBorderRadius = '1px';
export const switchBtnBgd = '#6A7485';
export const switchBtnBgdActive = '#D3D8E0';
export const switchBtnBoxShadow = '0 2px 4px 0 rgba(0,0,0,0.40)';
export const switchBtnBorderRadius = '1px';
export const switchBtnWidth = '12px';
export const switchBtnHeight = '12px';

export const secondarySwitchTrackBgd = '#242730';
export const secondarySwitchBtnBgd = '#3A414C';

// Select
export const selectColor = inputColor;
export const selectColorLT = titleColorLT;

export const selectActiveBorderColor = '#D3D8E0';
export const selectFontSize = '11px';
export const selectFontWeight = '400';
export const selectFontWeightBold = '500';

export const selectColorPlaceHolder = '#6A7485';
export const selectBackground = inputBgd;
export const selectBackgroundHover = inputBgdHover;
export const selectBackgroundLT = '#FFFFFF';
export const selectBackgroundHoverLT = '#F8F8F9';
export const selectBorderColor = '#D3D8E0';
export const selectBorderRadius = '1px';
export const selectBorder = 0;

export const dropdownListHighlightBg = '#6A7485';
export const dropdownListShadow = '0 6px 12px 0 rgba(0,0,0,0.16)';
export const dropdownListBgd = '#3A414C';
export const dropdownListBorderTop = '#242730';

// Side Panel
export const sidePanelHeaderBg = '#29323C';
export const sidePanelBg = '#242730';
export const sideBarCloseBtnBgd = secondaryBtnBgd;
export const sideBarCloseBtnColor = '#29323C';
export const sideBarCloseBtnBgdHover = secondaryBtnActBgd;

export const panelBackground = '#29323C';
export const panelBackgroundHover = '#3A4552';
export const panelActiveBg = '#3A4552';
export const panelHeaderIcon = '#6A7485';
export const panelHeaderIconActive = '#A0A7B4';
export const panelBoxShadow = '0 6px 12px 0 rgba(0,0,0,0.16)';
export const panelBorderRadius = '2px';
export const panelBackgroundLT = '#f8f8f9';

export const panelBorderColor = '#3A414C';
export const panelBorder = `1px solid ${borderColor}`;
export const panelBorderLT = `1px solid ${borderColorLight}`;

export const mapPanelBackgroundColor = '#242730';
export const mapPanelHeaderBackgroundColor = '#29323C';
export const tooltipBg = '#F8F8F9';
export const tooltipColor = '#333334';

// Modal
export const modalTitleColor = '#3A414C';
export const modalTitleFontSize = '32px';
export const modalFooterBgd = '#F8F8F9';

export const sliderBarColor = '#6A7485';
export const sliderBarBgd = '#3A414C';
export const sliderBarHoverColor = '#D3D8E0';
export const sliderBarRadius = '1px';
export const sliderBarHeight = '4px';
export const sliderHandleHeight = '12px';
export const sliderHandleWidth = '12px';
export const sliderHandleColor = '#D3D8E0';
export const sliderHandleHoverColor = '#FFFFFF';
export const sliderHandleShadow = '0 2px 4px 0 rgba(0,0,0,0.40)';

export const textTruncate = {
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  wordWrap: 'normal'
};

// theme is passed to kepler.gl when it's mounted,
// it is used by styled-components to pass along to
// all child components

const input = css`
  align-items: center;
  background-color: ${props =>
  props.active ? props.theme.inputBgdActive : props.theme.inputBgd};
  border: 1px solid
    ${props =>
      props.active
        ? props.theme.inputBorderActiveColor
        : props.error ? props.theme.errorColor : props.theme.inputBgd};
  caret-color: ${props => props.theme.inputBorderActiveColor};
  color: ${props => props.theme.inputColor};
  display: flex;
  font-size: ${props => props.theme.inputFontSize};
  font-weight: ${props => props.theme.inputFontWeight};
  height: ${props => props.theme.inputBoxHeight};
  justify-content: space-between;
  outline: none;
  overflow: hidden;
  padding: ${props => props.theme.inputPadding};
  text-overflow: ellipsis;
  transition: ${props => props.theme.transition};
  white-space: nowrap;
  width: 100%;
  word-wrap: normal;
  pointer-events: ${props => (props.disabled ? 'none' : 'all')};
  opacity: ${props => (props.disabled ? 0.5 : 1)};

  :hover {
    cursor: pointer;
    background-color: ${props => props.active ? 
      props.theme.inputBgdActive : props.theme.inputBgdHover};
    border-color: ${props => props.active ? 
      props.theme.inputBorderActiveColor : props.theme.inputBorderHoverColor};
  }
  
  :active,
  .active {
    background-color: ${props => props.theme.inputBgdActive};
    border-color: ${props => props.theme.inputBorderActiveColor};
  }

  ::placeholder {
    color: ${props => props.theme.inputPlaceholderColor};
    font-weight: ${props => props.theme.inputPlaceholderFontWeight};
  }
  
  /* Disable Arrows on Number Inputs */
  ::-webkit-inner-spin-button, 
  ::-webkit-outer-spin-button {
    -webkit-appearance: none; 
    margin: 0;
  }
`;

const inlineInput = css`
  ${props => props.theme.input}
  color: ${props => props.theme.textColor};
  font-size: 13px;
  letter-spacing: 0.43px;
  line-height: 18px;
  height: 24px;
  font-weight: 400;
  padding-left: 4px;
  margin-left: -4px;
  background-color: transparent;
  border: 1px solid transparent;
  
  :hover {
    height: 24px;
    cursor: text;
    background-color: transparent;
    border: 1px solid ${props => props.theme.labelColor};
  }
  
  :active,
  .active,
  :focus {
    background-color: transparent;
    border: 1px solid ${props => props.theme.inputBorderActiveColor};
  }
`;

const secondaryInput = css`
  ${props => props.theme.input}
  color: ${props => props.theme.secondaryInputColor};
  background-color: ${props => props.theme.secondaryInputBgd};
  height: ${props => props.theme.secondaryInputHeight};
  
  :active,
  .active {
    background-color: ${props => props.theme.secondaryInputBgd};
    border-color: ${props => props.theme.secondaryInputBgd};
  }
  
  :hover {
    cursor: pointer;
    background-color: ${props => props.theme.secondaryInputBgd};
    border-color: ${props => props.theme.secondaryInputBgd};
  }
`;

const switchTrack = css`
  background: ${props => props.checked ?
    props.theme.switchTrackBgdActive : props.theme.switchTrackBgd};
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  display: block;
  width: ${props => props.theme.switchWidth}px;
  height: ${props => props.theme.switchHeight}px;
  border-radius: ${props => props.theme.switchTrackBorderRadius};
`;

const switchButton = css`
  transition: ${props => props.theme.transition};
  position: absolute;
  top: 0;
  left: ${props => props.checked ? switchWidth / 2 : -1}px;
  content: "";
  display: block;
  height: ${props => props.theme.switchBtnHeight};
  width: ${props => props.theme.switchBtnWidth};
  background: ${props => props => props.checked ? 
    props.theme.switchBtnBgdActive : props.theme.switchBtnBgd};
  box-shadow: ${props => props.theme.switchBtnBoxShadow};
`;

const inputSwitch = css`
  user-select: none;
  cursor: pointer;
  line-height: 0;
  font-weight: 500;
  font-size: 12px;
  color: ${props => props.theme.label};
  position: relative;
  display: inline-block;
  padding-top: ${props => props.theme.switchHeight}px;
  padding-right: 0;
  padding-bottom: 0;
  padding-left: ${props => props.theme.switchWidth}px;
  
  :before {
    ${props => props.theme.switchTrack}
  }
  
  :after {
    ${props => props.theme.switchButton}
  }
`;

const secondarySwitch = css`
  ${props => props.theme.inputSwitch}
  
  :before {
    ${props => props.theme.switchTrack}
    background: ${props => props.checked ?
      props.theme.switchTrackBgdActive : props.theme.secondarySwitchTrackBgd};
  }
  
  :after {
    ${props => props.theme.switchButton}
    background: ${props => props => props.checked ?
      props.theme.switchBtnBgdActive : props.theme.secondarySwitchBtnBgd};
  }
`;

const dropdownScrollBar = css`
  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  
  ::-webkit-scrollbar-corner {
    background: ${props => props.theme.dropdownListBgd};
  }
  
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.dropdownListBgd};
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${props => props.theme.labelColor};
    border: 3px solid ${props => props.theme.dropdownListBgd};
  };
  
  :vertical:hover {
    background: ${props => props.theme.textColorHl};
  }
}`;

const sidePanelScrollBar = css`
  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  
  ::-webkit-scrollbar-corner {
    background: ${props => props.theme.sidePanelBg};
  }
  
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.sidePanelBg};
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${props => props.theme.labelColor};
    border: 3px solid ${props => props.theme.sidePanelBg};
  };
  
  :vertical:hover {
    background: ${props => props.theme.textColorHl};
  }
}`;

const dropdownListAnchor = css`
  color: ${props => props.theme.selectColor};
  padding-left: 3px;
`;

const dropdownListItem = css`
  font-size: 11px;
  padding: 3px 9px;
  font-weight: 500;

  &.hover,
  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.dropdownListHighlightBg};
    
    .list__item__anchor {
      color: ${props => props.theme.textColorHl};
    }
  }
`;

const dropdownListHeader = css`
  font-size: 11px;
  padding: 5px 9px;
  color: ${props => props.theme.labelColor};
`;

const dropdownListSection = css`
  padding: 0 0 4px 0;
  margin-bottom: 4px;
  border-bottom: 1px solid ${props => props.theme.labelColor};
`;

const dropdownList = css`
  overflow-y: overlay;
  max-height: 280px;
  box-shadow: ${props => props.theme.dropdownListShadow};
  border-radius: 2px;
  
  .list__section {
    ${props => props.theme.dropdownListSection};
  }
  .list__header {
    ${props => props.theme.dropdownListHeader};
  }

  .list__item {
    ${props => props.theme.dropdownListItem};
  }

  .list__item__anchor {
    ${props => props.theme.dropdownListAnchor};
  }

  ${props => props.theme.dropdownScrollBar};
`;

const scrollBar = css`
  ::-webkit-scrollbar {
    width: 14px;
  }
  
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.sidePanelBg};
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${props => props.theme.panelBackground};
    border: 3px solid ${props => props.theme.sidePanelBg}

    ':vertical': {
      background: ${props => props.theme.panelBackground};
    },

    ':vertical:hover': {
      background: ${props => props.theme.selectBackgroundHover};
    }
  }
}`;

export const modalScrollBar = css`
  ::-webkit-scrollbar {
    width: 14px;
    height: 16px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-track:horizontal {
    background: ${props => props.theme.textColorHl};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.labelColorLT};
    border: 4px solid white;
  }

  ::-webkit-scrollbar-corner {
    background: ${props => props.theme.textColorHl};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #969da9;
  }

  ::-webkit-scrollbar-thumb:vertical {
    border-radius: 7px;
  }

  ::-webkit-scrollbar-thumb:horizontal {
    border-radius: 9px;
    border: 4px solid ${props => props.theme.textColorHl};
  }
`;

export const theme = {
  ...DIMENSIONS,
  // templates
  input,
  inlineInput,
  secondaryInput,
  dropdownScrollBar,
  dropdownList,
  dropdownListItem,
  dropdownListAnchor,
  dropdownListHeader,
  dropdownListSection,
  dropdownListShadow,
  modalScrollBar,
  scrollBar,
  sidePanelScrollBar,
  inputSwitch,
  secondarySwitch,
  switchTrack,
  switchButton,

  // Transitions
  transition,
  transitionFast,
  transitionSlow,

  // styles
  activeColor,
  activeColorHover,
  borderRadius,
  boxShadow,
  errorColor,
  dropdownListHighlightBg,
  dropdownListBgd,
  dropdownListBorderTop,

  labelColor,
  labelColorLT,
  labelHoverColor,
  mapPanelBackgroundColor,
  mapPanelHeaderBackgroundColor,

  // Select
  selectActiveBorderColor,
  selectBackground,
  selectBackgroundLT,
  selectBackgroundHover,
  selectBackgroundHoverLT,
  selectBorder,
  selectBorderColor,
  selectBorderRadius,
  selectColor,
  selectColorPlaceHolder,
  selectFontSize,
  selectFontWeight,
  selectColorLT,

  // Input
  inputBgd,
  inputBgdHover,
  inputBgdActive,
  inputBoxHeight,
  inputBorderColor,
  inputBorderActiveColor,
  inputBorderHoverColor,
  inputBorderRadius,
  inputColor,
  inputPadding,
  inputFontSize,
  inputFontWeight,
  inputPlaceholderColor,
  inputPlaceholderFontWeight,

  secondaryInputBgd,
  secondaryInputHeight,
  secondaryInputColo,

  switchWidth,
  switchHeight,
  switchTrackBgd,
  switchTrackBgdActive,
  switchTrackBorderRadius,
  switchBtnBgd,
  switchBtnBgdActive,
  switchBtnBoxShadow,
  switchBtnBorderRadius,
  switchBtnWidth,
  switchBtnHeight,

  secondarySwitchTrackBgd,
  secondarySwitchBtnBgd,

  // Button
  primaryBtnBgd,
  primaryBtnActBgd,
  primaryBtnColor,
  primaryBtnActColor,
  primaryBtnBgdHover,
  secondaryBtnBgd,
  secondaryBtnActBgd,
  secondaryBtnBgdHover,
  secondaryBtnColor,
  secondaryBtnActColor,
  linkBtnBgd,
  linkBtnActBgd,
  linkBtnColor,
  linkBtnActColor,
  linkBtnActBgdHover,

  // Modal
  modalTitleColor,
  modalTitleFontSize,
  modalFooterBgd,

  // Side Panel
  sidePanelBg,

  sideBarCloseBtnBgd,
  sideBarCloseBtnColor,
  sideBarCloseBtnBgdHover,
  sidePanelHeaderBg,

  // Side Panel Panel
  panelActiveBg,
  panelBackground,
  panelBackgroundHover,
  panelBackgroundLT,
  panelBoxShadow,
  panelBorderRadius,
  panelBorder,
  panelBorderColor,
  panelBorderLT,
  panelHeaderIcon,
  panelHeaderIconActive,

  // Text
  textColor,
  textColorLT,
  textColorHl,
  titleTextColor,
  subtextColor,
  subtextColorLT,
  subtextColorActive,
  textTruncate,
  titleColorLT,
  tooltipBg,
  tooltipColor,

  // Slider
  sliderBarColor,
  sliderBarBgd,
  sliderBarHoverColor,
  sliderBarRadius,
  sliderBarHeight,
  sliderHandleHeight,
  sliderHandleWidth,
  sliderHandleColor,
  sliderHandleHoverColor,
  sliderHandleShadow
};