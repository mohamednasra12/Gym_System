<template>
  <div class="HomeBody">
    <div class="container-fluid">
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
                  <div class="ranges">
                    <label>Your Height (cm)</label>
                    <input
                      type="range"
                      min="50"
                      max="250"
                      step="1"
                      v-model="inputValueHeight"
                      @input="updateValueHeight"
                    />
                  </div>
                  <div class="output">
                    <input
                      type="number"
                      v-model="inputValueHeight"
                      @input="updateValueHeight"
                    />
                  </div>
                </div>
              </div>
              <div class="range">
                <div class="range-lable">
                  <div class="ranges">
                    <label>Your Weight (kg)</label>
                    <input
                      type="range"
                      min="10"
                      max="200"
                      step="1"
                      v-model="inputValueWeight"
                      @input="updateValueWeight"
                    />
                  </div>
                  <div class="output">
                    <input
                      type="number"
                      v-model="inputValueWeight"
                      @input="updateValueWeight"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div class="all-range">
              <div class="text-height">
                <h4>{{ displayedValueHeight }} cm</h4>
                <p class="max">Your Maximum Proper Weight</p>
              </div>
              <div class="text-weight">
                <h4>{{ displayedValueWeight }} kg</h4>
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
      inputValueHeight: 170, // Default height in cm
      displayedValueHeight: "170",
      inputValueWeight: 70, // Default weight in kg
      displayedValueWeight: "70",
    };
  },
  methods: {
    updateValueHeight() {
      this.displayedValueHeight = this.inputValueHeight;
    },
    updateValueWeight() {
      this.displayedValueWeight = this.inputValueWeight;
    },
    calculateBMI() {
      const heightInMeters = this.inputValueHeight / 100;
      const BMI = this.inputValueWeight / (heightInMeters * heightInMeters);
      return BMI.toFixed(2); // Round to 2 decimal places
    },
  },
  computed: {
    BMI() {
      return this.calculateBMI();
    },
  },
  mounted() {
    this.displayedValueHeight = this.inputValueHeight;
    this.displayedValueWeight = this.inputValueWeight;
  },
};
</script>
