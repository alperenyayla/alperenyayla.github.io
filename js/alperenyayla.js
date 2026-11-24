
document.addEventListener("DOMContentLoaded", function () {
const toggles = document.querySelectorAll("[data-bs-toggle='collapse']");

toggles.forEach(toggle => {
    const targetId = toggle.getAttribute("href") || toggle.getAttribute("data-bs-target");
    const collapseTarget = document.querySelector(targetId);
    const icon = toggle.querySelector(".collapse-icon");

    if (!collapseTarget || !icon) return;

    collapseTarget.addEventListener("hide.bs.collapse", function () {
    icon.classList.remove("bi-dash");
    icon.classList.add("bi-plus");
    });

    collapseTarget.addEventListener("show.bs.collapse", function () {
    icon.classList.remove("bi-plus");
    icon.classList.add("bi-dash");
    });
});
});

// document.addEventListener("DOMContentLoaded", function () {
//   const collapseIds = [
//     "collapseLatest",
//     "collapseResearchInterests",
//     "collapseOngoingWorks",
//     "collapsePeer",
//     "collapseReports",
//     "collapseAwards",
//     "collapseContact"
//   ];

//   let allShown = false;

//   document.getElementById("toggleAll").addEventListener("click", function (e) {
//     e.preventDefault();
//     allShown = !allShown;
//     const action = allShown ? 'show' : 'hide';
//     this.textContent = allShown ? 'Hide all' : 'Show all';

//     collapseIds.forEach(id => {
//       const el = document.getElementById(id);
//       const bsCollapse = bootstrap.Collapse.getOrCreateInstance(el);
//       bsCollapse[action]();
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const collapseIds = [
    "collapseLatest",
    "collapseResearchInterests",
    "collapseOngoingWorks",
    "collapsePeer",
    "collapseReports",
    "collapseConference",
    "collapseAwards",
    "collapseResearchProfiles",
    "collapseContact"
  ];

  const toggleLink = document.getElementById("toggleAll");

  // Cache all collapse elements and their Bootstrap instances once
  const collapses = collapseIds.map(id => {
    const el = document.getElementById(id);
    const instance = new bootstrap.Collapse(el, { toggle: false });
    return { el, instance };
  });

  function areAllShown() {
    return collapses.every(c => c.el.classList.contains("show"));
  }

  function updateToggleText() {
    toggleLink.textContent = areAllShown() ? "Hide all" : "Show all";
  }

  // Set correct text on load
  updateToggleText();

  toggleLink.addEventListener("click", function (e) {
    e.preventDefault();
    const show = !areAllShown();

    collapses.forEach(({ instance }) => {
      show ? instance.show() : instance.hide();
    });
  });

  // Update toggle text when any section is opened or closed
  collapses.forEach(({ el }) => {
    el.addEventListener("shown.bs.collapse", updateToggleText);
    el.addEventListener("hidden.bs.collapse", updateToggleText);
  });
});




