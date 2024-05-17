<template>
  <div class="all_about">
    <div class="tab-content" id="v-pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="v-pills-home"
        role="tabpanel"
        aria-labelledby="v-pills-home-tab"
        tabindex="0"
      >
        <div class="text-tab">
          <p>all about</p>
          <h4>our gym</h4>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-profile"
        role="tabpanel"
        aria-labelledby="v-pills-profile-tab"
        tabindex="0"
      >
        <div class="text-tab">
          <p>all about</p>
          <h4>our gym</h4>
        </div>
      </div>

      <div
        class="tab-pane fade"
        id="v-pills-messages"
        role="tabpanel"
        aria-labelledby="v-pills-messages-tab"
        tabindex="0"
      >
        <div class="text-tab">
          <p>all about</p>
          <h4>our gym</h4>
        </div>
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-settings"
        role="tabpanel"
        aria-labelledby="v-pills-settings-tab"
        tabindex="0"
      >
        <div class="text-tab">
          <p>all about</p>
          <h4>our gym</h4>
        </div>
      </div>
    </div>
    <div
      class="all-btntab"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <button
        class="nav-link active"
        id="v-pills-home-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-home"
        type="button"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
      >
        OUR MISSIONS
      </button>
      <p>
        Our purpose is to pass on empowering knowledge and training guidance in
        order to have a positive impact on the health and fitness of everyone we
        work with.To provide a personalised health and fitness service that
        unlocks every individual’s true potential so they can achieve their
        desired goals
      </p>
      <button
        class="nav-link"
        id="v-pills-profile-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-profile"
        type="button"
        role="tab"
        aria-controls="v-pills-profile"
        aria-selected="false"
      >
        OUR STORY
      </button>
      <p>
        Our main focus at F7 Fitness is functional training because of the
        proven benefits. With an emphasis on mobility, strength, and
        conditioning, the benefits of functional training differ from other
        workouts because of the way it targets your body.
      </p>

      <button
        class="nav-link"
        id="v-pills-messages-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-messages"
        type="button"
        role="tab"
        aria-controls="v-pills-messages"
        aria-selected="false"
      >
        APPROACH
      </button>
      <p>
        We are a hybrid gym and training facility. We have clean, state of the
        art facilities with the most knowledgeable staff and cutting-edge
        training methods. We offer open gym, team training, group classes,
        boxing, cycle and personal training.
      </p>
      <button
        class="nav-link"
        id="v-pills-settings-tab"
        data-bs-toggle="pill"
        data-bs-target="#v-pills-settings"
        type="button"
        role="tab"
        aria-controls="v-pills-settings"
        aria-selected="false"
      >
        EQUIPMENTS
      </button>
      <p>
        Give your workout more variety than ever with our accessories, from
        warmup to cooldown. Increase your body’s capacities every day, from
        stability to mobility, from power to speed.<br />
        <button class="read">
          read more <i class="fa-solid fa-caret-right"></i>
        </button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeAllAbout",
};
</script>

<style></style>
