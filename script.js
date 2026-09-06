document.getElementById("year").textContent = String(new Date().getFullYear());

const revealNodes = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

const openTriggers = document.querySelectorAll("[data-modal-open]");
let lastFocus = null;

function openModal(id) {
  const dialog = document.getElementById(id);
  if (!dialog || typeof dialog.showModal !== "function") return;

  lastFocus = document.activeElement;
  dialog.showModal();
  document.body.classList.add("modal-open");

  const closeBtn = dialog.querySelector("[data-modal-close]");
  if (closeBtn) closeBtn.focus();
}

function closeModal(dialog) {
  if (!dialog.open) return;
  dialog.close();
  document.body.classList.remove("modal-open");
  if (lastFocus && typeof lastFocus.focus === "function") {
    lastFocus.focus();
  }
}

openTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    openModal(trigger.getAttribute("data-modal-open"));
  });
});

document.querySelectorAll("dialog.project-modal").forEach((dialog) => {
  dialog.querySelectorAll("[data-modal-close]").forEach((btn) => {
    btn.addEventListener("click", () => closeModal(dialog));
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeModal(dialog);
  });

  dialog.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
  });
});
