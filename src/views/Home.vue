<template>
  <div class="home">
    <Section1 />
    <!-- end header -->
    <!-- section -->
    <AboutSection />
    <!-- end section -->
    <!-- section -->
    <Section2 />
    <!-- end section -->
    <!-- section -->
    <Features />
    <!-- end section -->
    <!-- section -->
    <Steps />
    <!-- end section -->
    <!-- section -->
    <Offers />
    <!-- end section -->
    <!-- section -->
    <ContactUs />
    <!-- end section -->
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Section1 from "../components/SubComp/Section1";
import Section2 from "../components/SubComp/Section2";
import AboutSection from "../components/SubComp/AboutSection";
import Offers from "../components/SubComp/Offers";
import ContactUs from "../components/SubComp/ContactUs";
import Steps from "../components/SubComp/Steps";
import Features from "../components/SubComp/Features";

export default {
  name: "Home",
  components: {
    NavBar,
    Section1,
    AboutSection,
    Offers,
    ContactUs,
    Steps,
    Features,
    Section2,
  },
};
</script>

<style lang="scss">
</style>