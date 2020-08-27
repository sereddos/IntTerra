<template>
  <button class="button" @click="click" :class="getClass" :disabled="isDisabled">
    <slot name="icons"></slot>
    <span class="button_text">
      <slot></slot>
    </span>
  </button>
</template>

<script>

export default {
  name: 'Button',
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    modifier: {
      type: String,
      default: null
    }
  },
  computed: {
    getClass () {
      let buttonClass = this.type
        ? this.type.split(',').map(el => 'button_' + el.trim()).join(' ')
        : ''
      buttonClass += this.modifier ? ' button_' + this.modifier : ''
      return buttonClass
    },
    isDisabled () {
      return this.disabled
    }
  },
  methods: {
    click (e) {
      if (this.isDisabled) {
        return
      }
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss">
.button {
  background: #ffffff;
  border-radius: 25px;
  border: none;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, .1);
  cursor: pointer;
  outline: none;
  padding: 0 15px;
}

.button_text {
  font-family: Helvetica;
  font-size: 13px;
  color: #333333;
  letter-spacing: -0.4px;
}
</style>
