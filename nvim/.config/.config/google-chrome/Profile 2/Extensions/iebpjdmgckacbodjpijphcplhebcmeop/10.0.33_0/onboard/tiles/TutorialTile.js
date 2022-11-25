
const tutorialEntries = [
  {
    id: "tutorial-intro",
    title: "Tutorial overview",
  },
  {
    id: "mech",
    title: "Basic mechanics",
    subPages: [
      { title: "Workshop", id: "mech-workshop" },
      { title: "Popup", id: "mech-popup" },
    ],
  },
  {
    id: "paging",
    title: "Paged & Dynamic Tables",
    subPages: [
      { title: "Dynamic", id: "paging-dynamic" },
    ],
  },
  {
    title: "Data extraction options", 
    subPages: [
      { title: "Extracting Links/URLs", id: "data-links" },
      { title: "Images", id: "data-images" },
      { title: "Numbers & Money", id: "data-numbers-money" },
    ],
  },
];

const revMap = {};
tutorialEntries.forEach(entry => {
  revMap[entry.id] = entry;
  (entry.subPages ?? []).forEach(subPage => revMap[subPage.id] = subPage);
});

class TutorialTile extends Tile {
  constructor(onComplete) {
    super(onComplete);
    this.completed_ = false;
  }
  
  getData() {
    return { completed: this.completed_ };
  }
  
  getType() {
    return SlideTypes.TABLE_TUTORIAL;
  }

  display() {
    const slideType = SlideTypes.TABLE_TUTORIAL;

    const existingSlide = document.querySelector(`.${slideType}`);
    if (existingSlide) {
      existingSlide.classList.remove('not-shown');
      existingSlide.classList.add('shown');
      return;
    }

    const slide = document.createElement('div');
    slide.className = `slide sidebar-slide ${slideType}`;
    slide.innerHTML = `
      <div class="sidebar-wrapper">
        <div class="fixed-nav"></div>
        <div class="tutorial-actions">
          <a>Skip</a>
        </div>
      </div>
      <div class="main-slide-content">
      </div>
    `;

    const nav = slide.querySelector('.sidebar-wrapper .fixed-nav');
    tutorialEntries.forEach(entry => {
      const {title, subPages, id} = entry;
      const ul = document.createElement('ul');
      ul.innerHTML = `<li><a class="main-nav-heading">${title}</a>${!!subPages ? '<ul></ul>' : ''}</li>`;
      ul.querySelector('a').classList.add(id);
      ul.querySelector('a').addEventListener('click', () => {
        this.renderTutorialContent_(id);
      });
      if (subPages) {
        const subList = ul.querySelector('ul');
        subPages.forEach(({title, id}) => {
          const li = document.createElement('li');
          li.classList.add(id);
          li.innerHTML = `<a>${title}</a>`;
          li.addEventListener('click', () => {
            this.renderTutorialContent_(id);
          });
          subList.appendChild(li);
        });
      }
      nav.appendChild(ul);
    });

    this.slideStack_.appendChild(slide);
    window.setTimeout(() => {
      slide.classList.add('shown');
      this.renderTutorialContent_(tutorialEntries[0].id);
    }, 250);
  }

  renderTutorialContent_(id) {
    const el = document.querySelector(`#${id}`);
    const mainContent = document.querySelector('.main-slide-content');
    Array.from(mainContent.children).forEach(child => child.classList.add("hidden"));

    Array
        .from(document.querySelectorAll('.active-tutorial'))
        .forEach(el => el.classList.remove('active-tutorial'));
    document.querySelector(`.${id}`).classList.add('active-tutorial');

    Array
        .from(el.querySelectorAll('.placeholder'))
        .forEach(placeholder => {
          const type = placeholder.getAttribute("data-attr-table");
          this.renderTableInPlaceholder(placeholder, type);
        });
    
    Array
        .from(el.querySelectorAll('.placeholder-controls'))
        .forEach(controlsPlaceholder => {
          this.renderControlsInElement_(controlsPlaceholder);
        });

    el.classList.remove("hidden");
    el.parentElement.removeChild(el);
    mainContent.appendChild(el);
  }

  renderControlsInElement_(el) {
    el.innerHTML = "";

    const button = document.createElement('button');
    button.innerText = "Next";
    button.className = "btn btn-lg btn-primary";
    button.addEventListener('click', () => {
      // TODO(gmike): Implement this.
    });
    el.appendChild(button);
  }

  renderTableInPlaceholder(placeholder, tableType) {
    if (tableType === "basic") {
      exRenderBasicTable(placeholder);
    } else if (tableType === "numbers") {
      exRenderNumbersTable(placeholder);
    } else if (tableType === "links") {
      exRenderLinksTable(placeholder);
    } else if (tableType === "dynamic-realtime") {
      exRenderDynamicRealtimeTable(placeholder);
    } else {
      return null;
    }
    placeholder.classList.remove('placeholder');
    placeholder.classList.add('example-table-wrapper')
  }
}
