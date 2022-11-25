
class WelcomeTile extends Tile {
  constructor(onAdvance) {
    super(onAdvance);
  }

  display() {
    const existingSlide = document.querySelector(`.${SlideTypes.WELCOME}`);
    if (existingSlide) {
      existingSlide.classList.remove('not-shown');
      existingSlide.classList.add('shown');
      return;
    }

    const slide = document.createElement('div');
    slide.className = `slide padded-slide ${SlideTypes.WELCOME}`;
    slide.innerHTML = `
      <div class="big-text">Welcome to Table Capture</div>
      <div class="sub-text">The next steps are required.</div>
      <div class="sub-text">It'll only take a minute.</div>
      <div clas="delayed">
        <button class="btn btn-primary btn-lg large-cta-button">Let's get started</button>
      </div>
    `;
    this.slideStack_.appendChild(slide);
    window.setTimeout(() => {
      slide.classList.add('shown');
    }, 250);

    slide
        .querySelector(".large-cta-button")
        .addEventListener('click', this.onAdvance_);
  }
  
  getType() {
    return SlideTypes.WELCOME;
  }
}
