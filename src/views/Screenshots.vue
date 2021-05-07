<template>
  <div id="screenshots">
    <section id="banner_parallax" class="inner_page_banner slide_banner1">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="full">
              <div class="slide_cont">
                <h2>Screenshots</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ScreenshotSection />

    <Steps />
  </div>
</template>
<script>
import Steps from "../components/SubComp/Steps";
import ScreenshotSection from "../components/SubComp/ScreenshotSection";

export default {
  name: "Screenshots",
  components: {
    Steps,
    ScreenshotSection,
  },
};
</script>