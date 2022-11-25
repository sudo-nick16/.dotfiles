class Tile {
  constructor(onAdvance) {
    this.onAdvance_ = onAdvance;
    this.slideStack_ = document.querySelector('.slide-stack');
  }

  display() {
    throw new Error("Super class method not implemented");
  }

  hide() {
    document.querySelector(`.${this.getType()}`).classList.add('not-shown');
  }

  getData() {
    return {};
  }

  getType() {
    throw new Error("Super class method not implemented");
  }
}

class GenericIntroTile extends Tile {
  constructor(onAdvance, title, subTitle) {
    super(onAdvance);
    this.title_ = title;
    this.subTitle = subTitle;
  }
}