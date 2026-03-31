

const ascendiaDemos = [
  {
    name: "Artisan BTP",
    title: "Démo complète — Artisan BTP",
    href: "demo-btp.html",
    badge: "Artisan BTP",
    image: 'linear-gradient(180deg,rgba(0,0,0,.12),rgba(0,0,0,.55)), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80")'
  },
  {
    name: "Restaurant",
    title: "Démo complète — Restaurant",
    href: "demo-restaurant.html",
    badge: "Restaurant",
    image: 'linear-gradient(180deg,rgba(0,0,0,.16),rgba(0,0,0,.50)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80")'
  },
  {
    name: "Coach Fitness",
    title: "Démo complète — Coach Fitness",
    href: "demo-coach.html",
    badge: "Coach Fitness",
    image: 'linear-gradient(180deg,rgba(0,0,0,.22),rgba(0,0,0,.54)), url("https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1400&q=80")'
  },
  {
    name: "Immobilier",
    title: "Démo complète — Immobilier",
    href: "demo-immo.html",
    badge: "Immobilier",
    image: 'linear-gradient(180deg,rgba(0,0,0,.12),rgba(0,0,0,.40)), url("https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80")'
  },
  {
    name: "Business Premium",
    title: "Démo complète — Business Premium",
    href: "demo-premium.html",
    badge: "Business Premium",
    image: 'linear-gradient(180deg,rgba(0,0,0,.24),rgba(0,0,0,.56)), url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80")'
  }
];

(function(){
  const image = document.getElementById("sliderPreviewImage");
  const link = document.getElementById("sliderPreviewLink");
  const badge = document.getElementById("sliderPreviewBadge");
  const title = document.getElementById("sliderPreviewTitle");
  const metaName = document.getElementById("sliderMetaName");
  const metaCount = document.getElementById("sliderMetaCount");
  const prev = document.getElementById("sliderPrev");
  const next = document.getElementById("sliderNext");
  const thumbs = Array.from(document.querySelectorAll(".slider-thumb"));
  if(!image || !link || !badge || !title || !metaName || !metaCount) return;

  let current = 0;

  function renderSlider(index){
    const demo = ascendiaDemos[index];
    image.style.backgroundImage = "none"; image.offsetHeight; image.style.background = demo.image;
    image.style.backgroundSize = "cover";
    image.style.backgroundPosition = "center center";
    link.href = demo.href;
    badge.textContent = demo.badge;
    title.textContent = demo.title;
    metaName.textContent = demo.name;
    metaCount.textContent = `${index + 1} / ${ascendiaDemos.length}`;
    thumbs.forEach((btn, i) => btn.classList.toggle("active", i === index));
    current = index;
  }

  prev && prev.addEventListener("click", () => {
    const nextIndex = (current - 1 + ascendiaDemos.length) % ascendiaDemos.length;
    renderSlider(nextIndex);
  });

  next && next.addEventListener("click", () => {
    const nextIndex = (current + 1) % ascendiaDemos.length;
    renderSlider(nextIndex);
  });

  thumbs.forEach((btn, i) => {
    btn.addEventListener("click", () => renderSlider(i));
  });

  renderSlider(0);
})();
