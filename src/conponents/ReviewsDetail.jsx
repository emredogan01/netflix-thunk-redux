
import { baseImgUrl } from "../utils/contants";
import nullImage from "../assets/null-user.png"

const ReviewsDetail = ({ review }) => {
  console.log(review);
  return (
      <>
        <h1 className="rounded text-center fw-bold text-bg-info text-dark">Yorulmar</h1>
        <div className="card-review">
        {review.results.map((item) => (
        <div style={{width: "600px"}} className='class-wrap mt-5 d-flex flex-wrap rounded shadow mx-2 p-2' key={item.id}>
          <div className="img-wrapper">
            <img className='user-img'
              src={item.author_details.avatar_path ? baseImgUrl.concat(item.author_details.avatar_path) : nullImage}
            />
            <p className="badge text-bg-secondary text-dark">{item.author_details.username}</p>
            <p className="badge text-bg-warning text-dark">Rating:{item.author_details.rating ? item.author_details.rating  : " 0"}</p>
          </div>
          <div>
            <p>{item.content.slice(0,300)+"..."}</p>
          </div>
        </div>
        ))}
        </div>
    </>
  );
};

export default ReviewsDetail;
