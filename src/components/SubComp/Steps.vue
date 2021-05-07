<template>
  <section class="layout_padding gradiant_bg cross_layout">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="full text_align_center white_fonts">
            <div class="heading_main center_head_border heading_style_1">
              <h2>Easy <span>Steps</span></h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row step_section">
        <div class="offset-xl-1 col-xl-10 col-md-12">
          <div class="row">
            <div
              class="col-lg-3 col-md-6 col-sm-12 col-xs-12"
              v-for="step in steps"
              :key="step.id"
            >
              <div class="step_blog arrow_right_step">
                <div class="step_inner">
                  <i :class="step.icon"></i><br />
                  <p>{{ step.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Steps",
  data() {
    return {
      steps: [
        { id: 1, icon: "fa fa-diamond", text: "Go app store" },
        { id: 2, icon: "fa fa-user", text: "Create an Account" },
        { id: 3, icon: "fa fa-download", text: "Download & Install" },
        { id: 4, icon: "fa fa-thumbs-up", text: "Enjoy & Rate us!" },
      ],
    };
  },
};
</script>