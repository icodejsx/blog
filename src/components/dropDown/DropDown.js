import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_NEWS } from "../../newsQueries";

const DropDown = ({ cat }) => {
  const { loading, error, data } = useQuery(GET_NEWS, {
    onSuccess: (data) => {
      // console.log(data);
    },
  });
  // const data = BlogList.filter((blog) => blog.id === idNum);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  const filteredData = data.blog.filter((blog) => blog.category === cat);
  // console.log(filteredData)

  return (
    <div>
      <section className="text-gray-600 body-font hidden lg:flex ">
        <div className="container px-10 py-5 mx-auto items-center flex justify-center ">
          <div className="flex flex-wrap flex-row -m-4">
            {filteredData.slice(0, 5).map((blog, index) => {
              const date = new Date(blog.time);
              const formattedDate = date.toLocaleString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              });

              return (
                <div
                  className=" md:w-1/5 flex  flex-row  items-center  p-3 "
                  key={index}
                >
                  <div className="h-full  overflow-hidden ">
                    <Link to={`/posts/${blog.id}`}>
                      <img
                        className="lg:h-40 md:h-20 w-full object-cover object-center"
                        src={blog.image.url}
                        alt="blog"
                      />
                    </Link>
                    <div className="flex flex-col justify-start items-start text-gray-400 ">
                      <p className="leading-relaxed mb-1">
                        {blog.heading.length >= 40
                          ? blog.heading.slice(0, 40) + "..."
                          : blog.heading}
                      </p>
                      <div className="flex items-center flex-wrap ">
                        <span className="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
                          {" "}
                          {formattedDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DropDown;
