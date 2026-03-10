lucide.createIcons();

const RESULTS = {
  F: {
    label: "Friends",
    icon: "users",
    desc: "You both will remain great friends.",
    color: "text-blue-400",
  },

  L: {
    label: "Lovers",
    icon: "heart",
    desc: "True love is in the air.",
    color: "text-pink-500",
  },

  A: {
    label: "Affection",
    icon: "sparkles",
    desc: "There is a sweet affection between you.",
    color: "text-purple-400",
  },

  M: {
    label: "Marriage",
    icon: "gem",
    desc: "Wedding bells may ring!",
    color: "text-yellow-400",
  },

  E: {
    label: "Enemies",
    icon: "skull",
    desc: "You may clash often.",
    color: "text-red-500",
  },

  S: {
    label: "Siblings",
    icon: "users",
    desc: "Your bond is like siblings.",
    color: "text-green-400",
  },
};

function getFlames(name1, name2) {
  let n1 = name1
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");
  let n2 = name2
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("");

  for (let i = 0; i < n1.length; i++) {
    let idx = n2.indexOf(n1[i]);

    if (idx != -1) {
      n1[i] = "";
      n2[idx] = "";
    }
  }

  let count = n1.join("").length + n2.join("").length;

  if (count === 0) return "S";

  let flames = ["F", "L", "A", "M", "E", "S"];

  let index = 0;

  while (flames.length > 1) {
    index = (index + count - 1) % flames.length;

    flames.splice(index, 1);
  }

  return flames[0];
}

function calculateFlames() {
  let name1 = document.getElementById("name1").value.trim();
  let name2 = document.getElementById("name2").value.trim();

  if (!name1 || !name2) {
    alert("Enter both names");

    return;
  }

  document.getElementById("input-view").style.display = "none";

  document.getElementById("calculating-view").style.display = "flex";

  setTimeout(() => {
    let key = getFlames(name1, name2);

    let res = RESULTS[key];

    document.getElementById("res-name1").innerText = name1;
    document.getElementById("res-name2").innerText = name2;

    document.getElementById("res-title").innerText = res.label;

    document.getElementById("res-desc").innerText = res.desc;

    document.getElementById("res-title").className = res.color;

    document.getElementById("res-icon").innerHTML =
      `<i data-lucide="${res.icon}" class="w-20 h-20 ${res.color}"></i>`;

    lucide.createIcons();

    document.getElementById("calculating-view").style.display = "none";

    document.getElementById("result-view").style.display = "block";
  }, 2000);
}

function resetGame() {
  document.getElementById("name1").value = "";
  document.getElementById("name2").value = "";

  document.getElementById("result-view").style.display = "none";

  document.getElementById("input-view").style.display = "block";
}
