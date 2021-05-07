<template>
  <footer class="footer_style_2">
    <div class="footer_top">
      <div class="container">
        <div class="row">
          <LogoSection />
          <TwitterFeed />
          <Social />
          <Blog />
        </div>
      </div>
    </div>
    <!-- footer bottom -->
    <div class="footer_bottom">
      <p>Dessigned and developed by <strong>html.design</strong></p>
    </div>
  </footer>
</template>
<script>
import Blog from "./FooterComp/Blog";
import Social from "./FooterComp/Social";
import TwitterFeed from "./FooterComp/TwitterFeed";
import LogoSection from "./FooterComp/LogoSection";

export default {
  name: "Footer",
  components: { Blog, Social, TwitterFeed, LogoSection },
};
</script>