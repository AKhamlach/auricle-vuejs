<template>
  <div id="team">
    <section id="banner_parallax" class="inner_page_banner slide_banner1">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="full">
              <div class="slide_cont">
                <h2>Team</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <OurTeam />
    <ContactUs />
  </div>
</template>


<script>
import OurTeam from "../components/SubComp/OurTeam";
import ContactUs from "../components/SubComp/ContactUs";
export default {
  name: "Team",
  components: { OurTeam, ContactUs },
};
</script>