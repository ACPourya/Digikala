///////////Hiding nav bar by scrolling///////////
function handleScrollForLargeScreens() {
  let lastScrollTop = 0;
  const navbar = document.getElementById('header__bottom');
  const header = document.getElementById('header');
  let navbarHeight = navbar.offsetHeight;
  let headerHeight = header.offsetHeight;

  window.addEventListener('scroll', function() {
      let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      let scrollDirection = currentScroll > lastScrollTop ? 'down' : 'up';

      if (scrollDirection === 'down' && currentScroll > navbarHeight) {
          // Scroll down
          navbar.style.top = `-${navbarHeight}px`;
          navbar.style.zIndex = '-1';
          header.style.height = '70px';
      } else {
          // Scroll up or near the top
          navbar.style.top = '0';
          navbar.style.zIndex = 'initial';
          header.style.height = '110px';
      }

      lastScrollTop = currentScroll;
  });
}

function checkScreenSize() {
  if (window.matchMedia("(min-width: 1024px)").matches) {
      handleScrollForLargeScreens();
  }
}

checkScreenSize();

window.addEventListener('resize', checkScreenSize);

///////////Hiding nav bar by scrolling///////////

///////////Scroll top///////////
window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');
  });
  
  document.getElementById('scrollToTopBtn').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
///////////Scroll top///////////

///////////Read more - Read less///////////

let more = document.getElementById('show-more');
more.addEventListener('click',function (){
  let container = document.getElementById('container');
  let text = document.getElementById('text');
  if (container.offsetHeight === 125) {
    container.style.height = 'auto';
    container.classList.add('before:hidden');
    container.classList.remove('before:block');
    text.textContent  = 'بستن';
  }else{
    container.style.height = '125px';
    container.classList.remove('before:hidden');
    container.classList.add('before:block');
    text.textContent  = 'مشاهده بیشتر';
  }
});

/////////Read more - Read less/////////

///////// Pop up search /////////
function openSearchPopup() {
  document.getElementById('searchPopup').classList.add('show');
  document.body.classList.add('overflow-hidden');
}

function closeSearchPopup() {
  document.getElementById('searchPopup').classList.remove('show');
  document.body.classList.remove('overflow-hidden');
}
///////// Pop up search /////////

///////// Mobile be hover as soon as categories hovered /////////
document.addEventListener('DOMContentLoaded', () => {
  const mainCategory = document.getElementById('category-main');
  const subMobile = document.getElementById('sub-mobile');
  const subMobileSvg = document.getElementById('sub-mobile-svg');
  const subMobileDetails = document.getElementById('sub-mobile-details');
  const otherCategories = document.querySelectorAll('#category-others');

  mainCategory.addEventListener('mouseenter', () => {
    console.log('main category selected with mobile');
    subMobile.classList.add('bg-white', 'text-[#ef394e]', 'block');
    subMobileSvg.classList.add('fill-[#ef394e]');
    subMobileDetails.classList.remove('hidden');
    subMobileDetails.classList.add('block');
  });

  mainCategory.addEventListener('mouseleave', () => {
    console.log('main category unselected');
    subMobile.classList.remove('bg-white', 'text-[#ef394e]', 'block');
    subMobileSvg.classList.remove('fill-[#ef394e]');
    subMobileDetails.classList.remove('block');
    subMobileDetails.classList.add('hidden');
  });

  otherCategories.forEach(category => {
    category.addEventListener('mouseenter', () => {
      console.log('other categories selected');
      subMobile.classList.remove('bg-white', 'text-[#ef394e]', 'block');
      subMobileSvg.classList.remove('fill-[#ef394e]');
      subMobileDetails.classList.remove('block');
      subMobileDetails.classList.add('hidden');
    });

    category.addEventListener('mouseleave', () => {
      console.log('other categories unselected');
      if (mainCategory.matches(':hover')) {
        subMobile.classList.add('bg-white', 'text-[#ef394e]', 'block');
        subMobileSvg.classList.add('fill-[#ef394e]');
        subMobileDetails.classList.remove('hidden');
        subMobileDetails.classList.add('block');
      }
    });
  });
});
///////// Mobile be hover as soon as categories hovered /////////

