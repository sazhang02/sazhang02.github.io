const gallery = document.querySelector('#paginated_gallery');
const gallery_scroller = gallery.querySelector('.gallery_scroller');
const gallery_item_size = gallery_scroller.querySelector('div').clientWidth;

gallery.querySelector('.btn.next').addEventListener('click', scrollToNextPage);
gallery.querySelector('.btn.prev').addEventListener('click', scrollToPrevPage);

function scrollToNextPage() {
  gallery_scroller.scrollBy(gallery_item_size, 0);
}
function scrollToPrevPage() {
  gallery_scroller.scrollBy(-gallery_item_size, 0);
}
