import { useQuery, gql } from "@apollo/client";

const GET_NEWS = gql`
  query {
    blog {
      id
      author
      category
      heading
      time
      image {
        url
      }
      newsContent
    }
  }
`;
const News = () => {
  const { loading, error, data } = useQuery(GET_NEWS, {
    onSuccess: (data) => {
      console.log(data);
    },
  });
  // console.log(data.blog);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.blog.map((item) => (
        <div key={item.id}>
          <h2>{item.heading}</h2>
          {item.image && <img src={item.image.url} alt={item.heading} />}
          <p>{item.newsContent}</p>
          <p>Author: {item.author}</p>
          <p>Category: {item.category}</p>
          <p>Time: {item.time}</p>
        </div>
      ))}
    </div>
  );
};

export default News;
