<template>
  <button
    class="card-icon"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasRight"
    aria-controls="offcanvasRight"
  >
    <i class="fa-solid fa-store"></i>
  </button>

  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasRight"
    aria-labelledby="offcanvasRightLabel"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">...</div>
  </div>
</template>

<script>
export default {
  name: "CardDrower",
};
</script>

<style lang="scss" scoped>
button.card-icon {
  position: absolute;
  top: 6px;
  z-index: 111111;
  left: 0;
  background-color: transparent;
  border: none;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
