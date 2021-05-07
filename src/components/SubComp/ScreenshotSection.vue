<template>
  <section class="layout_padding">
    <div class="container-fuild">
      <div class="row">
        <div class="full">
          <div class="row">
            <div class="col-sm-12">
              <div class="full text_align_center">
                <div class="heading_main center_head_border heading_style_1">
                  <h2>Screenshot</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="full">
          <ul>
            <li
              class="scren screen1"
              v-for="screen in screens"
              :key="screen.id"
            >
              <img class="img-responsive" :src="screen.image" alt="#" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "ScreenshotSection",
  data() {
    return {
      screens: [
        { id: 1, image: "images/scr1.png" },
        { id: 2, image: "images/scr2.png" },
        { id: 3, image: "images/scr3.png" },
        { id: 4, image: "images/scr1.png" },
        { id: 5, image: "images/scr3.png" },
        { id: 6, image: "images/scr1.png" },
        { id: 7, image: "images/scr4.png" },
        { id: 8, image: "images/scr2.png" },
      ],
    };
  },
};
</script>