import { handleCepInput } from "./modules/cep-input.js";
import { gallery } from "./modules/gallery.js";
import { handleProductTabs } from "./modules/product-tabs-desktop.js";
import { scrollRating } from "./modules/scroll-rating.js";
import { selectVariants } from "./modules/select-variants.js";
import { handleToggleDetails } from "./modules/toggle-details-container.js";
import { zoomImage } from "./modules/zoom-image.js";

document.addEventListener('DOMContentLoaded', function() {
  gallery()
  selectVariants()
  handleCepInput()
  handleProductTabs()
  handleToggleDetails()
  scrollRating()
  zoomImage()
})