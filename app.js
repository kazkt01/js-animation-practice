// 監視対象の要素を取得
const children = document.querySelectorAll(
  ".a-img, .c-img , .b-img , .section-title"
);

// コールバック関数
const cb = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("inview");
      entry.target.classList.add("fire");
    } else {
      console.log("out view");
      // entry.target.classList.remove("fire");
    }
  });
};

// IntersectionObserverの設定
const options = {
  root: null, // ビューポート全体
  rootMargin: "0px", // マージンなし
  threshold: 0.5, // 要素の50%が交差したときに発火
};

// オブザーバーインスタンスを作成
const io = new IntersectionObserver(cb, options);

// すべての対象要素を監視
children.forEach((child) => io.observe(child));

// ニュースクロール関数
const hoge = document.querySelector(".catch");
const cd2 = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("in");
      entry.target.classList.add("fire2");
    } else {
      console.log("out");
      entry.target.classList.remove("fire2");
    }
  });
};

// IntersectionObserverを利用する例
const io2 = new IntersectionObserver(cd2);
io2.observe(hoge); // 修正：単一要素であるため問題なし
