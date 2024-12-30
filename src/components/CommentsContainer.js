import React from "react";

const commentsData = [
  {
    name: "Monika",
    text: "lorem ipsum dolor sit amet, consecuter ad",
    replies: [
      {
        name: "Monika",
        text: "lorem ipsum dolor sit amet, consecuter ad",
        replies: [
          {
            name: "Monika",
            text: "lorem ipsum dolor sit amet, consecuter ad",
            replies: [],
          },
          {
            name: "Monika",
            text: "lorem ipsum dolor sit amet, consecuter ad",
            replies: [
              {
                name: "Monika",
                text: "lorem ipsum dolor sit amet, consecuter ad",
                replies: [
                  {
                    name: "Monika",
                    text: "lorem ipsum dolor sit amet, consecuter ad",
                    replies: [],
                  },
                  {
                    name: "Monika",
                    text: "lorem ipsum dolor sit amet, consecuter ad",
                    replies: [
                      {
                        name: "Monika",
                        text: "lorem ipsum dolor sit amet, consecuter ad",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Monika",
                    text: "lorem ipsum dolor sit amet, consecuter ad",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Monika",
    text: "lorem ipsum dolor sit amet, consecuter ad",
    replies: [],
  },
  {
    name: "Monika",
    text: "lorem ipsum dolor sit amet, consecuter ad",
    replies: [],
  },
  {
    name: "Monika",
    text: "lorem ipsum dolor sit amet, consecuter ad",
    replies: [],
  },
  {
    name: "Monika",
    text: "lorem ipsum dolor sit amet, consecuter ad",
    replies: [],
  },
  {
    name: "Monika",
    text: "lorem ipsum dolor sit amet, consecuter ad",
    replies: [
      {
        name: "Monika",
        text: "lorem ipsum dolor sit amet, consecuter ad",
        replies: [
          {
            name: "Monika",
            text: "lorem ipsum dolor sit amet, consecuter ad",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex bg-gray-200  my-2">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="user icon"
        className="w-12 h-12 "
      />
      <div className="pl-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-5 px-2 w-[64%]">
      <h1 className="text-xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
