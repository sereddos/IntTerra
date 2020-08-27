<template>
  <span class="assessment-icon">
    <svg width="20px" height="10px" viewBox="0 0 20 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Grey_mark" fill="#333333" class="svg-fill">
              <rect id="Rectangle-10" x="0" y="0" width="20" height="10" rx="5"></rect>
          </g>
      </g>
    </svg>
  </span>
</template>

<style lang="scss">
.assessment-icon {
  padding-top: 3px;
  padding-right: 9px;
  display: inline-block;

  & .svg-fill {
    opacity: .2;
  }

  &.excellent .svg-fill {
    fill: #66CC66;
    opacity: 1;
  }

  &.satisfactorily .svg-fill {
    fill: #FFE06D;
    opacity: 1;
  }

  &.badly .svg-fill {
    fill: #FF7360;
    opacity: 1;
  }
}
</style>
