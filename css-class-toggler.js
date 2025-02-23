class cssClassToggler{
  constructor(trigger, dropdownItems, cssClass) {
    this.toggleTrigger = trigger;
    this.toggleItems = dropdownItems;
    this.cssClass = cssClass;
    this.toggle();
  }

  toggle() {
    this.toggleTrigger.addEventListener("click", () => {

      if (this.toggleItems.classList.contains(this.cssClass)) {
        this.toggleItems.classList.remove(this.cssClass);
      } else {
        this.toggleItems.classList.add(this.cssClass);
      }
    })
  }
}

export default cssClassToggler;