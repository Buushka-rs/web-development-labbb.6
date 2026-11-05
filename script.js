// Dark mode: OS-ийн тохиргоо эсвэл хадгалсан сонголтоор эхэлнэ
const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");

function applyTheme(theme) {
  root.dataset.theme = theme;
  themeBtn.setAttribute("aria-pressed", String(theme === "dark"));
  themeBtn.textContent = theme === "dark" ? "Гэрэлтэй горим" : "Харанхуй горим";
}

let saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
applyTheme(saved || (prefersDark ? "dark" : "light"));

themeBtn.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// Flip товч: дарахад картыг эргүүлнэ (touch болон гар дэмжинэ)
document.querySelectorAll(".flip").forEach((btn) => {
  btn.addEventListener("click", () => btn.classList.toggle("flipped"));
});

// Loader: бүх зураг ачаалсны дараа нууна
window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("done");
});
