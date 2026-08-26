export default function Ingredients({ newArray }) {
  const list = newArray.map((item, index) => (
    <li key={`${item}${index}`}>{item}</li>
  ));
  return <ul>{list}</ul>;
}
