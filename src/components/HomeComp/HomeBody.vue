<template>
  <div>
    <input
      type="range"
      min="0"
      max="2.5"
      step="any"
      v-model="inputValue"
      @input="updateValue"
    />
    <p>
      Value: <output>{{ displayedValue }} cm</output>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: 0, // 170 cm converted to meters
      displayedValue: "",
    };
  },
  methods: {
    updateValue(event) {
      // Convert input value from meters to centimeters
      this.displayedValue = (event.target.value * 100).toFixed(2); // Convert to fixed decimal places
    },
  },
};
</script>
