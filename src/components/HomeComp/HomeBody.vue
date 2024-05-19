<template>
  <div class="HomeBody">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="text">
            <h4>Body Mass Index</h4>
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
        <div class="col-lg-8">
          <div class="input">
            <div class="all-range">
              <div class="range">
                <div class="range-lable">
                  <label>Your Height (cm)</label>
                  <input
                    type="range"
                    min="50"
                    max="250"
                    step="1"
                    v-model="inputValueHight"
                    @input="updateValueHight"
                  />
                </div>
                <p class="value">
                  <output>{{ displayedValueHight }}</output>
                </p>
              </div>
              <div class="range">
                <div class="range-lable">
                  <label>Your Weight (kg)</label>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    step="1"
                    v-model="inputValue"
                    @input="updateValue"
                  />
                </div>
                <p class="value">
                  <output>{{ displayedValue }}</output>
                </p>
              </div>
            </div>

            <div class="all-range">
              <div class="text-hight">
                <h4>Kg{{ displayedValueHight }}</h4>
                <p class="max">Your Maximum Proper Weight</p>
              </div>
              <div class="text-weight">
                <h4>{{ displayedValue }}</h4>
                <p class="max">Your Maximum Proper Weight</p>
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
      inputValueHight: 170, // Default height in cm
      displayedValueHight: "170",
      inputValue: 70, // Default weight in kg
      displayedValue: "70",
    };
  },
  methods: {
    updateValueHight(event) {
      this.displayedValueHight = event.target.value;
    },
    updateValue(event) {
      this.displayedValue = event.target.value;
    },
  },
};
</script>
