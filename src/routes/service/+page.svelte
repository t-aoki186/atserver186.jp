<script lang="ts">
  import { onMount } from 'svelte';
  import Swiper from 'swiper';
  import { Navigation, Pagination, Autoplay } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  let swiperContainer: HTMLDivElement | null = null;
  let swiperInstance: any = null;

  const slides = [
    {
      id: 1,
      title: 'スライド 1',
      body: 'これは最初のスライドです。',
      image: 'https://picsum.photos/id/1018/1200/600'
    },
    {
      id: 2,
      title: 'スライド 2',
      body: 'これは2番目のスライドです。',
      image: 'https://picsum.photos/id/1025/1200/600'
    },
    {
      id: 3,
      title: 'スライド 3',
      body: '最後のスライドです。',
      image: 'https://picsum.photos/id/1035/1200/600'
    }
  ];

  onMount(() => {
    // Initialize Swiper on the DOM container
    if (swiperContainer) {
      swiperInstance = new Swiper(swiperContainer, {
        modules: [Navigation, Pagination, Autoplay],
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: { el: '.swiper-pagination', clickable: true },
        autoplay: { delay: 3000, disableOnInteraction: false },
        spaceBetween: 20,
        slidesPerView: 1,
        loop: true
      });
    }
  });
</script>

<svelte:head>
  <title>サービス - Swiper カルーセル</title>
</svelte:head>

<main class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">サービス紹介 (Swiper カルーセル)</h1>

  <!--s:カルーセル-->
  <div class="carousel-wrapper">
    <div class="swiper" bind:this={swiperContainer}>
      <div class="swiper-wrapper">
        {#each slides as s}
          <div class="swiper-slide">
            <div class="slide-card overflow-hidden rounded-lg shadow-md bg-white">
              {#if s.image}
                <img src={s.image} alt={s.title} class="slide-img w-full h-full object-cover" />
              {/if}
              <div class="p-4">
                <h2 class="text-xl font-semibold mb-2">{s.title}</h2>
                <p class="text-sm">{s.body}</p>
              </div>
            </div>
          </div>
        {/each}
      </div>
      <!-- pagination / navigation -->
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
  <!--e:カルーセル-->
</main>

<style>
  .carousel-wrapper {
    width: 80vw;
    margin: 0 auto;
  }

  .slide-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
</style>
