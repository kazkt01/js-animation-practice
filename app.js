// インターセクションオブザーバー
// オブザーバー（監視するもの）・インターセクション（交差するもの）

const child = document.querySelector(".a-img , .a-title");
const cb = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("inview");
      //   observer.unobserve(entry.target);

      entry.target.classList.add("fire");
    } else {
      console.log("out view");
      entry.target.classList.remove("fire");
    }
  });
  //   alert("こんにちは！");
};

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

const io = new IntersectionObserver(cb); //コールバック関数とは？
io.observe(child);
// io.observe(child1);
// io.observe(child2);
