const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const { descendingSort, subArraySum, sumEvenNumbers } = require("./answer");

describe("No. 1 - descendingSort", () => {
  it("contoh soal", () => {
    assert.deepStrictEqual(
      descendingSort([1, 2, 4, 3, 5, 3, 2, 1]),
      [5, 4, 3, 3, 2, 2, 1, 1]
    );
  });

  it("kosong", () => {
    assert.deepStrictEqual(descendingSort([]), []);
  });

  it("1 angka", () => {
    assert.deepStrictEqual(descendingSort([5]), [5]);
  });

  it("sudah urut", () => {
    assert.deepStrictEqual(descendingSort([3, 2, 1]), [3, 2, 1]);
  });

  it("ascending", () => {
    assert.deepStrictEqual(descendingSort([1, 2, 3]), [3, 2, 1]);
  });

  it("negatif", () => {
    assert.deepStrictEqual(descendingSort([0, -1, 2]), [2, 0, -1]);
  });

  it("duplikat", () => {
    assert.deepStrictEqual(descendingSort([2, 2, 1]), [2, 2, 1]);
  });

  it("tanpa sort/reverse", () => {
    const src = fs.readFileSync(path.join(__dirname, "answer.js"), "utf8");
    const fnSrc = src.slice(src.indexOf("function descendingSort"), src.indexOf("// No. 2"));
    assert.ok(!/\.sort\s*\(/.test(fnSrc));
    assert.ok(!/\.reverse\s*\(/.test(fnSrc));
  });
});

describe("No. 2 - subArraySum", () => {
  it("soal 1 -> 700", () => {
    assert.strictEqual(subArraySum([100, 200, 300, 400], 2), 700);
  });

  it("soal 2 -> 39", () => {
    assert.strictEqual(subArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4), 39);
  });

  it("soal 3 -> 5", () => {
    assert.strictEqual(subArraySum([-3, 4, 0, -2, 6, -1], 2), 5);
  });

  it("num 1", () => {
    assert.strictEqual(subArraySum([2, 5, 1], 1), 5);
  });

  it("num 0", () => {
    assert.strictEqual(subArraySum([1, 2, 3], 0), 0);
  });

  it("num = panjang", () => {
    assert.strictEqual(subArraySum([1, 2, 3], 3), 6);
  });

  it("negatif", () => {
    assert.strictEqual(subArraySum([-1, -2, -3], 2), -3);
  });
});

describe("No. 3 - sumEvenNumbers", () => {
  it("soal 1 -> 6", () => {
    assert.strictEqual(
      sumEvenNumbers({
        outer: 2,
        obj: { inner: 2, otherObj: { superInner: 2, notANumber: true, alsoNotANumber: "yup" } },
      }),
      6
    );
  });

  it("soal 2 -> 12", () => {
    assert.strictEqual(
      sumEvenNumbers({
        a: 2,
        b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
        c: { c: { c: 2 }, cc: "ball", ccc: 5 },
        d: 1,
        e: { e: { e: 4 }, ee: "car" },
      }),
      12
    );
  });

  it("kosong", () => {
    assert.strictEqual(sumEvenNumbers({}), 0);
  });

  it("tanpa genap", () => {
    assert.strictEqual(sumEvenNumbers({ a: 1, b: { c: 3 } }), 0);
  });

  it("negatif dan nol", () => {
    assert.strictEqual(sumEvenNumbers({ a: -2, b: { c: 4 } }), 2);
  });

  it("abaikan string/bool", () => {
    assert.strictEqual(sumEvenNumbers({ a: 2, b: "halo", c: true }), 2);
  });
});
