
class TableCaptureExperienceTile extends Tile {
  constructor(onAdvance) {
    super(onAdvance);
    this.selection_ = null;
  }
  
  getData() {
    return { experience: this.selection_ };
  }
  
  getType() {
    return SlideTypes.NEW_VS_RETURNING;
  }

  display() {
    const slideType = SlideTypes.NEW_VS_RETURNING;

    const existingSlide = document.querySelector(`.${slideType}`);
    if (existingSlide) {
      existingSlide.classList.remove('not-shown');
      existingSlide.classList.add('shown');
      return;
    }

    const slide = document.createElement('div');
    slide.className = `slide padded-slide ${slideType}`;
    slide.innerHTML = `
      <div class="big-text">Have you used <span class="tc">Table Capture</span> before?</div>
      <div class="type-cards">
        <div class="type" data-value="${TableCaptureExperience.RETURNING_USER}">
          <div class="card-heading">Yup</div>
          <div class="card-body">
            I've been in this game for years...
          </div>
        </div>
        <div class="type" data-value="${TableCaptureExperience.NEW_USER}">
          <div class="card-heading">Nope</div>
          <div class="card-body">
            This is my first time checking it out.
          </div>
        </div>
      </div>
    `;

    Array
        .from(slide.querySelectorAll(".type"))
        .forEach(el => el.addEventListener('click', () => {
          const type = el.getAttribute('data-value');
          this.selection_ = type;
          this.onAdvance_();
        }));

    this.slideStack_.appendChild(slide);
    window.setTimeout(() => {
      slide.classList.add('shown');
    }, 250);
  }
}
