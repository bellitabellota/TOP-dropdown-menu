class cssClassToggler{
  constructor(trigger, dropdownItems, cssClass) {
    this.dropdownTrigger = trigger;
    this.dropdownItems = dropdownItems;
    this.cssClass = cssClass;
    this.toggle();
  }

  toggle() {
    this.dropdownTrigger.addEventListener("click", () => {

      if (this.dropdownItems.classList.contains(this.cssClass)) {
        this.dropdownItems.classList.remove(this.cssClass);
      } else {
        this.dropdownItems.classList.add(this.cssClass);
      }
    })
  }
}

export default cssClassToggler;