<template>
  <div id="pricing">
    <section id="banner_parallax" class="inner_page_banner slide_banner1">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="full">
              <div class="slide_cont">
                <h2>Pricing</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Offers />
    <ContactUs />
  </div>
</template>
<script>
import Offers from "../components/SubComp/Offers";
import ContactUs from "../components/SubComp/ContactUs";

export default {
  name: "Pricing",
  components: { Offers, ContactUs },
};
</script>