///////// Footer Mobile /////////
function toggleSection(sectionId) {
  var content = document.getElementById('collapsibleContent-' + sectionId);
  var icon = document.getElementById('toggleIcon-' + sectionId);
  if (content.classList.contains('hidden')) {
      content.classList.remove('hidden');
      icon.classList.remove('rotate-0');
      icon.classList.add('rotate-180');
      if(content.id === 'collapsibleContent-section4'){
        content.classList.remove('pb-4');
      }
  } else {
    if(content.id === 'collapsibleContent-section4'){
      content.classList.add('pb-4');
    }
      content.classList.add('hidden');
      icon.classList.remove('rotate-180');
      icon.classList.add('rotate-0');
  }
}
///////// Footer Mobile /////////

let fetchStorySlider = async () => {
  let data = await fetch("./db.json");
  let res = await data.json();
  let AllStories = res.story.map((elem) => {
    return `
    <div class="swiper-slide">
    <div class="swiper-slide-content">
      <img
        src="${elem.image}"
        alt=""
        class="story-image"
      />
      <div class="story-text">${elem.storyTitle}</div>
    </div>
  </div>
    `;
  });
  document
    .querySelector(".story")
    .insertAdjacentHTML("afterbegin", AllStories.join(""));
};
let fetchAmazingSlider = async () => {
  let data = await fetch("./db.json");
  let res = await data.json();
  let lastSlide = `
  <div class="swiper-slide rounded-l-lg">
  <div class="h-[252px] flex flex-col justify-center gap-x-4">
    <div class="flex flex-col">
      <a
        href="./shegeftangizha.html"
        class="flex flex-col gap-x-2 items-center my-2"
      >
        <div
          class="w-[52px] h-[52px] rounded-full flex items-center justify-center border-[1px] border-[#19bfd3]"
        >
          <img
            src="./public/images/svg/مشاهده-همه-آبی.svg"
            alt=""
            class="!w-[26px] !h-[25px]"
          />
        </div>
        <span
          class="font-digikala text-[15px] text-neutral-700 mt-1 px-3"
          >مشاهده همه</span
        >
      </a>
    </div>
  </div>
</div>`
  document
.querySelector(".amazing-products")
.insertAdjacentHTML("afterbegin", lastSlide);
  let allAmazing = res.amazingOffer.map((elem) => {
    return `
    <div class="swiper-slide">
    <a href="#" class="w-inherit flex flex-col gap-y-5 p-2">
      <img
        src="${elem.image}"
        alt=""
        class="!w-[150px] !h-[150px] mx-auto"
      />
      <div class="flex flex-col gap-y-1 grow">
        <div class="flex items-center justify-between">
          <div
            class="bg-[#d32f2f] w-[35px] h-[20px] rounded-[16px] flex items-center justify-center"
          >
            <span class="text-white text-[12px] font-bold px-1"
              >${elem.off}</span
            >
          </div>
          <div class="flex items-center justify-end gap-x-1">
            <span
              class="text-neutral-700 text-[15px] font-bold font-digikala"
              >${elem.price}</span
            >
            <img src="./public/images/svg/تومان.svg" alt="" />
          </div>
        </div>
        <span
          class="flex justify-end ml-4 text-neutral-300 line-through text-[13px] font-digikala"
          >${elem.discount}</span
        >
        <div
          class="w-full h-1 mt-3 flex flex-row-reverse bg-slate-200 rounded"
        >
          <span
            class="w-[50%] h-inherit bg-red-500 rounded"
          ></span>
        </div>
      </div>
    </a>
  </div>
    `;
  });
  document
    .querySelector(".amazing-products")
    .insertAdjacentHTML("afterbegin", allAmazing.join(""));
  let firstSlide = `
  <div class="swiper-slide !bg-transparent">
  <a href="#" class="flex flex-col items-center gap-x-4">
    <img
      src="./public/images/svg/شگفت-انگیز.svg"
      alt=""
      class="!w-[80px] !h-[75px]"
    />
    <img
      src="./public/images/amazing/box.png"
      alt=""
      class="!w-[115px] !h-[105px]"
    />
    <div class="flex justify-center items-center">
      <p class="text-white text-[15px] font-digikala">
        مشاهده همه
      </p>
      <img
        src="./public/images/svg/مشاهده-همه.svg"
        alt=""
        class="!w-[18px] !h-[18px]"
      />
    </div>
  </a>
  </div>
  `;
  document
  .querySelector(".amazing-products")
  .insertAdjacentHTML("afterbegin", firstSlide);    
};
let fetchBestBrandsSlider = async () => {
  let data = await fetch("./db.json");
  let res = await data.json();
  let lastBrand =  `
  <div class="swiper-slide">
    <a href="#" class="h-full px-4 py-1 overflow-hidden flex items-center justify-center">
      <div class="flex items-center justify-center ">
        <img src="./public/images/best-brands/b-12.png" alt="Samsung" class="!object-contain">
      </div>
    </a>
  </div>
  `
  document
.querySelector(".brand_slids")
.insertAdjacentHTML("afterbegin", lastBrand);
  let allBrands = res.bestBrands.map((elem) => {
    return `
    <div class="swiper-slide border-l border-[#f0f0f1]">
      <a href="#" class="h-full px-4 py-1 overflow-hidden flex items-center justify-center">
        <div class="flex items-center justify-center ">
          <img src="${elem.image}" alt="${elem.alt}" class="!object-contain">
        </div>
      </a>
    </div>
    `;
  });
  document
    .querySelector(".brand_slids")
    .insertAdjacentHTML("afterbegin", allBrands.join(""));
};
async function allData() {
    await fetchStorySlider();
    await fetchAmazingSlider();
    await fetchBestBrandsSlider();
    initSlider();
}

