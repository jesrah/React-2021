/**
 * Build a Reddit viewer!
 * 1. Implement favorites list with add and remove favorite functionality
 * 2. Basic styling to make things a little more sane
 *
 * All TODOs need to be implemented, but feel free to make any modifications/improvements to any of the code as you see fit.
 */

/**
 * Dropdown component
 * props:
 *   - options: Option[] where Option is { value: string, label: string }
 *   - value: currently selected value
 *   - onChange: function called on select option change
 */
 const Dropdown = ({ options = [], value, onChange }) => (
    <select value={value} onChange={onChange}>
      {options.map(option => (
        <option value={option.value}>{option.label}</option>
      ))}
    </select>
  );
  
  const handleAddFav = (post) => {
    //set state, alter the favs array
    //create a div with the post
    //make a state update
    //re-render components w new state only
    //map
    setFaves(function (favs) {
        favs.push(post)
        return favs;
    })
  };
  
  const handleRemoveFav = (props) => {
    //use array.filter to match the id of the post with the clicked delete button 
    //and remove it from the setfaves array, update state with the new array
    //similar to the setFAves function in our handleAddFav handler
  };
  
  /**
   * Posts. Renders a list of posts. Current API:
   * props:
   *   - posts: an array of post items
   *   - Post: required fields { id: string, ups: number, title: string, url: string }
   */
  const Posts = ({ posts }) => {
    return (
      <div>
        <h1>Posts</h1>
        {posts.map(post => (
          <div>
            <a href={post.url}>{post.title}</a>
            <div>{post.ups}</div>
            <button onclick={() => handleAddFav(post) }>*</button>
          </div>
        ))}
      </div>
    );
  };
  
  /**
   * Favorites. Renders a list of favorites:
   * TODO
   */
  const Favorites = ({ favs }) => {
    return (
      <div>
        <h3>Favorites</h3>
        {favs.map(fav => (
          <div>
            <a href={post.url}>{post.title}</a>
            <div>{post.ups}</div>
            <button onclick={() => handleRemoveFav(post.id) }>-</button>
          </div>
        ))}
      </div>
    );
  };
  
  /**
   * Main app
   */
  function App() {
    const [posts, setPosts] = React.useState([]);
    const [favs, setFaves] = React.useState([])
  
    React.useEffect(() => {
      fetch("https://www.reddit.com/r/aww/.json")
        .then(response => response.json())
        .then(json => {
          /**
           * JSON Data structure:
           * {
           *   data: {
           *     children: [
           *       {
           *         data: {
           *           id: string,
           *           ups: number,
           *           title: string,
           *           url: string,
           *           thumbnail: string
           *           ...
           *         }
           *       },
           *       {...},
           *       ...
           *     ]
           *   }
           * }
           */
          setPosts(json.data.children.map(child => child.data));
        });
    }, []);
  
    return (
      <React.Fragment>
        <Favorites />
        <Posts posts={posts} />
      </React.Fragment>
    );
  }
  
  export default App;