import styled from 'styled-components';
  // Smooth scrolling for anchor links with class "nav-link-scroll"
  document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll(".nav-link-scroll");

    for (const scrollLink of scrollLinks) {
      scrollLink.addEventListener("click", function (event) {
        event.preventDefault();
        const targetId = scrollLink.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        const headerOffset = 80; // Adjust this value to account for the height of the fixed navbar
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition - headerOffset - 150;

        window.scrollBy({
          top: offsetPosition,
          behavior: "smooth",
        });
      });
    }
  });

  // Adjust scrolling behavior for sections with padding
  const sectionsWithPadding = document.querySelectorAll(".section-with-padding");

  for (const section of sectionsWithPadding) {
    const paddingTop = parseInt(getComputedStyle(section).paddingTop.replace("px", ""));
    section.style.paddingTop = `${paddingTop + 80}px`;
  }


