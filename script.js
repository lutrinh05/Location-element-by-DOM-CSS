// Highlight các element demo
document.querySelectorAll(`
  h1#main-title,
  p.description,
  input[name="email"],
  button.btn[type="submit"],
  div[class^="user-start"],
  div[class$="user-end-xyz"],
  div[class*="mid-match"],
  ul.menu li,
  .parent > .child,
  .parent .sub-child,
  ol.steps li:nth-child(2)
`).forEach(el => {
  el.classList.add("outlined");
});
