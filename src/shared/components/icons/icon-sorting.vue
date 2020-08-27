<template>
  <span class="sorting-icon">
    <svg width="10px" height="5px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="1-Field-Operations" transform="translate(-255.000000, -214.000000)" fill="#A7A9AC" class="svg-fill">
              <g id="Table" transform="translate(109.000000, 140.000000)">
                  <g id="шапка" transform="translate(1.000000, 56.000000)">
                      <polygon id="Rectangle-3-Copy" points="155 18 150 23 145 18"></polygon>
                  </g>
              </g>
          </g>
      </g>
    </svg>
  </span>
</template>

<style lang="scss">
.sorting-icon {
  margin-left: 3px;
  display: inline-block;

  &.reverse {
    transform: rotate(180deg) translateY(-3px);
  }
}

.active .svg-fill {
  fill: #3399FF;
}
</style>