function initSlider() {
//Story//  
function calculateSlidesPerViewMyStory() {
  const width = window.innerWidth;
  return Math.max(1, Math.min(12.5, width / 100));
}

const myStorySwiper = new Swiper('.myStory', {
  slidesPerView: calculateSlidesPerViewMyStory(),
  spaceBetween: 2,
  navigation: {
    nextEl: '.swiper-button-next-story',
    prevEl: '.swiper-button-prev-story',
  },
});

window.addEventListener('resize', () => {
  const newSlidesPerViewMyStory = calculateSlidesPerViewMyStory();
  myStorySwiper.params.slidesPerView = newSlidesPerViewMyStory;
  myStorySwiper.update();
});
//Story//

//Amazing//
function calculateSlidesPerViewMyAmazing() {
  const slideWidth = 182; 
  const width = window.innerWidth;
  return Math.max(1, Math.floor(width / slideWidth));
}

const myAmazingSwiper = new Swiper('.myAmazing', {
  slidesPerView: calculateSlidesPerViewMyAmazing(),
  spaceBetween: 2,
  navigation: {
    nextEl: '.swiper-button-next-amazing',
    prevEl: '.swiper-button-prev-amazing',
  },
});

window.addEventListener('resize', () => {
  const newSlidesPerViewMyAmazing = calculateSlidesPerViewMyAmazing();
  myAmazingSwiper.params.slidesPerView = newSlidesPerViewMyAmazing;
  myAmazingSwiper.update();
});
//Amazing//

//Best Brands//
function calculateSlidesPerViewMyBestBrands() {
  const width = window.innerWidth;
  return Math.max(1, Math.min(9.5, width / 100));
}

const myBestBrandsSwiper = new Swiper('.myBestBrands', {
  slidesPerView: calculateSlidesPerViewMyBestBrands(),
  spaceBetween: 0,
  navigation: {
    nextEl: '.swiper-button-next-best-brands',
    prevEl: '.swiper-button-prev-best-brands',
  },
});

window.addEventListener('resize', () => {
  const newSlidesPerViewMyBestBrands = calculateSlidesPerViewMyBestBrands();
  myBestBrandsSwiper.params.slidesPerView = newSlidesPerViewMyBestBrands;
  myBestBrandsSwiper.update();
});
//Best Brands//
}
allData();
