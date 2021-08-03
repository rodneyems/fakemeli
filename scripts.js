new Glider(document.querySelector('.glider'), {
    slidesToShow: 1,
    dots: '.dots',
    draggable: true,
    duration: 1,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  });