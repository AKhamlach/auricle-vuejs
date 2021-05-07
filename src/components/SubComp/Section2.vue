<template>
  <section class="layout_padding gradiant_bg cross_layout">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="info in info_blogs" :key="info.id">
          <div class="information_blogs">
            <div class="imf_icon">
              <img :src="info.image" alt="#" />
            </div>
            <div class="imf_head">
              <h3>{{ info.title }}</h3>
            </div>
            <div class="imf_cont">
              <p>
                {{ info.text }}
              </p>
            </div>
            <div class="imf_read"><a href="#">Read More</a></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Section2",
  data() {
    return {
      info_blogs: [
        {
          id: 1,
          title: "Awesome Features",
          text:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium",
          image: "images/icon1.png",
        },
        {
          id: 2,
          title: "Creative Design",
          text:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium",
          image: "images/icon2.png",
        },
        {
          id: 3,
          title: "24 Hours Supports",
          text:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium",
          image: "images/icon3.png",
        },
      ],
    };
  },
};
</script>