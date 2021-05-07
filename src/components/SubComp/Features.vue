<template>
  <section class="layout_padding layer_style">
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <div class="full text_align_center">
            <div class="heading_main center_head_border heading_style_1">
              <h2>Auricle <span>Features</span></h2>
            </div>
          </div>
        </div>
      </div>
      <div class="row app-features">
        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="features-left">
            <li v-for="feature in features_left" :key="feature.id">
              <i :class="feature.icon"></i>
              <div class="fr-inner">
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.text }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12">
          <ul class="features-right">
            <li v-for="feature in features_right" :key="feature.id">
              <i :class="feature.icon"></i>
              <div class="fr-inner">
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.text }}</p>
              </div>
            </li>
          </ul>
        </div>
        <div
          class="col-md-4 wow fadeInRight"
          data-wow-delay="0.5"
          data-wow-duration="1s"
        >
          <div class="full">
            <div class="center">
              <img src="images/application_screen.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Features",
  data() {
    return {
      features_left: [
        {
          id: 1,
          icon: "flaticon-wordpress-logo",
          title: "WordPress Installation",
          text: "Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet.",
        },
        {
          id: 2,
          icon: "flaticon-windows",
          title: "Browser Compatible",
          text: "Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet.",
        },
        {
          id: 3,
          icon: "flaticon-price-tag",
          title: "Easy to Customize",
          text: "Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet.",
        },
        {
          id: 4,
          icon: "flaticon-new-file",
          title: "eCommerce Ready",
          text: "Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet.",
        },
      ],
      features_right: [
        {
          id: 1,
          icon: "flaticon-pantone",
          title: "Limitless Colors",
          text: "Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet.",
        },
        {
          id: 2,
          icon: "flaticon-cloud-computing",
          title: "Lifetime Update",
          text: "Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet.",
        },
        {
          id: 3,
          icon: "flaticon-line-graph",
          title: "SEO Friendly",
          text: "Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet.",
        },
        {
          id: 4,
          icon: "flaticon-coding",
          title: "Simple Clean Code",
          text: "Lorem Ipsum dolroin gravida nibh vel velit auctor aliquet.",
        },
      ],
    };
  },
};
</script>