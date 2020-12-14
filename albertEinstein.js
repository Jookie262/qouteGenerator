let albertEinstein_qoutes = [
  "Few are those who see with their own eyes and feel with their own hearts.",
  "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
  "Unthinking respect for authority is the greatest enemy of truth.",
  "Try not to become a man of success, but rather try to become a man of value.",
  "I am by heritage a Jew, by citizenship a Swiss, and by makeup a human being, and only a human being, without any special attachment to any state or national entity whatsoever.",
  "Great spirits have always encountered violent opposition from mediocre minds.",
  "I would teach peace rather than war. I would inculcate love rather than hate.",
  "I believe in intuitions and inspirations. I sometimes feel that I am right. I do not know that I am.",
  "Look deep into nature, and then you will understand everything better.",
  "All religions, arts and sciences are branches of the same tree.",
];
document.getElementById("click").addEventListener("click", () => {
  let albertEinstein_words =
    albertEinstein_qoutes[
      Math.floor(Math.random() * albertEinstein_qoutes.length)
    ];
  document.querySelector("h1").textContent = "'" + albertEinstein_words + "'";
});
