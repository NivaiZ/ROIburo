export function copyTextClipboardInit(selector, successMessage) {
  const buttons = document.querySelectorAll(selector);

  if (buttons) {
    buttons.forEach((button) => {
      button.addEventListener("click", async () => {
        const parentElement =
          button.closest(".details__flex") || button.closest(".contacts__list");

        if (!parentElement) {
          console.error("Родительский элемент не найден.");
          return;
        }

        const textElement = parentElement.querySelector('[data-copy="text"]');

        if (!textElement) {
          console.error('Элемент с атрибутом data-copy="text" не найден.');
          return;
        }

        try {
          await navigator.clipboard.writeText(textElement.textContent);

          // Изменяем путь у svg файла внутри details__svg
          const svgIcon = parentElement.querySelector(".details__svg");
          if (svgIcon) {
            svgIcon
              .querySelector("use")
              .setAttribute("xlink:href", "./img/sprite/sprite.svg#icon__done");
          }

          // Изменяем путь у svg файла внутри contacts__svg
          const contactsSvgIcon = parentElement.querySelector(".contacts__svg");
          if (contactsSvgIcon) {
            contactsSvgIcon
              .querySelector("use")
              .setAttribute("xlink:href", "./img/sprite/sprite.svg#icon__done");

            // Добавляем новый класс к самому <svg>
            contactsSvgIcon.classList.add("contacts__success");
          }

          setTimeout(() => {
            // Возвращаем исходные пути и удаляем класс через 3 секунды
            if (svgIcon) {
              svgIcon
                .querySelector("use")
                .setAttribute(
                  "xlink:href",
                  "./img/sprite/sprite.svg#icon__copy"
                );
            }
            if (contactsSvgIcon) {
              contactsSvgIcon
                .querySelector("use")
                .setAttribute(
                  "xlink:href",
                  "./img/sprite/sprite.svg#icon__copy"
                );
              // Удаляем класс через 3 секунды
              contactsSvgIcon.classList.remove("contacts__copy");
            }
          }, 3000);
        } catch (err) {
          console.error("Не удалось скопировать текст в буфер обмена", err);
        }
      });
    });
  }
}

copyTextClipboardInit('[data-change="copy"]', "Скопировано");
