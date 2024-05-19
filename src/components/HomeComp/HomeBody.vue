<template>
  <div class="HomeBody">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="text">
            <h4>Body Mass index</h4>
            <p>
              Body Mass Index (BMI) is a measure of body fat based on height and
              weight that applies to adult men and women.
            </p>
            <div class="nots">
              <img src="@/assets/imgas/right-chevron 2.svg" alt="" />
              <p>18-25 – Normal Weight</p>
            </div>
            <div class="nots">
              <img src="@/assets/imgas/right-chevron 2.svg" alt="" />
              <p>25-30 – Overweight</p>
            </div>
            <div class="nots">
              <img src="@/assets/imgas/right-chevron 2.svg" alt="" />
              <p>30-40 – Obesity</p>
            </div>
            <div class="nots">
              <img src="@/assets/imgas/right-chevron 2.svg" alt="" />
              <p>Above 40 – Morbid Obesity</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="input">
            <div class="row">
              <div class="col-lg-6">
                <p>Your Height (cm)</p>
                <div class="range">
                  <input
                    type="range"
                    min="0"
                    max="2.5"
                    step="any"
                    v-model="inputValueHight"
                    @input="updateValueHight"
                  />
                  <p class="value">
                    <output>{{ displayedValueHight }}</output>
                  </p>
                </div>
                <p>Your Weight (kg)</p>
                <div class="range">
                  <input
                    type="range"
                    min="0"
                    max="2.5"
                    step="any"
                    v-model="inputValue"
                    @input="updateValue"
                  />
                  <p class="value">
                    <output>{{ displayedValue }}</output>
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="text-hight">
                  <h4>kg72.2</h4>
                  <p class="max">Your Maximum Proper Weight</p>
                </div>
                <div class="text-weight">
                  <h4>kg72.2</h4>
                  <p class="max">Your Maximum Proper Weight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValueHight: 0, // 170 cm converted to meters
      displayedValueHight: "",
      inputValue: 0, // 170 cm converted to meters
      displayedValue: "",
    };
  },
  methods: {
    updateValueHight(event) {
      // Convert input value from meters to centimeters
      this.displayedValueHight = (event.target.value * 100).toFixed(2); // Convert to fixed decimal places
    },
    updateValue(event) {
      // Convert input value from meters to centimeters
      this.displayedValue = (event.target.value * 100).toFixed(2); // Convert to fixed decimal places
    },
  },
};
</script>
