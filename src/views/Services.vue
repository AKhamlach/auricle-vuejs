<template>
  <div id="Services">
    <section id="banner_parallax" class="slide_banner1">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="full">
              <div class="slide_cont">
                <h2>Services</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Features />
  </div>
</template>
<script>
import Features from "../components/SubComp/Features";

export default {
  name: "Services",
  components: { Features },
};
</script>