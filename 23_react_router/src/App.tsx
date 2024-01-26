import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { AppLayout } from "./layouts/app-layout";
import { NotFoundPage } from "./pages/404";
import { PostsPage } from "./pages/posts";
import { PostPage, postPageLoader } from "./pages/post";
import {
  PostCommentsContainer,
  postCommentsContainerLoader,
} from "./containers/post-comments";
import { ErrorBoundary } from "./pages/errorBoundry";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/">
//       <Route
//         index={true}
//         element={
//           <div>
//             <p>hello world</p>
//             <Link to="posts">Posts</Link>
//           </div>
//         }
//       />
//       <Route path="posts" element={<PostListWithLoader />} />
//       <Route path="team">
//         <Route index={true} element={<p>team</p>} />
//         <Route path="about" element={<p>about us</p>} />
//         <Route path="faqs" element={<p>frequently asks</p>} />
//         <Route path="contact" element={<p>contact</p>} />
//       </Route>
//     </Route>
//   )
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route
        index={true}
        element={
          <div>
            <p>hello world</p>
            <Link to="posts">Posts</Link>
          </div>
        }
      />
      <Route path="posts" element={<PostsPage />} />
      <Route
        path="posts/:postId"
        element={<PostPage />}
        loader={postPageLoader}
        errorElement={<ErrorBoundary />}
      >
        <Route
          path="comments"
          element={<PostCommentsContainer />}
          loader={postCommentsContainerLoader}
        />
      </Route>

      <Route path="*" element={<NotFoundPage />} />

      {/* <Route path="panel" element={<PanelLayout />}>
        <Route path="posts" element={<PostListWithLoader />} />
        <Route path="chert" element={<p>chert</p>} />
        <Route path="pert" element={<p>pert</p>} />
      </Route> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
