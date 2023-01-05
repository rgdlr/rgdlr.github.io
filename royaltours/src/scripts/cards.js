// TODO : improve cards animation
// TODO : option 2 - make window appear from window center, from width 0
export function animateCards(cards) {
  const cardsCollection = Array.from(cards.children);
  cardsCollection.forEach((pack) => {
    pack.addEventListener("click", (_event) => {
      if (!["", "unset"].includes(pack.style.boxShadow)) {
        pack.style.boxShadow = "unset";
        pack.style.left = "unset";
        pack.style.position = "unset";
        pack.style.top = "unset";
        pack.style.transform = "unset";
        pack.style.width = "unset";
        pack.style.zIndex = "unset";
      } else {
        const packOriginTop = pack.getBoundingClientRect().top;
        const packOriginLeft = pack.getBoundingClientRect().left;
        const packOriginWidth = pack.getBoundingClientRect().width;

        const packClone = pack.cloneNode(true);
        packClone.style.left = `${packOriginLeft}px`;
        packClone.style.position = "fixed";
        packClone.style.top = `${packOriginTop}px`;
        packClone.style.transition = "all 500ms ease";
        packClone.style.width = `${packOriginWidth}px`;
        packClone.style.zIndex = "5";
        pack.style.opacity = 0;

        setTimeout(() => {
          packClone.style.boxShadow =
            "0 0 0 100em #0003, 0 0 0.75em 0.25em #0005";
          packClone.style.left = `${window.innerWidth / 2}px`;
          packClone.style.top = `${window.innerHeight / 2}px`;
          packClone.style.transform = "translate(-50%, -50%)";
          packClone.style.width = "min(30em, 95%)";
          document.body.classList.add("body__modal--open");
        }, 250);

        cards.appendChild(packClone);

        window.addEventListener("resize", () => {
          packClone.style.left = `${window.innerWidth / 2}px`;
          packClone.style.top = `${window.innerHeight / 2}px`;
        });

        packClone.addEventListener("click", () => {
          document.body.classList.remove("body__modal--open");
          packClone.style.boxShadow = "none";
          packClone.style.top = `${packOriginTop}px`;
          packClone.style.left = `${packOriginLeft}px`;
          packClone.style.transform = "translate(0%, 0%)";
          packClone.style.width = `${packOriginWidth}px`;
          setTimeout(() => {
            cardsCollection.forEach((pack) => pack.removeAttribute("style"));
            packClone.remove();
          }, 500);
        });
      }
      cardsCollection.forEach((pack) => (pack.style.pointerEvents = "none"));
    });
  });
}
