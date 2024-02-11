export const Product = (props: any) => {
  console.log(props);
  const { category, image } = props.product;

  return (
    <div>
      <article>
        <img src={image}></img>
        <h6>{category}</h6>
        <button>More</button>
      </article>
    </div>
  );
};
