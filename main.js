document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("close-btn");
  const overlay = document.getElementById("overlay");
  const sidebarLinks = document.querySelectorAll(".sidebar-link");

  // Function to open the sidebar
  const openSidebar = () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    // Optional: Prevent body scroll when sidebar is open
    // document.body.style.overflow = 'hidden';
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    // Optional: Restore body scroll
    // document.body.style.overflow = '';
  };

  // Event listener for menu toggle button
  if (menuToggle) {
    menuToggle.addEventListener("click", openSidebar);
  }

  // Event listener for close button
  if (closeBtn) {
    closeBtn.addEventListener("click", closeSidebar);
  }

  // Event listener for overlay (close sidebar when clicking outside)
  if (overlay) {
    overlay.addEventListener("click", closeSidebar);
  }

  // Event listener for sidebar links (close sidebar on click)
  sidebarLinks.forEach(link => {
    link.addEventListener("click", closeSidebar);
  });

  // Close sidebar on Escape key press
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && sidebar.classList.contains("active")) {
      closeSidebar();
    }
  });
});

