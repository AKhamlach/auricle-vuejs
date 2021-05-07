<template>
  <section class="layout_padding">
    <div class="container">
      <div class="row">
        <div class="full">
          <div class="row">
            <div class="col-sm-12">
              <div class="full text_align_center">
                <div class="heading_main center_head_border heading_style_1">
                  <h2>{{ $store.state.tablePrice.title }}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <div class="full" style="margin-top: 10px">
            <div class="row">
              <div
                class="col-sm-12 col-md-4"
                v-for="offer in $store.state.tablePrice.offers"
                :key="offer.id"
              >
                <div class="table_price text_align_center">
                  <div class="table_price_head">
                    <h5>{{ offer.type }}</h5>
                  </div>
                  <div class="table_price_cont">
                    <div class="table_price_per">
                      <p>
                        {{ offer.price }}<br />
                        <small>/month</small>
                      </p>
                    </div>
                    <div class="table_price_cont_bottm">
                      <ul>
                        <li v-for="content in offer.contents" :key="content.id">
                          {{ content.text }}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="table_price_bottm">
                    <a class="bt_main" href="index.html">Buy now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Offers",
};
</script>