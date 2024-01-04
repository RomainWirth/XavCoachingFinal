const accordionItemHeaders = document.querySelectorAll(".FAQ-accordion-item-header");
accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", function() {
    
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    const currentlyActiveAccordionItemHeader = document.querySelector(".FAQ-accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== this) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = null;
    }

    this.classList.toggle("active");
    const accordionItemBody = this.nextElementSibling;
    if(accordionItemBody.style.maxHeight) {
      accordionItemBody.style.maxHeight = null;
    } else {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    
  });
});