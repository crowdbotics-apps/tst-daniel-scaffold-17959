import * as types from "./constants"

const initialState = {
  api: {
    isFetching: false,
  },
  articles: [
    {
      "id": 1,
      "title": "Article #1",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "author": 1,
      "image": null,
      "created_at": "2021-01-05T16:42:44.079109Z",
      "updated_at": "2021-01-05T16:42:44.079156Z"
    },
    {
      "id": 2,
      "title": "Article #2",
      "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "author": 1,
      "image": "https://mobile-0104-dev-17890.s3.amazonaws.com/media/articles/Hyhyr9c51n5cYNpx.png",
      "created_at": "2021-01-05T16:44:09.312976Z",
      "updated_at": "2021-01-05T16:44:09.313037Z"
    }
  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ARTICLE_LIST:
      return Object.assign({}, state, {
        api: {
          isFetching: true,
        },
      })
    case types.ARTICLE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
        },
        articles: [...state.articles, action.response]
      })
    case types.ARTICLE_LIST_FAILED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
          errors: action.response
        }
      })
    case types.ARTICLE_READ:
      return Object.assign({}, state, {
        api: {
          isFetching: true,
        },
      })
    case types.ARTICLE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
        },
        articles: [
          ...state.articles.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.ARTICLE_LIST_FAILED:
      return Object.assign({}, state, {
        api: {
          isFetching: false,
          errors: action.response
        }
      })
    default:
      return state
  }
}
