
const SlideTypes = {
  WELCOME: "WELCOME",
  NEW_VS_RETURNING: "NEW_VS_RETURNING",
  USER_TYPE: "USER_TYPE",
  TABLE_TUTORIAL: "TABLE_TUTORIAL",
  CHOOSE_PLAN: "CHOOSE_PLAN",
};

const TableCaptureExperience = {
  NEW_USER: "NEW_USER",
  RETURNING_USER: "RETURNING_USER",
};

/**
  Who are you: Business / Personal
  What are you using it for
  Table examples:
    Links
    Batch Tables
    Div-tables
    Pro Tables: Dynamic / Paged
    Example Search: “Local Files”
  Pricing Page
    Free
    Pro
    Cloud
 */


class OnboardManager {
  constructor(userConfig) {
    this.userConfig_ = userConfig;
    this.activeTile_ = null;
    this.slideStack_ = null;

    this.path_ = [
      new WelcomeTile(this.goTo_.bind(this, SlideTypes.NEW_VS_RETURNING)),
      new TableCaptureExperienceTile(this.goTo_.bind(this, SlideTypes.USER_TYPE)),
      new UserTypeTile(this.goTo_.bind(this, SlideTypes.TABLE_TUTORIAL)),
      new TutorialTile(),
    ];
    this.pathByType_ = {};
    this.path_.forEach(tile => this.pathByType_[tile.getType()] = tile);
  }

  initialize() {
    this.goTo_(SlideTypes.TABLE_TUTORIAL);
  }

  goTo_(state) {
    const lastTile = this.pathByType_[this.activeTile_];
    const tile = this.pathByType_[state];
    this.activeTile_ = state;

    lastTile && lastTile.hide();
    window.setTimeout(() => {
      tile.display();
    }, 250);
  }
}
