import { create } from "react-test-renderer";

describe("class prop", () => {
  test("accepts arrays", () => {
    const tree = create(<div class={["a", "b"]}>Hello World</div>).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("accepts nested arrays", () => {
    const tree = create(<div class={["a", "b"]}><span class={["c", ["d"]]}>Yo</span></div>).toJSON();

    expect(tree).toMatchSnapshot(); 
  })

  test("accepts objects", () => {
    const tree = create(
      <div class={{ a: false, b: true }}>Hello World</div>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("appends to className", () => {
    const tree = create(
      <div class={["b", "c"]} className="a">
        Hello World
      </div>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
