<template>
  <div class="about">
    <section id="banner_parallax" class="inner_page_banner slide_banner1">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="full">
              <div class="slide_cont">
                <h2>About us</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end header -->
    <!-- section -->
    <AboutSection />
    <!-- end section -->
    <!-- section -->
    <Steps />
    <!-- end section -->
  </div>
</template>
<script>
import AboutSection from "../components/SubComp/AboutSection";
import Steps from "../components/SubComp/Steps";
export default {
  name: "AboutUs",
  components: { AboutSection, Steps },
};
</script>