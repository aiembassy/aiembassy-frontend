import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html {
        height: 100%;
        overflow-x: hidden !important;
    }
    
    body {
        background: #F6F6F6;
        height: 100%;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        //overflow: hidden;
    }
    
    code {
        font-family: 'Lato', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }
    
    svg {
      transition: all .5s;
      path, circle, rect {
        transition: all .5s ;
      }
    }
    
    // scrollbar
    .ps {
      overflow: hidden !important;
      overflow-anchor: none;
      -ms-overflow-style: none;
      touch-action: auto;
      -ms-touch-action: auto;
    }
    
    .ps__rail-x {
      display: none;
      opacity: 0;
      transition: background-color .2s linear, opacity .2s linear;
      -webkit-transition: background-color .2s linear, opacity .2s linear;
      height: 10px;
      /* there must be 'bottom' or 'top' for ps__rail-x */
      bottom: 0;
      /* please don't change 'position' */
      position: absolute;
    }
    
    .ps__rail-y {
      display: none;
      opacity: 0;
      transition: background-color .2s linear, opacity .2s linear;
      -webkit-transition: background-color .2s linear, opacity .2s linear;
      width: 10px;
      /* there must be 'right' or 'left' for ps__rail-y */
      right: 0;
      /* please don't change 'position' */
      position: absolute;
    }
    
    .ps--active-x > .ps__rail-x,
    .ps--active-y > .ps__rail-y {
      display: block;
      background-color: transparent;
    }
    
    .ps:hover > .ps__rail-x,
    .ps:hover > .ps__rail-y,
    .ps--focus > .ps__rail-x,
    .ps--focus > .ps__rail-y,
    .ps--scrolling-x > .ps__rail-x,
    .ps--scrolling-y > .ps__rail-y {
      opacity: 0.6;
    }
    
    .ps .ps__rail-x:hover,
    .ps .ps__rail-y:hover,
    .ps .ps__rail-x:focus,
    .ps .ps__rail-y:focus,
    .ps .ps__rail-x.ps--clicking,
    .ps .ps__rail-y.ps--clicking {
      background-color: #eee;
      opacity: 0.9;
    }
    
    /*
     * Scrollbar thumb styles
     */
    .ps__thumb-x {
      background-color: #C9C9C9;
      border-radius: 6px;
      transition: background-color .2s linear, height .2s ease-in-out;
      -webkit-transition: background-color .2s linear, height .2s ease-in-out;
      height: 4px;
      /* there must be 'bottom' for ps__thumb-x */
      bottom: 2px;
      /* please don't change 'position' */
      position: absolute;
    }
    
    .ps__thumb-y {
      background-color: #C9C9C9;
      border-radius: 6px;
      transition: background-color .2s linear, width .2s ease-in-out;
      -webkit-transition: background-color .2s linear, width .2s ease-in-out;
      width: 4px;
      /* there must be 'right' for ps__thumb-y */
      right: 2px;
      /* please don't change 'position' */
      position: absolute;
    }
    
    .ps__rail-x:hover > .ps__thumb-x,
    .ps__rail-x:focus > .ps__thumb-x,
    .ps__rail-x.ps--clicking .ps__thumb-x {
      background-color: #999;
      height: 6px;
    }
    
    .ps__rail-y:hover > .ps__thumb-y,
    .ps__rail-y:focus > .ps__thumb-y,
    .ps__rail-y.ps--clicking .ps__thumb-y {
      background-color: #999;
      width: 6px;
    }
    
    
    @supports (-ms-overflow-style: none) {
      .ps {
        overflow: auto !important;
      }
    }
    
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
      .ps {
        overflow: auto !important;
      }
    }
    .scrollbar-container {
      height: 100%; 
      position: relative;
    }
`;

export const Container = styled.div`
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1170px;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
    width: 100%;
`;
