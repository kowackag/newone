import styled from 'styled-components';

const DefaultStyledCheckbox = styled.div`
    --color-alfa: ${props=>props.theme.colorBgc};
    --color-beta: ${props=>props.theme.colorShadowDark};
    --color-gamma: ${props=>props.theme.colorShadowLight};
    --color-font: ${props=>props.theme.colorFont};
    --color-contrast: ${props=>props.theme.colorContrast};
    display: block;
    width: 5rem;
    height: 2rem;
    background: rgb(var(--color-gamma));
    position: relative;
    border-radius: 2rem;
    box-shadow: inset 2px 2px 2px rgb(var(--color-beta)), inset 2px 2px 2px rgb(var(--color-beta));
    box-shadow: inset 2px 2px 3px rgb(var(--color-beta)), inset -2px -2px 3px rgb(var(--color-gamma));
    &:after {
      content: 'TAK';
      color: rgba(var(--color-contrast),.7);
      position: absolute;
      right: .5rem;
      top: 50%;
      transform: translateY(-50%);
      z-index: 0;
      font-size: 1rem;
      font-weight: bold;
    }

    &:before {
      content: 'NIE';
      color: rgba(var(--color-font),.7);
      position: absolute;
      left: .5rem;
      top: 50%;
      transform: translateY(-50%);
      z-index: 0;
      font-size: 1rem;
      font-weight: bold;
    }
    
    & label {
      display: block;
      width: 2.2rem;
      height: 2.2rem;
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      
      z-index: 1;
      background: rgb(var(--color-alfa));
      border-radius: 50px;
      transition: all 0.4s ease;
      box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.3);
      box-shadow: 2px 2px 3px rgb(var(--color-beta)), -2px -2px 3px rgb(var(--color-beta));
    }
    
    & input[type=checkbox] {
      visibility: hidden;
    }
    & input:checked + label {
        left: 2.5rem;
    }
    
    




  }

`

const StyledCheckbox = styled(DefaultStyledCheckbox)(props=>props.style);

export default StyledCheckbox